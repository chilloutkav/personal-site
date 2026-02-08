import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col items-center justify-center px-6 py-20 text-center md:px-8">
      <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
        Coming Soon
      </p>
      <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
        {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-[var(--muted)]">
        {/* TODO: Review and finalize copy */}
        Blog post infrastructure coming in a future session.
      </p>
    </section>
  );
}
