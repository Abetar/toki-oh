import { MenuItem } from "@/data/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="relative rounded-2xl border border-line/60 bg-card p-4">
      {item.tag && (
        <span
          className={`absolute right-3 top-3 rounded-md px-2 py-0.5 text-[10px] font-extrabold tracking-wide ${
            item.tag === "NEW" ? "bg-accent2 text-white" : "bg-fg text-bg"
          }`}
        >
          {item.tag === "BEST" ? "BEST SELLER" : "NEW"}
        </span>
      )}
      <h3 className="text-lg font-bold text-fg">{item.name}</h3>
      {item.desc && <p className="mt-1 text-sm text-muted">{item.desc}</p>}
      <div className="mt-3 font-extrabold text-accent">$ {item.price} MXN</div>
    </article>
  );
}
