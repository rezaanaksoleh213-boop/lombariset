import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Circle, Clock, FlaskConical, BookOpen } from "lucide-react";
import { biorefineryStages, labTestParameters } from "@/lib/data/research";
import type { ResearchStatus } from "@/types";

export const metadata: Metadata = {
  title: "Penelitian — CACAOMIST-BIOREFINERY",
  description:
    "Detail metodologi penelitian CACAOMIST-BIOREFINERY — cascade biorefinery kulit buah kakao, NADES-UAE, MAE pectin, formulasi sunscreen, bioplastik selulosa, dan rencana pengujian laboratorium.",
};

function StatusPill({ status }: { status: ResearchStatus }) {
  const map = {
    planned: { label: "Direncanakan", class: "badge-planned", icon: <Circle className="w-2.5 h-2.5" /> },
    "in-progress": { label: "Berlangsung", class: "badge-in-progress", icon: <Clock className="w-2.5 h-2.5" /> },
    verified: { label: "Terverifikasi", class: "badge-verified", icon: <CheckCircle className="w-2.5 h-2.5" /> },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.class}`}>
      {s.icon} {s.label}
    </span>
  );
}

const categoryLabels: Record<string, string> = {
  efficacy: "Efikasi",
  formulation: "Fisikokimia",
  safety: "Keamanan",
  packaging: "Bioplastik Kemasan",
  characterization: "Karakterisasi Material",
};

const categoryColors: Record<string, string> = {
  efficacy: "bg-blue-50 border-blue-200 text-blue-800",
  formulation: "bg-green-50 border-green-200 text-green-800",
  safety: "bg-red-50 border-red-200 text-red-800",
  packaging: "bg-amber-50 border-amber-200 text-amber-800",
  characterization: "bg-purple-50 border-purple-200 text-purple-800",
};

export default function ResearchPage() {
  const categories = ["efficacy", "formulation", "safety", "packaging", "characterization"] as const;

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-sage to-forest-green section-py">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-sage-aqua">
            Riset Mahasiswa — Universitas Syiah Kuala
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl text-ivory mt-4 mb-5 leading-tight">
            CACAOMIST-BIOREFINERY
          </h1>
          <p className="text-ivory/60 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Valorisasi Sirkular Limbah Kulit Buah Kakao (<em>Theobroma cacao</em> L.) Melalui Cascade Biorefinery: 
            Formulasi Hybrid Eco-Sunscreen Spray Berbasis NADES-Pektin dan Dual Eco-Packaging Selulosa
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-ivory/70">
            <span>📍 Lab. Riset Kimia Dasar & Lab. Farmasi Terpadu, USK</span>
            <span>📅 Direncanakan: Januari – Juni 2027</span>
            <span>🏛️ FMIPA Universitas Syiah Kuala, Banda Aceh</span>
          </div>
        </div>
      </section>

      {/* Research Background */}
      <section className="section-py bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-deep-sage mb-8">Latar Belakang & Tujuan Penelitian</h2>
          <div className="space-y-5 text-deep-sage/70 leading-relaxed">
            <p>
              Industri pengolahan kakao Indonesia menghasilkan limbah padat kulit buah kakao (cocoa pod husk / CPH) 
              sebanyak <strong className="text-deep-sage">70–75%</strong> dari total bobot buah segar. 
              Di Provinsi Aceh, sekitar 95% petani swadaya membuang CPH secara terbuka, memicu pelepasan gas rumah kaca 
              dan wabah penyakit Phytophthora palmivora.
            </p>
            <p>
              Padahal CPH mengandung biomassa lignoselulosa kaya biopolimer{" "}
              <strong className="text-deep-sage">pektin (6,1%–9,2%)</strong> dan{" "}
              <strong className="text-deep-sage">selulosa (24%–35%)</strong>, serta senyawa metabolit sekunder 
              fotoprotektif (fitosterol: β-sitosterol, stigmasterol, campesterol) dan antioksidan (polifenol, flavonoid).
            </p>
            <p>
              Penelitian ini menerapkan konsep <strong className="text-deep-sage">closed-loop cascading biorefinery</strong> — 
              sistem pengolahan terintegrasi yang mengolah seluruh fraksi CPH secara berurutan tanpa menghasilkan limbah, 
              menghasilkan: bahan aktif sunscreen spray, pektin penstabil emulsi, dan selulosa bioplastik kemasan.
            </p>
          </div>

          {/* Objectives list */}
          <div className="mt-10 bg-soft-beige/50 rounded-3xl p-8">
            <h3 className="font-playfair text-xl text-deep-sage mb-6">Tujuan Penelitian (4 Objektif)</h3>
            <div className="space-y-4">
              {[
                "Mengoptimalkan green extraction bioaktif CPH (fitosterol & polifenol) menggunakan NADES (ChCl:LA 1:2) berbasis Ultrasound-Assisted Extraction (UAE).",
                "Memproduksi biopolimer pektin dari ampas CPH via Microwave-Assisted Extraction (MAE) sebagai penstabil emulsi hidrojel sediaan CACAO-MIST™.",
                "Mengevaluasi efektivitas fotoproteksi in-vitro (nilai SPF & Broad Spectrum), aktivitas antioksidan, serta profil keamanan sediaan sesuai standar BPOM.",
                "Mengisolasi selulosa dari ampas CPH untuk difabrikasi menjadi Dual Eco-Packaging bioplastik (Eco-Sleeve & Outer Box) dan menguji ketahanan air & biodegradabilitasnya.",
              ].map((obj, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-deep-sage text-ivory flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-deep-sage/70 text-sm leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Biorefinery stages */}
      <section className="section-py bg-soft-beige/30" aria-labelledby="stages-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stages-heading" className="font-playfair text-3xl text-deep-sage mb-3">
            5 Tahap Cascade Biorefinery
          </h2>
          <p className="text-deep-sage/60 text-sm mb-10">
            Sumber: Proposal BAB 3 — Metode Riset, Sub-bab 3.3.1–3.3.5
          </p>

          <div className="space-y-6">
            {biorefineryStages.map((stage, i) => (
              <div
                key={stage.id}
                className="bg-ivory border border-sage-aqua/15 rounded-3xl p-7 grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-full bg-deep-sage text-ivory flex items-center justify-center font-bold font-playfair">
                      {stage.step}
                    </span>
                    <div>
                      <p className="font-playfair font-bold text-deep-sage text-lg">{stage.titleId}</p>
                      <p className="text-xs text-deep-sage/40 font-mono">{stage.title}</p>
                    </div>
                  </div>
                  <p className="text-deep-sage/70 text-sm leading-relaxed mb-4">{stage.descriptionId}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-semibold text-deep-sage">Metode: </span>
                      <span className="text-deep-sage/60">{stage.method}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-deep-sage">Target Rendemen: </span>
                      <span className="text-deep-sage/60">{stage.targetYield}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-cocoa-brown uppercase tracking-wider mb-2">Kondisi</p>
                    <p className="text-xs text-deep-sage/60 leading-relaxed bg-soft-beige/50 rounded-xl p-3">
                      {stage.conditions}
                    </p>
                  </div>
                  <StatusPill status={stage.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Tests */}
      <section className="section-py bg-ivory" aria-labelledby="labtest-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="labtest-heading" className="font-playfair text-3xl text-deep-sage mb-3">
            Parameter Pengujian Laboratorium
          </h2>
          <p className="text-deep-sage/60 text-sm mb-2">
            Sumber: Proposal BAB 3 — Sub-bab 3.4.1–3.4.5
          </p>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 text-xs text-amber-800 mb-10 w-fit">
            ⚠️ Semua hasil saat ini adalah TARGET RISET — belum ada pengukuran aktual
          </div>

          {categories.map((cat) => {
            const params = labTestParameters.filter((p) => p.category === cat);
            if (!params.length) return null;
            return (
              <div key={cat} className="mb-10">
                <h3 className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-5 ${categoryColors[cat]}`}>
                  <FlaskConical className="w-3.5 h-3.5" />
                  {categoryLabels[cat]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {params.map((param) => (
                    <div
                      key={param.id}
                      className="bg-soft-beige/30 border border-sage-aqua/10 rounded-2xl p-5"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <p className="font-semibold text-deep-sage text-sm">{param.parameter}</p>
                        <StatusPill status={param.status} />
                      </div>
                      <div className="space-y-1.5 text-xs text-deep-sage/60">
                        <div><span className="font-medium text-deep-sage/80">Metode: </span>{param.method}</div>
                        <div><span className="font-medium text-deep-sage/80">Target: </span>{param.target}</div>
                        <div>
                          <span className="font-medium text-deep-sage/80">Hasil: </span>
                          {param.result ?? (
                            <span className="italic text-deep-sage/40">Belum tersedia — pengujian Jan–Jun 2027</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Links */}
      <section className="section-py bg-soft-beige/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl text-deep-sage mb-6">Eksplorasi Lebih Lanjut</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/traceability/DEMO-CPH-001" className="inline-flex items-center gap-2 px-6 py-3 bg-deep-sage text-ivory text-sm font-semibold rounded-xl hover:bg-forest-green transition-all">
              <BookOpen className="w-4 h-4" /> Demo Traceability
            </Link>
            <Link href="/education" className="inline-flex items-center gap-2 px-6 py-3 border border-deep-sage/20 text-deep-sage text-sm font-medium rounded-xl hover:bg-sage-aqua/10 transition-all">
              Artikel Edukasi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
