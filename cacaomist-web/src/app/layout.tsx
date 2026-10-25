import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-font",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "C.A.C.A.O – M.I.S.T™ | Inovasi Kosmetik Berkelanjutan dari Kakao",
    template: "%s | C.A.C.A.O – M.I.S.T™",
  },
  description:
    "Platform digital CACAOMIST-BIOREFINERY — Valorisasi sirkular limbah kulit buah kakao melalui cascade biorefinery untuk formulasi sunscreen spray inovatif dan kemasan bioplastik berkelanjutan. Riset Universitas Syiah Kuala.",
  keywords: [
    "CACAO MIST", "kakao", "sunscreen", "tabir surya", "biorefinery",
    "bioplastik", "kulit buah kakao", "NADES", "ekstraksi hijau",
    "Universitas Syiah Kuala", "kosmetik alami", "sustainable beauty", "zero waste",
  ],
  authors: [{ name: "Tim Riset CACAOMIST-BIOREFINERY, Universitas Syiah Kuala" }],
  openGraph: {
    title: "C.A.C.A.O – M.I.S.T™ | From Cocoa Waste to Sustainable Beauty",
    description:
      "Inovasi fotoprotektif berbasis kulit buah kakao melalui pendekatan biorefinery berkelanjutan — CACAOMIST-BIOREFINERY Research Project.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${montserrat.variable}`}>
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-montserrat-font), system-ui, sans-serif",
          backgroundColor: "#F8F6EE",
          color: "#2E6B5B",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
