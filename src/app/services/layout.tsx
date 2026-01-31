import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Crypto Trading, Financial Planning & Business Coaching | Myles Yeo Tan",
  description: "Explore Myles Tan's professional services: crypto trading analysis, financial planning, Christian entrepreneurship coaching, and speaking engagements. Faith-based guidance for your financial journey.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services - Crypto Trading, Financial Planning & Business Coaching",
    description: "Explore Myles Tan's professional services: crypto trading analysis, financial planning, Christian entrepreneurship coaching, and speaking engagements.",
    url: "https://mylesyeotan.com/services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Yeo Tan Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Crypto Trading, Financial Planning & Business Coaching",
    description: "Explore Myles Tan's professional services: crypto trading analysis, financial planning, Christian entrepreneurship coaching, and speaking engagements.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
