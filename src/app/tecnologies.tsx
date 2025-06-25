import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  //SiKafka,
  SiTailwindcss,
} from "react-icons/si";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="bg-black text-white py-24 px-6 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl font-bold mb-12">Technologies I Use</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {/* React */}
          <div className="flex flex-col items-center">
            <FaReact className="text-cyan-400 text-5xl mb-2" />
            <span className="text-sm mt-1">React</span>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center">
            <SiTypescript className="text-blue-400 text-5xl mb-2" />
            <span className="text-sm mt-1">TypeScript</span>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center">
            <FaJava className="text-orange-500 text-5xl mb-2" />
            <span className="text-sm mt-1">Java</span>
          </div>

          {/* Spring Boot */}
          <div className="flex flex-col items-center">
            <SiSpringboot className="text-green-500 text-5xl mb-2" />
            <span className="text-sm mt-1">Spring Boot</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-400 text-5xl mb-2" />
            <span className="text-sm mt-1">Node.js</span>
          </div>

          {/* Kafka */}
          {/* <div className="flex flex-col items-center">
            <SiKafka className="text-purple-400 text-5xl mb-2" />
            <span className="text-sm mt-1">Kafka</span>
          </div> */}

          {/* Databases */}
          <div className="flex flex-col items-center">
            <FaDatabase className="text-yellow-400 text-5xl mb-2" />
            <span className="text-sm mt-1">SQL / NoSQL</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-sky-400 text-5xl mb-2" />
            <span className="text-sm mt-1">Tailwind CSS</span>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-red-500 text-5xl mb-2" />
            <span className="text-sm mt-1">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}
