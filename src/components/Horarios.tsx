"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Horarios() {
  return (
    <section id="horarios" className="bg-card text-fg py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-8">
          Horarios & Ubicación
        </h2>

        <div className="grid gap-8 md:grid-cols-2 text-left">
          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Clock className="w-5 h-5 text-accent" /> Horarios
            </h3>
            <ul className="space-y-1 text-muted">
              <li>Lunes – Jueves: 1:00 pm – 10:30 pm</li>
              <li>Viernes – Sábado: 1:00 pm – 11:30 pm</li>
              <li>Domingo: 1:00 pm – 9:00 pm</li>
            </ul>

            {/* Teléfono opcional */}
            <p className="flex items-center gap-2 text-sm text-muted pt-2">
              <Phone className="w-4 h-4 text-accent" />
              <a
                className="hover:text-fg"
                href="https://wa.me/523317655504"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ordena por WhatsApp: 33 17 65 55 04
              </a>
            </p>
          </div>

          {/* Ubicación */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <MapPin className="w-5 h-5 text-accent" /> Ubicación
            </h3>

            <p className="text-muted">
              <span className="font-semibold text-fg">Toki-oh! Sushi</span>
              <br />
              Av. Santa Margarita 1285, Jardín Real, 45136 Zapopan, Jal., México
            </p>

            {/* Mapa embebido (usamos lat/lng para no depender del largo pb=) */}
            <iframe
              title="Mapa Toki-oh! Sushi"
              src="https://www.google.com/maps?q=20.7393423,-103.540051&z=17&output=embed"
              width="100%"
              height="220"
              className="rounded-lg border border-line"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Enlace para abrir Google Maps */}
            <Link
              href="https://www.google.com/maps/place/Toki-oh+Sushi/@20.7391313,-103.5401361,17z/data=!4m15!1m8!3m7!1s0x8428a900732128db:0xb22e8f3d9524e75c!2sToki-oh+Sushi!8m2!3d20.7393423!4d-103.540051!10e1!16s%2Fg%2F11lz1kq42d!3m5!1s0x8428a900732128db:0xb22e8f3d9524e75c!8m2!3d20.7393423!4d-103.540051!16s%2Fg%2F11lz1kq42d?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-accent font-semibold hover:underline"
            >
              Abrir en Google Maps
            </Link>
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-10">
          <a
            href="https://wa.me/523317655504"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-accent px-6 py-3 font-bold text-bg hover:drop-shadow-glow transition"
          >
            Ordena por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
