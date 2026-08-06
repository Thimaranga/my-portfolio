"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [previewFigmaUrl, setPreviewFigmaUrl] = useState<string | null>(null);
  const embedFigmaUrl = previewFigmaUrl
    ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(previewFigmaUrl)}`
    : null;

  useEffect(() => {
    if (!previewFigmaUrl) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewFigmaUrl(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewFigmaUrl]);

  return (
    <section id="projects" className="bg-surface/40 px-6 py-24 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-14 border-b border-border pb-4">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Projects Shipped</h2>
          <span className="panel-label">{projects.length} services running</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group border border-border bg-surface p-6 hover:border-cyan-dim transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-lg text-ink">{p.name}</h3>
                  {p.region && (
                    <p className="panel-label mt-1">{p.region}</p>
                  )}
                </div>
                <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                  <span className="inline-flex rounded-full h-2.5 w-2.5 bg-cyan status-dot" />
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4">{p.description}</p>

              {p.points.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-xs sm:text-sm text-ink/85 leading-relaxed">
                      <span className="text-amber shrink-0">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col gap-4 pt-3 border-t border-border mt-auto">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cyan">
                    {p.role}
                  </span>

                  {p.figmaUrl ? (
                    <button
                      type="button"
                      onClick={() => setPreviewFigmaUrl(p.figmaUrl)}
                      className="font-mono text-[10px] uppercase tracking-widest border border-cyan-dim text-cyan px-3 py-2 hover:bg-cyan hover:text-base transition-colors"
                    >
                      Preview
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled
                      title="Figma link not available"
                      className="font-mono text-[10px] uppercase tracking-widest border border-border text-muted/50 px-3 py-2 cursor-not-allowed opacity-60"
                    >
                      Preview
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-wide text-muted bg-base border border-border px-1.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewFigmaUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          onClick={() => setPreviewFigmaUrl(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-base border border-border rounded-2xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 bg-surface">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">Figma Preview</p>
                <p className="text-xs text-muted truncate">{previewFigmaUrl}</p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewFigmaUrl(null)}
                className="font-mono text-[10px] uppercase tracking-widest border border-border text-muted px-3 py-2 hover:border-cyan hover:text-cyan transition-colors"
              >
                Close
              </button>
            </div>
            <div className="h-[70vh] min-h-[420px] bg-black">
              <iframe
                src={embedFigmaUrl || previewFigmaUrl}
                className="h-full w-full"
                title="Figma preview"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
