"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, FlaskConical, Leaf, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ivory"
      aria-label="Hero — From Cocoa Waste to Sustainable Beauty"
    >
      {/* Background botanical shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sage-aqua/10 blur-3xl" />
        <div className="absolute top-1/3 -left-16 w-72 h-72 rounded-full bg-soft-beige/60 blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-sage-aqua/15 blur-2xl" />
        {/* Dotted mist pattern */}
        <svg className="absolute top-1/4 right-8 opacity-[0.06] w-64 h-64" viewBox="0 0 200 200">
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 26 + 10}
                cy={row * 26 + 10}
                r="2.5"
                fill="#A8CFC1"
              />
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage-aqua/40 bg-sage-aqua/10 text-deep-sage text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <FlaskConical className="w-3.5 h-3.5 text-deep-sage" />
              <span>CACAOMIST-BIOREFINERY · Riset Mahasiswa USK 2026</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-playfair text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-tight text-deep-sage mb-6"
            >
              From Cocoa Waste{" "}
              <span className="italic text-cocoa-brown">to Sustainable</span>{" "}
              Beauty
            </motion.h1>

            {/* Subtitle in Indonesian */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-deep-sage/70 text-lg leading-relaxed mb-8 max-w-lg font-light"
            >
              Inovasi fotoprotektif berbasis kulit buah kakao melalui pendekatan 
              <strong className="font-semibold text-deep-sage"> biorefinery berkelanjutan</strong> — mengubah 
              limbah menjadi perlindungan dan keindahan.
            </motion.p>

            {/* Highlights row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                { icon: <Leaf className="w-4 h-4" />, label: "100% Valorisasi CPH" },
                { icon: <Sparkles className="w-4 h-4" />, label: "Cascade Biorefinery" },
                { icon: <FlaskConical className="w-4 h-4" />, label: "Green Chemistry" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-deep-sage/80 font-medium"
                >
                  <span className="text-sage-aqua">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-deep-sage text-ivory text-sm font-semibold rounded-xl hover:bg-forest-green transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Jelajahi Inovasi
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-deep-sage/20 text-deep-sage text-sm font-semibold rounded-xl hover:border-sage-aqua hover:bg-sage-aqua/10 transition-all duration-200"
              >
                Telusuri Penelitian
              </Link>
            </motion.div>

            {/* Research note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 text-xs text-deep-sage/40 font-medium"
            >
              Prototipe dalam tahap pengembangan · Penelitian direncanakan Jan–Jun 2027 · Universitas Syiah Kuala
            </motion.p>
          </div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sage-aqua/20 to-soft-beige/40 blur-sm scale-105" />
              {/* Main product image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sage-aqua/10 border border-sage-aqua/20">
                <Image
                  src="/gambarcacao.png"
                  alt="C.A.C.A.O – M.I.S.T™ Hybrid Eco-Sunscreen Spray 100mL dengan Eco-Sleeve dan Outer Box bioplastik selulosa"
                  width={720}
                  height={540}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              {/* Floating badge: Prototype */}
              <div className="absolute top-4 right-4 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm">
                Prototipe Riset
              </div>
              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-ivory border border-sage-aqua/30 rounded-2xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sage-aqua/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-deep-sage" />
                </div>
                <div>
                  <p className="text-deep-sage font-bold text-sm">5 Tahap</p>
                  <p className="text-deep-sage/60 text-xs">Cascade Biorefinery</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-xs text-deep-sage/40 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-deep-sage/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
