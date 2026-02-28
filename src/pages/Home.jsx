import { Link } from "react-router-dom";
import backgroundVideo from "../assets/video/video.mp4";

import imgCard4 from "../assets/images/pastorJorge.png";
import Card from "../components/Card";

function Home() {
  // Forzar actualización de renderizado
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <video
          className="w-full h-screen object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            filter: "brightness(.3)", // Ajusta el brillo del video
          }}></video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            BIENVENIDOS A IGLESIA EL ENCUENTRO
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            El lugar de tu encuentro con Dios
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/about"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300 text-center">
              Conócenos
            </Link>
            <Link
              to="/events"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition duration-300 text-center">
              Próximos Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* REHMA Section */}
      <section className="py-20 sm:py-36 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-28">
            <h2 className="text-6xl sm:text-5xl font-bold text-slate-900 mb-4">
              Palabra Rhema 2026
            </h2>
          </div>
          {/* card rehma */}
          <div className=" flex  bg-blue-900 rounded-lg p-6 sm:p-14 shadow-lg hover:scale-95 transition-transform duration-300">
            <p className="text-4xl sm:text-4xl text-white mx-auto">
              “Olviden las cosas de antaño… estoy haciendo algo nuevo...”
              <span>
                <p className="text-sm sm:text-lg text-gray-100 mt-4">
                  Isaías 43:18-19
                </p>
              </span>
            </p>

            <img
              className="w-10 h-10 rounded-full border-2 sm:w-16 sm:h-16 border-white shadow-lg object-cover sm:mt-20 mt-60"
              src={imgCard4} // Cambia la ruta por tu avatar
              alt="Avatar Rhema"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-5xl font-bold text-slate-900 mb-4">
              Cronograma de Reuniones y Actividades
            </h2>
          </div>
          {/* card services */}
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-2  ">
            <Card
              bgClass="bg-red-300"
              title="REUNIÓN CENTRAL Y DE NIÑOS"
              subtitle="DOMINGO 10:30HS"
              description="Un espacio para toda la familia donde compartimos un tiempo de adoración, enseñanza y comunión. Mientras los adultos participan de la reunión central, los niños viven una experiencia dinámica y segura, aprendiendo valores y principios bíblicos de manera creativa y relevante para su edad."
            />

            <Card
              bgClass="bg-green-300"
              title="REUNIÓN DE ORACIÓN"
              subtitle="MIERCOLES 19:00HS"
              description="Un espacio para toda la familia donde compartimos un tiempo de adoración, enseñanza y comunión. Mientras los adultos participan de la reunión central, los niños viven una experiencia dinámica y segura, aprendiendo valores y principios bíblicos de manera creativa y relevante para su edad."
            />

            <Card
              bgClass="bg-yellow-300"
              title="SANANDO IDENTIDADES"
              subtitle="JUEVES 19:00HS"
              description="Un espacio para toda la familia donde compartimos un tiempo de adoración, enseñanza y comunión. Mientras los adultos participan de la reunión central, los niños viven una experiencia dinámica y segura, aprendiendo valores y principios bíblicos de manera creativa y relevante para su edad."
            />

             <Card
              bgClass="bg-purple-300"
              title="REUNIÓN DE PREADOLÉSCENTES"
              subtitle="SABADO 16:00HS"
              description="Espacio formativo diseñado para acompañar a preadolescentes en una etapa clave de su desarrollo. A través de dinámicas participativas, enseñanza bíblica contextualizada y actividades recreativas, promovemos el crecimiento espiritual, la formación en valores y la construcción de vínculos saludables en un ambiente seguro y guiado por líderes capacitados."
            />

              <Card 
                bgClass="bg-pink-300"
                title="REUNIÓN DE ADOLESCENTES Y JÓVENES"
                subtitle="SABADO 19:00HS"
                description="Espacio de formación y acompañamiento orientado a adolescentes y jóvenes, enfocado en el desarrollo espiritual, personal y relacional. A través de encuentros dinámicos, enseñanza relevante y tiempos de reflexión, promovemos una fe sólida, el liderazgo con valores y la construcción de una identidad firme en un entorno de contención y comunidad."
              />
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}

      <section className="py-16 bg-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Mantente al día con nuestras actividades y eventos especiales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  15 de Abril, 2025
                </div>
                <h3 className="text-xl font-bold mb-2">Retiro Espiritual</h3>
                <p className="text-gray-600 mb-4">
                  Un fin de semana de renovación espiritual, oración y comunión.
                </p>
                <Link
                  to="/events"
                  className="text-blue-600 font-medium hover:text-blue-800">
                  Más información →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  30 de Abril, 2025
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Concierto de Alabanza
                </h3>
                <p className="text-gray-600 mb-4">
                  Una noche especial de adoración y alabanza con músicos
                  invitados.
                </p>
                <Link
                  to="/events"
                  className="text-blue-600 font-medium hover:text-blue-800">
                  Más información →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-yellow-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  10 de Mayo, 2025
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Campaña de Servicio Comunitario
                </h3>
                <p className="text-gray-600 mb-4">
                  Únete a nosotros para servir a nuestra comunidad local.
                </p>
                <Link
                  to="/events"
                  className="text-blue-600 font-medium hover:text-blue-800">
                  Más información →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/events"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
              Ver Todos los Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Testimonios
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Escucha lo que nuestra comunidad tiene que decir sobre su
              experiencia en Iglesia El Encuentro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Yani y Matias</h4>
                  <p className="text-gray-600 text-sm">Miembro desde 2020</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Yanina y Matías enfrentaron temores de infertilidad por un
                quiste y SOP. Milagrosamente, el quiste disminuyó y una palabra
                profética les dio esperanza. Hoy disfrutan a su hijo Benjamín,
                testimonio de la fidelidad de Dios."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Juan Pérez</h4>
                  <p className="text-gray-600 text-sm">Miembro desde 2018</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "En el Ministerio de Evangelismo, Sergio experimentó el respaldo
                de Dios y aprendió que evangelizar es para todos, basado en el
                testimonio personal y buscando un encuentro genuino con Dios,
                reflejando su amor y compasión."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Laura Ramírez</h4>
                  <p className="text-gray-600 text-sm">Miembro desde 2022</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "La infancia de Martín fue un escape del abuso, hallando paz en
                la iglesia. De adulto, se perdió, pero al volver a la iglesia,
                esa paz regresó. Hoy, rendido a Dios, reconoce su propósito y su
                constante fidelidad."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            ¿Listo para visitarnos?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Te esperamos este domingo para compartir juntos. Nuestra comunidad
            está lista para recibirte con los brazos abiertos.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-6 py-4 rounded-md font-medium text-base sm:text-lg hover:bg-gray-100 transition duration-300 inline-block">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
