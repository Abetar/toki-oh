"use client";

import { Calendar } from "lucide-react";

export default function Promociones() {
  const promos = [
    {
      day: "Martes",
      title: "2 Mar y Tierra",
      desc: "Disfruta 2 rollos Mar y Tierra a precio especial.",
      price: 199.99,
    },
    {
      day: "Miércoles",
      title: "1 Empanizado de Pollo",
      desc: "Incluye ½ litro de té gratis.",
      price: 110,
    },
    {
      day: "Jueves",
      title: "2 Empanizados de Pollo",
      desc: "Ideal para compartir a un precio único.",
      price: 199.99,
    },
  ];

  return (
    <section id="promos" className="bg-bg text-fg py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 flex items-center justify-center gap-2">
          <Calendar className="w-7 h-7 text-accent" />
          Promociones de la Semana
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {promos.map((promo) => (
            <div
              key={promo.day}
              className="bg-card border border-line rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-accent mb-2">
                {promo.day}
              </h3>
              <p className="text-lg font-semibold">{promo.title}</p>
              <p className="text-sm text-muted mt-2">{promo.desc}</p>
              <p className="mt-4 text-2xl font-bold text-fg">
                ${promo.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted mt-6">
          *Válido solo en restaurante. Sujeto a cambios sin previo aviso.
        </p>
      </div>
    </section>
  );
}
