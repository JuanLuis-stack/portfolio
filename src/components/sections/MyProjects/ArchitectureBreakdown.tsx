import { technicalBreakdown } from "./myProjectsData";

function ArchitectureBreakdown() {
  return (
    <div className="relative z-10 mt-8 border-t border-white/10 pt-8 animate-in fade-in duration-300">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
          Full-Stack Architecture Breakdown
        </h4>
        <span className="text-xs text-white/50">3-Tier Implementation</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {technicalBreakdown.map((item, index) => (
          <div
            key={item.category}
            style={{
              animationDelay: `${index * 160}ms`,
            }}
            className={`animate-hero-item flex flex-col justify-between rounded-2xl border p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${item.accent}`}
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                    {item.icon}
                  </div>
                  <h5 className="text-base font-bold text-white">
                    {item.category}
                  </h5>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/70">
                  {item.tag}
                </span>
              </div>

              <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchitectureBreakdown;
