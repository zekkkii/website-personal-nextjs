import { FaAnglesDown } from "react-icons/fa6";
import AnimatedHello from "./animated_hello";

export default function Hero() {
  return (
    <section id="#" className="h-screen bg-black text-white flex flex-col px-4">
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Imagen */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
          <img
            src="/zeki-pic.jpeg"
            alt="Max's Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Texto principal */}
        <AnimatedHello />
        <p className="text-xl mb-6">
          Fullstack and indie developer with 5+ years of experience
        </p>
        {/* Botón de contacto */}
        <a
          href="https://www.linkedin.com/in/ezequiel-v-b15009205/"
          target="_blank"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Ícono al fondo */}
      <a href="#about" className="flex justify-center mb-6">
        <FaAnglesDown className="animate-bounce text-2xl" />
      </a>
    </section>
  );
}
