"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * Menú interactivo con estilos locales (Opción B)
 * - Sin validación por horario (solo valida formulario)
 * - Sticky CTA visible en móvil y desktop
 */

const WHATSAPP_PHONE = "523317655504";

function currency(n: number) {
  return `$ ${n} MXN`;
}

// ----------------- DATA -----------------
type Tag = "NEW" | "BEST SELLER" | undefined;
type Item = {
  id: string;
  name: string;
  desc?: string;
  price: number;
  tag?: Tag;
};
type Section = { id: string; title: string; items: Item[] };

const MENU: Section[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      {
        id: "arroz-especial",
        name: "Arroz especial",
        desc: "Arroz blanco con tampico, surimi, camarones, tocino, philadelphia y aguacate.",
        price: 130,
      },
      {
        id: "gohan",
        name: "Gohan",
        desc: "Arroz blanco con tampico, aguacate y philadelphia.",
        price: 90,
      },
      {
        id: "pollo-a-la-naranja",
        name: "Pollo a la naranja",
        desc: "Pollo ligeramente capeado en salsa agridulce de naranja.",
        price: 140,
        tag: "NEW",
      },
      {
        id: "camarones-a-la-naranja",
        name: "Camarones a la naranja",
        desc: "Camarones capeados en salsa agridulce de naranja.",
        price: 160,
        tag: "NEW",
      },
    ],
  },
  {
    id: "los-de-siempre",
    title: "Los de siempre",
    items: [
      {
        id: "mar-y-tierra",
        name: "Mar y tierra",
        desc: "Res, camarón, philadelphia y aguacate.",
        price: 110,
      },
      {
        id: "tres-quesos",
        name: "Tres quesos",
        desc: "Philadelphia, manchego, gouda, envuelto en aguacate.",
        price: 120,
      },
      {
        id: "california",
        name: "California",
        desc: "Surimi, aguacate, pepino, tampico.",
        price: 95,
      },
      {
        id: "philadelphia",
        name: "Philadelphia",
        desc: "Philadelphia, aguacate, pepino, tampico.",
        price: 95,
      },
      {
        id: "tampico",
        name: "Tampico",
        desc: "Surimi, aguacate, pepino, tampico.",
        price: 95,
      },
    ],
  },
  {
    id: "naturales",
    title: "Naturales",
    items: [
      {
        id: "kya-roll",
        name: "Kya roll",
        desc: "Salmón, aguacate, pepino, philadelphia.",
        price: 135,
        tag: "BEST SELLER",
      },
      {
        id: "roca-roll",
        name: "Roca roll",
        desc: "Atún, aguacate, pepino, salsa especial.",
        price: 155,
        tag: "NEW",
      },
      {
        id: "nordico",
        name: "Nórdico",
        desc: "Salmón, pepino, queso crema.",
        price: 120,
      },
      {
        id: "atun-fresco",
        name: "Atún fresco",
        desc: "Atún, pepino, aguacate, philadelphia.",
        price: 130,
      },
    ],
  },
  {
    id: "especiales",
    title: "Especiales",
    items: [
      {
        id: "bash-roll",
        name: "Bash roll",
        desc: "Camarón, aguacate, queso crema, tampico, bañado en salsa especial.",
        price: 135,
        tag: "BEST SELLER",
      },
      {
        id: "king-roll",
        name: "King roll",
        desc: "Camarón, aguacate, philadelphia, tocino, bañado en salsa especial.",
        price: 150,
        tag: "BEST SELLER",
      },
      {
        id: "dragon-roll",
        name: "Dragon roll",
        desc: "Camarón, aguacate, pepino, tampico, cubierto con aguacate y salsa.",
        price: 145,
      },
      {
        id: "ebi-roll",
        name: "Ebi roll",
        desc: "Camarón empanizado, pepino, philadelphia, bañado en tampico.",
        price: 135,
      },
    ],
  },
  {
    id: "horneados",
    title: "Horneados",
    items: [
      {
        id: "campestre-roll",
        name: "Campestre roll",
        desc: "Roll con topping horneado de queso y tampico.",
        price: 155,
        tag: "BEST SELLER",
      },
      {
        id: "volcan-roll",
        name: "Volcán roll",
        desc: "Roll gratinado con queso, philadelphia y tampico.",
        price: 150,
      },
      {
        id: "spicy-roll",
        name: "Spicy roll",
        desc: "Roll horneado con salsa picante y queso crema.",
        price: 145,
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { id: "te-casa-1l", name: "Té de la casa 1 Lt", price: 40 },
      { id: "refresco-lata", name: "Refresco en lata", price: 25 },
      { id: "agua-embotellada", name: "Agua embotellada", price: 20 },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    items: [
      { id: "salsa-anguila", name: "Salsa de anguila", price: 10 },
      { id: "soya-extra", name: "Soya extra", price: 5 },
      { id: "jengibre", name: "Jengibre", price: 5 },
      { id: "wasabi", name: "Wasabi", price: 5 },
    ],
  },
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}
interface FormState {
  casa: string;
  recibe: string;
  coto: string;
  notas: string;
}
const initialForm: FormState = { casa: "", recibe: "", coto: "", notas: "" };

export default function WhatsAppOrderMenu() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [form, setForm] = useState<FormState>(initialForm);

  const subtotal = useMemo(
    () => cart.reduce((a, i) => a + i.price * i.qty, 0),
    [cart]
  );

  // Solo valida datos + que haya items
  const formValid =
    form.casa.trim() &&
    form.recibe.trim() &&
    form.coto.trim() &&
    cart.length > 0;

  function addToCart(p: { id: string; name: string; price: number }) {
    setCart((prev) => {
      const i = prev.findIndex((x) => x.id === p.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i].qty += 1;
        return copy;
      }
      return [...prev, { ...p, qty: 1 }];
    });
  }
  function decItem(id: string) {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  }
  function incItem(id: string) {
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
    );
  }
  function removeItem(id: string) {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }

  function composeMessage() {
    const lines: string[] = [];
    lines.push("*Nuevo pedido Toki-oh!*", "");

    // Agrupa por sección (más ordenado en WhatsApp)
    MENU.forEach((sec) => {
      const inSec = cart.filter((c) => sec.items.some((it) => it.id === c.id));
      if (inSec.length) {
        lines.push(`*${sec.title}*`);
        inSec.forEach((i) =>
          lines.push(`• ${i.name} x${i.qty} — ${currency(i.price * i.qty)}`)
        );
        lines.push("");
      }
    });

    lines.push(
      `*Subtotal:* ${currency(subtotal)}`,
      "",
      "*Entrega:*",
      `• Coto: ${form.coto}`,
      `• Casa: ${form.casa}`,
      `• Recibe: ${form.recibe}`
    );
    if (form.notas) lines.push(`• Notas: ${form.notas}`);
    lines.push("", "¿Me confirmas el tiempo de entrega, por favor?");
    return encodeURIComponent(lines.join("\n"));
  }
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${composeMessage()}`;

  return (
    <div className="theme-tokioh">
      {/* Estilos locales */}
      <style jsx>{`
        .theme-tokioh {
          --bg: 12 12 14;
          --card: 17 19 24;
          --fg: 240 242 246;
          --muted: 166 171 183;
          --accent: 255 153 51;
          --accent2: 234 72 72;
          --line: 255 255 255;
          background-color: rgb(var(--bg));
          color: rgb(var(--fg));
        }
        .theme-tokioh .bg-bg {
          background-color: rgb(var(--bg));
        }
        .theme-tokioh .bg-card {
          background-color: rgb(var(--card));
        }
        .theme-tokioh .text-fg {
          color: rgb(var(--fg));
        }
        .theme-tokioh .text-muted {
          color: rgb(var(--muted));
        }
        .theme-tokioh .text-accent {
          color: rgb(var(--accent));
        }
        .theme-tokioh .text-bg {
          color: rgb(var(--bg));
        }
        .theme-tokioh .bg-fg {
          background-color: rgb(var(--fg));
        }
        .theme-tokioh .bg-accent2 {
          background-color: rgb(var(--accent2));
        }
        .theme-tokioh .border-line\\/60 {
          border-color: rgba(var(--line), 0.6);
        }
        .theme-tokioh .h-section {
          color: rgb(var(--fg));
          font-weight: 800;
          letter-spacing: 0.02em;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-12">
          {MENU.map((sec) => (
            <section key={sec.id}>
              <h2 className="h-section mb-4 text-2xl">{sec.title}</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {sec.items.map((p) => (
                  <motion.article
                    key={p.id}
                    className="relative rounded-3xl border border-line/60 bg-card p-4"
                    whileHover={{ scale: 1.01 }}
                  >
                    {p.tag && (
                      <span
                        className={`absolute right-3 top-3 rounded-md px-2 py-0.5 text-[10px] font-extrabold tracking-wide ${
                          p.tag === "NEW"
                            ? "bg-accent2 text-white"
                            : "bg-fg text-bg"
                        }`}
                      >
                        {p.tag}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-fg">{p.name}</h3>
                    {p.desc && (
                      <p className="mt-1 text-sm text-muted">{p.desc}</p>
                    )}
                    <div className="mt-3 font-extrabold text-accent">
                      {currency(p.price)}
                    </div>
                    <button
                      className="mt-3 w-full rounded-xl border border-line/60 bg-transparent px-3 py-2 text-sm font-semibold text-fg hover:bg-fg/5"
                      onClick={() =>
                        addToCart({ id: p.id, name: p.name, price: p.price })
                      }
                    >
                      Agregar
                    </button>
                  </motion.article>
                ))}
              </div>
            </section>
          ))}

          {/* Carrito */}
          <section
            id="checkout"
            className="rounded-3xl border border-line/60 bg-card p-4"
          >
            <h3 className="text-lg font-bold text-fg mb-3">Tu pedido</h3>
            {cart.length === 0 ? (
              <p className="text-sm text-muted">Aún no agregas platillos.</p>
            ) : (
              <ul className="space-y-2">
                {cart.map((i) => (
                  <li
                    key={i.id}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="text-fg truncate">
                        {i.name} x{i.qty}
                      </p>
                      <p className="text-xs text-muted">
                        {currency(i.price)} c/u
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="rounded-md border border-line/60 px-2 py-1"
                        onClick={() => decItem(i.id)}
                        aria-label="Disminuir"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-fg">{i.qty}</span>
                      <button
                        className="rounded-md border border-line/60 px-2 py-1"
                        onClick={() => incItem(i.id)}
                        aria-label="Aumentar"
                      >
                        ＋
                      </button>
                      <span className="hidden sm:inline font-semibold text-fg">
                        {currency(i.price * i.qty)}
                      </span>
                      <button
                        className="rounded-md border border-line/60 px-2 py-1"
                        onClick={() => removeItem(i.id)}
                        aria-label="Eliminar"
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-extrabold text-accent">
                {currency(subtotal)}
              </span>
            </div>
          </section>

          {/* Formulario */}
          <section className="rounded-3xl border border-line/60 bg-card p-4">
            <h3 className="text-lg font-bold text-fg mb-3">
              Datos para entrega
            </h3>
            <DeliveryForm form={form} setForm={setForm} />
            <a
              href={formValid ? waHref : "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!formValid) e.preventDefault();
              }}
              className={`mt-4 block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold ${
                formValid
                  ? "bg-fg text-bg hover:opacity-90"
                  : "bg-card opacity-50 cursor-not-allowed"
              }`}
              aria-disabled={!formValid}
            >
              Enviar pedido por WhatsApp
            </a>
          </section>

          {/* Espaciador para que el sticky no tape el contenido final */}
          {cart.length > 0 && <div className="h-24" />}
        </div>
      </div>

      {/* Sticky (visible en TODAS las pantallas) */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-bg/80 backdrop-blur border-t border-line/60">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row gap-2">
            <a
              href="#checkout"
              className="flex-1 rounded-2xl border border-line/60 px-4 py-3 text-center font-semibold text-fg bg-card/80 hover:bg-card"
            >
              Ver carrito · {currency(subtotal)}
            </a>
            <a
              href={formValid ? waHref : "#"}
              onClick={(e) => {
                if (!formValid) e.preventDefault();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 rounded-2xl px-4 py-3 text-center font-bold ${
                formValid
                  ? "bg-fg text-bg"
                  : "bg-card opacity-50 cursor-not-allowed"
              }`}
              aria-disabled={!formValid}
            >
              Enviar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function DeliveryForm({
  form,
  setForm,
}: {
  form: FormState;
  setForm: (f: FormState) => void;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <input
        className="rounded-xl border border-line/60 bg-bg px-3 py-2 text-fg"
        placeholder="Coto *"
        value={form.coto}
        onChange={(e) => setForm({ ...form, coto: e.target.value })}
      />
      <input
        className="rounded-xl border border-line/60 bg-bg px-3 py-2 text-fg"
        placeholder="Casa *"
        value={form.casa}
        onChange={(e) => setForm({ ...form, casa: e.target.value })}
      />
      <input
        className="rounded-xl border border-line/60 bg-bg px-3 py-2 text-fg"
        placeholder="Quién recibe *"
        value={form.recibe}
        onChange={(e) => setForm({ ...form, recibe: e.target.value })}
      />
      <textarea
        className="md:col-span-3 rounded-xl border border-line/60 bg-bg px-3 py-2 text-fg"
        placeholder="Notas (opcional)"
        rows={3}
        value={form.notas}
        onChange={(e) => setForm({ ...form, notas: e.target.value })}
      />
    </div>
  );
}
