"use client";

import dynamic from "next/dynamic";

const QRCodeDisplay = dynamic(() => import("./QRCodeDisplay"), { ssr: false });

interface Props {
  batchId: string;
}

export default function BatchQRSection({ batchId }: Props) {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/traceability/${batchId}`
      : `https://cacaomist.example.com/traceability/${batchId}`;

  return (
    <div>
      <QRCodeDisplay value={url} size={180} />
      <p className="text-xs text-deep-sage/40 mt-3 font-mono break-all">/traceability/{batchId}</p>
    </div>
  );
}
