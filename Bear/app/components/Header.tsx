"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBackgroundMode } from "./BackgroundProvider";

const navItems = [
  { label: "Home", href: "/" },
  { label: "1 Body", href: "/single-motion" },
  { label: "2 Body", href: "/two-motion" },
  { label: "3 Body", href: "/trio-motion" },
  { label: "Background", href: "/background" },
];

const backgroundModes = [
  { label: "Morning", value: "morning" as const },
  { label: "Evening", value: "evening" as const },
  { label: "Night", value: "night" as const },
];

export default function Header() {
  const pathname = usePathname();
  const { selectedMode, setSelectedMode } = useBackgroundMode();

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3 lg:px-4">
      <nav className="mx-auto flex max-w-[1600px] flex-col gap-2 rounded-[1.75rem] border border-white/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.12))] px-3 py-3 shadow-[0_18px_60px_rgba(30,20,10,0.12),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/12 sm:px-4 sm:py-3.5">
        <div className="flex w-full gap-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <div key={item.href} className="shrink-0">
                {isActive ? (
                  <button
                    disabled
                    className="cursor-not-allowed rounded-full border border-white/20 bg-stone-950/80 px-3 py-2 text-xs font-semibold text-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] sm:px-4 sm:text-sm"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full border border-transparent bg-white/8 px-3 py-2 text-xs font-semibold text-stone-800 transition hover:border-white/18 hover:bg-white/18 hover:text-stone-950 sm:px-4 sm:text-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            Time
          </span>
          {backgroundModes.map((mode) => {
            const isActive = selectedMode === mode.value;

            return (
              <button
                key={mode.value}
                type="button"
                onClick={() => setSelectedMode(mode.value)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:px-4 ${
                  isActive
                    ? "border-white/18 bg-stone-950/78 text-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                    : "border-white/20 bg-white/10 text-stone-800 hover:bg-white/18"
                }`}
              >
                {mode.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
