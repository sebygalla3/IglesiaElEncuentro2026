import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialBar from "./components/SocialBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // thresholds can be adjusted
  const socialVisible = scrollY < 50;
  const navbarVisible = scrollY < 150;
  const scrolled = scrollY > 10;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <SocialBar visible={socialVisible} />
        <Navbar
          socialVisible={socialVisible}
          visible={navbarVisible}
          scrolled={scrolled}
        />
        <main className="flex-grow pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
