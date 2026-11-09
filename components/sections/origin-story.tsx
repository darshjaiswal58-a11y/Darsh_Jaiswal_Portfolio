import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";

export function OriginStory() {
  return (
    <section id="origin-story" className="origin-story" aria-labelledby="origin-heading">
      <header className="origin-story__topline">
        <EditorialMarker>01 / Origin Story</EditorialMarker>
        <EditorialMarker>CSE Student / AI, Web and Creative Tech</EditorialMarker>
      </header>
      <div className="origin-story__title">
        <span>Personal archive</span>
        <h2 id="origin-heading">{portfolio.about.title}</h2>
      </div>
      <div className="origin-story__copy" aria-label="About Darsh Jaiswal">
        {portfolio.about.paragraphs.map((paragraph, index) => (
          <p key={paragraph}>
            <span aria-hidden="true">0{index + 1}</span>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="origin-story__rule" aria-hidden="true" />
    </section>
  );
}
