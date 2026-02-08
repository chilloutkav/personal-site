export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col items-center justify-center px-6 py-20 text-center md:px-8">
      <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
        Coming Soon
      </p>
      <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--text)]">
        {/* TODO: Review and finalize copy */}
        Homepage in progress.
      </h1>
      <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-[var(--muted)]">
        {/* TODO: Review and finalize copy */}
        The full site is being rebuilt with a new design system. Check back shortly.
      </p>
    </section>
  );
}
