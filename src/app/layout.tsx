import type { Metadata } from "next";
import { Darker_Grotesque, Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { personSchema, websiteSchema, organizationSchema, localBusinessSchema } from "@/lib/schemas";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://mylesyeotan.com"),
  title: "Myles Yeo Tan | Crypto Trader, Christian Entrepreneur & Public Speaker",
  description: "Myles Tan is a crypto trader, Christian entrepreneur, financial planner, real estate broker, and public speaker. Blending faith and finance to empower people worldwide.",
  keywords: ["Myles Yeo Tan", "Myles Tan", "crypto trading", "Christian entrepreneur", "financial planning", "real estate broker", "public speaker", "faith and finance", "Singapore"],
  authors: [{ name: "Myles Yeo Tan" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Myles Yeo Tan | Crypto Trader, Christian Entrepreneur & Public Speaker",
    description: "Blending faith and finance to empower people worldwide. Expert in crypto trading, Christian entrepreneurship, and financial planning.",
    url: "https://mylesyeotan.com",
    siteName: "Myles Yeo Tan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Yeo Tan - Crypto Trader, Christian Entrepreneur & Public Speaker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myles Yeo Tan | Crypto Trader, Christian Entrepreneur & Public Speaker",
    description: "Blending faith and finance to empower people worldwide. Expert in crypto trading, Christian entrepreneurship, and financial planning.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "zDFVrJyqQNs4N3NI1HGUTyTFPjSzHBCypVSPiDtXdp8",
    other: {
      "msvalidate.01": "bing-verification-code-here",
    },
  },
};

// Enhanced schema markup for LLM discoverability
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    websiteSchema,
    organizationSchema,
    localBusinessSchema
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body
        className={`${darkerGrotesque.variable} ${inter.variable} ${poppins.variable} antialiased bg-[#0f100a] text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#ed5128] focus:text-white focus:px-4 focus:py-2 focus:font-inter focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />

        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(combinedSchema)}
        </Script>
      </body>
    </html>
  );
}
