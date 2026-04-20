import Link from "next/link";
import BottomPrompt from "./BottomPrompt";
import TopPrompt from "./TopPrompt";

const HAS_ANALYTICS = Boolean(process.env.NEXT_PUBLIC_GTM_ID);

const BANNER = ` _                                _    _
| | ____ ___   _____ _ __   | | _(_)_ __ ___
| |/ / _\` \\ \\ / / _ \\ '_ \\  | |/ / | '_ \` _ \\
|   < (_| |\\ V /  __/ | | | |   <| | | | | | |
|_|\\_\\__,_| \\_/ \\___|_| |_| |_|\\_\\_|_| |_| |_|`;

type LsItem = {
  href: string;
  k: string;
  d: string;
};

const LS_ITEMS: LsItem[] = [
  { href: "/results", k: "work/", d: "Case studies with real numbers" },
  { href: "/blog", k: "writing/", d: "Dispatches, mostly about AI experiments" },
  { href: "/about", k: "about.md", d: "The short version plus sysinfo" },
  { href: "/contact", k: "contact", d: "Email, LinkedIn, Upwork" },
];

export default function Hero() {
  return (
    <section>
      <div className="boot" aria-label="boot log">
        <span className="line">
          <span className="ok">[ OK ]</span> kavenkim.portfolio v3.0 · build 2026.04.19
        </span>
        <span className="line">
          <span className="ok">[ OK ]</span> loaded 5 case studies, 3 dispatches, 1 shiba
        </span>
        {HAS_ANALYTICS ? (
          <span className="line">
            <span className="ok">[ OK ]</span> analytics: ga4 active
          </span>
        ) : (
          <span className="line">
            <span className="warn">[ -- ]</span> trackers &amp; analytics{" "}
            <span className="err">disabled</span>
          </span>
        )}
        <span className="line">
          <span className="ok">[ OK ]</span> ready.
        </span>
      </div>

      <pre className="ascii-banner" aria-hidden="true">
{BANNER}
      </pre>

      <div className="intro">
        <h1>
          Product, growth, and the <em>building in between</em>.
        </h1>
        <p className="dek">
          I&apos;m <strong>Kav</strong>. Thirteen years across product, paid
          media, and Shopify. Now freelancing: PM work, growth programs, and
          small tools I build end-to-end with Claude Code and n8n.
        </p>
        <div className="badges">
          <span className="badge on">top rated · upwork</span>
          <span className="badge">$8M+ ad spend</span>
          <span className="badge">stack: claude + n8n</span>
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <TopPrompt path="~" cmd="ls" />
      </div>
      <div className="ls">
        {LS_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="item">
            <span className="k">{item.k}</span>
            <span className="d">{item.d}</span>
          </Link>
        ))}
      </div>

      <BottomPrompt path="~" />
    </section>
  );
}
