'use client';

import { useState } from "react";
import type { ProgramTrack } from "@/lib/data";

type ProgramTabsProps = {
  tracks: ProgramTrack[];
};

export function ProgramTabs({ tracks }: ProgramTabsProps) {
  const [selectedId, setSelectedId] = useState(tracks[0]?.id ?? "");
  const activeTrack = tracks.find((track) => track.id === selectedId);

  return (
    <section
      id="tracks"
      className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-10 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/40"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-100">
          Choose the arc that meets your moment.
        </h2>
        <p className="mt-3 text-sm text-emerald-700/90 dark:text-emerald-200/80">
          Each track carries a distinct intention — shift narratives, build
          momentum, or deepen restoration. Move between them as life evolves.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-3">
          {tracks.map((track) => {
            const isActive = track.id === selectedId;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedId(track.id)}
                className={`rounded-2xl border px-5 py-4 text-left transition ${
                  isActive
                    ? "border-emerald-500/80 bg-white text-emerald-900 shadow-lg shadow-emerald-500/10 dark:bg-emerald-900 dark:text-emerald-50"
                    : "border-transparent bg-white/60 text-emerald-800 hover:border-emerald-200 hover:bg-white dark:bg-emerald-950/40 dark:text-emerald-200 dark:hover:bg-emerald-900/60"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {track.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-700/80 dark:text-emerald-200/70">
                  {track.tagline}
                </p>
              </button>
            );
          })}
        </div>
        {activeTrack && (
          <div className="rounded-3xl border border-emerald-200/50 bg-white/80 p-8 shadow-inner dark:border-emerald-800/60 dark:bg-emerald-900/40">
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
              Focus
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-emerald-800 dark:text-emerald-100/90">
              {activeTrack.focus.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-semibold text-emerald-900 dark:text-emerald-100">
              You&apos;ll leave with
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-emerald-800 dark:text-emerald-100/90">
              {activeTrack.takeaways.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-lime-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
