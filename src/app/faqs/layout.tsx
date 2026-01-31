import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions | Myles Yeo Tan",
  description: "Find answers to common questions about Myles Tan's services, coaching, speaking engagements, crypto trading insights, and Christian entrepreneurship guidance.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "FAQs - Frequently Asked Questions | Myles Yeo Tan",
    description: "Find answers to common questions about Myles Tan's services, coaching, speaking engagements, crypto trading insights, and Christian entrepreneurship guidance.",
    url: "https://mylesyeotan.com/faqs",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Yeo Tan FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs - Frequently Asked Questions | Myles Yeo Tan",
    description: "Find answers to common questions about services, coaching, and speaking engagements.",
    images: ["/og-image.jpg"],
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
