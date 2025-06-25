import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col items-center space-y-4">
        {/* Texto introductorio */}
        <p className="text-sm text-zinc-300">
          Get in touch using the following platforms:
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://x.com/zekii21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/zekkkii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ezequiel-v-b15009205/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Year and copyright */}
        <p className="text-sm text-zinc-400 mt-4">© {year} Ezequiel Vásquez.</p>
      </div>
    </footer>
  );
}
