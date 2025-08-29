"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/#menu", label: "Menú" },
  { href: "/#promociones", label: "Promociones" },
  { href: "/#horarios", label: "Horarios & Ubicación" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // sombra al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur transition
      ${scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,.35)]" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={close} aria-label="Inicio">
          <Image
            src="/logo-tokioh.png" // pon aquí el PNG del logo (fondo transparente) en /public
            alt="Toki-oh! Sushi"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-fg/90 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="https://wa.me/523317655504"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-2xl bg-accent px-4 py-2 text-sm font-bold text-bg hover:drop-shadow-glow transition"
        >
          Ordenar por WhatsApp
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="md:hidden rounded-md p-2 text-fg hover:text-accent"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <button
            className="fixed inset-0 z-40 bg-black/40"
            aria-label="Cerrar menú"
            onClick={close}
          />
          {/* Drawer */}
          <div className="fixed right-0 top-0 z-50 h-dvh w-80 max-w-[82%] border-l border-line/60 bg-card p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <Image
                src="/logo-tokioh.png"
                alt="Toki-oh! Sushi"
                width={120}
                height={34}
                priority
              />
              <button
                className="rounded-md p-2 text-fg hover:text-accent"
                aria-label="Cerrar menú"
                onClick={close}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-base text-fg/90 hover:bg-line/30 hover:text-accent"
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 border-t border-line/60 pt-5">
              <a
                href="https://wa.me/523317655504"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 font-bold text-bg"
                onClick={close}
              >
                Ordenar por WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-muted">
              © {new Date().getFullYear()} Toki-oh! Sushi
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
