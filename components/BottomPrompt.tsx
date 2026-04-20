export default function BottomPrompt({ path = "~" }: { path?: string }) {
  return (
    <div className="bottom-prompt">
      <span className="p">kav@kim</span>
      <span>:</span>
      <span className="path">{path}</span>
      <span>$</span>
      <span className="c" aria-hidden="true" />
      <span className="hint">
        use <kbd>&larr;</kbd> <kbd>&rarr;</kbd> to move between tabs
      </span>
    </div>
  );
}
