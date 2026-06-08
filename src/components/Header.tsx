"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#contato", label: "Contato" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#inicio" className="shrink-0">
          <Logo withTagline />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Solicitar orçamento
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={aberto}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {aberto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setAberto(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setAberto(false)}
              className="mt-1 rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
            >
              Solicitar orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
