import { useState } from "react";
import { useInView } from "../../../hooks/useInView";
import ArchitectureBreakdown from "./ArchitectureBreakdown";
import ProjectTechBadges from "./ProjectTechBadges";

function MyProjects() {
  const [showDetails, setShowDetails] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="my-projects"
      aria-labelledby="my-projects-title"
      className="flex min-h-[65svh] scroll-mt-20 items-center border-t border-white/10 px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-orange-400">
            03 / Portfolio
          </p>
          <h2
            id="my-projects-title"
            className="text-shimmer mb-4 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Featured Project.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            A comprehensive look at my primary full-stack production build,
            highlighting frontend reactivity, backend services, and relational
            database architecture.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-b from-[#18130f] to-[#0e0b09] p-6 shadow-2xl backdrop-blur-xl transition-all duration-700 sm:p-8 lg:p-10 ${
            inView ? "reveal-active" : "reveal-init"
          }`}
        >
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl"
          />

          {/* Top Row: Preview & Core Summary (Locked aspect ratio, will NOT stretch) */}
          <div className="relative z-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Project Image Frame (Left Column) */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-xl lg:col-span-7">
              {/* Browser / App Header bar */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[11px] text-white/50">
                  posts-management.app
                </span>
                <span className="text-[10px] text-orange-400">
                  Live Architecture
                </span>
              </div>

              {/* Screenshot Image with locked proportion */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0c]">
                <img
                  src="/project-threads.png"
                  alt="Posts Management - Full-stack social media application"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Project Details (Right Column) */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                  Full Stack Social Media App
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Posts Management
                </h3>

                {/* Basic explanation */}
                <p className="mb-5 text-sm leading-relaxed text-white/80 sm:text-base">
                  A full-stack social media application inspired by Threads,
                  built to practice and demonstrate modern web development
                  skills.
                </p>

                <ProjectTechBadges />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2.5 text-xs font-semibold text-orange-300 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <span>
                    {showDetails ? "Hide details" : "See more details"}
                  </span>
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      showDetails ? "rotate-180" : ""
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

                <a
                  href="https://github.com/JuanLuis-stack"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.23-5.06-5.49 0-1.21.43-2.2 1.15-2.98-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.06 1.14a10.63 10.63 0 0 1 5.57 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.21-5.08 5.48.4.35.75 1.02.75 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  <span>Repository</span>
                </a>
              </div>
            </div>
          </div>

          {showDetails && <ArchitectureBreakdown />}
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
