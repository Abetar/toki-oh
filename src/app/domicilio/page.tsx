import WhatsAppOrderMenu from "@/components/WhatsAppOrderMenu";

export const metadata = {
  title: "Ordenar a domicilio | Toki-oh! Sushi",
  description:
    "Selecciona tus platillos, completa tus datos y envía el pedido por WhatsApp.",
};

export default function Page() {
  return (
    <main>
      <WhatsAppOrderMenu />
    </main>
  );
}
