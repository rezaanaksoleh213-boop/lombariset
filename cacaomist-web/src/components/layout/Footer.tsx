import Link from "next/link";
import { Leaf, MapPin, ExternalLink, FlaskConical } from "lucide-react";

const footerLinks = {
  platform: [
    { href: "/", label: "Beranda" },
    { href: "/product", label: "Produk" },
    { href: "/research", label: "Penelitian" },
    { href: "/traceability", label: "Traceability" },
  ],
  learn: [
    { href: "/sustainability", label: "Keberlanjutan" },
    { href: "/education", label: "Artikel Edukasi" },
    { href: "/spf-guide", label: "Panduan SPF" },
    { href: "/traceability/DEMO-CPH-001", label: "Demo QR Batch" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-green text-ivory/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-sage-aqua/20 border border-sage-aqua/40 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-sage-aqua" />
              </div>
              <div>
                <p className="font-playfair font-bold text-ivory text-base tracking-wide">
                  C.A.C.A.O – M.I.S.T™
                </p>
                <p className="text-[0.6rem] font-montserrat font-medium text-sage-aqua/70 tracking-[0.12em] uppercase">
                  CACAOMIST-BIOREFINERY
                </p>
              </div>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-sm">
              Inovasi fotoprotektif berbasis kulit buah kakao melalui pendekatan biorefinery berkelanjutan. 
              Sebuah riset mahasiswa Universitas Syiah Kuala, Banda Aceh.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-ivory/50">
              <MapPin className="w-3.5 h-3.5 text-sage-aqua shrink-0" />
              <span>Pidie, Aceh, Indonesia — Asal Bahan Baku CPH</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-ivory/50">
              <FlaskConical className="w-3.5 h-3.5 text-sage-aqua shrink-0" />
              <span>Universitas Syiah Kuala — Laboratorium Riset Kimia Dasar & Farmasi</span>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="font-montserrat font-semibold text-ivory text-xs uppercase tracking-widest mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 text-sm hover:text-sage-aqua transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn links */}
          <div>
            <h3 className="font-montserrat font-semibold text-ivory text-xs uppercase tracking-widest mb-4">
              Pelajari
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 text-sm hover:text-sage-aqua transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-ivory/10 pt-8 mb-6">
          <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 text-xs text-amber-200/80 leading-relaxed">
            <strong className="text-amber-300 font-semibold">⚠️ Pernyataan Riset:</strong> C.A.C.A.O – M.I.S.T™ 
            adalah prototipe riset mahasiswa dalam tahap pengembangan dan belum merupakan produk komersial yang disetujui. 
            Semua klaim efektivitas (SPF, antioksidan, biodegradabilitas) merupakan target penelitian yang belum diverifikasi 
            secara laboratorium. Penelitian CACAOMIST-BIOREFINERY direncanakan dilaksanakan Januari–Juni 2027 di Universitas Syiah Kuala.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>
            © 2026 CACAOMIST-BIOREFINERY — Universitas Syiah Kuala, Banda Aceh. 
            Hak Cipta dalam proses pendaftaran DJKI Kemenkumham RI.
          </p>
          <div className="flex items-center gap-2">
            <span>Riset Mahasiswa FMIPA USK</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}
