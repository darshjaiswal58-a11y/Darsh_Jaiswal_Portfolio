"use client";

import { type MouseEvent } from "react";
import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";
import { AssetSlot } from "@/components/ui/asset-slot";

type BuildGalleryProps = {
  activeProject: number;
  onOpenProject: (index: number) => void;
};

export function BuildGallery({ activeProject, onOpenProject }: BuildGalleryProps) {
  const openProject = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onOpenProject(index);
  };

  return (
    <section id="build-gallery" className="build-gallery" aria-labelledby="gallery-heading">
      <header className="build-gallery__header">
        <EditorialMarker>02 / Build Gallery</EditorialMarker>
        <p>Project index / 06 studies</p>
        <h2 id="gallery-heading">Build Gallery</h2>
      </header>

      <nav className="project-index" aria-label="Project index">
        <ol>
          {portfolio.projects.map((project, index) => (
            <li key={project.id} className={index === activeProject ? "is-active" : ""}>
              <button type="button" onClick={openProject(index)} onPointerDown={(event) => event.stopPropagation()} aria-current={index === activeProject ? "true" : undefined}>
                <span>{project.number}</span>
                <span>{project.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="project-stage">
        {portfolio.projects.map((project, index) => {
          return (
            <article
              id={`project-${project.id}`}
              className={`project-scene${index === activeProject ? " is-active" : ""}`}
              data-project-scene
              key={project.id}
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className="project-scene__meta">
                <EditorialMarker>{project.number} / 06</EditorialMarker>
                <EditorialMarker>{project.category}</EditorialMarker>
              </div>
              <button className="project-scene__image-button" type="button" onClick={openProject(index)} onPointerDown={(event) => event.stopPropagation()} aria-label={`View ${project.title}`}>
                <AssetSlot
                  alt={`${project.title} project interface`}
                  className="project-scene__asset"
                  fallback="Project visual pending"
                  sizes="(max-width: 640px) 88vw, 34vw"
                  src={project.image}
                />
              </button>
              <div className="project-scene__number" aria-hidden="true">{project.number}</div>
              <button className="project-scene__title" type="button" onClick={openProject(index)} onPointerDown={(event) => event.stopPropagation()}>
                <h3 id={`project-title-${project.id}`}>{project.title}</h3>
              </button>
              <p className="project-scene__description">{project.description}</p>
              <p className="project-scene__stack">{project.category} / {project.technologies.join(" / ")}</p>
              <div className="project-scene__detail">
                <p className="project-scene__overview">{project.overview}</p>
                <div className="project-scene__features">
                  <span>Key features</span>
                  <ul>
                    {project.keyFeatures.slice(0, 3).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-scene__technologies">
                  <span>Technology</span>
                  <p>{project.technologies.join(" / ")}</p>
                </div>
              </div>
              <button className="project-scene__view" type="button" onClick={openProject(index)} onPointerDown={(event) => event.stopPropagation()}>View project <span aria-hidden="true">→</span></button>
              <div className={`project-scene__geometry project-scene__geometry--${index + 1}`} aria-hidden="true" />
            </article>
          );
        })}
      </div>
      <p className="build-gallery__exit" data-gallery-exit>03 / Learning Path enters next</p>
    </section>
  );
}
