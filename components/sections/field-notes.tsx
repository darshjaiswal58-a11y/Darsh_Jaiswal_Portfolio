import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";
import { AssetSlot } from "@/components/ui/asset-slot";

export function FieldNotes() {
  const { internship } = portfolio;

  return (
    <section className="field-notes" id="field-notes" aria-labelledby="field-notes-heading">
      <header className="field-notes__header">
        <EditorialMarker>05 / Field Notes</EditorialMarker>
        <p>{internship.company} / {internship.department} / {internship.location}</p>
        <h2 id="field-notes-heading">Field Notes</h2>
      </header>

      <AssetSlot
        alt="Tata Motors internship project visual"
        className="field-notes__asset"
        fallback="Approved field visual pending"
        sizes="(max-width: 640px) 70vw, 24vw"
      />

      <div className="field-notes__report" data-field-report>
        <aside className="field-notes__identity" aria-label="Internship details">
          <p>{internship.company}</p>
          <p>{internship.department}</p>
          <p>{internship.location}</p>
          <p>{internship.period}</p>
          <p>{internship.role}</p>
        </aside>

        <div className="field-notes__findings">
          {internship.reportGroups.map((group, index) => {
            const sectionTitles = ["The Problem", "The System", "The Result"];
            return (
              <section data-field-group key={group.title}>
                <p>{sectionTitles[index] ?? group.title}</p>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <p className="field-notes__exit" data-field-exit>06 / Connect enters next</p>
    </section>
  );
}
