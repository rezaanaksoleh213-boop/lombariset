import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-ivory flex items-center justify-center">
      <div className="text-center px-4 max-w-md">
        <div className="text-7xl mb-6">🌿</div>
        <h1 className="font-playfair text-4xl text-deep-sage mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-deep-sage/60 text-base leading-relaxed mb-8">
          Maaf, halaman yang Anda cari tidak ada. Mungkin telah dipindahkan atau URL tidak tepat.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-deep-sage text-ivory text-sm font-semibold rounded-xl hover:bg-forest-green transition-all"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/product"
            className="px-6 py-3 border border-deep-sage/20 text-deep-sage text-sm font-medium rounded-xl hover:bg-sage-aqua/10 transition-all"
          >
            Lihat Produk
          </Link>
        </div>
      </div>
    </div>
  );
}
