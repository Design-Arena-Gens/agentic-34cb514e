import type { JourneyStop } from "@/lib/data";

type JourneyTimelineProps = {
  items: JourneyStop[];
};

export function JourneyTimeline({ items }: JourneyTimelineProps) {
  return (
    <section
      id="journey"
      className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            A day inside Harmony Haven.
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Micro-rituals pulse across your day so you stay grounded, creative,
            and spacious even when life is loud.
          </p>
        </div>
        <ol className="relative space-y-8">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-sky-200 via-emerald-200 to-lime-200 dark:from-sky-500/40 dark:via-emerald-400/40 dark:to-lime-300/40" />
          {items.map((stop, index) => (
            <li key={stop.title} className="relative flex gap-6 pl-14">
              <span className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-sm font-semibold text-white shadow-lg shadow-sky-500/20">
                {index + 1}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                  {stop.time}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
                  {stop.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {stop.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
