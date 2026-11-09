"use client";

import { type MouseEvent } from "react";
import { portfolio } from "@/content/portfolio";
import { EditorialMarker } from "@/components/ui/editorial-marker";
import { AssetSlot } from "@/components/ui/asset-slot";

type ProofOfCraftProps = {
  activeCertification: number;
  onOpenCertificate: (index: number) => void;
};

export function ProofOfCraft({ activeCertification, onOpenCertificate }: ProofOfCraftProps) {
  const openCertificate = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onOpenCertificate(index);
  };

  return (
    <section id="proof-of-craft" className="proof-of-craft" aria-labelledby="proof-heading">
      <header className="proof-of-craft__header">
        <EditorialMarker>04 / Proof of Craft</EditorialMarker>
        <p>Evidence archive / 05 records</p>
        <h2 id="proof-heading">Proof of Craft</h2>
      </header>

      <nav className="certification-index" aria-label="Certification index">
        <ol>
          {portfolio.certifications.map((certification, index) => (
            <li key={certification.id} className={index === activeCertification ? "is-active" : ""}>
              <button type="button" onClick={openCertificate(index)} onPointerDown={(event) => event.stopPropagation()} aria-current={index === activeCertification ? "true" : undefined}>
                <span>{certification.number}</span>
                <span>{certification.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="certification-stage">
        {portfolio.certifications.map((certification, index) => {
          return (
            <article id={`certification-${certification.id}`} className="certification-record" data-certification-record key={certification.id} aria-label={`${certification.title} certificate record`}>
              <div className="certification-record__meta">
                <EditorialMarker>{certification.number} / 05</EditorialMarker>
                <EditorialMarker>Evidence record</EditorialMarker>
              </div>
              <div className="certification-record__number" aria-hidden="true">{certification.number}</div>
              <button className="certification-record__image-button" type="button" onClick={openCertificate(index)} onPointerDown={(event) => event.stopPropagation()} aria-label={`View ${certification.title} certificate`}>
                <AssetSlot alt={`${certification.title} certificate`} className="certification-record__asset" fallback="Certificate image pending" sizes="(max-width: 640px) 88vw, 50vw" src={certification.image} />
              </button>
              <p>{certification.issuer}</p>
              <button className="certification-record__view" type="button" onClick={openCertificate(index)} onPointerDown={(event) => event.stopPropagation()}>View certificate <span aria-hidden="true">→</span></button>
              <div className={`certification-record__geometry certification-record__geometry--${index + 1}`} aria-hidden="true" />
            </article>
          );
        })}
      </div>
      <p className="proof-of-craft__exit" data-proof-exit>05 / Field Notes enters next</p>
    </section>
  );
}
