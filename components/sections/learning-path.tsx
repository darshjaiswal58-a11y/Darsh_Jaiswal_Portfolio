import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";

const technologyAliases: Record<string, readonly string[]> = {
  HTML: ["HTML5"],
  CSS: ["CSS3"],
  JavaScript: ["Vanilla JavaScript"],
};

function projectUsesSkill(technologies: readonly string[], skill: string) {
  const knownAliases = technologyAliases[skill] ?? [];
  return technologies.some((technology) => (
    technology.toLowerCase() === skill.toLowerCase()
    || knownAliases.some((alias) => technology.toLowerCase() === alias.toLowerCase())
  ));
}

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
            <div className="education-path__study">
              <h3>{entry.institution}</h3>
              <p>{entry.detail}</p>
            </div>
            <p className="education-path__meta">{entry.boardOrYears}</p>
          </li>
        ))}
      </ol>

      <section className="skills-taxonomy" aria-labelledby="skills-heading" data-skills-taxonomy>
        <header>
          <EditorialMarker>Technical Index / 07 Fields</EditorialMarker>
          <h3 id="skills-heading">Skills</h3>
          <p>Technologies / project practice</p>
        </header>
        <div className="technical-index">
          {portfolio.skills.map((group) => (
            <section className="technical-index__group" data-skill-group key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              {portfolio.projects.some((project) => group.items.some((skill) => (
                projectUsesSkill(project.technologies, skill)
              ))) && (
                <ul className="technical-index__projects" aria-label={`${group.title} project use`}>
                  {portfolio.projects.map((project) => {
                    const usedSkills = group.items.filter((skill) => (
                      projectUsesSkill(project.technologies, skill)
                    ));

                    return usedSkills.length > 0 ? (
                      <li key={project.id}>
                        <span>{project.title}</span>
                        <span>{usedSkills.join(" / ")}</span>
                      </li>
                    ) : null;
                  })}
                </ul>
              )}
            </section>
          ))}
        </div>
      </section>

      <p className="learning-path__exit" data-learning-exit>04 / Proof of Craft enters next</p>
    </section>
  );
}
