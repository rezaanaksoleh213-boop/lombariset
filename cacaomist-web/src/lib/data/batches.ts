import type { BatchRecord } from "@/types";

// ─── Demo Batch Records ───────────────────────────────────────────────────────
// IMPORTANT: These are SIMULATION DATA (DATA SIMULASI / DEMO)
// Source structure based on: Proposal 4.2 — QR-Code Traceability System
// Actual research has NOT yet been conducted (planned: Jan–Jun 2027)

export const batches: BatchRecord[] = [
  {
    batchId: "DEMO-CPH-001",
    productName: "C.A.C.A.O – M.I.S.T™ Hybrid Eco-Sunscreen Spray",
    brandName: "C.A.C.A.O – M.I.S.T™",
    productCode: "CACAOMIST-001",
    origin: {
      region: "Kabupaten Pidie",
      regency: "Kabupaten Pidie",
      province: "Provinsi Aceh",
      country: "Indonesia",
      generalDescription:
        "Kulit Buah Kakao (CPH) segar dipanen dari perkebunan rakyat di wilayah Kabupaten Pidie, Provinsi Aceh — sentra produksi kakao utama Sumatra. Koordinat GPS spesifik kebun belum tersedia dan akan diperbarui setelah verifikasi lapangan.",
      coordinates: { lat: 5.25, lng: 96.1 }, // General Pidie region center
      coordinatesSource: "estimated",
    },
    harvestPeriod: "Januari 2027 (direncanakan)",
    rawMaterial: "Kulit Buah Kakao (Cocoa Pod Husk / CPH) — Theobroma cacao L.",
    processStages: [
      {
        stage: "1 — Preparasi Biomassa CPH",
        description: "Pencucian, pengeringan oven (50°C, 48 jam), penggilingan, dan pengayakan 100 mesh.",
        date: null,
        location: "Lab. Riset Kimia Dasar, Universitas Syiah Kuala",
        operator: "Tim Riset CACAOMIST-BIOREFINERY",
        notes: "Tahap direncanakan; belum dilaksanakan.",
      },
      {
        stage: "2 — Ekstraksi Bioaktif NADES-UAE",
        description: "Ekstraksi fitosterol & polifenol dengan NADES (ChCl:LA 1:2) + UAE 40 kHz, 50°C, 30 menit.",
        date: null,
        location: "Lab. Riset Kimia Dasar, Universitas Syiah Kuala",
        operator: "Tim Riset CACAOMIST-BIOREFINERY",
        notes: "Tahap direncanakan; belum dilaksanakan.",
      },
      {
        stage: "3 — Ekstraksi Pektin MAE",
        description: "Pektin CPH diekstraksi dari ampas Tahap 2 via MAE (asam sitrat 10%, 450W, 10 menit).",
        date: null,
        location: "Lab. Riset Kimia Dasar, Universitas Syiah Kuala",
        operator: "Tim Riset CACAOMIST-BIOREFINERY",
        notes: "Tahap direncanakan; belum dilaksanakan.",
      },
      {
        stage: "4 — Isolasi Selulosa CPH",
        description: "Delignifikasi (NaOH 1M, 80°C, 2 jam) + bleaching (H₂O₂ 3%, 70°C, 1 jam) dari ampas Tahap 3.",
        date: null,
        location: "Lab. Riset Kimia Dasar, Universitas Syiah Kuala",
        operator: "Tim Riset CACAOMIST-BIOREFINERY",
        notes: "Tahap direncanakan; belum dilaksanakan.",
      },
      {
        stage: "5 — Formulasi & Pengemasan",
        description:
          "Formulasi sediaan semprot + fabrikasi bioplastik Eco-Sleeve dan Outer Box dari selulosa CPH.",
        date: null,
        location: "Lab. Farmasi Terpadu, Universitas Syiah Kuala",
        operator: "Tim Riset CACAOMIST-BIOREFINERY",
        notes: "Tahap direncanakan; belum dilaksanakan.",
      },
    ],
    labResults: [
      {
        parameter: "Nilai SPF",
        result: null,
        unit: "–",
        target: "≥ 30",
        status: "planned",
        dataLabel: "TARGET_RISET",
      },
      {
        parameter: "IC₅₀ DPPH (Antioksidan)",
        result: null,
        unit: "ppm",
        target: "< 50 ppm",
        status: "planned",
        dataLabel: "TARGET_RISET",
      },
      {
        parameter: "pH Sediaan",
        result: null,
        unit: "–",
        target: "4,5 – 5,5",
        status: "planned",
        dataLabel: "TARGET_RISET",
      },
      {
        parameter: "Stabilitas (Freeze-Thaw)",
        result: null,
        unit: "6 siklus",
        target: "Tidak ada pemisahan fase",
        status: "planned",
        dataLabel: "TARGET_RISET",
      },
      {
        parameter: "Uji Iritasi Kulit (M.I.I.)",
        result: null,
        unit: "M.I.I.",
        target: "0,00 (non-iritan)",
        status: "planned",
        dataLabel: "TARGET_RISET",
      },
      {
        parameter: "Biodegradabilitas Kemasan",
        result: null,
        unit: "hari",
        target: "< 60 hari",
        status: "planned",
        dataLabel: "TARGET_RISET",
      },
    ],
    packaging: {
      primaryContainer: "Botol semprot rPET 100 mL — dapat didaur ulang",
      ecoSleeve: "Eco-Sleeve bioplastik selulosa CPH — dapat dikompos mandiri",
      outerBox: "Outer Box bioplastik selulosa CPH — dapat dikompos mandiri",
      composting: [
        "Lepaskan Eco-Sleeve dari botol rPET.",
        "Sobek atau potong Eco-Sleeve dan Outer Box menjadi potongan kecil.",
        "Kubur di dalam tanah atau tumpukan kompos pada kedalaman ±5 cm.",
        "Pertahankan kelembapan tanah 60–70% dengan penyiraman rutin.",
        "Kemasan bioplastik dirancang untuk terurai alami dalam < 60 hari (target riset, belum terverifikasi).",
        "Botol rPET primer: serahkan ke bank sampah atau titik daur ulang plastik setempat.",
      ],
      qrBatchId: "DEMO-CPH-001",
    },
    researchStatus: "planned",
    dataLabel: "DATA_SIMULASI",
    disclaimer:
      "⚠️ DATA SIMULASI / DEMO — Batch ini adalah contoh demonstrasi sistem traceability. Penelitian CACAOMIST-BIOREFINERY direncanakan dilaksanakan Januari–Juni 2027. Semua hasil laboratorium dalam rekaman ini adalah TARGET RISET, bukan pengukuran aktual.",
    lastUpdated: "2026-10-25",
    verificationStatus: "unverified",
  },
];

export function getBatchById(batchId: string): BatchRecord | undefined {
  return batches.find((b) => b.batchId === batchId);
}
