export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-zinc-900 text-white flex flex-col items-center justify-center px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-8">Resume</h2>

      <p className="max-w-xl text-center mb-8 text-zinc-300">
        You can download my resume in PDF format by clicking the button below.
      </p>
      <a
        href="/EC - CV EN 2025.pdf"
        download
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition"
      >
        Download Resume
      </a>
    </section>
  );
}
