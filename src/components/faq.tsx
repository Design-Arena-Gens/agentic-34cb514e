import type { FAQ } from "@/lib/data";

type FAQProps = {
  items: FAQ[];
};

export function FAQList({ items }: FAQProps) {
  return (
    <section
      id="faq"
      className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
          Frequently asked
        </h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Everything you need to know before stepping into the Harmony Haven
          cadence.
        </p>
      </div>
      <div className="mt-10 space-y-6">
        {items.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-zinc-100 bg-white/70 p-6 transition hover:border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
          >
            <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-medium text-zinc-900 marker:hidden dark:text-white">
              <span>{faq.question}</span>
              <span className="text-2xl leading-none text-zinc-400 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
