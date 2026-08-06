import { education, courses, volunteer } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-surface/40 px-6 py-24 border-y border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <span className="panel-label">education</span>
          <h3 className="font-display text-xl text-ink mt-3 mb-1">{education.degree}</h3>
          <p className="text-muted text-sm">{education.school}</p>
          <p className="font-mono text-xs text-cyan mt-1">{education.period}</p>
        </div>

        <div>
          <span className="panel-label">courses</span>
          <ul className="mt-3 space-y-3">
            {courses.map((c) => (
              <li key={c.name}>
                <p className="text-ink text-sm">{c.name}</p>
                <p className="text-muted text-xs">{c.org}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="panel-label">volunteer activities</span>
          <ul className="mt-3 space-y-3">
            {volunteer.map((v) => (
              <li key={v.role + v.org}>
                <p className="text-ink text-sm">{v.role}</p>
                <p className="text-muted text-xs">{v.org}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
