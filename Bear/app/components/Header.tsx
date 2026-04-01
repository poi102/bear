"use client";

import { useState } from "react";
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
  { label: "Evening", value: "day" as const },
  { label: "Night", value: "night" as const },
  { label: "move", value: "move" as const },
];

export default function Header() {
  const pathname = usePathname();
  const { resolvedMode, selectedMode, moveSecondsRemaining, setSelectedMode } = useBackgroundMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const moveProgress = ((20 - moveSecondsRemaining) / 20) * 100;

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-3 sm:pt-3 lg:px-4">
      <nav className="mx-auto flex max-w-[1600px] flex-col gap-3 rounded-[1.75rem] border border-white/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.12))] px-3 py-3 shadow-[0_18px_60px_rgba(30,20,10,0.12),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/12 sm:px-4 sm:py-3.5 md:flex-row md:items-center md:gap-4">
        <div className="flex items-center justify-between gap-3 md:hidden">
          <span
            className={`text-xl font-semibold ${
              resolvedMode === "night" ? "text-white" : "text-stone-700"
            }`}
          >
            {"\u30af\u30de\u304c\u52d5\u304f\u3088"}
          </span>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-stone-800 transition hover:bg-white/18"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div
          id="site-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-3 md:flex md:min-w-0 md:flex-1 md:flex-row md:items-center md:gap-4`}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <div key={item.href} className="md:shrink-0">
                  {isActive ? (
                    <button
                      disabled
                      className="w-full cursor-not-allowed rounded-full border border-white/20 bg-stone-950/80 px-3 py-2 text-sm font-semibold text-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] md:w-auto md:px-4 md:text-sm"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-full border border-transparent bg-white/8 px-3 py-2 text-center text-sm font-semibold text-stone-800 transition hover:border-white/18 hover:bg-white/18 hover:text-stone-950 md:px-4 md:text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden md:mx-auto md:block md:shrink-0 md:text-center">
            <span
              className={`text-2xl font-semibold sm:text-3xl lg:text-4xl ${
                resolvedMode === "night" ? "text-white" : "text-stone-700"
              }`}
            >
              {"\u30af\u30de\u304c\u52d5\u304f\u3088"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:ml-auto md:shrink-0">
            <span className="w-full shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 md:w-auto">
              Time
            </span>
            {backgroundModes.map((mode) => {
              const isActive = selectedMode === mode.value;

              return (
                <button
                  key={mode.value}
                  type="button"
                  onClick={() => {
                    setSelectedMode(mode.value);
                    setIsMenuOpen(false);
                  }}
                  className={`relative overflow-hidden rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:px-4 ${
                    isActive
                      ? "border-white/18 bg-stone-950/78 text-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                      : "border-white/20 bg-white/10 text-stone-800 hover:bg-white/18"
                  }`}
                >
                  {mode.value === "move" ? (
                    <span className="relative flex items-center gap-2">
                      <span>move</span>
                      <span className="h-1.5 w-12 overflow-hidden rounded-full bg-white/20">
                        <span
                          className="block h-full rounded-full bg-white/85 transition-[width]"
                          style={{ width: `${selectedMode === "move" ? moveProgress : 0}%` }}
                        />
                      </span>
                    </span>
                  ) : (
                    mode.label
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
