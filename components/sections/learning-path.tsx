import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";

export function LearningPath() {
  return (
    <section id="learning-path" className="learning-path" aria-labelledby="learning-heading">
      <header className="learning-path__header">
        <EditorialMarker>03 / Learning Path</EditorialMarker>
        <p>The foundation</p>
        <h2 id="learning-heading">Learning Path</h2>
      </header>

      <ol className="education-path" aria-label="Education">
        {portfolio.education.map((entry, index) => (
          <li className={index === portfolio.education.length - 1 ? "is-current" : ""} data-education-entry key={entry.number}>
            <div className="education-path__marker">
              <span>{entry.number}</span>
              <span>{entry.stage}</span>
            </div>
            <h3>{entry.institution}</h3>
            <p>{entry.boardOrYears}</p>
            <p>{entry.detail}</p>
          </li>
        ))}
      </ol>

      <section className="skills-taxonomy" aria-labelledby="skills-heading" data-skills-taxonomy>
        <header>
          <EditorialMarker>Current Focus</EditorialMarker>
          <h3 id="skills-heading">Current Focus</h3>
        </header>
        <div className="skills-taxonomy__groups">
          {portfolio.skills.map((group) => (
            <section data-skill-group key={group.title} aria-labelledby={`skill-${group.title.replaceAll(" ", "-").replaceAll("/", "").toLowerCase()}`}>
              <h4 id={`skill-${group.title.replaceAll(" ", "-").replaceAll("/", "").toLowerCase()}`}>{group.title}</h4>
              <p>{group.items.join(" / ")}</p>
            </section>
          ))}
        </div>
      </section>

      <p className="learning-path__exit" data-learning-exit>04 / Proof of Craft enters next</p>
    </section>
  );
}
