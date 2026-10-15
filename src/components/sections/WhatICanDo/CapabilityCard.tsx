import type { ReactNode } from "react";

interface CapabilityCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  inView: boolean;
}

function CapabilityCard({
  title,
  description,
  icon,
  index,
  inView,
}: CapabilityCardProps) {
  return (
    <div
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#14100c]/85 p-7 shadow-xl backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-[#1a140f] ${
        inView ? "reveal-active" : "reveal-init"
      }`}
    >
      <div>
        <div className="flex items-center gap-2">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 transition-colors group-hover:border-orange-500/30 group-hover:bg-orange-500/10">
            {icon}
          </div>

          <h3 className="mb-3 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-orange-300 sm:text-xl">
            {title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-white/70 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CapabilityCard;
