export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-8 py-20 text-white shadow-xl ring-1 ring-black/5"
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-sky-200">
          Harmony Haven
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
          Rituals, Radar, and Rest for high-velocity humans.
        </h1>
        <p className="mt-6 text-lg text-zinc-200">
          hh distills wellness science and community accountability into a
          laser-focused rhythm that keeps your purpose sharp without sacrificing
          your nervous system. Welcome to regenerative ambition.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#request-invite"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
          >
            Unlock Your Rhythm
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70"
          >
            See What&apos;s Inside
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-sky-400/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lime-300/30 blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>
    </section>
  );
}
