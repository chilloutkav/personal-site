"use client";

import { useState, type FormEvent } from "react";

interface ContactSectionProps {
  variant?: "compact" | "full";
  id?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactSection({
  variant = "compact",
  id,
}: ContactSectionProps) {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    try {
      const body = new URLSearchParams();
      body.append("form-name", "contact");
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("message", formData.message);

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (response.ok) {
        setState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputClasses =
    "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[14px] text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

  const form = (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="contact-name" className="sr-only">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="How can I help?"
          required
          rows={variant === "full" ? 6 : 4}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent)] px-6 py-3 text-[14px] font-medium tracking-wide text-[var(--text-inverse)] transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {state === "success" && (
        <p role="alert" className="text-center text-[14px] text-green-600">
          Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {state === "error" && (
        <p role="alert" className="text-center text-[14px] text-red-600">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );

  if (variant === "full") {
    return (
      <section id={id} className="mx-auto max-w-[560px] px-6 py-20 md:px-8">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
          Get in Touch
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 mb-8 text-[15px] leading-relaxed text-[var(--muted)]">
          Have a project in mind or want to chat about product, growth, or
          ecommerce? Drop me a line.
        </p>
        {form}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-[var(--border)] pt-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Or reach out directly
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:hi@kavenkim.com"
              className="text-[14px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              hi@kavenkim.com
            </a>
            <a
              href="https://www.linkedin.com/in/kavenkim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20 lg:px-10"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-start md:gap-16">
        {/* Form */}
        <div>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--muted)]">
            Get in Touch
          </p>
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.1] tracking-tight text-[var(--text)]">
            Let&apos;s Work Together
          </h2>
          {form}
        </div>

        {/* Direct contact info */}
        <div className="md:pt-14">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Or reach out directly
          </p>
          <div className="space-y-4">
            <a
              href="mailto:hi@kavenkim.com"
              className="block text-[15px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              hi@kavenkim.com
            </a>
            <a
              href="https://www.linkedin.com/in/kavenkim/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[15px] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn &rarr;
            </a>
          </div>
          <div className="mt-8 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--accent-light)] p-5">
            <p className="text-[14px] leading-relaxed text-[var(--text)]">
              I typically respond within 24 hours. For urgent inquiries, email is
              the fastest way to reach me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
