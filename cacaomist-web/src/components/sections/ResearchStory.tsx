"use client";

import { motion } from "framer-motion";
import { Recycle, Droplets, Package, Leaf } from "lucide-react";

const storyCards = [
  {
    icon: <Leaf className="w-6 h-6" />,
    number: "70–75%",
    label: "Limbah CPH",
    description:
      "Kulit buah kakao merupakan 70–75% bobot buah segar — dan 95% petani swadaya membuangnya secara terbuka.",
    color: "text-cocoa-brown",
    bg: "bg-cocoa-brown/10",
    border: "border-cocoa-brown/20",
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    number: "NADES-UAE",
    label: "Ekstraksi Hijau",
    description:
      "Pelarut hijau Natural Deep Eutectic Solvent berbasis ultrasonik mengekstraksi bioaktif tanpa bahan kimia berbahaya.",
    color: "text-deep-sage",
    bg: "bg-sage-aqua/15",
    border: "border-sage-aqua/30",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    number: "100%",
    label: "Zero-Waste Target",
    description:
      "Setiap fraksi CPH diproses secara kaskade — dari bioaktif, pektin, hingga selulosa bioplastik kemasan.",
    color: "text-deep-sage",
    bg: "bg-leaf-green/10",
    border: "border-leaf-green/20",
  },
  {
    icon: <Package className="w-6 h-6" />,
    number: "< 60 Hari",
    label: "Target Biodegradasi",
    description:
      "Kemasan bioplastik Dual Eco-Packaging (Eco-Sleeve & Outer Box) dari selulosa CPH dirancang terurai di tanah.",
    color: "text-muted-gold",
    bg: "bg-muted-gold/10",
    border: "border-muted-gold/20",
  },
];

export default function ResearchStory() {
  return (
    <section
      id="research-story"
      className="section-py bg-soft-beige/40"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest uppercase text-cocoa-brown"
          >
            Latar Belakang Penelitian
          </motion.span>
          <motion.h2
            id="story-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-deep-sage mt-3 mb-6 leading-tight"
          >
            Mengapa Kulit Buah Kakao?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-deep-sage/70 text-lg leading-relaxed"
          >
            Indonesia memiliki lahan kakao seluas 1,5 juta hektar, dengan Aceh sebagai sentra produksi utama. 
            Namun di balik potensi besar ini tersembunyi masalah kritis: limbah kulit buah kakao (CPH) 
            yang dibuang secara masif, padahal mengandung senyawa bioaktif berharga.
          </motion.p>
        </div>

        {/* Story cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {storyCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${card.bg} ${card.border} border rounded-2xl p-6`}
            >
              <div className={`${card.color} mb-4`}>{card.icon}</div>
              <p className={`font-playfair font-bold text-2xl ${card.color} mb-1`}>
                {card.number}
              </p>
              <p className="font-semibold text-deep-sage text-sm mb-3">{card.label}</p>
              <p className="text-deep-sage/60 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Extended story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl text-deep-sage mb-4">
              Cascade Biorefinery: Mengolah Setiap Fraksi CPH
            </h3>
            <div className="space-y-4 text-deep-sage/70 text-base leading-relaxed">
              <p>
                Penelitian CACAOMIST-BIOREFINERY memperkenalkan pendekatan <strong className="text-deep-sage font-semibold">closed-loop cascading biorefinery</strong> — 
                sistem pengolahan terintegrasi di mana setiap tahap menggunakan residu tahap sebelumnya.
              </p>
              <p>
                CPH pertama-tama diekstraksi senyawa bioaktifnya (fitosterol & polifenol) menggunakan NADES-UAE. 
                Ampas sisa kemudian diekstraksi pektinnya via MAE. Residu akhir diisolasi selulosanya untuk 
                difabrikasi menjadi kemasan bioplastik.
              </p>
              <p>
                Hasilnya: satu bahan baku menghasilkan <strong className="text-deep-sage font-semibold">bahan aktif sunscreen, penstabil emulsi, DAN kemasan</strong> — 
                dengan target 100% zero-waste circular bioeconomy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-deep-sage rounded-3xl p-8 text-ivory relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-sage-aqua/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
            <h3 className="font-playfair text-xl mb-6 relative z-10">Kandungan Berharga CPH</h3>
            <div className="space-y-4 relative z-10">
              {[
                { label: "Pektin", value: "6,1%–9,2%", desc: "Penstabil emulsi hidrojel" },
                { label: "Selulosa", value: "24%–35%", desc: "Biomaterial kemasan bioplastik" },
                { label: "Fitosterol", value: "β-sitosterol, stigmasterol, campesterol", desc: "Antioksidan & UV-filter alami" },
                { label: "Polifenol & Flavonoid", value: "Katekin, epikatekin, asam ferulat", desc: "Perlindungan radikal bebas ROS" },
              ].map((item) => (
                <div key={item.label} className="border-b border-sage-aqua/20 pb-3 last:border-0">
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <span className="font-semibold text-sage-aqua text-sm">{item.label}</span>
                    <span className="text-ivory/70 text-xs text-right">{item.value}</span>
                  </div>
                  <p className="text-ivory/50 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-ivory/30 text-xs mt-4 relative z-10">
              Sumber: Yahya et al., 2021; Sarah et al., 2022; Azmin et al., 2020
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
