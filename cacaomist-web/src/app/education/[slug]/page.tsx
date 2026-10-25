import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ChevronRight } from "lucide-react";
import { getArticleBySlug, articles } from "@/lib/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  return {
    title: `${article.titleId} | Edukasi CACAO-MIST™`,
    description: article.excerptId,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back */}
        <Link href="/education" className="inline-flex items-center gap-2 text-sm text-deep-sage/60 hover:text-deep-sage mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Semua Artikel
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sage-aqua/15 text-deep-sage">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-deep-sage/40">
              <Clock className="w-3.5 h-3.5" /> {article.readingTimeMin} menit baca
            </span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl text-deep-sage leading-tight mb-4">
            {article.titleId}
          </h1>
          <p className="text-deep-sage/60 text-lg leading-relaxed">{article.excerptId}</p>
        </header>

        {/* Article content */}
        <article className="space-y-8">
          {article.sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-playfair text-xl text-deep-sage mb-3">{section.heading}</h2>
              {section.type === "text" && (
                <p className="text-deep-sage/70 leading-relaxed">{section.content}</p>
              )}
              {section.type === "highlight" && (
                <div className="bg-sage-aqua/10 border-l-4 border-sage-aqua rounded-r-2xl p-5">
                  <p className="text-deep-sage/80 leading-relaxed">{section.content}</p>
                </div>
              )}
              {section.type === "definition" && (
                <div className="bg-soft-beige rounded-2xl p-5">
                  <p className="text-deep-sage/80 leading-relaxed">{section.content}</p>
                </div>
              )}
              {section.type === "steps" && (
                <>
                  <p className="text-deep-sage/70 leading-relaxed mb-4">{section.content}</p>
                  <ul className="space-y-2">
                    {section.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-deep-sage/70">
                        <span className="w-6 h-6 rounded-full bg-deep-sage text-ivory flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {j + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </article>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-soft-beige text-deep-sage/60">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-14 border-t border-soft-beige pt-10">
            <h3 className="font-playfair text-xl text-deep-sage mb-6">Artikel Terkait</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/education/${rel.slug}`}
                  className="group bg-soft-beige/50 border border-transparent hover:border-sage-aqua/30 rounded-2xl p-5 transition-all"
                >
                  <p className="font-semibold text-deep-sage text-sm mb-2 group-hover:text-cocoa-brown transition-colors">
                    {rel.titleId}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-sage-aqua font-medium">
                    Baca <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
