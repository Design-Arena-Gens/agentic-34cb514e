export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 text-sm text-zinc-500">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Harmony Haven Collective.</p>
        <div className="flex items-center gap-6">
          <a
            href="#request-invite"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            Join the waitlist
          </a>
          <a
            href="mailto:hello@harmonyhaven.hh"
            className="transition hover:text-zinc-900 dark:hover:text-white"
          >
            hello@harmonyhaven.hh
          </a>
        </div>
      </div>
    </footer>
  );
}
