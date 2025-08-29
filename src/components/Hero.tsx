"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const float: Variants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: reduce ? 0 : [0, -6, 0],
      opacity: 0.25,
      transition: {
        opacity: { duration: 0.6, ease: "easeOut" },
        y: reduce
          ? { duration: 0 }
          : { duration: 6, ease: "easeInOut", repeat: Infinity },
      },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-bg">
      {/* Textura opcional */}
      <motion.div
        className="absolute inset-0 opacity-10 bg-noise mix-blend-screen pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Imagen hero flotando suavemente */}
      <motion.div
        className="absolute right-[-10%] top-0 h-[120%] w-auto pointer-events-none"
        variants={float}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        <Image
          src="/tokioh-hero.png"
          alt="Toki-Oh! Sushi"
          width={1600}
          height={900}
          priority
          className="h-full w-auto object-contain"
        />
      </motion.div>

      <div className="mx-auto grid min-h-[72vh] max-w-6xl grid-cols-1 items-center px-4 py-24 md:grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={item} className="uppercase tracking-[.22em] text-muted">
            Toki-oh!
          </motion.p>

          <motion.h1 variants={item} className="h-title">
            Sushi hecho con antojo
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-base text-muted">
            Rollos empanizados, naturales y especiales. Pide a domicilio o recoge en sucursal.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex gap-3">
            <Link
              href="#menu"
              className="rounded-xl bg-fg px-5 py-2.5 text-bg font-bold hover:opacity-90 transition"
            >
              Ver menú
            </Link>
            <a
              href="https://wa.me/523317655504"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-accent px-5 py-2.5 font-bold text-accent hover:bg-accent/10 transition"
            >
              Ordenar ahora
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
