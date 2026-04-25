import type { Metadata } from "next";
import { breadcrumbSchema, serviceSchema } from "@/lib/schemas";

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

const services = [
  serviceSchema({
    name: "Crypto, Stocks & Commodities Trading Analysis",
    description: "Market cycle analysis, technical analysis, risk management, and trade psychology coaching covering Bitcoin, Ethereum, altcoins, stocks, and commodities.",
    serviceType: "Trading Analysis & Coaching",
    url: "https://mylesyeotan.com/services#crypto",
  }),
  serviceSchema({
    name: "Financial Planning and Literacy",
    description: "Values-aligned financial planning, budgeting, cash-flow optimization, and goal-based financial roadmapping for individuals and families.",
    serviceType: "Financial Planning",
    url: "https://mylesyeotan.com/services#financial",
  }),
  serviceSchema({
    name: "Christian Entrepreneurship Coaching",
    description: "Faith-based business strategy and mentorship for founders and leaders building businesses grounded in biblical values.",
    serviceType: "Business Coaching",
    url: "https://mylesyeotan.com/services#coaching",
  }),
  serviceSchema({
    name: "Speaking Engagements",
    description: "Keynotes, seminars, and panel talks for corporate, church, and community audiences on faith, finance, leadership, and purpose-driven living.",
    serviceType: "Public Speaking",
    url: "https://mylesyeotan.com/services#speaking",
  }),
];

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://mylesyeotan.com" },
  { name: "Services", url: "https://mylesyeotan.com/services" },
]);

const graph = {
  "@context": "https://schema.org",
  "@graph": [breadcrumb, ...services],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      {children}
    </>
  );
}
