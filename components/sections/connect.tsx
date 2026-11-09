"use client";

import { useState } from "react";
import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";

export function Connect() {
  const { contact } = portfolio;
  const [emailLocalPart, emailDomain] = contact.email.split("@");
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy failed. Select and copy the email address.");
    }
  }

  return (
    <section className="connect" id="connect" aria-labelledby="connect-heading">
      <header className="connect__header">
        <EditorialMarker>06 / Connect</EditorialMarker>
        <p>Direct line / open correspondence</p>
      </header>

      <h2 id="connect-heading">{contact.statement}</h2>

      <div className="connect__details">
        <div className="connect__email-actions">
          <span className="connect__email-link">
            <a
              className="connect__email"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {emailLocalPart}<wbr />@{emailDomain}
            </a>
          </span>
          <button className="connect__copy-email" type="button" onClick={copyEmail}>
            Copy email
          </button>
          <span className="connect__copy-status" role="status" aria-live="polite">
            {copyStatus}
          </span>
        </div>
        <ul aria-label="Contact links">
          {contact.links.map((link) => {
            const isExternal = link.href.startsWith("http");
            const accessibleLabel = isExternal
              ? `${link.label} profile (opens in a new tab)`
              : `Call ${link.display}`;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={accessibleLabel}
                >
                  <span>{link.label}</span>{link.display}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
