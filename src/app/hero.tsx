/* eslint-disable @next/next/no-img-element */
import { FaAnglesDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="#" className="h-screen bg-black text-white flex flex-col px-4">
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/2levelup-img.png"
            alt="2LevelUp Logo"
            className="h-20 w-auto mx-auto mb-6"
          />
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          2LevelUp
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
          Indie developer creating small apps and web solutions
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/2levelup"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105"
          >
            View Our Apps
          </a>
          <a
            href="/about"
            className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="flex justify-center mb-6">
        <FaAnglesDown className="animate-bounce text-2xl text-cyan-400" />
      </a>
    </section>
  );
}
