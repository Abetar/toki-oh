"use client";

import { Star, Quote } from "lucide-react";

type Review = {
  name: string;
  comment: string;
  rating: number;
};

type ResenasProps = {
  googleReviewsUrl: string;
};

export default function Resenas({ googleReviewsUrl }: ResenasProps) {
  const reviews: Review[] = [
    {
      name: "María López",
      comment: "El mejor sushi de Zapopan, los rollos empanizados son increíbles.",
      rating: 5,
    },
    {
      name: "Carlos Hernández",
      comment: "Excelente servicio y ambiente, el Bash Roll es mi favorito.",
      rating: 4,
    },
    {
      name: "Ana Pérez",
      comment: "Muy buena relación calidad-precio, el té gratis en miércoles es un plus.",
      rating: 5,
    },
  ];

  return (
    <section id="resenas" className="bg-bg text-fg py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-card border border-line/60 p-6 text-left shadow hover:shadow-lg transition"
            >
              <Quote className="absolute top-4 right-4 h-5 w-5 text-accent/70" />
              <div className="mb-2 flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* ✅ Comillas tipográficas para evitar el warning */}
              <p className="mb-3 text-sm text-muted">
                &ldquo;{review.comment}&rdquo;
              </p>

              <p className="text-sm font-bold">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-accent px-6 py-3 font-bold text-bg hover:drop-shadow-glow transition"
          >
            Ver más reseñas en Google
          </a>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-accent px-6 py-3 font-bold text-accent hover:bg-accent hover:text-bg transition"
          >
            Deja tu reseña
          </a>
        </div>
      </div>
    </section>
  );
}
