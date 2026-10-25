// Core types for CACAO-MIST™ Digital Platform
// CACAOMIST-BIOREFINERY Research Project

export type ResearchStatus = "planned" | "in-progress" | "verified";
export type DataLabel = "DATA_SIMULASI" | "TARGET_RISET" | "TERVERIFIKASI";

// ─── Product ────────────────────────────────────────────────────────────────

export interface ProductSpec {
  volume: string;
  containerType: string;
  containerMaterial: string;
  applicationMethod: string;
  targetSPF: string;
  targetPH: string;
  targetAntioxidant: string;
  dispenserType: string;
  researchStatus: ResearchStatus;
}

export interface PackagingComponent {
  id: string;
  name: string;
  nameId: string;
  description: string;
  material: string;
  composition: string;
  biodegradable: boolean;
  targetBiodegradationDays: string;
  researchStatus: ResearchStatus;
}

export interface Ingredient {
  id: string;
  name: string;
  percentage: string;
  role: string;
  origin: string;
}

// ─── Research ────────────────────────────────────────────────────────────────

export interface BiorefineryStage {
  id: string;
  step: number;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  inputs: string[];
  outputs: string[];
  method: string;
  conditions: string;
  targetYield: string;
  status: ResearchStatus;
  residueUsedIn?: string; // ID of next stage using residue
}

export interface LabTestParameter {
  id: string;
  parameter: string;
  parameterEn: string;
  method: string;
  target: string;
  unit: string;
  result: string | null;
  status: ResearchStatus;
  dataLabel: DataLabel;
  category: "formulation" | "efficacy" | "safety" | "packaging" | "characterization";
}

// ─── Traceability / QR System ─────────────────────────────────────────────────

export interface OriginData {
  region: string;
  regency: string;
  province: string;
  country: string;
  generalDescription: string;
  coordinates?: { lat: number; lng: number }; // optional — only when verified
  coordinatesSource?: "estimated" | "verified";
}

export interface ProcessStage {
  stage: string;
  description: string;
  date: string | null; // null if not yet conducted
  location: string;
  operator: string;
  notes: string;
}

export interface BatchLabResult {
  parameter: string;
  result: string | null;
  unit: string;
  target: string;
  status: ResearchStatus;
  dataLabel: DataLabel;
}

export interface PackagingInfo {
  primaryContainer: string;
  ecoSleeve: string;
  outerBox: string;
  composting: string[];
  qrBatchId: string;
}

export interface BatchRecord {
  batchId: string;
  productName: string;
  brandName: string;
  productCode: string;
  origin: OriginData;
  harvestPeriod: string;
  rawMaterial: string;
  processStages: ProcessStage[];
  labResults: BatchLabResult[];
  packaging: PackagingInfo;
  researchStatus: ResearchStatus;
  dataLabel: DataLabel;
  disclaimer: string;
  lastUpdated: string;
  verificationStatus: "unverified" | "pending" | "verified";
}

// ─── Education ────────────────────────────────────────────────────────────────

export interface EducationArticle {
  slug: string;
  title: string;
  titleId: string;
  excerpt: string;
  excerptId: string;
  category: string;
  readingTimeMin: number;
  publishedDate: string;
  tags: string[];
  sections: ArticleSection[];
}

export interface ArticleSection {
  heading: string;
  content: string;
  type: "text" | "highlight" | "definition" | "steps";
  items?: string[];
}

// ─── Sustainability ───────────────────────────────────────────────────────────

export interface SustainabilityMetric {
  id: string;
  title: string;
  titleId: string;
  description: string;
  status: ResearchStatus;
  dataLabel: DataLabel;
}
