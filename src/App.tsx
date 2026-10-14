import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import MyProjects from "./components/MyProjects";

const sections = [
  {
    id: "what-i-can-do",
    title: "What I Can Do",
    description:
      "Ways I can contribute, from frontend experiences to backend services.",
  },
  {
    id: "how-i-build",
    title: "How I Build",
    description:
      "My process for turning an idea into a working, maintainable product.",
  },
  {
    id: "lets-talk",
    title: "Let’s Talk",
    description:
      "Have a project or opportunity in mind? Connect with me on LinkedIn or GitHub.",
  },
];

function App() {
  return (
    <main className="overflow-hidden bg-[#0b0908] text-white">
      <Navbar />
      <Header />
      <AboutMe />
      <TechStack />
      <MyProjects />
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="flex min-h-[65svh] scroll-mt-8 items-center border-t border-white/10 px-6 py-24 sm:px-10"
        >
          <div className="mx-auto w-full max-w-5xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-orange-400">
              0{index + 1} / Portfolio
            </p>
            <h2
              id={`${section.id}-title`}
              className="mb-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              {section.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              {section.description}
            </p>
            {section.id === "lets-talk" && (
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/juan-luis-arias-rojas-b21693339/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/JuanLuis-stack"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
                >
                  GitHub
                </a>
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}

export default App;
