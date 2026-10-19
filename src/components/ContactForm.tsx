"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({
  subjectDefault = "Website inquiry",
}: {
  subjectDefault?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "").trim()) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject") || subjectDefault,
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p className="form-success">Thank you. Your message has been sent.</p>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Subject
        <input name="subject" defaultValue={subjectDefault} required />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} required />
      </label>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hp"
        aria-hidden="true"
      />
      <button
        type="submit"
        className="btn submit-btn"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
      {status === "error" ? (
        <p className="form-error">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
