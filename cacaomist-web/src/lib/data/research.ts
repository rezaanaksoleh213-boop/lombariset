import type { BiorefineryStage, LabTestParameter, ProductSpec, PackagingComponent, Ingredient } from "@/types";

// ─── Product Specification ────────────────────────────────────────────────────
// Source: Proposal BAB 4.1 — Luaran Wajib dan Spesifikasi Produk Fisik

export const productSpec: ProductSpec = {
  volume: "100 mL",
  containerType: "Botol Semprot (Spray Bottle)",
  containerMaterial: "rPET (recycled Polyethylene Terephthalate)",
  applicationMethod: "Touchless Fine-Mist Spray — 100% tanpa sentuh",
  targetSPF: "SPF 30+ (target, belum terverifikasi)",
  targetPH: "4,5 – 5,5 (target fisiologis kulit)",
  targetAntioxidant: "IC₅₀ < 50 ppm DPPH (target, belum terverifikasi)",
  dispenserType: "Fine-Mist Pump Sprayer",
  researchStatus: "planned",
};

// ─── Packaging Components ─────────────────────────────────────────────────────
// Source: Proposal 3.3.4 & 4.1

export const packagingComponents: PackagingComponent[] = [
  {
    id: "primary-bottle",
    name: "Primary rPET Spray Bottle",
    nameId: "Botol Semprot Primer rPET",
    description:
      "Slim rounded rectangular spray bottle in Sage Aqua, fitted with white fine-mist pump and transparent protective cap.",
    material: "rPET (recycled PET plastic)",
    composition: "100% rPET",
    biodegradable: false,
    targetBiodegradationDays: "N/A (dapat didaur ulang)",
    researchStatus: "planned",
  },
  {
    id: "eco-sleeve",
    name: "Eco-Sleeve",
    nameId: "Selubung Botol Bioplastik (Eco-Sleeve)",
    description:
      "Removable cocoa-derived bioplastic sleeve wrapping the primary bottle. Printed with the QR Smart Packaging code.",
    material: "Bioplastik Selulosa — Kulit Buah Kakao (CPH) + Serat Ampas Tebu",
    composition: "75% selulosa CPH : 25% serat ampas tebu + plastisiser gliserol & sorbitol",
    biodegradable: true,
    targetBiodegradationDays: "< 60 hari (target, belum terverifikasi)",
    researchStatus: "planned",
  },
  {
    id: "outer-box",
    name: "Outer Box",
    nameId: "Kotak Kemasan Luar (Outer Box)",
    description:
      "Cocoa-derived bioplastic outer packaging box. Also carries QR Smart Packaging code. Botanical design with cocoa pod motif.",
    material: "Bioplastik Selulosa — Kulit Buah Kakao (CPH) + Serat Ampas Tebu",
    composition: "75% selulosa CPH : 25% serat ampas tebu + plastisiser gliserol & sorbitol",
    biodegradable: true,
    targetBiodegradationDays: "< 60 hari (target, belum terverifikasi)",
    researchStatus: "planned",
  },
];

// ─── Formulation Ingredients ─────────────────────────────────────────────────
// Source: Proposal 3.3.3 — Formulasi Sunscreen Spray CACAO-MIST™

export const ingredients: Ingredient[] = [
  {
    id: "cph-extract",
    name: "CPH Bioactive Extract (NADES-UAE)",
    percentage: "3% v/v",
    role: "UV-filter kimia alami & antioksidan (fitosterol + polifenol)",
    origin: "Kulit Buah Kakao (CPH) — Pidie, Aceh",
  },
  {
    id: "cph-pectin",
    name: "CPH Pectin Hydrogel (MAE)",
    percentage: "1,5% w/v",
    role: "Penstabil emulsi hidrojel (hydrogel agent)",
    origin: "Ampas CPH sisa ekstraksi bioaktif",
  },
  {
    id: "non-nano-zno",
    name: "Non-nano Zinc Oxide (ZnO)",
    percentage: "5% w/v",
    role: "UV-filter fisik (UVA+UVB), reef-safe (>200 nm)",
    origin: "Mineral sintetis non-nano (> 200 nm)",
  },
  {
    id: "polysorbate-20",
    name: "Polysorbate-20",
    percentage: "2%",
    role: "Emulsifier — mendispersi ZnO dalam fase hidrojel",
    origin: "Bahan formulasi kosmetik",
  },
  {
    id: "propylene-glycol",
    name: "Propilenglikol (Propylene Glycol)",
    percentage: "5%",
    role: "Humektan — menjaga kelembapan kulit",
    origin: "Bahan formulasi kosmetik",
  },
  {
    id: "tea",
    name: "Triethanolamine (TEA)",
    percentage: "q.s.",
    role: "Pengatur pH — mempertahankan pH 4,5–5,5",
    origin: "Bahan formulasi kosmetik",
  },
  {
    id: "aqua",
    name: "Aqua (Akuades)",
    percentage: "ad 100%",
    role: "Pelarut dasar sediaan",
    origin: "Air murni terdistilasi",
  },
];

// ─── Cascade Biorefinery Stages ───────────────────────────────────────────────
// Source: Proposal 3.3.1 – 3.3.5 (5 Integrated Stages)

export const biorefineryStages: BiorefineryStage[] = [
  {
    id: "stage-1",
    step: 1,
    title: "CPH Preparation",
    titleId: "Preparasi Biomassa Kulit Buah Kakao",
    description: "Cocoa Pod Husk (CPH) from Pidie, Aceh undergoes washing, oven drying (50°C, 48h), and grinding to 100 mesh powder.",
    descriptionId:
      "Kulit Buah Kakao (CPH) dari perkebunan lokal Pidie, Aceh dicuci bersih, dikeringkan oven (50°C, 48 jam), lalu diblender dan diayak menjadi serbuk halus 100 mesh.",
    inputs: ["Kulit Buah Kakao (CPH) segar"],
    outputs: ["Serbuk CPH kering 100 mesh"],
    method: "Pengeringan oven + penggilingan mekanis",
    conditions: "Suhu pengeringan: 50°C, 48 jam; Kadar air akhir: < 10%",
    targetYield: "Serbuk CPH kering siap ekstraksi",
    status: "planned",
    residueUsedIn: "stage-2",
  },
  {
    id: "stage-2",
    step: 2,
    title: "NADES-UAE Bioactive Extraction",
    titleId: "Ekstraksi Bioaktif NADES-UAE",
    description:
      "Green solvent NADES (Choline Chloride : Lactic Acid, 1:2 molar) + 50% water used with Ultrasound-Assisted Extraction at 40 kHz, 50°C for 30 minutes to extract phytosterols and polyphenols.",
    descriptionId:
      "Pelarut hijau NADES (Kolin Klorida : Asam Laktat, rasio molar 1:2) + akuades 50% digunakan dengan Ultrasound-Assisted Extraction (UAE) pada frekuensi 40 kHz, suhu 50°C selama 30 menit untuk mengekstrak fitosterol dan polifenol CPH.",
    inputs: ["Serbuk CPH 100 mesh", "Pelarut NADES (ChCl:LA 1:2 + H₂O 50%)"],
    outputs: ["Filtrat ekstrak pekat bioaktif CPH", "Ampas CPH sisa (→ Tahap 3)"],
    method: "Ultrasound-Assisted Extraction (UAE)",
    conditions: "Frekuensi: 40 kHz | Suhu: 50°C | Waktu: 30 menit | Rasio: 10 g CPH : 100 mL NADES",
    targetYield: "Rendemen ekstrak ≥ 15%–20% (w/w)",
    status: "planned",
    residueUsedIn: "stage-3",
  },
  {
    id: "stage-3",
    step: 3,
    title: "MAE Pectin Extraction",
    titleId: "Ekstraksi Pektin via MAE",
    description:
      "Solid residue from Stage 2 undergoes Microwave-Assisted Extraction (MAE) with 10% citric acid at 450W for 10 minutes to isolate low-methoxyl pectin as hydrogel stabilizer.",
    descriptionId:
      "Ampas padat sisa Tahap 2 diekstraksi kembali menggunakan Microwave-Assisted Extraction (MAE) dengan asam sitrat 10% pada daya 450 Watt selama 10 menit untuk menghasilkan pektin low-methoxyl sebagai penstabil hidrojel.",
    inputs: ["Ampas CPH sisa ekstraksi NADES-UAE", "Larutan asam sitrat 10% (pH 2,0)"],
    outputs: ["Pektin CPH murni (low-methoxyl)", "Ampas padat sisa pektin (→ Tahap 4)"],
    method: "Microwave-Assisted Extraction (MAE)",
    conditions: "Daya: 450 Watt | Waktu: 10 menit | Rasio padat-cair: 1:30 g/mL",
    targetYield: "Rendemen pektin ≥ 15%–21% (w/w)",
    status: "planned",
    residueUsedIn: "stage-4",
  },
  {
    id: "stage-4",
    step: 4,
    title: "Cellulose Isolation",
    titleId: "Isolasi Selulosa CPH",
    description:
      "Remaining solid residue undergoes alkali delignification (NaOH 1M, 80°C, 2h) and bleaching (H₂O₂ 3%, 70°C, 1h) to yield pure white cellulose fiber.",
    descriptionId:
      "Ampas padat sisa isolasi pektin menjalani delignifikasi alkali (NaOH 1M, 80°C, 2 jam) dan pemutihan/bleaching (H₂O₂ 3%, 70°C, 1 jam) untuk menghasilkan serat selulosa putih murni.",
    inputs: ["Ampas padat sisa pektin CPH", "NaOH 1M", "H₂O₂ 3%"],
    outputs: ["Serat selulosa CPH murni (→ Tahap 5)"],
    method: "Delignifikasi alkali + Bleaching H₂O₂",
    conditions: "Delignifikasi: NaOH 1M, 80°C, 2 jam | Bleaching: H₂O₂ 3%, 70°C, 1 jam",
    targetYield: "Serat selulosa murni berwarna putih",
    status: "planned",
    residueUsedIn: "stage-5",
  },
  {
    id: "stage-5",
    step: 5,
    title: "Dual Eco-Packaging Fabrication",
    titleId: "Fabrikasi Dual Eco-Packaging Bioplastik",
    description:
      "CPH cellulose (75%) mixed with sugarcane bagasse fiber (25%), glycerol, and sorbitol is cast into flexible bioplastic film, then shaped into Eco-Sleeve and Outer Box.",
    descriptionId:
      "Selulosa CPH (75%) dicampur serat ampas tebu (25%), gliserol, dan sorbitol nabati menjadi matriks bioplastik yang dituang ke cetakan (casting method), lalu dibentuk menjadi Eco-Sleeve dan Outer Box.",
    inputs: ["Selulosa CPH (75%)", "Serat ampas tebu (25%)", "Gliserol + Sorbitol (plastisiser)"],
    outputs: ["Film bioplastik fleksibel", "Eco-Sleeve (selubung botol)", "Outer Box (kotak kemasan luar)"],
    method: "Casting method — pencetakan film bioplastik",
    conditions: "Suhu pemanasan: 75°C, 30 menit | Pengeringan oven: 50°C, 24 jam",
    targetYield: "Film bioplastik fleksibel dengan WVTR rendah",
    status: "planned",
  },
];

// ─── Lab Test Parameters ─────────────────────────────────────────────────────
// Source: Proposal 3.4 — All results are PLANNED (no data yet)

export const labTestParameters: LabTestParameter[] = [
  // Efficacy
  {
    id: "spf",
    parameter: "Nilai SPF",
    parameterEn: "SPF Value",
    method: "Spektrofotometri UV-Vis — Persamaan Mansur (290–320 nm)",
    target: "≥ 30 (SPF 30+)",
    unit: "–",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "efficacy",
  },
  {
    id: "antioxidant-ic50",
    parameter: "Aktivitas Antioksidan (IC₅₀ DPPH)",
    parameterEn: "Antioxidant Activity (IC₅₀ DPPH)",
    method: "Metode DPPH — Spektrofotometri 517 nm",
    target: "< 50 ppm (kategori sangat kuat)",
    unit: "ppm",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "efficacy",
  },
  // Physicochemical
  {
    id: "ph",
    parameter: "pH Sediaan",
    parameterEn: "Formulation pH",
    method: "pH meter digital terkalibrasi",
    target: "4,5 – 5,5 (fisiologis kulit)",
    unit: "–",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "formulation",
  },
  {
    id: "viscosity",
    parameter: "Viskositas",
    parameterEn: "Viscosity",
    method: "Viskometer Brookfield — 100 rpm",
    target: "Sifat alir pseudoplastis",
    unit: "cPs",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "formulation",
  },
  {
    id: "organoleptic",
    parameter: "Organoleptik & Homogenitas",
    parameterEn: "Organoleptic & Homogeneity",
    method: "Pengamatan visual + mikroskopi",
    target: "Emulsi hidrojel cokelat muda, homogen, fine-mist",
    unit: "–",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "formulation",
  },
  {
    id: "stability",
    parameter: "Stabilitas Sediaan",
    parameterEn: "Formulation Stability",
    method: "Uji sentrifugasi (3.800–4.000 rpm, 5 jam) + Freeze-thaw 6 siklus",
    target: "Tidak terjadi pemisahan fase",
    unit: "–",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "formulation",
  },
  // Safety
  {
    id: "skin-irritation",
    parameter: "Uji Iritasi Kulit",
    parameterEn: "Skin Irritation Test",
    method: "Single application closed patch test (Finn chamber) — standar BPOM",
    target: "Mean Irritation Index (M.I.I.) = 0,00 (non-iritan)",
    unit: "M.I.I.",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "safety",
  },
  {
    id: "microbiology",
    parameter: "Keamanan Mikrobiologi",
    parameterEn: "Microbiological Safety",
    method: "Pour plate method — NA (S.aureus) & SDA (C.albicans) — 37°C/25°C",
    target: "ALT < 10² CFU/g; bebas mikroba patogen (standar BPOM)",
    unit: "CFU/g",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "safety",
  },
  // Packaging
  {
    id: "water-absorption",
    parameter: "Daya Serap Air Bioplastik",
    parameterEn: "Water Absorption",
    method: "Perendaman akuades 10 menit, timbang bobot basah",
    target: "Nilai serendah mungkin (≤ 17,62% berdasarkan literatur)",
    unit: "%",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "packaging",
  },
  {
    id: "wvtr",
    parameter: "Laju Transmisi Uap Air (WVTR)",
    parameterEn: "Water Vapor Transmission Rate (WVTR)",
    method: "Gravimetri ASTM E-96 — 75% RH, 25°C, 48 jam",
    target: "Nilai WVTR rendah (literatur: efektif menahan migrasi kelembapan)",
    unit: "g/m²/hari",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "packaging",
  },
  {
    id: "biodegradability",
    parameter: "Biodegradabilitas",
    parameterEn: "Biodegradability",
    method: "Penimbunan tanah kompos aktif — 60 hari, kelembapan 60–70%",
    target: "Terurai < 60 hari di dalam tanah",
    unit: "% kehilangan massa",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "packaging",
  },
  // Characterization
  {
    id: "ftir",
    parameter: "Analisis FTIR",
    parameterEn: "FTIR Analysis",
    method: "FTIR Shimadzu — pellet KBr",
    target: "Identifikasi gugus fungsi O-H, C-H, C=O, C-O-C",
    unit: "cm⁻¹",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "characterization",
  },
  {
    id: "sem",
    parameter: "Morfologi SEM",
    parameterEn: "SEM Morphology",
    method: "Scanning Electron Microscope — pembesaran 1.000× – 5.000×",
    target: "Analisis topografi dan porositas bioplastik",
    unit: "–",
    result: null,
    status: "planned",
    dataLabel: "TARGET_RISET",
    category: "characterization",
  },
];
