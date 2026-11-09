"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { portfolio } from "@/content/portfolio";
import { ChapterProgress } from "@/components/chrome/chapter-progress";
import { CustomCursor } from "@/components/chrome/custom-cursor";
import { Grain } from "@/components/chrome/grain";
import { SkipLink } from "@/components/chrome/skip-link";
import { OriginStory } from "@/components/sections/origin-story";
import { BuildGallery } from "@/components/sections/build-gallery";
import { LearningPath } from "@/components/sections/learning-path";
import { ProofOfCraft } from "@/components/sections/proof-of-craft";
import { FieldNotes } from "@/components/sections/field-notes";
import { Connect } from "@/components/sections/connect";
import { CertificateViewer } from "@/components/sections/certificate-viewer";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { EditorialMarker } from "@/components/ui/editorial-marker";

gsap.registerPlugin(ScrollTrigger);

export function PortfolioExperience() {
  const experienceRef = useRef<HTMLElement>(null);
  const overviewRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeCertification, setActiveCertification] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const closeProjectModal = useCallback(() => setSelectedProject(null), []);
  const closeCertificateViewer = useCallback(() => setSelectedCertification(null), []);

  useLayoutEffect(() => {
    const experience = experienceRef.current;
    const overview = overviewRef.current;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 900px)").matches;
    const canUseCinematicScroll = !reduceMotion && !window.matchMedia("(max-width: 640px)").matches;
    if (!experience || !overview || !canUseCinematicScroll) return;

    experience.dataset.cinematic = "true";
    experience.dataset.mode = isTablet ? "tablet" : "desktop";

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: overview,
          start: "top top",
          end: isTablet ? "+=2660%" : "+=3500%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      timeline
        .addLabel("chapter:overview", 0)
        .addLabel("chapter:origin", 0.42)
        .to("[data-portrait]", { scale: 1.44, xPercent: 26, yPercent: 8, duration: 1, ease: "none" }, 0)
        .to("[data-portrait] .portrait__image", { scale: 1.08, xPercent: -4, yPercent: 2, duration: 1, ease: "none" }, 0)
        .to("[data-identity]", { autoAlpha: 0.1, xPercent: -10, yPercent: -36, scale: 0.7, duration: 0.62, ease: "none" }, 0)
        .to("[data-overview-copy]", { autoAlpha: 0, y: -24, duration: 0.38, ease: "none" }, 0)
        .to("[data-chapter]:not([data-chapter='about'])", { autoAlpha: 0.2, scale: 0.82, duration: 0.7, ease: "none" }, 0.05)
        .to("[data-chapter='about']", { autoAlpha: 0.14, xPercent: -12, y: -116, scale: 0.84, color: "#78a7cd", duration: 0.72, ease: "none" }, 0.16)
        .to("[data-overview-geometry]", { autoAlpha: 0.2, scale: 1.2, duration: 0.65, ease: "none" }, 0.05)
        .fromTo("[data-origin]", { autoAlpha: 0, x: 52, y: 30, scale: 0.98, clipPath: "inset(0 0 14% 0)" }, { autoAlpha: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 0.62, ease: "none" }, 0.42)
        .to("[data-origin]", { autoAlpha: 1, duration: 0.8, ease: "none" }, 0.98)
        .to("[data-origin]", { autoAlpha: 0, x: -76, y: -14, scale: 0.985, clipPath: "inset(10% 0 0 0)", duration: 0.58, ease: "none" }, 1.78)
        .to("[data-portrait]", { autoAlpha: 0, scale: 1.12, xPercent: -10, yPercent: -4, duration: 0.58, ease: "none" }, 1.78)
        .to("[data-portrait] .portrait__image", { scale: 1.02, xPercent: 0, yPercent: 0, duration: 0.58, ease: "none" }, 1.78)
        .to("[data-identity]", { autoAlpha: 0.22, xPercent: -34, yPercent: -45, scale: 0.58, duration: 0.48, ease: "none" }, 1.78)
        .to("[data-chapter='about']", { autoAlpha: 0.16, scale: 0.76, duration: 0.48, ease: "none" }, 1.78)
        .fromTo("[data-chapter='projects']", { autoAlpha: 0.2, scale: 0.78 }, { autoAlpha: 1, xPercent: -14, yPercent: -10, scale: 1.32, color: "#f5eadb", duration: 0.58, ease: "none" }, 1.86)
        .to("[data-overview-geometry]", { autoAlpha: 0.38, scale: 1, duration: 0.48, ease: "none" }, 1.8)
        .addLabel("chapter:gallery", 2.18)
        .fromTo("[data-gallery]", { opacity: 0, y: 58, scale: 0.985, clipPath: "inset(8% 0 0 0)" }, { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0 0 0)", duration: 0.66, ease: "none" }, 2.18)
        .to("[data-chapter='projects']", { autoAlpha: 0.2, scale: 0.82, duration: 0.42, ease: "none" }, 2.7);

      const projectScenes = gsap.utils.toArray<HTMLElement>("[data-project-scene]");
      const projectStart = 2.76;
      const projectDuration = 2.1;
      const postGalleryOffset = projectStart + projectDuration * projectScenes.length - 9.18;
      const postGalleryTime = (time: number) => time + postGalleryOffset;
      gsap.set(projectScenes, { opacity: 0, y: 52 });

      projectScenes.forEach((scene, index) => {
        const start = projectStart + index * projectDuration;
        const asset = scene.querySelector<HTMLElement>("[data-asset-slot]");
        const detail = scene.querySelector<HTMLElement>("[data-project-detail]");
        const overview = scene.querySelector<HTMLElement>("[data-project-overview]");
        const features = scene.querySelector<HTMLElement>("[data-project-features]");
        const technologies = scene.querySelector<HTMLElement>("[data-project-technologies]");
        const learning = scene.querySelector<HTMLElement>("[data-project-learning]");
        timeline.addLabel(`project:${index}`, start);
        timeline
          .fromTo(scene, { opacity: 0, x: 54, y: 30, scale: 0.985, clipPath: "inset(0 0 12% 0)" }, { opacity: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 0.58, ease: "none" }, start)
          .to(scene, { opacity: 1, duration: 0.94, ease: "none" }, start + 0.58);

        if (asset) timeline.fromTo(asset, { opacity: 0, xPercent: 7, yPercent: 4, scale: 0.96, rotateY: -2 }, { opacity: 1, xPercent: 0, yPercent: 0, scale: 1, rotateY: 0, duration: 0.58, ease: "none" }, start + 0.12);
        if (overview) timeline.fromTo(overview, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.32, ease: "none" }, start + 0.58);
        if (detail) timeline.fromTo(detail, { opacity: 0 }, { opacity: 1, duration: 0.01, ease: "none" }, start + 0.58);
        if (features) timeline.fromTo(features, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.34, ease: "none" }, start + 0.82);
        if (technologies) timeline.fromTo(technologies, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "none" }, start + 1.04);
        if (learning) timeline.fromTo(learning, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "none" }, start + 1.18);

        if (index < projectScenes.length - 1) {
          timeline.to(scene, { opacity: 0, x: -58, y: -14, scale: 0.985, clipPath: "inset(10% 0 0 0)", duration: 0.42, ease: "none" }, start + 1.68);
          if (asset) timeline.to(asset, { opacity: 0, xPercent: -5, yPercent: -3, scale: 0.97, rotateY: 2, duration: 0.34, ease: "none" }, start + 1.68);
          if (detail) timeline.to(detail, { opacity: 0, y: -10, duration: 0.3, ease: "none" }, start + 1.72);
        }
      });

      timeline
        .to("[data-gallery] .build-gallery__header h2", { autoAlpha: 0.26, y: -24, scale: 0.72, transformOrigin: "left top", duration: 0.46, ease: "none" }, projectStart - 0.08)
        .to("[data-gallery]", { opacity: 0.18, x: -66, scale: 0.985, duration: 0.56, ease: "none" }, postGalleryTime(8.72))
        .fromTo("[data-chapter='education']", { autoAlpha: 0.16, scale: 0.82 }, { autoAlpha: 1, xPercent: 12, yPercent: -12, scale: 1.32, color: "#f5eadb", duration: 0.58, ease: "none" }, postGalleryTime(8.86))
        .fromTo("[data-gallery-exit]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.36, ease: "none" }, postGalleryTime(9.02))
        .addLabel("chapter:learning", postGalleryTime(9.18))
        .fromTo("[data-learning]", { opacity: 0, y: 56, scale: 0.985, clipPath: "inset(8% 0 0 0)" }, { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0 0 0)", duration: 0.66, ease: "none" }, postGalleryTime(9.18))
        .to("[data-chapter='education']", { autoAlpha: 0.2, scale: 0.82, duration: 0.46, ease: "none" }, postGalleryTime(9.7));

      const educationEntries = gsap.utils.toArray<HTMLElement>("[data-education-entry]");
      const skillGroups = gsap.utils.toArray<HTMLElement>("[data-skill-group]");
      gsap.set(educationEntries, { opacity: 0, x: 40 });
      gsap.set("[data-skills-taxonomy]", { opacity: 0, y: 44 });
      gsap.set(skillGroups, { opacity: 0, y: 24 });

      educationEntries.forEach((entry, index) => {
        timeline.fromTo(entry, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.45, ease: "none" }, postGalleryTime(9.72 + index * 0.52));
      });

      timeline
        .to("[data-education-entry]:not(.is-current)", { opacity: 0.68, x: -8, duration: 0.45, ease: "none" }, postGalleryTime(11.15))
        .to("[data-education-entry].is-current", { scale: 1.03, transformOrigin: "left center", duration: 0.48, ease: "none" }, postGalleryTime(11.15))
        .addLabel("learning:taxonomy", postGalleryTime(12.18))
        .fromTo("[data-skills-taxonomy]", { opacity: 0, x: 42, y: 28, scale: 0.96 }, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.62, ease: "none" }, postGalleryTime(12.18));

      skillGroups.forEach((group, index) => {
        timeline.fromTo(group, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.26, ease: "none" }, postGalleryTime(12.52 + index * 0.1));
      });

      timeline
        .to("[data-learning]", { opacity: 0.2, x: -66, scale: 0.985, duration: 0.56, ease: "none" }, postGalleryTime(13.68))
        .fromTo("[data-chapter='certifications']", { autoAlpha: 0.16, scale: 0.82 }, { autoAlpha: 1, xPercent: -8, yPercent: -8, scale: 1.32, color: "#f5eadb", duration: 0.58, ease: "none" }, postGalleryTime(13.84))
        .fromTo("[data-learning-exit]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.36, ease: "none" }, postGalleryTime(14.02))
        .addLabel("chapter:proof", postGalleryTime(14.22))
        .fromTo("[data-proof]", { opacity: 0, y: 56, scale: 0.985, clipPath: "inset(8% 0 0 0)" }, { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0 0 0)", duration: 0.66, ease: "none" }, postGalleryTime(14.22))
        .to("[data-chapter='certifications']", { autoAlpha: 0.2, scale: 0.82, duration: 0.46, ease: "none" }, postGalleryTime(14.72));

      const certificationRecords = gsap.utils.toArray<HTMLElement>("[data-certification-record]");
      gsap.set(certificationRecords, { opacity: 0, y: 52 });

      certificationRecords.forEach((record, index) => {
        const start = postGalleryTime(14.8 + index * 1.05);
        const asset = record.querySelector<HTMLElement>("[data-asset-slot]");
        timeline.addLabel(`certification:${index}`, start);
        timeline
          .fromTo(record, { opacity: 0, x: 48, y: 28, scale: 0.985, clipPath: "inset(0 0 12% 0)" }, { opacity: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 0.5, ease: "none" }, start)
          .to(record, { opacity: 1, duration: 0.4, ease: "none" }, start + 0.5);

        if (asset) timeline.fromTo(asset, { opacity: 0, xPercent: 6, yPercent: 3, scale: 0.97, rotateY: -1.5 }, { opacity: 1, xPercent: 0, yPercent: 0, scale: 1, rotateY: 0, duration: 0.52, ease: "none" }, start + 0.08);

        if (index < certificationRecords.length - 1) {
          timeline.to(record, { opacity: 0, x: -56, y: -14, scale: 0.985, clipPath: "inset(10% 0 0 0)", duration: 0.36, ease: "none" }, start + 0.9);
          if (asset) timeline.to(asset, { opacity: 0, xPercent: -4, yPercent: -2, scale: 0.98, rotateY: 1.5, duration: 0.3, ease: "none" }, start + 0.9);
        }
      });

      timeline
        .to("[data-proof]", { opacity: 0.2, x: -66, scale: 0.985, duration: 0.56, ease: "none" }, postGalleryTime(19.72))
        .fromTo("[data-chapter='internship']", { autoAlpha: 0.16, scale: 0.82 }, { autoAlpha: 1, xPercent: 10, yPercent: -8, scale: 1.32, color: "#f5eadb", duration: 0.58, ease: "none" }, postGalleryTime(19.88))
        .fromTo("[data-proof-exit]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.36, ease: "none" }, postGalleryTime(20.04));

      const fieldGroups = gsap.utils.toArray<HTMLElement>("[data-field-group]");
      gsap.set(fieldGroups, { opacity: 0, x: 34 });

      timeline
        .addLabel("chapter:field", postGalleryTime(20.22))
        .set("[data-field]", { pointerEvents: "auto" }, postGalleryTime(20.22))
        .fromTo("[data-field]", { opacity: 0, y: 56, scale: 0.985, clipPath: "inset(8% 0 0 0)" }, { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0 0 0)", duration: 0.66, ease: "none" }, postGalleryTime(20.22))
        .to("[data-chapter='internship']", { autoAlpha: 0.2, scale: 0.82, duration: 0.46, ease: "none" }, postGalleryTime(20.72));

      fieldGroups.forEach((group, index) => {
        const start = postGalleryTime(20.88 + index * 1.15);
        timeline
          .fromTo(group, { opacity: 0, x: 38, y: 12 }, { opacity: 1, x: 0, y: 0, duration: 0.46, ease: "none" }, start)
          .to(group, { opacity: 1, duration: 0.36, ease: "none" }, start + 0.44);

        if (index < fieldGroups.length - 1) {
          timeline.to(group, { opacity: 0, x: -30, y: -8, duration: 0.32, ease: "none" }, start + 0.82);
        }
      });

      timeline
        .to("[data-field]", { opacity: 0.18, x: -66, scale: 0.985, duration: 0.58, ease: "none" }, postGalleryTime(25.72))
        .fromTo("[data-chapter='contact']", { autoAlpha: 0.16, scale: 0.82 }, { autoAlpha: 1, xPercent: -8, yPercent: -10, scale: 1.32, color: "#f5eadb", duration: 0.58, ease: "none" }, postGalleryTime(25.9))
        .fromTo("[data-field-exit]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.36, ease: "none" }, postGalleryTime(26.1))
        .addLabel("chapter:connect", postGalleryTime(26.34))
        .set("[data-field]", { pointerEvents: "none" }, postGalleryTime(26.34))
        .fromTo("[data-connect]", { opacity: 0, y: 58, scale: 0.985, clipPath: "inset(8% 0 0 0)" }, { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0 0% 0)", duration: 0.72, ease: "none" }, postGalleryTime(26.34))
        .to("[data-chapter='contact']", { autoAlpha: 0.2, scale: 0.82, duration: 0.46, ease: "none" }, postGalleryTime(26.86))
        .to("[data-connect]", { opacity: 1, duration: 1.6, ease: "none" }, postGalleryTime(27.02));

      const chapters = ["chapter:overview", "chapter:origin", "chapter:gallery", "chapter:learning", "chapter:proof", "chapter:field", "chapter:connect"];
      let previousChapter = -1;
      let previousProject = -1;
      let previousCertification = -1;

      const lastReachedScene = (labels: readonly string[]) => labels.reduce((active, label, index) => (
        timeline.time() >= timeline.labels[label] ? index : active
      ), 0);

      const syncProgress = () => {
        const nextChapter = lastReachedScene(chapters);
        const nextProject = lastReachedScene(projectScenes.map((_, index) => `project:${index}`));
        const nextCertification = lastReachedScene(certificationRecords.map((_, index) => `certification:${index}`));

        if (nextChapter !== previousChapter) {
          previousChapter = nextChapter;
          setActiveIndex(nextChapter);
        }
        if (nextProject !== previousProject) {
          previousProject = nextProject;
          setActiveProject(nextProject);
        }
        if (nextCertification !== previousCertification) {
          previousCertification = nextCertification;
          setActiveCertification(nextCertification);
        }
      };

      timeline.eventCallback("onUpdate", syncProgress);
      syncProgress();
    }, experience);

    return () => {
      context.revert();
      delete experience.dataset.cinematic;
      delete experience.dataset.mode;
    };
  }, [reduceMotion]);

  return (
    <>
      <SkipLink />
      <Grain />
      <CustomCursor />
      <ChapterProgress activeIndex={activeIndex} />
      <main ref={experienceRef} id="content" className="portfolio-experience" data-active-chapter={activeIndex}>
        <section ref={overviewRef} className="overview" aria-labelledby="portfolio-title">
          <div className="overview__frame" data-overview-geometry aria-hidden="true">
            <span className="overview__corner overview__corner--top" />
            <span className="overview__corner overview__corner--bottom" />
            <span className="overview__axis overview__axis--vertical" />
            <span className="overview__axis overview__axis--horizontal" />
          </div>

          <div className="overview__meta" data-overview-copy>
            <EditorialMarker>01 / 07</EditorialMarker>
            <EditorialMarker>India / 2026</EditorialMarker>
          </div>

          <div className="overview__identity" data-identity>
            <p className="overview__role">{portfolio.identity.role}</p>
            <h1 id="portfolio-title">
              <span>Darsh</span>
              <span>Jaiswal</span>
            </h1>
          </div>

          <div className="portrait" data-portrait>
            <Image
              className="portrait__image"
              src="/images/darsh.png"
              alt="Darsh Jaiswal"
              fill
              priority
              sizes="(max-width: 640px) 58vw, (max-width: 900px) 42vw, 33vw"
            />
            <span className="portrait__label">Darsh Jaiswal / Portrait</span>
          </div>

          <div className="overview__statement" data-overview-copy>
            <p className="overview__headline">{portfolio.identity.headline}</p>
            <p className="overview__introduction">{portfolio.identity.introduction}</p>
          </div>

          <nav className="chapter-map" aria-label="Portfolio chapters">
            {portfolio.chapters.map((chapter) => {
              const className = `chapter-map__item chapter-map__item--${chapter.id}`;
              const label = <><span>{chapter.index}</span><strong>{chapter.label}</strong></>;

              const destinations: Record<string, string> = {
                about: "#origin-story", projects: "#build-gallery", education: "#learning-path", certifications: "#proof-of-craft", internship: "#field-notes", contact: "#connect",
              };

              return destinations[chapter.id] ? (
                <a className={className} data-chapter={chapter.id} href={destinations[chapter.id]} key={chapter.id}>
                  {label}
                </a>
              ) : (
                <span className={className} data-chapter={chapter.id} key={chapter.id} aria-label={`${chapter.label} - coming in a later phase`}>
                  {label}
                </span>
              );
            })}
          </nav>

          <div className="overview__footer" data-overview-copy>
            <EditorialMarker>Scroll to enter</EditorialMarker>
            <EditorialMarker>Axis / 01</EditorialMarker>
          </div>

          <div className="origin-wrap" data-origin>
            <OriginStory />
          </div>

          <div className="gallery-wrap" data-gallery>
            <BuildGallery activeProject={activeProject} onOpenProject={setSelectedProject} />
          </div>

          <div className="learning-wrap" data-learning>
            <LearningPath />
          </div>

          <div className="proof-wrap" data-proof>
            <ProofOfCraft activeCertification={activeCertification} onOpenCertificate={setSelectedCertification} />
          </div>

          <div className="field-wrap" data-field>
            <FieldNotes />
          </div>

          <div className="connect-wrap" data-connect>
            <Connect />
          </div>
        </section>

      </main>
      {selectedProject !== null ? <ProjectDetailModal project={portfolio.projects[selectedProject]} onClose={closeProjectModal} /> : null}
      {selectedCertification !== null ? <CertificateViewer certification={portfolio.certifications[selectedCertification]} onClose={closeCertificateViewer} /> : null}
    </>
  );
}
