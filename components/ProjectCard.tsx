import Link from "next/link";
import { ProjectData } from "../lib/projects";

interface ProjectCardProps {
  project: ProjectData;
  maxTechStack?: number;
}

export default function ProjectCard({
  project,
  maxTechStack = 5
}: ProjectCardProps) {
  return (
    <div className="site-project-card">
      <div className="site-project-card-image">
        {project.previewImage ? (
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">Preview Coming Soon</span>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h2 className="text-xl font-bold text-gray-800">
            {project.title}
          </h2>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="site-project-tech-stack mb-4">
          {project.techStack.slice(0, maxTechStack).map((tech) => (
            <span key={tech} className="site-project-tech-tag">
              {tech}
            </span>
          ))}
          {project.techStack.length > maxTechStack && (
            <span className="site-project-tech-tag">
              +{project.techStack.length - maxTechStack} more
            </span>
          )}
        </div>

        <div className="site-project-card-actions">
          <Link
            href={`/projects/${project.id}`}
            className="site-project-button-primary"
          >
            View Project
          </Link>
          {project.demoUrl && (
            <Link
              href={`/projects/${project.id}/demo`}
              className="site-project-button-secondary"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
