import { type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Proficiency = "High" | "Medium" | "Low–Medium" | "Low" | "Pending";

interface TechItem {
  name: string;
  level: Proficiency;
  levelLabel?: string;
  icon: ReactNode;
}

interface TechCategory {
  title: string;
  badge: string;
  cardStyle: string;
  badgeStyle: string;
  items: TechItem[];
}

function LevelIndicator({
  level,
  label,
}: {
  level: Proficiency;
  label?: string;
}) {
  const displayLabel = label || level;

  // Signal / meter bars or clock for pending
  if (level === "Pending") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
        <svg
          className="h-3 w-3 shrink-0 animate-pulse text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{displayLabel}</span>
      </span>
    );
  }

  // Bar count: High = 3/3, Medium = 2/3, Low–Medium = 1.5/3, Low = 1/3
  const filledBars =
    level === "High" ? 3 : level === "Medium" ? 2 : level === "Low–Medium" ? 1 : 1;
  const isHalf = level === "Low–Medium";

  const colorClasses =
    level === "High"
      ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
      : level === "Medium"
      ? "text-amber-400 border-amber-500/20 bg-amber-500/10"
      : "text-orange-400 border-orange-500/20 bg-orange-500/10";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${colorClasses}`}
    >
      {/* 3-bar signal meter icon */}
      <span className="flex items-end gap-0.5" aria-hidden="true">
        <span
          className={`h-1.5 w-1 rounded-xs ${
            filledBars >= 1 ? "bg-current" : "bg-white/20"
          }`}
        />
        <span
          className={`h-2.5 w-1 rounded-xs ${
            filledBars >= 2
              ? "bg-current"
              : isHalf
              ? "bg-current/60"
              : "bg-white/20"
          }`}
        />
        <span
          className={`h-3.5 w-1 rounded-xs ${
            filledBars >= 3 ? "bg-current" : "bg-white/20"
          }`}
        />
      </span>
      <span>{displayLabel}</span>
    </span>
  );
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    badge: "Client Side",
    cardStyle: "border-orange-500/25 bg-[#17110c]/85 hover:border-orange-500/40",
    badgeStyle: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    items: [
      {
        name: "HTML",
        level: "High",
        icon: (
          <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 5l2 15 7 2 7-2 2-15-9-3zm6.3 5.4l-.3 3.6h-6V13h5.7l-.5 4.9-5.2 1.4v-2.1l3.2-.9.2-2.3H8.3l-.2-2.1h8.5l.2-2.1H8l-.2-2.1h10.7z" />
          </svg>
        ),
      },
      {
        name: "CSS",
        level: "High",
        icon: (
          <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 5l2 15 7 2 7-2 2-15-9-3zm6.3 5.4l-.3 3.6h-6V13h5.7l-.5 4.9-5.2 1.4v-2.1l3.2-.9.2-2.3H8.3l-.2-2.1h8.5l.2-2.1H8l-.2-2.1h10.7z" />
          </svg>
        ),
      },
      {
        name: "JavaScript",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.2-.3 1.6-.7.4-.5.6-1.1.6-2v-.1h-1.8v.1c0 .5-.1.8-.3 1-.2.2-.4.3-.8.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.9V9.5h-1.9v4.9c0 1 .3 1.8.8 2.4.6.7 1.4 1 2.4 1zm-6.2-.2c.5 0 .9-.1 1.2-.4.4-.3.6-.7.6-1.2 0-.4-.1-.8-.4-1.1-.3-.3-.8-.6-1.5-.9-.6-.3-1.1-.6-1.4-.9-.3-.3-.4-.7-.4-1.2 0-.6.2-1 .7-1.4.5-.4 1.1-.6 1.8-.6.7 0 1.3.2 1.7.5.5.4.7.8.8 1.4h-1.8c-.1-.3-.2-.5-.4-.7-.2-.2-.5-.2-.8-.2-.3 0-.6.1-.8.2-.2.1-.3.3-.3.6 0 .2.1.4.3.6.2.2.6.4 1.2.7.7.3 1.3.6 1.7 1 .4.4.6.9.6 1.5 0 .6-.2 1.1-.7 1.5-.5.4-1.1.6-1.9.6-.8 0-1.5-.2-2-.6-.5-.4-.8-1-.8-1.7h1.9c.1.4.2.7.5.9.3.2.7.2 1.2.2z" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm7.5 7.5v6.8H8.7v-6.8H6.5V9.1h6.6v1.4h-2.6zm6.2 3.8c.4 0 .8-.1 1.1-.3.3-.2.5-.5.6-.9h1.6c-.1.8-.5 1.4-1 1.8-.5.4-1.3.7-2.3.7-1.1 0-2-.3-2.6-.9-.6-.6-.9-1.4-.9-2.5v-.4c0-1 .3-1.9.9-2.5.6-.6 1.4-.9 2.5-.9 1 0 1.8.2 2.3.7.6.5.9 1.1 1 1.9h-1.6c-.1-.4-.3-.7-.6-.9-.3-.2-.7-.3-1.1-.3-.6 0-1.1.2-1.4.6-.3.4-.5 1-.5 1.8v.4c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7z" />
          </svg>
        ),
      },
      {
        name: "React",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <ellipse cx="12" cy="12" rx="3.5" ry="3.5" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              opacity="0.3"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              d="M12 4.5c4.7 0 8.5 3.36 8.5 7.5s-3.8 7.5-8.5 7.5-8.5-3.36-8.5-7.5 3.8-7.5 8.5-7.5z"
              transform="rotate(30 12 12)"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              d="M12 4.5c4.7 0 8.5 3.36 8.5 7.5s-3.8 7.5-8.5 7.5-8.5-3.36-8.5-7.5 3.8-7.5 8.5-7.5z"
              transform="rotate(90 12 12)"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              d="M12 4.5c4.7 0 8.5 3.36 8.5 7.5s-3.8 7.5-8.5 7.5-8.5-3.36-8.5-7.5 3.8-7.5 8.5-7.5z"
              transform="rotate(150 12 12)"
            />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        level: "Low–Medium",
        icon: (
          <svg className="h-6 w-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Backend",
    badge: "Server & APIs",
    cardStyle: "border-emerald-500/25 bg-[#0d1612]/85 hover:border-emerald-500/40",
    badgeStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    items: [
      {
        name: "Node.js",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.4v7.2L12 19.7l7.2-4.1V8.4L12 4.3z" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5L6.5 13l1.4-1.4 2.1 2.1 5.6-5.6 1.4 1.4-7 7z" />
          </svg>
        ),
      },
      {
        name: "REST APIs",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        name: "JWT Authentication",
        level: "Low–Medium",
        icon: (
          <svg className="h-6 w-6 text-fuchsia-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
        ),
      },
      {
        name: "Zod",
        level: "Low–Medium",
        icon: (
          <svg className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5h18v3.5l-12 10.5h12V22H3v-3.5l12-10.5H3V5z" />
          </svg>
        ),
      },
      {
        name: "Multer",
        level: "Low–Medium",
        icon: (
          <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Databases",
    badge: "Storage & Schemas",
    cardStyle: "border-blue-500/25 bg-[#0d131a]/85 hover:border-blue-500/40",
    badgeStyle: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    items: [
      {
        name: "PostgreSQL",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c2.76 0 5 2.24 5 5 0 2.2-1.43 4.07-3.42 4.73l-.58-.58c-.1-.1-.23-.15-.36-.15H11v-1.5c0-.83-.67-1.5-1.5-1.5H8V9.5C8 7.01 10.01 5 12 5z" />
          </svg>
        ),
      },
      {
        name: "SQL",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <ellipse cx="12" cy="6" rx="8" ry="3" strokeWidth="2" />
            <path strokeWidth="2" d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
            <path strokeWidth="2" d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          </svg>
        ),
      },
      {
        name: "Database Relationships",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Development Tools",
    badge: "Tooling & Environment",
    cardStyle: "border-purple-500/25 bg-[#140e1a]/85 hover:border-purple-500/40",
    badgeStyle: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    items: [
      {
        name: "VS Code",
        level: "High",
        icon: (
          <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 2.5L7 11.5l10.5 9 4.5-2.2V4.7L17.5 2.5zM2 9.5l3.5 2.5L2 14.5v-5z" />
          </svg>
        ),
      },
      {
        name: "Git",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.4 10.6l-6-6a1.98 1.98 0 00-2.8 0L9.4 5.8l2.9 2.9c.7-.2 1.5 0 2 .5.6.6.7 1.5.4 2.2l2.8 2.8c.7-.3 1.6-.2 2.2.4.8.8.8 2.1 0 2.8-.8.8-2.1.8-2.8 0-.6-.6-.7-1.5-.4-2.2l-2.8-2.8v4.6c.3.3.4.7.4 1.1 0 1.1-.9 2-2 2s-2-.9-2-2c0-.4.1-.8.4-1.1V8.5L5.8 13.2c-.8.8-.8 2 0 2.8l6 6c.8.8 2 .8 2.8 0l4.8-4.8c.8-.8.8-2 0-2.8l-2.8-2.8 2.8-2.8c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .9a11.1 11.1 0 00-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.23-5.06-5.49 0-1.21.43-2.2 1.15-2.98-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.06 1.14a10.63 10.63 0 015.57 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.21-5.08 5.48.4.35.75 1.02.75 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0012 .9z" />
          </svg>
        ),
      },
      {
        name: "DBeaver",
        level: "Medium",
        icon: (
          <svg className="h-6 w-6 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4zm0-6.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8c0-.3.2-.5.5-.5s.5.2.5.5v2z" />
          </svg>
        ),
      },
      {
        name: "Antigravity",
        level: "Low",
        icon: (
          <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        name: "GitHub Copilot",
        level: "Low",
        icon: (
          <svg className="h-6 w-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a5 5 0 00-5 5v1H5a3 3 0 00-3 3v4a3 3 0 003 3h1v1a3 3 0 003 3h6a3 3 0 003-3v-1h1a3 3 0 003-3v-4a3 3 0 00-3-3h-2V7a5 5 0 00-5-5zm-2 5a2 2 0 014 0v1h-4V7zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Pending / Verification",
    badge: "Next Milestones",
    cardStyle: "border-zinc-700/50 bg-[#121214]/85 hover:border-zinc-600",
    badgeStyle: "bg-zinc-500/15 text-zinc-300 border-zinc-600/40",
    items: [
      {
        name: "Docker",
        level: "Pending",
        levelLabel: "Not learned / Pending",
        icon: (
          <svg className="h-6 w-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.98 11.08h-2.1v-2.1h2.1v2.1zm-2.88 0H9V8.98h2.1v2.1zm-2.88 0H6.12v-2.1h2.1v2.1zm8.64 0h-2.1v-2.1h2.1v2.1zm-5.76-2.88H9V6.1h2.1v2.1zm2.88 0h-2.1V6.1h2.1v2.1zm2.88 0h-2.1V6.1h2.1v2.1zm-2.88-2.88h-2.1V3.22h2.1v2.1zm11.2 7.74c-.45-.33-1.42-.51-2.4-.33-.14-.72-.6-1.39-1.25-1.78l-.63-.38-.41.61c-.53.79-.65 1.76-.32 2.64-.52.28-1.28.42-2.31.42H2.33c-.46 0-.83.37-.83.83 0 2.92 1.35 5.58 3.51 7.22 1.83 1.39 4.14 2.14 6.54 2.14 8.79 0 13.91-6.19 13.91-11.75 0-.58-.04-1.07-.1-1.38l-.08-.34-.3-.11z" />
          </svg>
        ),
      },
      {
        name: "CI/CD & Deployment",
        level: "Pending",
        levelLabel: "Pending / Needs verification",
        icon: (
          <svg className="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ),
      },
      {
        name: "Automated Testing",
        level: "Pending",
        levelLabel: "Needs verification",
        icon: (
          <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
  },
];

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
        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {category.title}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${category.badgeStyle}`}
                  >
                    {category.badge}
                  </span>
                </div>

                {/* List of Technologies */}
                <div className="space-y-3">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
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
