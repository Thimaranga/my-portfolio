import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-base px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-14 border-b border-border pb-4">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Experience</h2>
          <span className="panel-label">5+ Years of Experience</span>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-14">
            {experience.map((job) => (
              <div key={job.role + job.period} className="relative sm:pl-12">
                <span
                  className={`hidden sm:block absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
                    job.current ? "bg-cyan border-cyan" : "bg-base border-border"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-amber tracking-widest uppercase">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="font-mono text-[10px] tracking-widest uppercase text-cyan border border-cyan-dim px-2 py-0.5">
                      current
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-ink">{job.role}</h3>
                <p className="text-muted mb-4">
                  {job.company} — {job.location}
                </p>
                <ul className="space-y-2 mb-5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm sm:text-[1rem] text-ink/90 leading-relaxed">
                      <span className="text-cyan shrink-0">▸</span>
                      <span className="text-ink/60">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] tracking-wide text-muted border border-border px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
