/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import NavbarComp from "../navbar";
import Footer from "../footer";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutPage() {
  const experiences = [
    {
      role: "Fullstack Developer",
      company: "VERIZON",
      description:
        "Developed full-stack solutions such as report visualization, high-volume data migrations, system optimization (frontend and backend), API creation and integration with large-scale systems, event automation, and platform integrations. Acted as development lead for the implementation of an internal bot. Core technologies used included Java, React.js, and Oracle SQL.",
    },
    {
      role: "Backend Developer",
      company: "DACODES",
      description:
        "Worked as a Backend Developer using Node.js, TypeScript, Apache Cassandra(NoSQl),Redis and Kafka to handle high-volume real-time data processing. Developed, tested, and delivered features as requested, and implemented key improvements to enhance performance, architecture, and application flow.",
    },
    {
      role: "Developer",
      company: "DELONIX",
      description:
        "Designed and developed a mobile app using React Native, and built various web systems using Node.js, MySQL, React, Ruby on Rails and Wordpress.",
    },
    {
      role: "Internship Developer",
      company: "INNOVACODE",
      description:
        "Supported the team by developing frontend components with React and JavaScript, debugging issues, and enhancing user experience. I learned agile processes, and the basis on web development.",
    },
  ];

  return (
    <div>
      <NavbarComp />
      <main className="pt-16">
        {/* About Me Section */}
        <section className="min-h-screen bg-zinc-900 text-white py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              {/* Personal Info */}
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto lg:mx-0 mb-6">
                  <img
                    src="/zeki-pic.jpeg"
                    alt="Ezequiel Vásquez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                  Ezequiel Vásquez
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a fullstack developer with over 5 years of experience
                  building web applications and small apps. I'm passionate about
                  creating clean, efficient solutions that solve real problems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies,
                  contributing to open source projects, and sharing knowledge
                  with the developer community.
                </p>
              </div>

              {/* Skills & Background */}
              <div className="bg-black p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                  Background
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Experience</h4>
                    <p className="text-gray-300 text-sm">
                      5+ years in fullstack development, working with both
                      startups and established companies
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Specialization</h4>
                    <p className="text-gray-300 text-sm">
                      Modern web technologies including React, TypeScript,
                      Node.js, and Java Spring Boot
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Approach</h4>
                    <p className="text-gray-300 text-sm">
                      I believe in writing maintainable code, following best
                      practices, and continuous learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-black text-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The tools and technologies I work with to build modern
                applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend */}
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-cyan-400 font-semibold mb-4 text-center">
                  Frontend
                </h3>
                <div className="space-y-2 text-sm">
                  <div>• React</div>
                  <div>• Redux</div>
                  <div>• React Query</div>
                  <div>• Next.js</div>
                  <div>• TypeScript</div>
                  <div>• Sass</div>
                  <div>• Bootstrap</div>
                  <div>• Tailwind CSS</div>
                  <div>• React Native</div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-cyan-400 font-semibold mb-4 text-center">
                  Backend
                </h3>
                <div className="space-y-2 text-sm">
                  <div>• Node.js (Express.js, Nest.js)</div>
                  <div>• TypeScript</div>
                  <div>• C# .NET (ASP API, MVC)</div>
                  <div>• Java Spring Boot</div>
                  <div>• Ruby on Rails</div>
                  <div>• AWS</div>
                </div>
              </div>

              {/* Database */}
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-cyan-400 font-semibold mb-4 text-center">
                  Database
                </h3>
                <div className="space-y-2 text-sm">
                  <div>• MongoDB</div>
                  <div>• MariaDB</div>
                  <div>• SQL Server</div>
                  <div>• Oracle SQL</div>
                </div>
              </div>

              {/* Tools & Version Control */}
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-cyan-400 font-semibold mb-4 text-center">
                  Git & Tools
                </h3>
                <div className="space-y-2 text-sm">
                  <div>• GitLab</div>
                  <div>• GitHub</div>
                  <div>• GitHub Actions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-zinc-900 text-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Professional Experience
            </h2>

            <div className="relative border-l-2 border-zinc-700 ml-6">
              {experiences.map(({ role, company, description }, index) => (
                <div key={index} className="mb-12 ml-6 relative">
                  <span className="absolute -left-6 top-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-zinc-900"></span>
                  <h3 className="text-2xl font-semibold">{role}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{company}</p>
                  <p className="text-zinc-300 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="bg-black text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Professional Background</h2>

            <div className="bg-zinc-900 p-8 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    Professional Experience
                  </h3>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• 5+ years in Full-stack Development</li>
                    <li>• Expert in Java Spring Boot & Node.js</li>
                    <li>• React & TypeScript specialist</li>
                    <li>• Event-driven systems with Kafka</li>
                    <li>• Scalable backend architecture</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    Core Competencies
                  </h3>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li>• Web Application Development</li>
                    <li>• API Design & Implementation</li>
                    <li>• Database Management</li>
                    <li>• Cloud Solutions & DevOps</li>
                    <li>• Team Leadership & Mentoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              Want to learn more about my professional background and technical
              expertise? Download my detailed resume below.
            </p>

            <a
              href="/EC - CV EN 2025.pdf"
              download
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-zinc-900 text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms
            </p>

            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/ezequiel-v-b15009205/"
                target="_blank"
                className="flex items-center space-x-3 bg-black p-6 rounded-lg hover:bg-zinc-800 transition"
              >
                <FaLinkedin />
                <div className="text-left">
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">Professional network</p>
                </div>
              </a>

              <a
                href="https://x.com/zekii21"
                target="_blank"
                className="flex items-center space-x-3 bg-black p-6 rounded-lg hover:bg-zinc-800 transition"
              >
                <FaXTwitter />
                <div className="text-left">
                  <h3 className="font-semibold">X (Twitter)</h3>
                  <p className="text-gray-400 text-sm">Tech discussions</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
