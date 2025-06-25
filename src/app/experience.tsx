export default function Experience() {
  const experiences = [
    {
      role: "Fullstack Developer",
      company: "VERIZON",
      description:
        "Developed full-stack solutions such as report visualization, high-volume data migrations, system optimization (frontend and backend), API creation and integration with large-scale systems, event automation, and platform integrations. Acted as development lead for the implementation of an internal bot. Core teDeveloped full-stack solutions such as report visualization, high-volume data migrations, system optimization (frontend and backend), API creation and integration with large-scale systems, event automation, and platform integrations. Acted as development lead for the implementation of an internal bot. Core technologies used included Java, React.js, and Oracle SQL.",
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
      company: "Innovacode",
      description:
        "Supported the team by developing frontend components with React and JavaScript, debugging issues, and enhancing user experience. I learned agile processes, and the basis on web development.",
    },
  ];

  return (
    <section id="experience" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="relative border-l-2 border-zinc-700 ml-6">
          {experiences.map(({ role, company, description }, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              {/* Circulo en la línea */}
              <span className="absolute -left-6 top-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black"></span>

              <h3 className="text-2xl font-semibold">{role}</h3>
              <p className="text-cyan-400 font-medium">{company}</p>
              <p className="text-zinc-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
