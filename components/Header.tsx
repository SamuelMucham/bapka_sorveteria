"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sabores", label: "Sabores" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo-bapka.jpg"
            alt={`Logo ${site.name}`}
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-2xl border-2 border-azul-deep/15 object-cover shadow-sm"
          />
          <span className="font-display text-xl font-bold text-ink">{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-bold transition-colors ${
                  active ? "text-azul" : "text-ink-soft hover:text-azul"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 rounded-full bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-cream px-5 py-3 md:hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 font-body text-base font-bold ${
                  active ? "bg-cream-deep text-azul" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
