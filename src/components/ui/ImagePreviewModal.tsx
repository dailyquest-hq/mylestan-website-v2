"use client";

import { useEffect } from "react";

interface ImagePreviewModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export function ImagePreviewModal({ imageUrl, onClose }: ImagePreviewModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (imageUrl) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [imageUrl]);

  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <button
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center touch-manipulation"
        onClick={onClose}
        aria-label="Close preview"
      >
        ×
      </button>
      <img
        src={imageUrl}
        alt="Preview"
        className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
