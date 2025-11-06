import Link from "next/link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#journey", label: "Daily Rhythm" },
  { href: "#tracks", label: "Tracks" },
  { href: "#voices", label: "Voices" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-emerald-400 to-lime-300 text-sm font-bold text-white">
            hh
          </span>
          <span>Harmony Haven</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#request-invite"
          className="hidden rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-zinc-900 dark:bg-white dark:text-black dark:shadow-white/10 md:inline-flex"
        >
          Request Invite
        </a>
      </div>
    </header>
  );
}
