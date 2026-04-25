import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact Myles Yeo Tan - Get in Touch",
  description: "Connect with Myles Tan for coaching sessions, speaking engagements, financial planning consultations, or crypto trading insights. Reach out via social media or contact form.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Myles Yeo Tan - Get in Touch",
    description: "Connect with Myles Tan for coaching sessions, speaking engagements, financial planning consultations, or crypto trading insights.",
    url: "https://mylesyeotan.com/contact",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Myles Yeo Tan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Myles Yeo Tan - Get in Touch",
    description: "Connect with Myles Tan for coaching sessions, speaking engagements, and consultations.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://mylesyeotan.com" },
  { name: "Contact", url: "https://mylesyeotan.com/contact" },
]);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
