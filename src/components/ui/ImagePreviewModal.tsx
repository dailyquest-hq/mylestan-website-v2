"use client";

import { useEffect } from "react";

interface ImagePreviewModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export function ImagePreviewModal({ imageUrl, onClose }: ImagePreviewModalProps) {
  useEffect(() => {
    if (!imageUrl) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 99999 }}
      className="bg-black/90 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <button
        style={{ position: "absolute", top: 16, right: 16 }}
        className="text-white text-4xl hover:text-gray-300 transition-colors w-12 h-12 flex items-center justify-center"
        onClick={onClose}
        aria-label="Close preview"
      >
        ×
      </button>
      <img
        src={imageUrl}
        alt="Preview"
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
