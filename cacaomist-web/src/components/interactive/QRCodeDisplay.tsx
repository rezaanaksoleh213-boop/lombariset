"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
}

export default function QRCodeDisplay({ value, size = 200 }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 2,
      color: { dark: "#2E6B5B", light: "#F8F6EE" },
      errorCorrectionLevel: "M",
    }).catch(console.error);

    QRCode.toDataURL(value, {
      width: size,
      margin: 2,
      color: { dark: "#2E6B5B", light: "#F8F6EE" },
      errorCorrectionLevel: "M",
    })
      .then(setDataUrl)
      .catch(console.error);
  }, [value, size]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        className="rounded-2xl shadow-lg border border-sage-aqua/20"
        aria-label={`QR Code linking to ${value}`}
      />
      {dataUrl && (
        <a
          href={dataUrl}
          download={`CACAOMIST-QR.png`}
          className="text-xs font-semibold text-deep-sage/60 hover:text-deep-sage flex items-center gap-1.5 transition-colors"
        >
          ⬇ Unduh QR Code (PNG)
        </a>
      )}
    </div>
  );
}
