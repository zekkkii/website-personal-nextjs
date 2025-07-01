export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-zinc-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">Available for project inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/ezequiel-v-b15009205/" 
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    Connect with me professionally
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Response Time</h4>
                  <p className="text-gray-300">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black rounded-lg">
              <h4 className="font-semibold mb-3 text-cyan-400">What I'm Looking For</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Web application development</li>
                <li>• Small to medium-sized projects</li>
                <li>• API development and integration</li>
                <li>• Frontend or fullstack work</li>
                <li>• Interesting technical challenges</li>
              </ul>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-black p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-cyan-500 focus:outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}