"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "基本モーション", href: "/" },
    { label: "1体", href: "/single-motion" },
    { label: "2体", href: "/two-motion" },
    { label: "3体", href: "/trio-motion" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center px-2 sm:px-3 lg:px-4">
        <div className="flex w-full gap-1 overflow-x-auto py-2.5 sm:py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <div key={item.href} className="shrink-0">
                {isActive ? (
                  <button
                    disabled
                    className="cursor-not-allowed rounded-full bg-stone-100 px-3 py-2 text-xs font-semibold text-stone-950 sm:px-4 sm:text-sm"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full px-3 py-2 text-xs font-semibold text-stone-600 transition hover:bg-stone-50 hover:text-stone-950 sm:px-4 sm:text-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
