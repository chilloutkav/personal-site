"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
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
        signal: AbortSignal.timeout(15000),
      });

      if (response.ok) {
        setState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error(
          `Contact form error: ${response.status} ${response.statusText}`
        );
        setState("error");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "TimeoutError") {
        console.error("Contact form submission timed out");
      } else {
        console.error("Contact form submission failed:", error);
      }
      setState("error");
    }
  }

  return (
    <form
      className="form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: "none" }}>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="contact-name">your_name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="who are you?"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div>
        <label htmlFor="contact-email">your_email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="you@domain.com"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div>
        <label htmlFor="contact-message">message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="what's on your mind? timeline, budget range, what you've already tried. anything helps."
          required
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
      </div>

      <button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "sending..." : "send \u2192"}
      </button>

      {state === "success" ? (
        <p role="alert" className="status-msg">
          {"\u2713 sent. cheers."}
        </p>
      ) : null}
      {state === "error" ? (
        <p role="alert" className="status-msg err">
          something broke. try email instead: hi@kavenkim.com
        </p>
      ) : null}
    </form>
  );
}
