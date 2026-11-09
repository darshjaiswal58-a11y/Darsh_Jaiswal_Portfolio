"use client";

import type { Project } from "@/content/portfolio";

type ProjectActionsProps = {
  project: Project;
  className?: string;
};

export function ProjectActions({ project, className = "" }: ProjectActionsProps) {
  const actions = [
    project.githubUrl
      ? { href: project.githubUrl, label: "GitHub repository", display: "GitHub repository" }
      : null,
    project.workspaceUrl
      ? { href: project.workspaceUrl, label: "Project workspace", display: "Project workspace" }
      : null,
    project.liveDemoUrl
      ? { href: project.liveDemoUrl, label: "Live demo", display: "Live demo" }
      : null,
  ].filter((action) => action !== null);

  if (actions.length === 0) return null;

  return (
    <nav aria-label={`${project.title} links`} className={className}>
      {actions.map((action) => (
        <a
          aria-label={`${action.label} for ${project.title} (opens in a new tab)`}
          href={action.href}
          key={action.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {action.display} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
}
