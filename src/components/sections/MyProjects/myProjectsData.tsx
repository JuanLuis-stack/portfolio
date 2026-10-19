export const projectTechs = [
  { name: "React", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10" },
  {
    name: "TypeScript",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
  {
    name: "Tailwind CSS",
    color: "text-sky-400 border-sky-500/20 bg-sky-500/10",
  },
  {
    name: "Node.js",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    name: "Express.js",
    color: "text-zinc-300 border-zinc-500/20 bg-zinc-500/10",
  },
  {
    name: "PostgreSQL",
    color: "text-blue-300 border-blue-500/20 bg-blue-500/10",
  },
  {
    name: "Git",
    color: "text-orange-400 border-orange-500/20 bg-orange-500/10",
  },
  { name: "GitHub", color: "text-white border-white/20 bg-white/10" },
];

export const technicalBreakdown = [
  {
    category: "Frontend",
    tag: "Client Layer",
    accent: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
    icon: (
      <svg
        className="h-5 w-5 text-cyan-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <ellipse cx="12" cy="12" rx="3.5" ry="3.5" />
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
      </svg>
    ),
    description:
      "Built a component-based user interface with React and TypeScript, using reusable components, React hooks, Context API for shared state, and responsive styling with Tailwind CSS.",
  },
  {
    category: "Backend",
    tag: "Server & API",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
    icon: (
      <svg
        className="h-5 w-5 text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    description:
      "Developed a backend with Node.js and Express.js to handle API requests and application logic, connecting the frontend with the database.",
  },
  {
    category: "Database",
    tag: "Data Layer",
    accent: "text-sky-400 border-sky-500/30 bg-sky-950/20",
    icon: (
      <svg
        className="h-5 w-5 text-sky-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <ellipse cx="12" cy="6" rx="8" ry="3" strokeWidth="2" />
        <path strokeWidth="2" d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path strokeWidth="2" d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
    description:
      "Used PostgreSQL to store and manage application data, implementing relational structures and SQL queries to support user profiles, posts, and follow relationships.",
  },
];
