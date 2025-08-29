import { MENU } from "@/data/menu";
import MenuCard from "./MenuCard";

const groups = [
  "Entradas",
  "Los de siempre",
  "Naturales",
  "Especiales",
  "Horneados",
  "Bebidas",
  "Extras",
] as const;

export default function MenuPreview() {
  return (
    <div className="space-y-12">
      {groups.map((g) => {
        const items = MENU.filter((m) => m.category === g);
        if (!items.length) return null;
        return (
          <section key={g}>
            <h2 className="h-section mb-4">{g}</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {items.map((i) => (
                <MenuCard key={i.id} item={i} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
