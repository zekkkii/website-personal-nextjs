export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg leading-relaxed text-zinc-300">
          I’m <strong>Ezequiel Vásquez</strong>, a Fullstack Developer with over
          5 years of experience building scalable and efficient web
          applications. I specialize in backend development with{" "}
          <strong>Java and Spring Boot</strong>, <strong>NodeJs</strong> and
          frontend work using <strong>React and TypeScript</strong>. I have
          strong skills in designing event-driven systems and managing real-time
          data with tools like <strong>Kafka</strong>. Passionate about clean
          code and teamwork, I strive to deliver solutions that meet business
          goals and provide great user experiences.
        </p>
      </div>
    </section>
  );
}
