import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-base px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-14 border-b border-border pb-4">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Skill Registry</h2>
          <span className="panel-label">areas of expertise</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {skillGroups.map((g) => (
            <div key={g.label} className="bg-base p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 bg-amber" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-amber">
                  {g.label}
                </h3>
              </div>
              <ul className="space-y-2">
                {g.skills.map((s) => (
                  <li key={s} className="text-sm text-ink/90">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
