type EditorialMarkerProps = {
  children: React.ReactNode;
  className?: string;
};

export function EditorialMarker({ children, className = "" }: EditorialMarkerProps) {
  return <span className={`editorial-marker ${className}`}>{children}</span>;
}
