"use client";

import { useState } from "react";
import { Sun, AlertTriangle, Info, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SPFGuideClient() {
  const [uvIndex, setUvIndex] = useState(8);
  const [skinType, setSkinType] = useState("normal");
  const [activityMinutes, setActivityMinutes] = useState(60);

  const spfRecommendation = () => {
    if (uvIndex <= 2) return { spf: "SPF 15+", label: "UV Rendah", color: "text-green-700", bg: "bg-green-50 border-green-200" };
    if (uvIndex <= 5) return { spf: "SPF 30+", label: "UV Sedang", color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200" };
    if (uvIndex <= 7) return { spf: "SPF 30–50+", label: "UV Tinggi", color: "text-orange-700", bg: "bg-orange-50 border-orange-200" };
    if (uvIndex <= 10) return { spf: "SPF 50+", label: "UV Sangat Tinggi", color: "text-red-700", bg: "bg-red-50 border-red-200" };
    return { spf: "SPF 50+", label: "UV Ekstrem", color: "text-purple-700", bg: "bg-purple-50 border-purple-200" };
  };

  const reapplyNote = activityMinutes > 120
    ? "Aktivitas > 2 jam: disarankan reaplikasi sunscreen setiap 2 jam."
    : "Reaplikasi setelah 2 jam jika tetap beraktivitas di luar ruangan.";

  const rec = spfRecommendation();

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-ivory to-sage-aqua/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-3xl bg-amber-100 flex items-center justify-center mx-auto mb-6">
            <Sun className="w-8 h-8 text-amber-600" />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-sage-aqua">Panduan SPF Interaktif</span>
          <h1 className="font-playfair text-4xl sm:text-5xl text-deep-sage mt-4 mb-5 leading-tight">
            Panduan SPF Harian
          </h1>
          <p className="text-deep-sage/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Alat edukasi untuk memahami SPF, UV Index, dan kebiasaan perlindungan matahari yang baik.
          </p>

          <div className="mt-8 flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-5 text-left max-w-2xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-800 text-sm mb-1">⚠️ Bukan Kalkulator Medis</p>
              <p className="text-red-700/80 text-xs leading-relaxed">
                Alat ini bersifat <strong>edukatif semata</strong> dan tidak memberikan rekomendasi medis personal. 
                Konsultasikan dengan dokter kulit untuk kebutuhan spesifik Anda.
              </p>
              <p className="text-red-700/70 text-xs mt-2 font-semibold">
                CACAO-MIST™ belum memiliki nilai SPF terverifikasi — pengujian direncanakan Jan–Jun 2027.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="space-y-8">
              <h2 className="font-playfair text-2xl text-deep-sage">Parameter Aktivitas</h2>

              <div>
                <label className="block font-semibold text-deep-sage text-sm mb-2">
                  Indeks UV Perkiraan:{" "}
                  <span className={`font-bold ${rec.color}`}>{uvIndex}</span>
                </label>
                <input
                  type="range" min={0} max={12} value={uvIndex}
                  onChange={(e) => setUvIndex(Number(e.target.value))}
                  className="w-full accent-deep-sage"
                  aria-label="Atur indeks UV"
                />
                <div className="flex justify-between text-xs text-deep-sage/40 mt-1">
                  <span>0 — Rendah</span><span>12 — Ekstrem</span>
                </div>
                <p className="text-xs text-deep-sage/40 mt-2 italic">Cek UV Index harian di aplikasi cuaca atau situs BMKG.</p>
              </div>

              <div>
                <p className="font-semibold text-deep-sage text-sm mb-3">Tipe Kulit (Konteks Umum)</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: "light", label: "Kulit Terang" },
                    { value: "normal", label: "Kulit Normal" },
                    { value: "olive", label: "Sawo Matang" },
                    { value: "dark", label: "Kulit Gelap" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSkinType(opt.value)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                        skinType === opt.value
                          ? "bg-deep-sage text-ivory border-deep-sage shadow-sm"
                          : "bg-ivory text-deep-sage/70 border-sage-aqua/30 hover:border-sage-aqua"
                      }`}
                      aria-pressed={skinType === opt.value}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-deep-sage text-sm mb-2">
                  Durasi Aktivitas Luar Ruangan:{" "}
                  <span className="text-cocoa-brown font-bold">{activityMinutes} menit</span>
                </label>
                <input
                  type="range" min={15} max={480} step={15} value={activityMinutes}
                  onChange={(e) => setActivityMinutes(Number(e.target.value))}
                  className="w-full accent-deep-sage"
                  aria-label="Durasi aktivitas"
                />
                <div className="flex justify-between text-xs text-deep-sage/40 mt-1">
                  <span>15 menit</span><span>8 jam</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="space-y-5">
              <h2 className="font-playfair text-2xl text-deep-sage">Panduan Umum SPF</h2>

              <div className={`border rounded-2xl p-6 ${rec.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Sun className={`w-5 h-5 ${rec.color}`} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${rec.color}`}>{rec.label}</span>
                </div>
                <p className={`font-playfair text-4xl font-bold ${rec.color}`}>{rec.spf}</p>
                <p className="text-sm text-deep-sage/60 mt-2">Panduan umum berdasarkan UV Index — bukan rekomendasi medis</p>
              </div>

              <div className="bg-soft-beige/60 rounded-2xl p-5 space-y-4 text-sm">
                <div className="flex gap-3 items-start">
                  <Clock className="w-4 h-4 text-sage-aqua shrink-0 mt-0.5" />
                  <p className="text-deep-sage/70">{reapplyNote}</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Info className="w-4 h-4 text-sage-aqua shrink-0 mt-0.5" />
                  <p className="text-deep-sage/70">
                    Aplikasikan <strong>2 mg/cm²</strong> (±¼ sendok teh wajah + leher) untuk mencapai proteksi SPF pada label.
                  </p>
                </div>
              </div>

              <div className="bg-deep-sage rounded-2xl p-5 text-ivory">
                <h3 className="font-semibold text-sage-aqua text-sm mb-2">Mengapa Reaplikasi Penting?</h3>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  Sunscreen terdegradasi oleh sinar UV, keringat, dan air. 
                  Efektivitas SPF bergantung pada ketebalan aplikasi (2 mg/cm²) 
                  dan pengulangan setiap 2 jam atau setelah berenang/berkeringat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPF comparison */}
      <section className="py-20 bg-soft-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl text-deep-sage mb-8 text-center">Perbandingan Nilai SPF</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { spf: "SPF 15", pct: "93%", desc: "Menyaring ~93% sinar UV-B" },
              { spf: "SPF 30", pct: "97%", desc: "Menyaring ~97% sinar UV-B" },
              { spf: "SPF 50", pct: "98%", desc: "Menyaring ~98% sinar UV-B" },
            ].map((item) => (
              <div key={item.spf} className="bg-ivory border border-sage-aqua/15 rounded-2xl p-5 text-center">
                <p className="font-playfair font-bold text-2xl text-deep-sage mb-1">{item.spf}</p>
                <p className="text-3xl font-bold text-sage-aqua mb-2">{item.pct}</p>
                <p className="text-xs text-deep-sage/60">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-deep-sage/40 mt-4 italic">
            Nilai berlaku hanya dengan aplikasi yang benar (2 mg/cm²) dan reaplikasi setiap 2 jam.
          </p>

          <div className="mt-8 text-center">
            <Link href="/education/sinar-uv-dan-tabir-surya" className="inline-flex items-center gap-2 text-sm text-deep-sage font-semibold hover:text-cocoa-brown transition-colors">
              ← Baca artikel lengkap tentang radiasi UV dan tabir surya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
