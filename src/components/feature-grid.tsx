import type { Feature } from "@/lib/data";

type FeatureGridProps = {
  items: Feature[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <section
      id="features"
      className="rounded-3xl border border-zinc-200 bg-white/60 p-10 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Everything you need to stay aligned.
        </h2>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
          hh harmonizes rituals, insight, and community into one elegant
          operating system for your mind and body.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {items.map((feature) => (
          <article
            key={feature.title}
            className="group h-full rounded-2xl border border-zinc-100/80 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-zinc-200 hover:shadow-lg dark:border-white/5 dark:bg-white/5 dark:hover:border-white/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/80 to-emerald-400/80 text-xl">
              {feature.icon}
            </div>
            <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
