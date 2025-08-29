import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toki-Oh! Sushi",
  description: "Sushi bar · Toki-Oh!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="min-h-screen bg-bg text-fg font-sans antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
