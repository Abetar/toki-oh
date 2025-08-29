import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import Horarios from "@/components/Horarios";
import Promociones from "@/components/Promociones";
import Footer from "@/components/Footer";
import Resenas from "@/components/Resenas";

export default function Home() {
  return (
    <>
      <Hero />
      <Horarios />
      <Promociones />
      <section id="menu" className="mx-auto max-w-6xl px-4 py-16">
        <MenuPreview />
      </section>
      <Resenas googleReviewsUrl="https://www.google.com/maps/place/Toki-oh+Sushi/@20.7391313,-103.5401361,17z/data=!4m17!1m8!3m7!1s0x8428a900732128db:0xb22e8f3d9524e75c!2sToki-oh+Sushi!8m2!3d20.7393423!4d-103.540051!10e1!16s%2Fg%2F11lz1kq42d!3m7!1s0x8428a900732128db:0xb22e8f3d9524e75c!8m2!3d20.7393423!4d-103.540051!9m1!1b1!16s%2Fg%2F11lz1kq42d?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" />
      <Footer />
    </>
  );
}