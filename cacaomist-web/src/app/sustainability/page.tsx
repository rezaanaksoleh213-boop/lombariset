import type { Metadata } from "next";
import Link from "next/link";
import { Recycle, Leaf, Package, Globe, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Keberlanjutan — C.A.C.A.O – M.I.S.T™",
  description:
    "Program keberlanjutan CACAOMIST-BIOREFINERY — valorisasi circular CPH, kemasan bioplastik selulosa, panduan komposting, dan circular bioeconomy kakao Indonesia.",
};

const composting = [
  "Lepaskan Eco-Sleeve dari botol rPET primer.",
  "Sobek atau potong Eco-Sleeve dan Outer Box menjadi potongan kecil agar terurai lebih cepat.",
  "Kubur potongan di dalam pot tanah atau tumpukan kompos aktif pada kedalaman ±5 cm.",
  "Jaga kelembapan tanah 60–70% dengan penyiraman berkala.",
  "Kemasan bioplastik dirancang untuk terurai alami (target < 60 hari — belum terverifikasi lab).",
  "Botol rPET primer: serahkan ke bank sampah atau titik daur ulang plastik setempat.",
];

export default function SustainabilityPage() {
  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-leaf-green/20 via-ivory to-sage-aqua/10 section-py">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-3xl bg-sage-aqua/15 flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8 text-deep-sage" />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-sage-aqua">Keberlanjutan</span>
          <h1 className="font-playfair text-4xl sm:text-5xl text-deep-sage mt-4 mb-5 leading-tight">
            Circular Economy{" "}
            <span className="italic text-cocoa-brown">Kakao Indonesia</span>
          </h1>
          <p className="text-deep-sage/60 text-lg max-w-2xl mx-auto leading-relaxed">
            CACAOMIST-BIOREFINERY merancang sistem produksi yang mengubah limbah menjadi nilai — 
            dari kebun kakao Pidie, Aceh hingga kemasan yang kembali ke tanah.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-0">
        <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Catatan Penting:</strong> Semua klaim keberlanjutan (biodegradasi, zero-waste) merupakan 
            <strong> target penelitian</strong> yang akan diverifikasi melalui pengujian laboratorium standar 
            pada Jan–Jun 2027. Angka spesifik dampak lingkungan belum tersedia.
          </p>
        </div>
      </div>

      {/* Circular flow */}
      <section className="section-py bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-deep-sage mb-4 text-center">
            Siklus Zero-Waste Cascade Biorefinery
          </h2>
          <p className="text-center text-deep-sage/60 text-sm mb-12 max-w-xl mx-auto">
            Alur pengolahan terintegrasi di mana setiap residu menjadi input tahap berikutnya
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                phase: "INPUT",
                title: "Kulit Buah Kakao (CPH)",
                desc: "70–75% bobot buah segar yang sebelumnya dibuang petani secara terbuka. Sumber dari perkebunan rakyat Pidie, Aceh.",
                color: "bg-cocoa-brown/8 border-cocoa-brown/20 text-cocoa-brown",
              },
              {
                icon: <Recycle className="w-6 h-6" />,
                phase: "PROSES",
                title: "Cascade Biorefinery (5 Tahap)",
                desc: "Ekstraksi bertingkat: bioaktif (NADES-UAE) → pektin (MAE) → selulosa bioplastik. Setiap residu digunakan di tahap berikutnya.",
                color: "bg-sage-aqua/10 border-sage-aqua/25 text-deep-sage",
              },
              {
                icon: <Package className="w-6 h-6" />,
                phase: "OUTPUT",
                title: "Produk & Kemasan Berkelanjutan",
                desc: "Sunscreen spray CACAO-MIST™ + kemasan bioplastik Eco-Sleeve & Outer Box yang dapat terurai alami.",
                color: "bg-leaf-green/10 border-leaf-green/20 text-forest-green",
              },
            ].map((item) => (
              <div key={item.phase} className={`rounded-3xl border p-7 ${item.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <span className="text-xs font-bold tracking-widest uppercase">{item.phase}</span>
                </div>
                <h3 className="font-playfair font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Packaging deep dive */}
      <section className="section-py bg-soft-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-sage-aqua">Dual Eco-Packaging</span>
              <h2 className="font-playfair text-3xl text-deep-sage mt-3 mb-5 leading-tight">
                Kemasan Bioplastik Selulosa CPH
              </h2>
              <div className="space-y-4 text-deep-sage/70 text-sm leading-relaxed">
                <p>
                  Eco-Sleeve dan Outer Box difabrikasi dari <strong className="text-deep-sage">75% serat selulosa CPH</strong> + 
                  25% serat penguat ampas tebu, dikombinasikan dengan plastisiser gliserol dan sorbitol nabati.
                </p>
                <p>
                  Proses fabrikasi menggunakan <strong className="text-deep-sage">metode casting</strong> — campuran biopolimer 
                  dituang ke cetakan dan dikeringkan untuk menghasilkan film bioplastik fleksibel.
                </p>
                <p>
                  Penelitian akan menguji sifat bioplastik meliputi daya serap air, laju transmisi uap air (WVTR), 
                  dan biodegradabilitas di dalam tanah selama 60 hari.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                {[
                  { label: "Selulosa CPH", value: "75%" },
                  { label: "Serat Ampas Tebu", value: "25%" },
                  { label: "Target Biodegradasi", value: "< 60 hari*" },
                  { label: "Plastisiser", value: "Gliserol + Sorbitol" },
                ].map((item) => (
                  <div key={item.label} className="bg-ivory rounded-xl p-4 border border-sage-aqua/15">
                    <p className="text-deep-sage/50 mb-1">{item.label}</p>
                    <p className="font-semibold text-deep-sage">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-deep-sage/40 mt-3 italic">* Target riset, belum terverifikasi laboratorium</p>
            </div>

            {/* Composting guide */}
            <div className="bg-deep-sage rounded-3xl p-8 text-ivory">
              <h3 className="font-playfair text-xl mb-6 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-sage-aqua" />
                Panduan Komposting Mandiri
              </h3>
              <ol className="space-y-3">
                {composting.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ivory/80">
                    <span className="w-6 h-6 rounded-full bg-sage-aqua/20 text-sage-aqua flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for farmers */}
      <section className="section-py bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-deep-sage mb-10 text-center">
            Manfaat bagi Pemangku Kepentingan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Bagi Petani Kakao",
                points: [
                  "Nilai ekonomi dari limbah CPH yang sebelumnya zero-value",
                  "Potensi pendapatan tambahan dari penjualan CPH kering",
                  "Mengurangi beban pengelolaan limbah perkebunan",
                ],
              },
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Bagi Lingkungan",
                points: [
                  "Pengurangan limbah organik open-dumping",
                  "Mengurangi emisi gas rumah kaca dari pembusukan CPH",
                  "Alternatif kemasan plastik sintetis non-degradable",
                ],
              },
              {
                icon: <Recycle className="w-6 h-6" />,
                title: "Bagi Industri",
                points: [
                  "Bahan aktif sunscreen alami lokal pengganti impor",
                  "Template cascade biorefinery untuk komoditas lain",
                  "Model integrasi kosmetik-kemasan berbasis biomassa",
                ],
              },
            ].map((card) => (
              <div key={card.title} className="bg-soft-beige/40 rounded-2xl p-6">
                <div className="text-sage-aqua mb-4">{card.icon}</div>
                <h3 className="font-playfair font-bold text-deep-sage text-lg mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-deep-sage/70">
                      <CheckCircle className="w-4 h-4 text-sage-aqua shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
