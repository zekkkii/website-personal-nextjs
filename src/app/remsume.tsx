/* eslint-disable react/no-unescaped-entities */
export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-gray-900 text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Founder&apos;s Background</h2>

        <div className="bg-zinc-800 p-8 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Professional Experience</h3>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• 5+ years in Full-stack Development</li>
                <li>• Expert in Java Spring Boot & Node.js</li>
                <li>• React & TypeScript specialist</li>
                <li>• Event-driven systems with Kafka</li>
                <li>• Scalable backend architecture</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Core Competencies</h3>
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
          Interested in learning more about the founder&apos;s professional background and technical expertise? 
          Download the detailed resume below.
        </p>
        
        <a
          href="/EC - CV EN 2025.pdf"
          download
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105"
        >
          Download Full Resume
        </a>
      </div>
    </section>
  );
}
