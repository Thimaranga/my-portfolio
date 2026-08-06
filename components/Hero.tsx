import { profile } from "@/lib/data";
import StatusBar from "./StatusBar";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-base pt-36 pb-20 px-6">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-cyan" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan status-dot" />
          </span>
          <span className="font-mono text-xs tracking-widest uppercase text-cyan">
            status: {profile.availability}
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-4 font-mono text-cyan text-sm sm:text-base tracking-wide uppercase">
          {profile.subtitle}
        </p>

        <p className="mt-8 max-w-2xl text-muted text-base sm:text-lg leading-relaxed">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-cyan text-base font-mono text-sm uppercase tracking-widest px-6 py-3 hover:bg-cyan/90 transition-colors"
          >
            View deployed work
          </a>
          <a
            href="#contact"
            className="border border-border text-ink font-mono text-sm uppercase tracking-widest px-6 py-3 hover:border-cyan-dim transition-colors"
          >
            Get in touch
          </a>
        </div>

        <StatusBar />
      </div>
    </section>
  );
}
