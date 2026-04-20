import AsciiDivider from "./AsciiDivider";
import TopPrompt from "./TopPrompt";

type Props = {
  path?: string;
  cmd: string;
  title: string;
  subtitle?: string;
  /** Render a dashed divider between the prompt and the heading. */
  divider?: boolean;
};

export default function PageHeader({
  path = "~",
  cmd,
  title,
  subtitle,
  divider = false,
}: Props) {
  return (
    <>
      <TopPrompt path={path} cmd={cmd} />
      {divider ? <AsciiDivider /> : null}
      <h2 className="sh">{title}</h2>
      {subtitle ? <p className="sh-sub">{subtitle}</p> : null}
    </>
  );
}
