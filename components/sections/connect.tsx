import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";

export function Connect() {
  const { contact } = portfolio;

  return (
    <section className="connect" id="connect" aria-labelledby="connect-heading">
      <header className="connect__header">
        <EditorialMarker>06 / Connect</EditorialMarker>
        <p>Direct line / open correspondence</p>
      </header>

      <h2 id="connect-heading">{contact.statement}</h2>

      <div className="connect__details">
        <a className="connect__email" href={`mailto:${contact.email}`}>{contact.email}</a>
        <ul aria-label="Contact links">
          {contact.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                <span>{link.label}</span>{link.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
