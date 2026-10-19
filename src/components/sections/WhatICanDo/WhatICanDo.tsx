import { useInView } from "../../../hooks/useInView";
import CapabilityCard from "./CapabilityCard";
import { capabilities } from "./capabilitiesData";

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

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              title={capability.title}
              description={capability.description}
              icon={capability.icon}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatICanDo;
