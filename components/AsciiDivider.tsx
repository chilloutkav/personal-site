export default function AsciiDivider({ title }: { title?: string }) {
  return (
    <div className="ascii-divider" aria-hidden="true">
      {title ? <span className="title">{title}</span> : null}
    </div>
  );
}
