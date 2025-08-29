"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line/60 bg-card text-fg">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center gap-2">
            {/* Coloca el PNG del logo en /public/logo-tokioh.png */}
            <Image
              src="/logo-tokioh.png"
              alt="Toki-oh! Sushi"
              width={75}
              height={20}
              className="h-auto w-auto"
            />
          </Link>
          <p className="text-sm text-muted">
            Sushi hecho con antojo. Ordena para recoger o disfruta en restaurante.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line p-2 hover:border-accent hover:text-accent transition"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line p-2 hover:border-accent hover:text-accent transition"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="mb-3 text-sm font-bold tracking-wide text-muted">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#menu" className="hover:text-accent">Menú</Link></li>
            <li><Link href="/#promos" className="hover:text-accent">Promociones</Link></li>
            <li><Link href="/#horarios" className="hover:text-accent">Horarios & Ubicación</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-2">
          <h4 className="mb-3 text-sm font-bold tracking-wide text-muted">Contacto</h4>
          <p className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            Av. Santa Margarita 1285, Jardín Real, Zapopan, Jal.
          </p>
          <p className="flex items-center gap-2 text-sm text-muted">
            <Phone className="h-4 w-4 text-accent" />
            <a
              href="https://wa.me/523317655504"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              33 17 65 55 04 (WhatsApp)
            </a>
          </p>
          <Link
            href="https://www.google.com/maps?q=20.7393423,-103.540051&z=17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-accent hover:underline"
          >
            Cómo llegar
          </Link>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="mb-3 text-sm font-bold tracking-wide text-muted">Horarios</h4>
          <ul className="space-y-1 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> L–J: 1:00 pm – 10:30 pm
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> V–S: 1:00 pm – 11:30 pm
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> D: 1:00 pm – 9:00 pm
            </li>
          </ul>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/523317655504"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-xl bg-accent px-4 py-2 text-sm font-bold text-bg hover:drop-shadow-glow transition"
          >
            Ordenar por WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-center text-xs text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} Toki-oh! Sushi — Todos los derechos reservados.
          </p>
          <p className="text-[11px]">
            Sitio desarrollado por{" "}
            <a
              href="https://agsolutions.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              AG Solution Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
