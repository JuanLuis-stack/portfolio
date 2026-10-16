import { projectTechs } from "./myProjectsData";

function ProjectTechBadges() {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
        Technologies Used
      </p>
      <div className="flex flex-wrap gap-1.5">
        {projectTechs.map((tech) => (
          <span
            key={tech.name}
            className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${tech.color}`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectTechBadges;
