import type { EducationArticle } from "@/types";

// ─── Education Articles ───────────────────────────────────────────────────────
// Based on research topics identified in proposal and education platform requirements

export const articles: EducationArticle[] = [
  {
    slug: "valorisasi-limbah-kakao",
    title: "Cocoa Waste Valorization: From Waste to Value",
    titleId: "Valorisasi Limbah Kakao: Dari Sampah Menjadi Bernilai",
    excerpt: "How cocoa pod husk—70% of the fruit's fresh weight—can be transformed into high-value bioactive compounds.",
    excerptId:
      "Bagaimana kulit buah kakao—70–75% dari bobot buah segar—dapat diubah menjadi senyawa bioaktif bernilai tinggi melalui pendekatan biorefinery.",
    category: "Biorefinery & Valorisasi",
    readingTimeMin: 6,
    publishedDate: "2026-10-25",
    tags: ["CPH", "Valorisasi", "Biorefinery", "Zero-Waste", "Kakao"],
    sections: [
      {
        heading: "Apa Itu Valorisasi Biomassa?",
        content:
          "Valorisasi biomassa adalah proses mengubah limbah organik menjadi produk bernilai tambah tinggi. Dalam konteks penelitian CACAOMIST-BIOREFINERY, limbah kulit buah kakao (Cocoa Pod Husk/CPH) yang sebelumnya dibuang begitu saja oleh petani, diubah menjadi bahan aktif kosmetik dan kemasan bioplastik ramah lingkungan.",
        type: "text",
      },
      {
        heading: "Masalah Limbah CPH di Indonesia",
        content:
          "Indonesia memiliki lahan kakao seluas 1,5 juta hektar, dengan Aceh sebagai salah satu sentra produksi utama. Industri pengolahan kakao menghasilkan limbah CPH sebanyak 70–75% dari total bobot buah segar. Ironisnya, 95% petani swadaya membuang CPH secara terbuka, memicu pelepasan gas rumah kaca dan wabah penyakit busuk buah Phytophthora palmivora.",
        type: "highlight",
      },
      {
        heading: "Kandungan Berharga dalam CPH",
        content: "CPH menyimpan berbagai senyawa biomassa lignoselulosa yang kaya:",
        type: "steps",
        items: [
          "Pektin: 6,1%–9,2% — biopolimer penstabil emulsi",
          "Selulosa: 24%–35% — biomaterial kemasan bioplastik",
          "Fitosterol: β-sitosterol, stigmasterol, campesterol — antioksidan & UV-filter alami",
          "Polifenol & flavonoid: katekin, epikatekin, asam ferulat — perlindungan radikal bebas",
        ],
      },
      {
        heading: "Pendekatan Cascade Biorefinery",
        content:
          "Alih-alih mengekstraksi satu komponen saja, CACAOMIST-BIOREFINERY menggunakan pendekatan kaskade (cascade) di mana setiap tahap pengolahan menggunakan residu dari tahap sebelumnya. Dengan cara ini, seluruh fraksi CPH dapat dimanfaatkan secara closed-loop tanpa menghasilkan limbah baru.",
        type: "text",
      },
    ],
  },
  {
    slug: "nades-green-chemistry",
    title: "NADES: The Future of Green Extraction Chemistry",
    titleId: "NADES: Masa Depan Kimia Ekstraksi Hijau",
    excerpt: "Natural Deep Eutectic Solvents (NADES) as eco-friendly alternatives to conventional organic solvents.",
    excerptId:
      "Natural Deep Eutectic Solvents (NADES) sebagai alternatif ramah lingkungan pengganti pelarut organik konvensional dalam ekstraksi senyawa bioaktif.",
    category: "Green Chemistry",
    readingTimeMin: 5,
    publishedDate: "2026-10-25",
    tags: ["NADES", "Green Chemistry", "Ekstraksi", "Kimia Hijau", "UAE"],
    sections: [
      {
        heading: "Apa Itu NADES?",
        content:
          "Natural Deep Eutectic Solvents (NADES) adalah pelarut generasi baru yang terbentuk dari pencampuran dua atau lebih komponen alami (asam amino, gula, asam organik) dalam perbandingan molar tertentu, menghasilkan campuran dengan titik lebur jauh lebih rendah dari masing-masing komponen.",
        type: "text",
      },
      {
        heading: "NADES dalam Penelitian CACAOMIST",
        content:
          "Penelitian CACAOMIST-BIOREFINERY menggunakan NADES berbasis Kolin Klorida dan Asam Laktat dengan rasio molar 1:2, ditambah akuades 50% v/v. Sistem NADES ini dipilih karena terbukti ramah lingkungan dengan skor Path2Green positif +0,341 (Morales et al., 2025).",
        type: "highlight",
      },
      {
        heading: "Keunggulan NADES dibanding Pelarut Konvensional",
        content: "Mengapa NADES lebih unggul?",
        type: "steps",
        items: [
          "Ramah lingkungan — komponen dari bahan alami, biodegradable",
          "Aman bagi manusia — toksisitas sangat rendah",
          "Efisiensi tinggi — ikatan hidrogen intermolekuler meningkatkan kelarutan senyawa polar",
          "Biaya lebih rendah — bahan baku mudah tersedia",
          "Path2Green score positif — terbukti melalui evaluasi dampak lingkungan",
        ],
      },
    ],
  },
  {
    slug: "antioksidan-kakao-dan-kulit",
    title: "Antioxidants from Cocoa: Science of Skin Protection",
    titleId: "Antioksidan Kakao dan Perlindungan Kulit: Sains di Baliknya",
    excerpt: "Understanding how cocoa-derived polyphenols and phytosterols protect skin from UV-induced free radical damage.",
    excerptId:
      "Memahami bagaimana polifenol dan fitosterol dari kakao melindungi kulit dari kerusakan akibat radikal bebas yang dipicu sinar UV.",
    category: "Sains Kulit & Antioksidan",
    readingTimeMin: 7,
    publishedDate: "2026-10-25",
    tags: ["Antioksidan", "Polifenol", "Fitosterol", "UV", "Perlindungan Kulit"],
    sections: [
      {
        heading: "Radiasi UV dan Kerusakan Kulit",
        content:
          "Di wilayah tropis seperti Indonesia, paparan radiasi ultraviolet (UV) matahari sangat intens sepanjang tahun. Radiasi UV-B (290–320 nm) dan UV-A (320–400 nm) memicu pembentukan reactive oxygen species (ROS) — radikal bebas yang merusak DNA, kolagen, dan sel-sel kulit, mempercepat penuaan dan risiko kanker kulit.",
        type: "text",
      },
      {
        heading: "Senyawa Fotoprotektif dalam CPH",
        content: "Kulit buah kakao mengandung beragam senyawa pelindung UV alami:",
        type: "steps",
        items: [
          "Katekin & epikatekin — menetralkan radikal bebas ROS",
          "Prosianidin — antioksidan berantai panjang dengan perlindungan kuat",
          "Asam ferulat — menyerap UV-B melalui gugus kromofor terkonjugasi",
          "β-sitosterol, stigmasterol, campesterol — fitosterol dengan IC₅₀ DPPH sangat kuat",
        ],
      },
      {
        heading: "Dual-Action Protection: Kimia + Fisik",
        content:
          "Formulasi CACAO-MIST™ menggabungkan perlindungan kimia (dari ekstrak CPH) dengan perlindungan fisik (dari Non-nano ZnO >200 nm). ZnO dalam ukuran non-nano bersifat reef-safe dan memantulkan radiasi matahari secara fisik tanpa meresap ke dalam kulit.",
        type: "highlight",
      },
    ],
  },
  {
    slug: "sinar-uv-dan-tabir-surya",
    title: "Understanding UV Radiation and Sunscreen",
    titleId: "Memahami Radiasi UV dan Cara Kerja Tabir Surya",
    excerpt: "A complete guide to understanding UV-A, UV-B radiation, and how sunscreens work to protect skin.",
    excerptId:
      "Panduan lengkap memahami radiasi UV-A dan UV-B serta mekanisme kerja tabir surya dalam melindungi kulit dari paparan sinar matahari.",
    category: "Edukasi Tabir Surya",
    readingTimeMin: 8,
    publishedDate: "2026-10-25",
    tags: ["SPF", "UV-A", "UV-B", "Broad Spectrum", "Tabir Surya"],
    sections: [
      {
        heading: "Jenis Radiasi UV Matahari",
        content: "Radiasi matahari yang mencapai permukaan bumi terdiri dari:",
        type: "steps",
        items: [
          "UV-C (100–280 nm) — diserap lapisan ozon, tidak mencapai kulit",
          "UV-B (280–315 nm) — penyebab utama sunburn dan kerusakan DNA kulit",
          "UV-A (315–400 nm) — menembus lapisan dermis, mempercepat penuaan kulit",
        ],
      },
      {
        heading: "Apa Itu SPF?",
        content:
          "Sun Protection Factor (SPF) adalah ukuran seberapa lama tabir surya melindungi kulit dari UV-B dibandingkan tanpa perlindungan. SPF 30 berarti tabir surya menyaring ~97% radiasi UV-B; SPF 50 menyaring ~98%. Namun, efektivitas bergantung pada ketebalan aplikasi (2 mg/cm²) dan pengulangan setiap 2–3 jam.",
        type: "text",
      },
      {
        heading: "Broad Spectrum: Perlindungan Lengkap",
        content:
          "Tabir surya 'Broad Spectrum' berarti melindungi dari KEDUA jenis radiasi — UV-B dan UV-A. Ini adalah standar perlindungan ideal yang menjadi target formulasi CACAO-MIST™ dalam pengujian in-vitro yang direncanakan.",
        type: "highlight",
      },
    ],
  },
  {
    slug: "kemasan-bioplastik-selulosa",
    title: "Cellulose-Based Bioplastics: Sustainable Packaging Innovation",
    titleId: "Bioplastik Berbasis Selulosa: Inovasi Kemasan Berkelanjutan",
    excerpt: "How cellulose from cocoa pod husk can replace conventional plastic packaging through biorefinery.",
    excerptId:
      "Bagaimana selulosa dari kulit buah kakao dapat menggantikan kemasan plastik konvensional melalui pendekatan biorefinery berkelanjutan.",
    category: "Kemasan Berkelanjutan",
    readingTimeMin: 6,
    publishedDate: "2026-10-25",
    tags: ["Bioplastik", "Selulosa", "Kemasan", "Biodegradable", "Circular Economy"],
    sections: [
      {
        heading: "Masalah Kemasan Plastik Konvensional",
        content:
          "Kemasan plastik sintetis konvensional (PET, PP, PE) membutuhkan ratusan tahun untuk terurai di lingkungan. Industri kosmetik merupakan penyumbang signifikan sampah plastik global — mendorong urgensi inovasi kemasan berbasis biomaterial.",
        type: "text",
      },
      {
        heading: "Selulosa sebagai Biomaterial Kemasan",
        content:
          "Selulosa adalah polimer alami paling melimpah di bumi. CPH mengandung 24%–35% selulosa yang dapat diisolasi melalui delignifikasi alkali dan bleaching, lalu difabrikasi menjadi film bioplastik fleksibel dengan metode casting.",
        type: "text",
      },
      {
        heading: "Komposisi Bioplastik Dual Eco-Packaging",
        content: "Formulasi bioplastik dalam penelitian CACAOMIST-BIOREFINERY:",
        type: "steps",
        items: [
          "75% serat selulosa CPH (komponen utama)",
          "25% serat ampas tebu (sugarcane bagasse) — penguat serat",
          "Gliserol — plastisiser peningkat fleksibilitas",
          "Sorbitol nabati — plastisiser peningkat ketahanan air",
        ],
      },
      {
        heading: "Target Performa Bioplastik",
        content:
          "Bioplastik Dual Eco-Packaging (Eco-Sleeve & Outer Box) ditargetkan mampu terurai alami dalam tanah dalam waktu < 60 hari — angka ini merupakan target riset yang belum diverifikasi secara laboratorium dan akan diuji menggunakan prosedur biodegradability test standar.",
        type: "highlight",
      },
    ],
  },
  {
    slug: "circular-economy-kakao",
    title: "Circular Economy in Cocoa: Zero-Waste Biorefinery",
    titleId: "Ekonomi Sirkular Kakao: Biorefinery Tanpa Limbah",
    excerpt: "The concept of circular bioeconomy applied to cocoa processing through cascade valorization.",
    excerptId:
      "Konsep ekonomi sirkular yang diterapkan pada pengolahan kakao melalui valorisasi kaskade yang mengintegrasikan seluruh fraksi biomassa.",
    category: "Ekonomi Sirkular",
    readingTimeMin: 5,
    publishedDate: "2026-10-25",
    tags: ["Circular Economy", "Zero-Waste", "Biorefinery", "Berkelanjutan", "Kakao"],
    sections: [
      {
        heading: "Ekonomi Linier vs. Ekonomi Sirkular",
        content:
          "Ekonomi linier tradisional mengikuti pola 'ambil-buat-buang'. Ekonomi sirkular membalik paradigma ini dengan memastikan setiap bahan baku dimanfaatkan semaksimal mungkin sebelum dikembalikan ke alam secara aman.",
        type: "text",
      },
      {
        heading: "Closed-Loop Cascade Biorefinery CPH",
        content: "CACAOMIST-BIOREFINERY menerapkan model kaskade di mana setiap tahap menggunakan residu tahap sebelumnya:",
        type: "steps",
        items: [
          "CPH segar → Serbuk kering (Tahap 1)",
          "Serbuk CPH → Ekstrak bioaktif + Ampas (Tahap 2: NADES-UAE)",
          "Ampas → Pektin + Residu padat (Tahap 3: MAE)",
          "Residu padat → Selulosa murni (Tahap 4: Delignifikasi)",
          "Selulosa → Bioplastik Eco-Sleeve & Outer Box (Tahap 5)",
          "Bioplastik bekas pakai → Terurai di tanah / kompos",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): EducationArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
