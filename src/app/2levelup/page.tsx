import NavbarComp from "../navbar";
import Footer from "../footer";

export default function TwoLevelUpPage() {

  return (
    <div>
      <NavbarComp />
      <main className="pt-16">
        {/* 2LevelUp Info Section */}
        <section className="min-h-screen bg-black text-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-8">
                <img
                  src="/2levelup-img.png"
                  alt="2LevelUp Logo"
                  className="h-20 w-auto mx-auto mb-6"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Apps
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A collection of small, focused applications designed to solve everyday problems with clean, efficient code.
              </p>
            </div>

            {/* Apps Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Coming Soon</h2>
              <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                We're working on some exciting apps that will be available soon. Stay tuned for updates!
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Our Philosophy</h3>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                At 2LevelUp, we focus on creating small, efficient applications that do one thing really well. 
                No bloat, no unnecessary features - just clean solutions that work.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}