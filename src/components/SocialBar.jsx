import React from "react";

// social network SVG icons (same as before)
const FacebookIcon = ({ className = "h-6 w-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
  </svg>
);

const YouTubeIcon = ({ className = "h-6 w-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.5 6.2c-.2-.8-.8-1.4-1.6-1.6C19.9 4 12 4 12 4s-7.9 0-9.9.6c-.8.2-1.4.8-1.6 1.6C0 8.2 0 12 0 12s0 3.8.5 5.8c.2.8.8 1.4 1.6 1.6C4.1 20 12 20 12 20s7.9 0 9.9-.6c.8-.2 1.4-.8 1.6-1.6.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);

const InstagramIcon = ({ className = "h-6 w-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.966.24 2.427.403a4.92 4.92 0 011.675.983 4.92 4.92 0 01.983 1.675c.163.461.347 1.257.403 2.427.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.966-.403 2.427a4.913 4.913 0 01-.983 1.675 4.913 4.913 0 01-1.675.983c-.461.163-1.257.347-2.427.403-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.056-1.966-.24-2.427-.403a4.92 4.92 0 01-1.675-.983 4.92 4.92 0 01-.983-1.675c-.163-.461-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.966.403-2.427a4.92 4.92 0 01.983-1.675 4.92 4.92 0 011.675-.983c.461-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.841.346 4.042.722a6.946 6.946 0 00-2.52 1.64A6.946 6.946 0 00.722 4.042C.346 4.841.131 5.775.072 7.052.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.059 1.277.274 2.211.65 3.01a6.946 6.946 0 001.64 2.52 6.946 6.946 0 002.52 1.64c.799.376 1.733.591 3.01.65 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.211-.274 3.01-.65a6.946 6.946 0 002.52-1.64 6.946 6.946 0 001.64-2.52c.376-.799.591-1.733.65-3.01.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.274-2.211-.65-3.01a6.946 6.946 0 00-1.64-2.52 6.946 6.946 0 00-2.52-1.64C18.211.274 17.277.059 16 .000 14.72-.059 14.311-.072 12-.072z" />
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
    <circle cx="18.406" cy="5.594" r="1.44" />
  </svg>
);

function SocialBar({ visible }) {
  // the bar will hide by translating upward when not visible
  return (
    <nav
      className={`fixed top-0 w-full h-12 bg-white z-50 transition-transform duration-300 ease-in-out shadow-md ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-center space-x-6 py-3">
        <a
          href="#"
          aria-label="Facebook"
          className="text-gray-900 hover:text-black"
        >
          <FacebookIcon className="h-5 w-5" />
        </a>
        <a
          href="https://www.youtube.com/"
          aria-label="YouTube"
          className="text-gray-900 hover:text-black"
        >
          <YouTubeIcon className="h-5 w-5" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-gray-900 hover:text-black"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>

        {/* Tienda online link */}
        <a
          href="/tienda"
          aria-label="Tienda online"
          className="ml-4 flex items-center text-gray-900 hover:text-black"
        >
          <svg
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2l1.5 2h9L18 2H6zm1.5 4L5 20h14l-2.5-14h-8zM9 8h6v2H9V8z" />
          </svg>
          <span className="text-sm font-medium">Tienda online</span>
        </a>
      </div>
    </nav>
  );
}

export default SocialBar;
