export default function TopPrompt({
  path = "~",
  cmd,
}: {
  path?: string;
  cmd: string;
}) {
  return (
    <div className="prompt">
      <span className="p">kav@kim</span>
      <span>:</span>
      <span className="path">{path}</span>
      <span>$</span>
      <span className="cmd">{cmd}</span>
    </div>
  );
}
