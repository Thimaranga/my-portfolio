import { projects } from "@/lib/data";

export default function Projects() {
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

              <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan">
                  {p.role}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
