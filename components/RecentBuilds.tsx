import { ArrowUpRight } from "lucide-react";
import { builds } from "@/lib/data";

export default function RecentBuilds() {
  const live = builds.filter((b) => b.liveUrl).length;

  return (
    <section id="builds" className="bg-base px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-4 border-b border-border pb-4 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Recent Builds</h2>
          <span className="panel-label shrink-0">{live} live · try them</span>
        </div>
        <p className="text-muted text-sm sm:text-[1rem] max-w-3xl mb-12">
          Personal projects from 2026, designed, built and deployed end to end. The live ones run with
          sample data, so you can click through them without signing up.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {builds.map((b) => (
            <article
              key={b.name}
              className="flex flex-col border border-border bg-surface p-6 hover:border-cyan-dim transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display text-lg text-ink">{b.name}</h3>
                  <p className="panel-label mt-1">{b.kind}</p>
                </div>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 border shrink-0 ${
                    b.liveUrl ? "border-cyan-dim text-cyan" : "border-border text-muted"
                  }`}
                >
                  {b.liveUrl ? "● live" : "demo on request"}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4">{b.description}</p>

              <ul className="space-y-1.5 mb-5">
                {b.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-xs sm:text-sm text-ink/85 leading-relaxed">
                    <span className="text-amber shrink-0">›</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 pt-3 border-t border-border mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {b.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-wide text-muted bg-base border border-border px-1.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {b.liveUrl && (
                  <a
                    href={b.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest border border-cyan-dim text-cyan px-3 py-2 hover:bg-cyan hover:text-base transition-colors"
                  >
                    Open live demo <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
