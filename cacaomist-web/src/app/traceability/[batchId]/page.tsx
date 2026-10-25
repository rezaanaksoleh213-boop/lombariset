import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Circle, Clock, MapPin, FlaskConical, Package, Leaf, AlertTriangle, ArrowLeft } from "lucide-react";
import { getBatchById } from "@/lib/data/batches";
import type { ResearchStatus } from "@/types";
import BatchQRSection from "@/components/interactive/BatchQRSection";

interface Props {
  params: Promise<{ batchId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { batchId } = await params;
  const batch = getBatchById(batchId);
  if (!batch) {
    return { title: "Batch Tidak Ditemukan | CACAO-MIST™" };
  }
  return {
    title: `Batch ${batch.batchId} — Traceability | CACAO-MIST™`,
    description: `Data traceability batch ${batch.batchId}: asal ${batch.origin.regency}, ${batch.origin.province}. Status: ${batch.dataLabel}.`,
  };
}

function StatusPill({ status }: { status: ResearchStatus }) {
  const map = {
    planned: { label: "Direncanakan", cls: "badge-planned", icon: <Circle className="w-2.5 h-2.5" /> },
    "in-progress": { label: "Berlangsung", cls: "badge-in-progress", icon: <Clock className="w-2.5 h-2.5" /> },
    verified: { label: "Terverifikasi", cls: "badge-verified", icon: <CheckCircle className="w-2.5 h-2.5" /> },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.cls}`}>
      {s.icon} {s.label}
    </span>
  );
}

export default async function BatchDetailPage({ params }: Props) {
  const { batchId } = await params;
  const batch = getBatchById(batchId);

  if (!batch) {
    notFound();
  }

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/traceability"
          className="inline-flex items-center gap-2 text-sm text-deep-sage/60 hover:text-deep-sage transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Traceability
        </Link>
      </div>

      {/* Header */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-5 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs bg-deep-sage text-ivory px-3 py-1.5 rounded-lg font-semibold tracking-wide">
                  {batch.batchId}
                </span>
                <span className="demo-label">⚠️ {batch.dataLabel}</span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-4xl text-deep-sage leading-tight">
                {batch.brandName}
              </h1>
              <p className="text-deep-sage/60 text-sm mt-1">{batch.productCode} · {batch.rawMaterial}</p>
            </div>
            <div className="text-right text-xs text-deep-sage/40">
              <p>Diperbarui: {batch.lastUpdated}</p>
              <p>Verifikasi: {batch.verificationStatus === "unverified" ? "Belum terverifikasi" : batch.verificationStatus}</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">{batch.disclaimer}</p>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left col: QR + origin */}
            <div className="space-y-6">
              {/* QR Code */}
              <div className="bg-ivory border border-sage-aqua/20 rounded-3xl p-6 text-center">
                <p className="font-semibold text-deep-sage text-sm mb-1">QR Smart Packaging</p>
                <p className="text-xs text-deep-sage/50 mb-5">Scan untuk halaman ini</p>
                <BatchQRSection batchId={batch.batchId} />
              </div>

              {/* Origin */}
              <div className="bg-soft-beige/50 border border-sage-aqua/15 rounded-2xl p-5">
                <h2 className="font-semibold text-deep-sage text-sm flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-sage-aqua" /> Asal Bahan Baku
                </h2>
                <div className="space-y-2 text-xs text-deep-sage/70">
                  <div><span className="font-medium">Kabupaten:</span> {batch.origin.regency}</div>
                  <div><span className="font-medium">Provinsi:</span> {batch.origin.province}</div>
                  <div><span className="font-medium">Negara:</span> {batch.origin.country}</div>
                  <div><span className="font-medium">Periode Panen:</span> {batch.harvestPeriod}</div>
                </div>
                <p className="text-deep-sage/50 text-xs mt-3 leading-relaxed">{batch.origin.generalDescription}</p>
                {batch.origin.coordinatesSource === "estimated" && (
                  <p className="text-xs text-amber-700/70 mt-2 italic">
                    * Koordinat GPS diestimasi dari pusat wilayah — belum terverifikasi lapangan
                  </p>
                )}
              </div>
            </div>

            {/* Right cols: stages + results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Process stages */}
              <div className="bg-ivory border border-sage-aqua/15 rounded-3xl p-6">
                <h2 className="font-semibold text-deep-sage flex items-center gap-2 mb-5">
                  <FlaskConical className="w-4 h-4 text-sage-aqua" /> Tahapan Proses Produksi
                </h2>
                <div className="space-y-4">
                  {batch.processStages.map((stage, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-deep-sage/10 text-deep-sage flex items-center justify-center text-xs font-bold shrink-0">
                          {i + 1}
                        </div>
                        {i < batch.processStages.length - 1 && (
                          <div className="w-0.5 h-full bg-sage-aqua/20 mt-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-semibold text-deep-sage text-sm">{stage.stage}</p>
                        <p className="text-xs text-deep-sage/60 mt-1 leading-relaxed">{stage.description}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="text-xs text-deep-sage/40">📍 {stage.location}</span>
                          {stage.date ? (
                            <span className="text-xs text-deep-sage/40">📅 {stage.date}</span>
                          ) : (
                            <span className="text-xs text-amber-600/70 italic">Belum dilaksanakan</span>
                          )}
                        </div>
                        {stage.notes && (
                          <p className="text-xs text-deep-sage/40 mt-1 italic">{stage.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lab Results */}
              <div className="bg-ivory border border-sage-aqua/15 rounded-3xl p-6">
                <h2 className="font-semibold text-deep-sage flex items-center gap-2 mb-2">
                  <FlaskConical className="w-4 h-4 text-sage-aqua" /> Hasil Pengujian Laboratorium
                </h2>
                <p className="text-xs text-amber-700/70 mb-5">
                  ⚠️ Data di bawah adalah TARGET RISET — belum ada pengukuran aktual
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {batch.labResults.map((result, i) => (
                    <div key={i} className="bg-soft-beige/40 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="font-semibold text-deep-sage text-xs">{result.parameter}</p>
                        <StatusPill status={result.status} />
                      </div>
                      <div className="text-xs text-deep-sage/60 space-y-1">
                        <div><span className="font-medium">Target:</span> {result.target} {result.unit !== "–" ? result.unit : ""}</div>
                        <div>
                          <span className="font-medium">Hasil:</span>{" "}
                          {result.result ?? <span className="italic text-deep-sage/30">Belum tersedia</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging & Composting */}
              <div className="bg-ivory border border-sage-aqua/15 rounded-3xl p-6">
                <h2 className="font-semibold text-deep-sage flex items-center gap-2 mb-5">
                  <Package className="w-4 h-4 text-sage-aqua" /> Kemasan & Panduan Komposting
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-xs">
                  <div className="bg-soft-beige/40 rounded-xl p-3">
                    <p className="font-semibold text-deep-sage mb-1">Botol Primer</p>
                    <p className="text-deep-sage/60">{batch.packaging.primaryContainer}</p>
                  </div>
                  <div className="bg-soft-beige/40 rounded-xl p-3">
                    <p className="font-semibold text-deep-sage mb-1">Eco-Sleeve</p>
                    <p className="text-deep-sage/60">{batch.packaging.ecoSleeve}</p>
                  </div>
                  <div className="bg-soft-beige/40 rounded-xl p-3">
                    <p className="font-semibold text-deep-sage mb-1">Outer Box</p>
                    <p className="text-deep-sage/60">{batch.packaging.outerBox}</p>
                  </div>
                </div>

                <h3 className="flex items-center gap-2 text-sm font-semibold text-deep-sage mb-3">
                  <Leaf className="w-4 h-4 text-sage-aqua" /> Panduan Pengomposan Mandiri
                </h3>
                <ol className="space-y-2">
                  {batch.packaging.composting.map((step, i) => (
                    <li key={i} className="flex gap-3 text-xs text-deep-sage/70">
                      <span className="w-5 h-5 rounded-full bg-sage-aqua/20 text-deep-sage flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-amber-700/70 italic">
                  * Kemampuan biodegradasi adalah target riset yang belum diverifikasi laboratorium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
