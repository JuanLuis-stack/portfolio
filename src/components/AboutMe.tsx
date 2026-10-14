import { useState } from "react";
import { useInView } from "../hooks/useInView";

function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="about-me"
      aria-labelledby="about-me-title"
      className="flex min-h-[65svh] scroll-mt-20 items-center border-t border-white/10 px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-orange-400">
          01 / About Me
        </p>

        {/* Featured About Card matching About Me style reference */}
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#14100c]/90 p-6 shadow-2xl backdrop-blur-md transition-all duration-700 sm:p-10 lg:p-12 ${
            inView ? "reveal-active" : "reveal-init"
          }`}
        >
          {/* Subtle warm glow behind card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-12">
            {/* Avatar with warm orange glowing disc */}
            <div className="relative shrink-0">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 p-1.5 shadow-xl shadow-orange-500/25 sm:h-40 sm:w-40">
                <img
                  src="/Myselftportfolioimg.jpeg"
                  alt="Juan Luis Arias"
                  className="h-full w-full rounded-full object-cover object-top ring-2 ring-black/40"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 text-center md:text-left">
              {/* Heading with verified badge */}
              <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
                <h2
                  id="about-me-title"
                  className="text-shimmer text-4xl font-bold tracking-tight sm:text-5xl"
                >
                  About Me.
                </h2>
                {/* Golden Verified Badge Icon */}
                <span
                  title="Verified Developer"
                  aria-label="Verified"
                  className="inline-flex items-center text-amber-400"
                >
                  <svg
                    className="h-7 w-7 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)] sm:h-8 sm:w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1L9.1 3.55L5.3 3.65L4.4 7.35L1.4 9.7L2.9 13.2L1.4 16.7L4.4 19.05L5.3 22.75L9.1 22.85L12 25.4L14.9 22.85L18.7 22.75L19.6 19.05L22.6 16.7L21.1 13.2L22.6 9.7L19.6 7.35L18.7 3.65L14.9 3.55L12 1Z" />
                    <path
                      d="M9.8 14.7L6.8 11.7L5.5 13L9.8 17.3L18.5 8.6L17.2 7.3L9.8 14.7Z"
                      fill="#0b0908"
                    />
                  </svg>
                </span>
              </div>

              {/* Subtitle / Intro line */}
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-orange-400/90 sm:text-base">
                Hi, My Name is{" "}
                <span className="font-semibold italic text-white">
                  Juan Luis Arias
                </span>
              </p>

              {/* First paragraph (Always visible) */}
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                I&apos;m a self-driven developer passionate about solving
                problems, writing clean code, and continuously learning. I work
                with technologies such as TypeScript, React, Node.js, Express,
                and PostgreSQL, and I enjoy turning ideas into real-world
                applications.
              </p>

              {/* Expandable paragraphs */}
              {isExpanded && (
                <div className="mt-4 space-y-4 border-t border-white/10 pt-4 text-base leading-relaxed text-white/75 sm:text-lg animate-in fade-in duration-300">
                  <p>
                    I value understanding the reasoning behind every solution
                    rather than simply copying code. I&apos;m always open to
                    feedback, willing to learn from experienced developers, and
                    committed to improving my technical skills and becoming a
                    better engineer.
                  </p>
                  <p>
                    My goal is to build meaningful software, contribute to a
                    development team, and continue growing as a professional.
                  </p>
                </div>
              )}

              {/* See More Toggle Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  <span>{isExpanded ? "See less" : "See more..."}</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
