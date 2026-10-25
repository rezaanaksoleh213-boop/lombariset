"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Recycle, Leaf, Globe, Package } from "lucide-react";

const pillars = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Valorisasi CPH",
    desc: "Mengubah 70–75% limbah buah kakao menjadi produk bernilai tinggi — bahan aktif kosmetik dan kemasan bioplastik.",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "Zero-Waste Target",
    desc: "Setiap fraksi CPH dimanfaatkan secara kaskade: bioaktif → pektin → selulosa bioplastik. Target closed-loop biorefinery.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Kemasan Bioplastik",
    desc: "Eco-Sleeve & Outer Box dari selulosa CPH. Dirancang terurai alami di tanah — alternatif kemasan plastik sintetis.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Ekonomi Sirkular",
    desc: "Meningkatkan nilai ekonomi petani kakao Pidie, Aceh sekaligus mendukung terwujudnya circular bioeconomy nasional.",
  },
];

export default function SustainabilityTeaser() {
  return (
    <section id="sustainability" className="section-py bg-ivory" aria-labelledby="sustain-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-sage-aqua"
          >
            Keberlanjutan
          </motion.span>
          <motion.h2
            id="sustain-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl text-deep-sage mt-3 mb-4"
          >
            Inovasi yang Memperhatikan{" "}
            <span className="italic text-cocoa-brown">Bumi</span>
          </motion.h2>
          <p className="text-deep-sage/60 text-base leading-relaxed">
            CACAOMIST-BIOREFINERY merancang sistem produksi yang mengurangi dampak lingkungan 
            sambil meningkatkan nilai ekonomi limbah kakao nasional.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-soft-beige/50 hover:bg-sage-aqua/10 border border-transparent hover:border-sage-aqua/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="text-sage-aqua mb-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
              <h3 className="font-playfair font-bold text-deep-sage text-lg mb-2">{p.title}</h3>
              <p className="text-deep-sage/60 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
        >
          <div className="text-2xl">⚠️</div>
          <p className="text-amber-800 text-sm leading-relaxed flex-1">
            <strong>Catatan Riset:</strong> Semua manfaat keberlanjutan yang disebutkan (biodegradasi, zero-waste) 
            merupakan <strong>target penelitian</strong> yang akan diverifikasi melalui pengujian laboratorium 
            standar pada Januari–Juni 2027. Belum ada klaim terverifikasi saat ini.
          </p>
          <Link
            href="/sustainability"
            className="text-amber-700 text-sm font-semibold hover:text-amber-900 whitespace-nowrap transition-colors"
          >
            Selengkapnya →
          </Link>
        </motion.div>

        <div className="text-center">
          <Link
            href="/sustainability"
            className="inline-flex items-center gap-2 px-8 py-4 bg-deep-sage text-ivory text-sm font-semibold rounded-xl hover:bg-forest-green transition-all shadow-md"
          >
            <Leaf className="w-4 h-4" />
            Pelajari Keberlanjutan Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
