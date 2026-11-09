import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";
import { AssetSlot } from "@/components/ui/asset-slot";

const workflowStages = [
  "Excel upload",
  "Data validation",
  "Criteria engine",
  "Stock classification",
  "Inventory intelligence dashboard",
] as const;

const engineeringLearnings = [
  "Processing large Excel datasets.",
  "Data validation and workflow automation.",
  "Translating operational rules into application logic.",
  "Building interactive dashboards for classification and monitoring.",
  "Designing practical tools for real business workflows.",
] as const;

const caseStudyTechnologies = ["Python", "Flask", "Pandas", "OpenPyXL", "HTML", "CSS", "JavaScript"] as const;

export function FieldNotes() {
  const { internship } = portfolio;
  const project = portfolio.projects.find(({ id }) => id === "tata-motors-inventory-intelligence");

  if (!project) {
    throw new Error("Tata Motors inventory project is missing from portfolio data.");
  }

  const technologies = caseStudyTechnologies.filter((technology) => project.technologies.includes(technology));

  return (
    <section className="field-notes" id="field-notes" aria-labelledby="field-notes-heading">
      <header className="field-notes__header">
        <EditorialMarker>05 / Field Notes</EditorialMarker>
        <p>Engineering case study / {internship.period}</p>
        <h2 id="field-notes-heading">Field Notes</h2>
      </header>

      <article className="field-notes__case-study" aria-labelledby="field-notes-project-title">
        <header className="field-notes__case-study-heading">
          <div className="field-notes__identity" aria-label="Internship details">
            <p className="field-notes__company">{internship.company}</p>
            <p>{internship.department}</p>
            <p>{internship.location}</p>
            <p>{internship.period} / {internship.role}</p>
          </div>
          <h3 id="field-notes-project-title">
            <span>AI-Based Inventory Criteria Checker</span>
            <span>&amp; Inventory Intelligence Dashboard</span>
          </h3>
        </header>

        <div className="field-notes__case-study-body">
          <figure className="field-notes__visual">
            <AssetSlot
              alt={`${project.title} project visual`}
              className="field-notes__asset"
              fallback="Inventory project visual unavailable"
              sizes="(max-width: 640px) 92vw, (max-width: 1100px) 42vw, 36vw"
              src={project.image}
            />
            <figcaption>
              Machinery Spare / Tools / Plant 3003 / Plant 3005
              <span>More than 7,500 material codes</span>
            </figcaption>
          </figure>

          <div className="field-notes__content">
            <section className="field-notes__finding" data-field-group>
              <p className="field-notes__label">A / The Problem</p>
              <p className="field-notes__description">
                Inventory monitoring involved large Excel datasets and repetitive manual workflows. The goal was to simplify analysis and make stock eligibility and status easier to identify.
              </p>
            </section>

            <section className="field-notes__finding" data-field-group>
              <p className="field-notes__label">B / The Approach</p>
              <p className="field-notes__description">
                Built an automated workflow that accepts Excel files, validates data and applies configurable inventory criteria before presenting the results.
              </p>
            </section>

            <section className="field-notes__finding" data-field-group>
              <p className="field-notes__label">C / The System</p>
              <ol className="field-notes__workflow" aria-label="Inventory processing workflow">
                {workflowStages.map((stage, index) => (
                  <li key={stage}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{stage}</strong>
                  </li>
                ))}
              </ol>
              <p className="field-notes__system-note">
                Validation and duplicate checks feed configurable stock criteria, classification, filters and downloadable reports.
              </p>
            </section>

            <section className="field-notes__finding" data-field-group>
              <p className="field-notes__label">D / Engineering Learnings</p>
              <ul className="field-notes__learnings">
                {engineeringLearnings.map((learning) => <li key={learning}>{learning}</li>)}
              </ul>
            </section>

            <div className="field-notes__technologies" aria-label="Project technologies">
              <p>Technology / 07</p>
              <ul>
                {technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <p className="field-notes__exit" data-field-exit>06 / Connect enters next</p>
    </section>
  );
}
