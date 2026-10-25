import type { Metadata } from "next";
import SPFGuideClient from "@/components/interactive/SPFGuideClient";

export const metadata: Metadata = {
  title: "Panduan SPF Harian — C.A.C.A.O – M.I.S.T™",
  description:
    "Alat edukasi SPF harian — memahami UV Index, cara aplikasi tabir surya, dan reaplikasi. Bukan kalkulator medis.",
};

export default function SPFGuidePage() {
  return <SPFGuideClient />;
}
