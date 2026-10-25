import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, ArrowRight, Shield, MapPin, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Traceability — Smart Packaging QR-Code System",
  description:
    "Sistem QR-Code Traceability CACAO-MIST™ — telusuri asal bahan baku CPH dari Pidie Aceh, tahapan produksi riset, dan status pengujian laboratorium.",
};

export default function TraceabilityPage() {
  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-sage to-forest-green section-py">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-3xl bg-sage-aqua/20 border border-sage-aqua/30 flex items-center justify-center mx-auto mb-6">
            <QrCode className="w-8 h-8 text-sage-aqua" />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-sage-aqua">
            Smart Packaging QR-Code Traceability System
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl text-ivory mt-4 mb-5 leading-tight">
            Transparansi Rantai Pasok CPH
          </h1>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Setiap kemasan bioplastik CACAO-MIST™ dilengkapi QR Code unik. Scan untuk menelusuri 
            asal bahan baku, tahapan riset, dan status pengujian laboratorium.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-py bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-deep-sage mb-10 text-center">Bagaimana Cara Kerjanya?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">
            {[
              { step: "1", icon: <QrCode className="w-6 h-6" />, title: "Scan QR Code", desc: "Scan QR yang tercetak pada Eco-Sleeve atau Outer Box bioplastik." },
              { step: "2", icon: <MapPin className="w-6 h-6" />, title: "Asal Bahan Baku", desc: "Lihat asal CPH dari perkebunan Kabupaten Pidie, Aceh." },
              { step: "3", icon: <FlaskConical className="w-6 h-6" />, title: "Tahapan Produksi", desc: "Telusuri 5 tahap cascade biorefinery dari CPH ke produk." },
              { step: "4", icon: <Shield className="w-6 h-6" />, title: "Status Pengujian", desc: "Cek status uji SPF, antioksidan, keamanan BPOM, dan bioplastik." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-sage-aqua/15 text-deep-sage flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="w-7 h-7 rounded-full bg-deep-sage text-ivory flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-deep-sage text-sm mb-2">{item.title}</h3>
                <p className="text-deep-sage/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Demo batch link */}
          <div className="max-w-2xl mx-auto bg-soft-beige/50 border border-sage-aqua/20 rounded-3xl p-8 text-center">
            <div className="w-20 h-20 rounded-3xl bg-deep-sage/5 border-2 border-dashed border-sage-aqua/40 flex items-center justify-center mx-auto mb-5">
              <QrCode className="w-10 h-10 text-deep-sage/30" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-700 font-semibold mb-4">
              DATA SIMULASI / DEMO
            </div>
            <h3 className="font-playfair text-2xl text-deep-sage mb-2">Coba Demo Batch</h3>
            <p className="font-mono text-sm text-deep-sage/50 mb-3">DEMO-CPH-001</p>
            <p className="text-deep-sage/60 text-sm mb-6 leading-relaxed">
              Halaman ini menampilkan contoh demonstrasi sistem traceability. 
              Data adalah simulasi — belum ada batch riset aktual.
            </p>
            <Link
              href="/traceability/DEMO-CPH-001"
              className="inline-flex items-center gap-2 px-8 py-4 bg-deep-sage text-ivory text-sm font-semibold rounded-xl hover:bg-forest-green transition-all group shadow-lg"
            >
              Buka Demo Batch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info about QR placement */}
      <section className="section-py bg-soft-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl text-deep-sage mb-8">Data dalam Sistem Traceability</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Batch ID unik per produksi",
              "Nama produk & kode produk",
              "Asal bahan baku CPH (Pidie, Aceh)",
              "Informasi bahan baku mentah",
              "Tahapan proses produksi riset",
              "Status pengujian laboratorium",
              "Hasil uji (jika tersedia & terverifikasi)",
              "Informasi kemasan bioplastik",
              "Panduan komposting mandiri",
              "Status verifikasi data",
              "Waktu pembaruan terakhir",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-deep-sage/70">
                <div className="w-2 h-2 rounded-full bg-sage-aqua shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 text-xs text-deep-sage/40 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <strong className="text-amber-700">Catatan:</strong> Sistem traceability ini adalah prototype demonstrasi. 
            Pada produk final, setiap batch riset yang diproduksi akan memiliki halaman traceability unik 
            yang dapat diakses dengan scan QR pada kemasan.
          </div>
        </div>
      </section>
    </div>
  );
}
