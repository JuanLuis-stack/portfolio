import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import MyProjects from "./components/MyProjects";
import WhatICanDo from "./components/WhatICanDo";
import HowIBuild from "./components/HowIBuild";

function App() {
  return (
    <main className="overflow-hidden bg-[#0b0908] text-white">
      <Navbar />
      <Header />
      <AboutMe />
      <TechStack />
      <MyProjects />
      <WhatICanDo />
      <HowIBuild />
      {/* Let's Talk Section */}
      <section
        id="lets-talk"
        aria-labelledby="lets-talk-title"
        className="flex min-h-[60svh] scroll-mt-20 items-center border-t border-white/10 px-6 py-24 sm:px-10"
      >
        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-orange-400">
            06 / Connect
          </p>
          <h2
            id="lets-talk-title"
            className="text-shimmer mb-5 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Let’s Talk.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Have a project, open role, or collaboration in mind? Connect with me directly on LinkedIn or GitHub.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/juan-luis-arias-rojas-b21693339/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/30 transition-all hover:bg-orange-500 hover:shadow-orange-600/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JuanLuis-stack"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
