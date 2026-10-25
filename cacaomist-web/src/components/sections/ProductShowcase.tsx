"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Layers, Box, ArrowRight } from "lucide-react";

const packagingItems = [
  {
    icon: <Layers className="w-5 h-5" />,
    name: "Botol Semprot Primer",
    sub: "rPET 100 mL",
    desc: "Botol semprot slim sage aqua dengan fine-mist pump putih dan tutup transparan. Dapat didaur ulang.",
    highlight: false,
  },
  {
    icon: <Package className="w-5 h-5" />,
    name: "Eco-Sleeve",
    sub: "Bioplastik Selulosa CPH",
    desc: "Selubung botol dari bioplastik kulit buah kakao. Dicetak QR Smart Packaging. Target terurai < 60 hari.",
    highlight: true,
  },
  {
    icon: <Box className="w-5 h-5" />,
    name: "Outer Box",
    sub: "Bioplastik Selulosa CPH",
    desc: "Kotak kemasan luar dari bioplastik selulosa CPH + serat ampas tebu. Motif botanis kakao. Target terurai < 60 hari.",
    highlight: false,
  },
];

export default function ProductShowcase() {
  return (
    <section id="product-showcase" className="section-py bg-soft-beige/30" aria-labelledby="showcase-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-cocoa-brown/10 border border-sage-aqua/15">
              <Image
                src="/gambarcacao.png"
                alt="C.A.C.A.O – M.I.S.T™ — Botol Semprot, Eco-Sleeve, dan Outer Box bioplastik selulosa kulit buah kakao"
                width={720}
                height={540}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-sage/80 to-transparent p-6">
                <p className="text-ivory font-playfair text-lg">C.A.C.A.O – M.I.S.T™</p>
                <p className="text-sage-aqua text-xs font-medium mt-1">Hybrid Eco-Sunscreen Spray · 100 mL · Prototipe Riset</p>
              </div>
            </div>
            {/* Prototype badge */}
            <div className="absolute -top-3 -right-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-2 shadow-md">
              <p className="text-amber-700 font-bold text-xs tracking-wide">PROTOTIPE</p>
              <p className="text-amber-600/70 text-xs">dalam pengembangan</p>
            </div>
          </motion.div>

          {/* Text side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest uppercase text-cocoa-brown"
            >
              Produk Inovasi
            </motion.span>
            <motion.h2
              id="showcase-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl text-deep-sage mt-3 mb-4 leading-tight"
            >
              Tiga Komponen{" "}
              <span className="italic text-cocoa-brown">Kemasan Terpadu</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-deep-sage/70 leading-relaxed mb-8"
            >
              CACAO-MIST™ hadir sebagai sistem kemasan terpadu tiga komponen — 
              setiap bagian dirancang dengan filosofi zero-waste dan sirkularitas penuh.
            </motion.p>

            {/* Packaging breakdown */}
            <div className="space-y-4 mb-8">
              {packagingItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-4 p-4 rounded-2xl border transition-all ${
                    item.highlight
                      ? "bg-sage-aqua/10 border-sage-aqua/30"
                      : "bg-ivory border-soft-beige"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.highlight ? "bg-sage-aqua/20 text-deep-sage" : "bg-soft-beige text-deep-sage/60"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-deep-sage text-sm">{item.name}</p>
                    <p className="text-xs text-sage-aqua font-medium mb-1">{item.sub}</p>
                    <p className="text-xs text-deep-sage/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 px-6 py-3 bg-deep-sage text-ivory text-sm font-semibold rounded-xl hover:bg-forest-green transition-all group"
              >
                Lihat Detail Produk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/sustainability"
                className="inline-flex items-center gap-2 px-6 py-3 border border-sage-aqua/40 text-deep-sage text-sm font-medium rounded-xl hover:bg-sage-aqua/10 transition-all"
              >
                Info Kemasan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
