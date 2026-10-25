import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Edukasi — CACAO-MIST™ Science Hub",
  description:
    "Platform edukasi ilmiah CACAO-MIST™ — artikel tentang green chemistry, NADES, valorisasi kakao, bioplastik, antioksidan, dan tabir surya.",
};

const categoryColors: Record<string, string> = {
  "Biorefinery & Valorisasi": "bg-cocoa-brown/10 text-cocoa-brown",
  "Green Chemistry": "bg-sage-aqua/15 text-deep-sage",
  "Sains Kulit & Antioksidan": "bg-leaf-green/10 text-forest-green",
  "Edukasi Tabir Surya": "bg-blue-50 text-blue-700",
  "Kemasan Berkelanjutan": "bg-amber-50 text-amber-700",
  "Ekonomi Sirkular": "bg-purple-50 text-purple-700",
};

export default function EducationPage() {
  return (
    <div className="pt-20 bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft-beige to-sage-aqua/15 section-py">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-3xl bg-sage-aqua/15 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-deep-sage" />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-sage-aqua">Platform Edukasi</span>
          <h1 className="font-playfair text-4xl sm:text-5xl text-deep-sage mt-4 mb-5 leading-tight">
            Science Hub
          </h1>
          <p className="text-deep-sage/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Pengetahuan ilmiah yang aksesibel — dari green chemistry dan NADES hingga sains 
            tabir surya dan ekonomi sirkular kakao.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-py bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl text-deep-sage mb-10">Semua Artikel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/education/${article.slug}`}
                className="group bg-ivory border border-sage-aqua/15 hover:border-sage-aqua/40 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-deep-sage/40">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTimeMin} menit
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-deep-sage text-lg leading-snug mb-2 group-hover:text-cocoa-brown transition-colors">
                    {article.titleId}
                  </h3>
                  <p className="text-deep-sage/60 text-sm leading-relaxed">{article.excerptId}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-sage-aqua group-hover:text-deep-sage transition-colors">
                  Baca artikel <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
