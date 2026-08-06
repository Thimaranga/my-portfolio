import { stats } from "@/lib/data";

export default function StatusBar() {
  return (
    <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 border border-border divide-x divide-border bg-surface/60">
      {stats.map((s) => (
        <div key={s.label} className="px-5 py-5">
          <div className="font-display text-2xl sm:text-3xl text-ink">{s.value}</div>
          <div className="panel-label mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
