import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Batch Tidak Ditemukan | CACAO-MIST™ Traceability",
};

export default function BatchNotFound() {
  return (
    <div className="pt-20 bg-ivory min-h-screen flex items-center justify-center">
      <div className="text-center px-4 max-w-md">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="font-playfair text-3xl text-deep-sage mb-4">Batch Tidak Ditemukan</h1>
        <p className="text-deep-sage/60 text-sm leading-relaxed mb-8">
          ID batch yang Anda cari tidak ditemukan dalam sistem traceability. 
          Pastikan QR code yang Anda scan berasal dari kemasan resmi CACAO-MIST™.
        </p>
        <div className="space-y-3">
          <a
            href="/traceability/DEMO-CPH-001"
            className="block px-6 py-3 bg-deep-sage text-ivory text-sm font-semibold rounded-xl hover:bg-forest-green transition-all"
          >
            Coba Demo Batch (DEMO-CPH-001)
          </a>
          <a
            href="/traceability"
            className="block px-6 py-3 border border-deep-sage/20 text-deep-sage text-sm font-medium rounded-xl hover:bg-sage-aqua/10 transition-all"
          >
            ← Kembali ke Traceability
          </a>
        </div>
      </div>
    </div>
  );
}
