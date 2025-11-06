import { FAQList } from "@/components/faq";
import { FeatureGrid } from "@/components/feature-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { JourneyTimeline } from "@/components/journey-timeline";
import { Navbar } from "@/components/navbar";
import { ProgramTabs } from "@/components/program-tabs";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import {
  faqs,
  features,
  journey,
  testimonials,
  tracks,
} from "@/lib/data";

const stats = [
  { value: "92%", label: "report sharper focus" },
  { value: "14m", label: "average daily commitment" },
  { value: "38", label: "countries in the collective" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(72,211,178,0.18),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),_transparent_40%)] py-14 text-zinc-900 dark:bg-neutral-950 dark:text-zinc-50">
      <Navbar />
      <main className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-12 px-6 pb-20">
        <Hero />

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white/70 px-6 py-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <FeatureGrid items={features} />

        <JourneyTimeline items={journey} />

        <ProgramTabs tracks={tracks} />

        <TestimonialCarousel testimonials={testimonials} />

        <section
          id="request-invite"
          className="rounded-3xl border border-white/40 bg-gradient-to-br from-emerald-500 via-sky-500 to-amber-300 p-10 text-white shadow-xl"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                Step inside the Harmony Haven circle.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/80">
                We open the doors every moon cycle for a new cohort. Reserve a
                spot and we&apos;ll reach out with onboarding rituals.
              </p>
            </div>
            <form className="grid gap-3 text-sm md:grid-cols-[1fr_auto]">
              <label className="md:col-span-2">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  placeholder="you@radiantlife.com"
                  className="h-12 w-full rounded-full border border-white/40 bg-white/20 px-5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/70"
                />
              </label>
              <button
                type="submit"
                className="h-12 rounded-full bg-black/90 px-6 font-semibold text-white transition hover:bg-black  md:col-span-1"
              >
                Request Invite
              </button>
              <p className="text-xs text-white/70 md:col-span-2">
                We respect your inbox. One concise email with everything you
                need.
              </p>
            </form>
          </div>
        </section>

        <FAQList items={faqs} />
      </main>
      <Footer />
    </div>
  );
}
