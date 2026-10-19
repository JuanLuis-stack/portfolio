import { useInView } from "../../../hooks/useInView";
import LevelIndicator from "./LevelIndicator";
import { techCategories } from "./techStackData";

function TechStack() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-title"
      className="flex min-h-[65svh] scroll-mt-20 items-center border-t border-white/10 px-6 py-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-orange-400">
            02 / Tech Stack
          </p>
          <h2
            id="tech-stack-title"
            className="text-shimmer mb-4 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Technologies & Tools.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            A comprehensive breakdown of my development stack, categorized by
            domain with current proficiency levels and verified competencies.
          </p>
        </div>

        {/* Grid of categorized boxes with staggered scroll reveal */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
        >
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              style={{
                transitionDelay: `${index * 130}ms`,
              }}
              className={`flex flex-col justify-between rounded-3xl border p-6 shadow-xl backdrop-blur-md transition-all duration-700 hover:-translate-y-1 ${
                category.cardStyle
              } ${inView ? "reveal-active" : "reveal-init"}`}
            >
              <div>
                {/* Category Header */}
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-shimmer-gray text-xl font-bold tracking-tight text-white">
                    {category.title}
                  </h3>
                  <span
                    className={`rounded-2xl border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${category.badgeStyle}`}
                  >
                    {category.badge}
                  </span>
                </div>

                {/* List of Technologies */}
                <div className="space-y-3">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                          {tech.icon}
                        </div>
                        <span className="text-sm font-medium text-white/90">
                          {tech.name}
                        </span>
                      </div>

                      {/* Level Indicator: BOTH Icon and Text */}
                      <LevelIndicator
                        level={tech.level}
                        label={tech.levelLabel}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;