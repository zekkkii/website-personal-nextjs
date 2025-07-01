/* eslint-disable @next/next/no-img-element */
export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About 2LevelUp</h2>
        
        <div className="mb-12">
          <img
            src="/2levelup-img.png"
            alt="2LevelUp Logo"
            className="h-24 w-auto mx-auto mb-8"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            2LevelUp is focused on creating small, efficient applications that solve specific problems. 
            We believe in keeping things simple and effective.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed mb-12">
            Each app is built with modern technologies and follows clean code principles. 
            Our goal is to deliver solutions that work well and are easy to use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-3">Small & Focused</h3>
              <p className="text-gray-300 text-sm">Apps that do one thing really well</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-3">Modern Tech</h3>
              <p className="text-gray-300 text-sm">Built with the latest technologies</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-300 text-sm">Maintainable and well-structured</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/2levelup"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              View Our Apps
            </a>
            <a
              href="/about"
              className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              About the Developer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}