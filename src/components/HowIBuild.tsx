const buildSteps = [
  {
    step: 1,
    title: "Plan First",
    description:
      "I understand the requirements and break problems into manageable tasks.",
  },
  {
    step: 2,
    title: "Build Incrementally",
    description:
      "I develop features in small, focused steps while following existing patterns.",
  },
  {
    step: 3,
    title: "Test and Refine",
    description:
      "I verify functionality, fix bugs, and improve code quality.",
  },
  {
    step: 4,
    title: "Keep Learning",
    description:
      "I use feedback and new challenges to strengthen my engineering skills.",
  },
];

function HowIBuild() {
  return (
    <section
      id="how-i-build"
      aria-labelledby="how-i-build-title"
      className="flex min-h-[65svh] scroll-mt-20 items-center border-t border-white/10 px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-orange-400">
            05 / Methodology
          </p>
          <h2
            id="how-i-build-title"
            className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            How I Build Software.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            A disciplined, step-by-step engineering process focused on clarity,
            incremental progress, and high code quality.
          </p>
        </div>

        {/* Timeline structure with prominent left line */}
        <div className="relative pl-2 sm:pl-4">
          {/* Vertical left connecting line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[23px] top-6 w-[2px] bg-gradient-to-b from-amber-400 via-orange-500 to-amber-500/40 sm:left-[27px]"
          />

          {/* Timeline Nodes */}
          <div className="space-y-10 sm:space-y-12">
            {buildSteps.map((item) => (
              <div
                key={item.step}
                className="group relative flex items-start gap-6 sm:gap-8"
              >
                {/* Numbered Circular Node */}
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-extrabold text-[#0b0908] shadow-lg shadow-orange-500/25 ring-4 ring-[#0b0908] sm:h-10 sm:w-10">
                  {item.step}
                </div>

                {/* Content Block */}
                <div className="flex-1 rounded-2xl border border-white/5 bg-[#14100c]/60 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-[#1a140f]/80 sm:p-6">
                  <h3 className="text-base font-bold uppercase tracking-wider text-amber-400 transition-colors group-hover:text-amber-300 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowIBuild;
