import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BottomPrompt from "@/components/BottomPrompt";
import AsciiDivider from "@/components/AsciiDivider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kav is a product builder using AI. Thirteen years across product, paid media, and Shopify. Builds with Claude Code and n8n.",
};

const BARRY = `          \u3000\u2227\uFF3F\u2227\u3000\u3000\u3000   barry, shiba inu
          \uFF08\u30FB\u03C9\u30FB\uFF09\u3000\u3000   senior advisor
          \uFF0F\u3000\u3000\u3065\u3000\u3000\u3000   6 loops of the block, min
          \u3000\u3057\u30FC\uFF2A\u3000\u3000\u3000   negotiates every one`;

export default function AboutPage() {
  return (
    <section>
      <PageHeader path="~" cmd="cat about.md" title="The short version" />

      <div className="about-body">
        <p>
          I started in affiliate marketing in <em>2013</em>, the kind where you
          ran Facebook audiences against whatever offer paid out that week. From
          there: agency PPC at Taktical, Abstract, and THOMASNET. Growth
          Director at a small shop. Then six years independent on Upwork,
          running budgets from $1K to $100K/mo.
        </p>
        <p>
          The last stretch, I&apos;ve been doing product work and quietly
          building my own things. Mostly with AI in the loop. I&apos;m a{" "}
          <span className="hl">product builder using AI</span>. Not a prompt
          engineer. Not a guru. Someone who can take an idea, wire up the
          plumbing, and have a working thing by Friday.
        </p>
        <p>
          I went to Flatiron for software engineering. I&apos;m not a software
          engineer. But I can read the PR, and, more usefully, I know when an
          estimate is nonsense.
        </p>
      </div>

      <AsciiDivider />
      <h2 className="sh">Sysinfo</h2>
      <p className="sh-sub">The facts, in tabular form.</p>

      <div className="sysinfo">
        <span className="k">experience</span>
        <span className="v">13 years · product, paid media, ecommerce</span>
        <span className="k">education</span>
        <span className="v">flatiron school · software engineering</span>
        <span className="k">reading</span>
        <span className="v">
          &ldquo;wind and truth&rdquo; by brandon sanderson
        </span>
        <span className="k">companion</span>
        <span className="v">
          barry, shiba inu · senior advisor · 6 loops min
        </span>
      </div>

      <pre
        style={{
          fontFamily: "var(--font-mono)",
          whiteSpace: "pre",
          color: "var(--dim)",
          fontSize: 11,
          marginTop: 20,
          lineHeight: 1.15,
        }}
        aria-hidden="true"
      >
{BARRY}
      </pre>

      <BottomPrompt path="~/about" />
    </section>
  );
}
