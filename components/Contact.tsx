"use client";

import { useState } from "react";
import { profile, references } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-base px-6 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <span className="panel-label">get in touch</span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3 mb-6">
            Let&apos;s build something reliable.
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-md">
            {profile.availability} and open to full-stack, backend, or tech-lead roles.
            Reach out directly or send a message.
          </p>

          <dl className="space-y-3 font-mono text-sm mb-10">
            <div className="flex gap-3">
              <dt className="text-muted w-20 shrink-0">location</dt>
              <dd className="text-ink">{profile.location}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted w-20 shrink-0">phone</dt>
              <dd className="text-ink">{profile.phone}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted w-20 shrink-0">email</dt>
              <dd className="text-cyan">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted w-20 shrink-0">linkedin</dt>
              <dd className="text-cyan">
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              </dd>
            </div>
          </dl>

          <span className="panel-label">references</span>
          <div className="mt-3 grid sm:grid-cols-2 gap-4">
            {references.map((r) => (
              <div key={r.name} className="border border-border p-4 text-sm">
                <p className="text-ink">{r.name}</p>
                <p className="text-muted text-xs mt-1">{r.role}</p>
                <p className="text-muted text-xs mt-1">{r.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border border-border bg-surface p-6 sm:p-8 h-fit">
          <div className="mb-5">
            <label htmlFor="name" className="panel-label block mb-2">
              name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-base border border-border px-3 py-2.5 text-ink text-sm focus:border-cyan outline-none"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="panel-label block mb-2">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-base border border-border px-3 py-2.5 text-ink text-sm focus:border-cyan outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="panel-label block mb-2">
              message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-base border border-border px-3 py-2.5 text-ink text-sm focus:border-cyan outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-cyan text-base font-mono text-sm uppercase tracking-widest px-6 py-3 hover:bg-cyan/90 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p className="mt-3 text-xs font-mono text-cyan">Message sent. Thank you.</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-xs font-mono text-amber">
              Something went wrong — email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
