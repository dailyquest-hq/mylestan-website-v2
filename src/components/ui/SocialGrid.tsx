"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { ImagePreviewModal } from "@/components/ui/ImagePreviewModal";

export interface SocialGridItem {
  src: StaticImageData;
  alt: string;
  href?: string;
  objectPosition?: string;
}

interface SocialGridProps {
  items: SocialGridItem[];
  columns?: string;
  cellClassName?: string;
  showOverlay?: boolean;
}

export function SocialGrid({
  items,
  columns = "grid-cols-2 md:grid-cols-4",
  cellClassName = "aspect-square",
  showOverlay = true,
}: SocialGridProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <>
      <div className={`grid ${columns} gap-4 w-full`}>
        {items.map((item, idx) => {
          const imgEl = (
            <div className={`relative overflow-hidden bg-gray-100 group w-full ${cellClassName}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: item.objectPosition ?? "center" }}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              {showOverlay && (
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              )}
            </div>
          );

          if (item.href) {
            return (
              <Link key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                {imgEl}
              </Link>
            );
          }

          return (
            <div
              key={idx}
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPreviewUrl(item.src.src);
              }}
            >
              {imgEl}
            </div>
          );
        })}
      </div>

      <ImagePreviewModal imageUrl={previewUrl} onClose={() => setPreviewUrl(null)} />
    </>
  );
}
