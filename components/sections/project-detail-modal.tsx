import Image from "next/image";
import { EditorialDialog } from "@/components/ui/editorial-dialog";
import type { Project } from "@/content/portfolio";

type ProjectDetailModalProps = {
  onClose: () => void;
  project: Project;
};

export function ProjectDetailModal({ onClose, project }: ProjectDetailModalProps) {
  const titleId = `project-dialog-${project.id}`;

  return (
    <EditorialDialog labelledBy={titleId} onClose={onClose}>
      <article className="project-dialog">
        <header className="project-dialog__header">
          <p>{project.number} / 06</p>
          <p>{project.category}</p>
        </header>
        <div className="project-dialog__image">
          <Image alt={`${project.title} project interface`} fill priority sizes="(max-width: 640px) 92vw, 70vw" src={project.image} />
        </div>
        <h2 id={titleId}>{project.title}</h2>
        <p className="project-dialog__description">{project.description}</p>
        <p className="project-dialog__overview">{project.overview}</p>
        <section className="project-dialog__features" aria-labelledby={`${titleId}-features`}>
          <h3 id={`${titleId}-features`}>Key features</h3>
          <ul>
            {project.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </section>
        <section className="project-dialog__stack" aria-labelledby={`${titleId}-stack`}>
          <h3 id={`${titleId}-stack`}>Technology / stack</h3>
          <p>{project.technologies.join(" / ")}</p>
        </section>
        {project.learningOrImpact ? (
          <section className="project-dialog__insight" aria-labelledby={`${titleId}-insight`}>
            <h3 id={`${titleId}-insight`}>What I learned</h3>
            <p>{project.learningOrImpact}</p>
          </section>
        ) : null}
        {project.githubUrl ? (
          <a className="project-dialog__github" href={project.githubUrl} rel="noreferrer" target="_blank">GitHub</a>
        ) : (
          <span className="project-dialog__github project-dialog__github--unavailable" aria-label="GitHub link unavailable">GitHub unavailable</span>
        )}
      </article>
    </EditorialDialog>
  );
}
