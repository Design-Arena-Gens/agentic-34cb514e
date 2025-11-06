'use client';

import { useMemo, useState } from "react";
import type { Testimonial } from "@/lib/data";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const safeTestimonials = useMemo(
    () => (testimonials.length ? testimonials : defaultTestimonials),
    [testimonials],
  );
  const active = safeTestimonials[index] ?? safeTestimonials[0];

  const goTo = (nextIndex: number) => {
    const total = safeTestimonials.length;
    setIndex(((nextIndex % total) + total) % total);
  };

  return (
    <section
      id="voices"
      className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
            Voices
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">
            Resonance from our community.
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Practitioners, founders, and facilitators share how Harmony Haven
            keeps their impact rooted and steady.
          </p>
          <div className="mt-10 flex gap-3">
            <button
              onClick={() => goTo(index - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg font-semibold transition hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-500"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={() => goTo(index + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg font-semibold transition hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-500"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
        <article className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-white p-8 shadow-lg shadow-zinc-200/60 dark:border-zinc-700 dark:bg-zinc-950/70 dark:shadow-zinc-900">
          <div className="absolute -top-16 -left-16 h-36 w-36 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
          <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/20" />
          <blockquote className="relative text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
            “{active.quote}”
          </blockquote>
          <p className="relative mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {active.name}
          </p>
          <p className="relative text-sm text-zinc-500 dark:text-zinc-400">
            {active.role}
          </p>
          <div className="relative mt-6 flex gap-1">
            {safeTestimonials.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`h-2 w-6 rounded-full transition ${
                  dotIndex === index
                    ? "bg-gradient-to-r from-sky-500 to-emerald-400"
                    : "bg-zinc-200 dark:bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Harmony Haven feels like a calm heartbeat in the background of my week. It keeps me steady.",
    name: "Avery Stone",
    role: "Founder",
  },
];
