import { useInView } from "../hooks/useInView";

const capabilities = [
  {
    title: "Full-Stack Web Development",
    description:
      "I build full-stack web applications using React, TypeScript, Node.js, Express, and PostgreSQL.",
    icon: (
      <svg
        className="h-6 w-6 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Responsive UI Engineering",
    description:
      "I create responsive user interfaces focused on usability, accessibility, and clean design.",
    icon: (
      <svg
        className="h-6 w-6 text-orange-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "REST APIs & Databases",
    description:
      "I develop REST APIs and relational databases to support reliable application functionality.",
    icon: (
      <svg
        className="h-6 w-6 text-amber-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    title: "Clean Code & Problem Solving",
    description:
      "I continuously improve my problem-solving skills and write maintainable code while learning professional software engineering practices.",
    icon: (
      <svg
        className="h-6 w-6 text-yellow-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

function WhatICanDo() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="what-i-can-do"
      aria-labelledby="what-i-can-do-title"
      className="flex min-h-[65svh] scroll-mt-20 items-center border-t border-white/10 px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-orange-400">
            04 / Core Competencies
          </p>
          <h2
            id="what-i-can-do-title"
            className="text-shimmer mb-4 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            What I Do.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Focused capabilities translating engineering principles into solid,
            production-ready web solutions.
          </p>
        </div>

        {/* Feature Boxes with Staggered Scroll Reveal */}
        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#14100c]/85 p-7 shadow-xl backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-[#1a140f] ${
                inView ? "reveal-active" : "reveal-init"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  {/* Icon Circle */}
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 transition-colors group-hover:border-orange-500/30 group-hover:bg-orange-500/10">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-orange-300 sm:text-xl">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatICanDo;
