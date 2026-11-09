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
        <span>About / Who I Am · Personal Archive</span>
        <h2 id="origin-heading">{portfolio.about.title}</h2>
      </div>
      <div className="origin-story__copy" aria-label="About Darsh Jaiswal">
        <section className="origin-story__note">
          <p className="origin-story__label">01 / Education</p>
          <p>{portfolio.about.education}</p>
        </section>
        <section className="origin-story__note">
          <p className="origin-story__label">02 / Technical interests</p>
          <p>{portfolio.about.technicalInterests.join(" / ")}</p>
        </section>
        <section className="origin-story__note">
          <p className="origin-story__label">03 / How I build</p>
          <p>{portfolio.about.approach}</p>
        </section>
        <section className="origin-story__note">
          <p className="origin-story__label">04 / Beyond technology</p>
          <p>{portfolio.about.outsideTechnology}</p>
        </section>
      </div>
      <div className="origin-story__rule" aria-hidden="true" />
    </section>
  );
}
