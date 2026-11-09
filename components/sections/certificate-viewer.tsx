import Image from "next/image";
import { EditorialDialog } from "@/components/ui/editorial-dialog";
import type { Certification } from "@/content/portfolio";

type CertificateViewerProps = {
  certification: Certification;
  onClose: () => void;
};

export function CertificateViewer({ certification, onClose }: CertificateViewerProps) {
  const titleId = `certificate-dialog-${certification.id}`;

  return (
    <EditorialDialog labelledBy={titleId} onClose={onClose}>
      <article className="certificate-dialog">
        <header>
          <p>{certification.number} / 05</p>
          <p>{certification.issuer}</p>
        </header>
        <h2 id={titleId}>{certification.title}</h2>
        <div className="certificate-dialog__image">
          <Image alt={`${certification.title} certificate`} className="certificate-dialog__image-image" fill priority sizes="(max-width: 640px) 92vw, 82vw" src={certification.image} />
        </div>
      </article>
    </EditorialDialog>
  );
}
