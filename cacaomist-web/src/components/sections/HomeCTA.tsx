"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, BookOpen, QrCode } from "lucide-react";

const ctas = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Telusuri Penelitian",
    desc: "Baca detail metodologi, tahapan, dan target pengujian laboratorium CACAOMIST-BIOREFINERY.",
    href: "/research",
    variant: "primary" as const,
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "Coba Traceability",
    desc: "Jelajahi sistem QR Smart Packaging dan demo halaman batch DEMO-CPH-001.",
    href: "/traceability/DEMO-CPH-001",
    variant: "secondary" as const,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Artikel Edukasi",
    desc: "Pelajari NADES, green chemistry, bioplastik, dan sains tabir surya secara mudah.",
    href: "/education",
    variant: "secondary" as const,
  },
];

export default function HomeCTA() {
  return (
    <section id="home-cta" className="section-py bg-gradient-to-br from-soft-beige to-sage-aqua/20" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-deep-sage mb-5 leading-tight"
        >
          Mulai Jelajahi Inovasi
          <br />
          <span className="italic text-cocoa-brown">C.A.C.A.O – M.I.S.T™</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-deep-sage/60 text-lg max-w-xl mx-auto mb-12"
        >
          Dari metodologi riset hingga sistem traceability digital — semua tersedia di satu platform.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ctas.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className={`group flex flex-col items-center gap-4 p-8 rounded-3xl border transition-all duration-300 h-full ${
                  item.variant === "primary"
                    ? "bg-deep-sage text-ivory border-deep-sage hover:bg-forest-green shadow-xl"
                    : "bg-ivory text-deep-sage border-sage-aqua/30 hover:border-sage-aqua hover:shadow-lg"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.variant === "primary" ? "bg-sage-aqua/20" : "bg-sage-aqua/15"}`}>
                  <span className={item.variant === "primary" ? "text-sage-aqua" : "text-deep-sage"}>{item.icon}</span>
                </div>
                <div>
                  <p className={`font-playfair font-bold text-lg mb-2 ${item.variant === "primary" ? "text-ivory" : "text-deep-sage"}`}>
                    {item.title}
                  </p>
                  <p className={`text-sm leading-relaxed ${item.variant === "primary" ? "text-ivory/60" : "text-deep-sage/60"}`}>
                    {item.desc}
                  </p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold mt-auto ${item.variant === "primary" ? "text-sage-aqua" : "text-deep-sage"}`}>
                  Jelajahi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
