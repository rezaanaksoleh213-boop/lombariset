import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Package, Layers, Box, FlaskConical, CheckCircle, Circle } from "lucide-react";
import { productSpec, packagingComponents, ingredients } from "@/lib/data/research";

export const metadata: Metadata = {
  title: "Produk — C.A.C.A.O – M.I.S.T™",
  description:
    "Spesifikasi lengkap C.A.C.A.O – M.I.S.T™ Hybrid Eco-Sunscreen Spray 100mL — formulasi berbasis NADES-pektin kulit buah kakao, Non-nano ZnO, dan Dual Eco-Packaging bioplastik selulosa.",
};

function StatusBadge({ status }: { status: string }) {
  if (status === "planned")
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full badge-planned">
        <Circle className="w-2.5 h-2.5" /> Direncanakan
      </span>
    );
  if (status === "in-progress")
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full badge-in-progress">
        <Circle className="w-2.5 h-2.5" /> Berlangsung
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full badge-verified">
      <CheckCircle className="w-2.5 h-2.5" /> Terverifikasi
    </span>
  );
}

export default function ProductPage() {
  const packagingIcons = [
    <Layers key="layers" className="w-5 h-5" />,
    <Package key="package" className="w-5 h-5" />,
    <Box key="box" className="w-5 h-5" />,
  ];

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft-beige via-ivory to-sage-aqua/10 section-py">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-cocoa-brown">
                Produk Inovasi Riset
              </span>
              <h1 className="font-playfair text-4xl sm:text-5xl text-deep-sage mt-3 mb-4 leading-tight">
                C.A.C.A.O – M.I.S.T™
              </h1>
              <p className="text-deep-sage/60 text-base font-medium mb-2">
                Circular Antioxidant Cacao Active Organics – Moisturizing Invisible Sunscreen Technology
              </p>
              <p className="text-sm text-sage-aqua font-semibold tracking-wide mb-6">
                Hybrid Eco-Sunscreen Spray · {productSpec.volume}
              </p>

              {/* Research prototype warning */}
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 text-sm">Prototipe dalam Tahap Pengembangan & Pengujian</p>
                  <p className="text-amber-700/70 text-xs mt-1 leading-relaxed">
                    Produk ini adalah prototipe riset mahasiswa. Belum disetujui untuk penjualan komersial. 
                    Semua klaim efektivitas (SPF 30+, antioksidan, biodegradasi) merupakan target penelitian 
                    yang belum diverifikasi laboratorium.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Volume", value: productSpec.volume },
                  { label: "Kemasan", value: productSpec.containerMaterial },
                  { label: "Aplikasi", value: "Fine-Mist Spray" },
                  { label: "Target pH", value: productSpec.targetPH },
                ].map((item) => (
                  <div key={item.label} className="bg-soft-beige/50 rounded-xl p-4">
                    <p className="text-xs text-deep-sage/50 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-deep-sage">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Non-transactional interest form placeholder */}
              <div className="bg-sage-aqua/10 border border-sage-aqua/30 rounded-2xl p-5">
                <p className="font-semibold text-deep-sage text-sm mb-1">📋 Daftarkan Minat</p>
                <p className="text-xs text-deep-sage/60 mb-3">
                  Ingin mendapatkan info terbaru perkembangan riset ini? Daftarkan minat Anda 
                  (tidak ada transaksi — penelitian belum memasuki tahap komersialisasi).
                </p>
                <Link
                  href="/research"
                  className="text-xs font-semibold text-deep-sage hover:text-cocoa-brown transition-colors"
                >
                  → Pelajari perkembangan penelitian
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-4xl overflow-hidden shadow-2xl shadow-sage-aqua/10 border border-sage-aqua/15">
                <Image
                  src="/gambarcacao.png"
                  alt="C.A.C.A.O – M.I.S.T™ — Produk lengkap dengan botol semprot, Eco-Sleeve, dan Outer Box bioplastik"
                  width={720}
                  height={540}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients section */}
      <section className="section-py bg-soft-beige/30" aria-labelledby="ingredient-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-cocoa-brown">
              Komposisi Formulasi
            </span>
            <h2 id="ingredient-heading" className="font-playfair text-3xl text-deep-sage mt-2 mb-3">
              Bahan-Bahan Aktif & Fungsinya
            </h2>
            <p className="text-deep-sage/60 text-sm">
              Sumber: Proposal CACAOMIST-BIOREFINERY, Sub-Bab 3.3.3 — Formulasi Sunscreen Spray
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ingredients.map((ing) => (
              <div
                key={ing.id}
                className="bg-ivory border border-sage-aqua/15 rounded-2xl p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-deep-sage text-sm">{ing.name}</span>
                  <span className="text-xs font-mono bg-soft-beige px-2 py-0.5 rounded text-cocoa-brown font-semibold">
                    {ing.percentage}
                  </span>
                </div>
                <p className="text-xs text-deep-sage/60 leading-relaxed flex-1">{ing.role}</p>
                <p className="text-xs text-deep-sage/40 border-t border-soft-beige pt-2">
                  📍 {ing.origin}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-deep-sage/40">
            <FlaskConical className="w-4 h-4" />
            <span>
              Formulasi di atas merupakan rancangan riset. Uji fisikokimia, efektivitas, dan keamanan 
              akan dilaksanakan Jan–Jun 2027.
            </span>
          </div>
        </div>
      </section>

      {/* Packaging section */}
      <section className="section-py bg-ivory" aria-labelledby="packaging-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-cocoa-brown">
              Dual Eco-Packaging
            </span>
            <h2 id="packaging-heading" className="font-playfair text-3xl text-deep-sage mt-2 mb-3">
              Tiga Komponen Kemasan
            </h2>
            <p className="text-deep-sage/60 text-sm">
              Sistem kemasan zero-waste berbasis selulosa kulit buah kakao (CPH) + serat ampas tebu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagingComponents.map((pkg, i) => (
              <div
                key={pkg.id}
                className="bg-soft-beige/40 border border-sage-aqua/15 rounded-3xl p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-sage-aqua/15 text-deep-sage flex items-center justify-center mb-5">
                  {packagingIcons[i]}
                </div>
                <h3 className="font-playfair font-bold text-deep-sage text-lg mb-1">{pkg.nameId}</h3>
                <p className="text-xs text-sage-aqua font-semibold mb-3">{pkg.material}</p>
                <p className="text-sm text-deep-sage/60 leading-relaxed mb-4">{pkg.description}</p>

                <div className="space-y-2 text-xs border-t border-sage-aqua/15 pt-4">
                  <div className="flex justify-between gap-2">
                    <span className="text-deep-sage/50">Komposisi:</span>
                    <span className="text-deep-sage/70 text-right">{pkg.composition}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-deep-sage/50">Biodegradasi:</span>
                    <span className="text-deep-sage/70">{pkg.targetBiodegradationDays}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <StatusBadge status={pkg.researchStatus} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
