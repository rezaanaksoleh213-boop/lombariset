"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { QrCode, MapPin, FlaskConical, Leaf, ChevronRight } from "lucide-react";

const features = [
  { icon: <MapPin className="w-5 h-5" />, label: "Asal Bahan Baku", desc: "Lokasi panen CPH — Pidie, Aceh" },
  { icon: <FlaskConical className="w-5 h-5" />, label: "Tahap Produksi Riset", desc: "5 tahap cascade biorefinery" },
  { icon: <FlaskConical className="w-5 h-5" />, label: "Informasi Uji Lab", desc: "Status pengujian (target & hasil)" },
  { icon: <Leaf className="w-5 h-5" />, label: "Panduan Komposting", desc: "Cara mengompos kemasan bioplastik" },
];

export default function SmartPackagingTeaser() {
  return (
    <section id="smart-packaging" className="section-py bg-deep-sage" aria-labelledby="qr-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: QR visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* QR mockup card */}
              <div className="bg-ivory rounded-3xl p-8 shadow-2xl shadow-black/30 w-72">
                <p className="font-playfair text-deep-sage text-sm font-semibold mb-1">C.A.C.A.O – M.I.S.T™</p>
                <p className="text-xs text-deep-sage/50 mb-5">Scan untuk menelusuri asal & riset</p>
                {/* QR code placeholder visual */}
                <div className="w-full aspect-square bg-deep-sage/5 rounded-2xl border-2 border-dashed border-sage-aqua/40 flex flex-col items-center justify-center gap-3">
                  <QrCode className="w-16 h-16 text-deep-sage/30" />
                  <p className="text-xs text-deep-sage/40 text-center px-4">QR Code akan tercetak pada kemasan bioplastik</p>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs font-mono text-deep-sage/50 bg-soft-beige rounded-lg px-3 py-1.5">DEMO-CPH-001</p>
                </div>
              </div>
              {/* Floating annotation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-muted-gold text-ivory rounded-2xl px-4 py-2 shadow-lg text-xs font-semibold"
              >
                📱 Scan → Detail Riset
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest uppercase text-sage-aqua"
            >
              Smart Packaging QR-Code Traceability System
            </motion.span>
            <motion.h2
              id="qr-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl text-ivory mt-3 mb-5 leading-tight"
            >
              Scan, Telusuri,{" "}
              <span className="italic text-sage-aqua">Percaya</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-ivory/60 leading-relaxed mb-8"
            >
              Setiap kemasan bioplastik CACAO-MIST™ dilengkapi <strong className="text-ivory/90">Smart Packaging QR-Code</strong> unik 
              yang menghubungkan ke sistem digital traceability — transparansi rantai pasok dari perkebunan kakao Pidie 
              hingga menjadi produk jadi.
            </motion.p>

            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 text-ivory/80"
                >
                  <div className="w-9 h-9 rounded-xl bg-sage-aqua/20 border border-sage-aqua/30 flex items-center justify-center text-sage-aqua shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-ivory">{f.label}</p>
                    <p className="text-xs text-ivory/50">{f.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-ivory/20 ml-auto" />
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link
                href="/traceability/DEMO-CPH-001"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-aqua text-deep-sage text-sm font-semibold rounded-xl hover:bg-sage-aqua/90 transition-all shadow-lg group"
              >
                Coba Demo QR
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/traceability"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ivory/20 text-ivory text-sm font-medium rounded-xl hover:bg-ivory/10 transition-all"
              >
                Pelajari Traceability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
