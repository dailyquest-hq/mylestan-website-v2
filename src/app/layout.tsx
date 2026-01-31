import type { Metadata } from "next";
import { Darker_Grotesque, Inter, Poppins, Albert_Sans } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

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

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myles Yeo Tan | Crypto Trader, Christian Entrepreneur & Public Speaker",
  description: "Myles Tan is a crypto trader, Christian entrepreneur, financial planner, real estate broker, and public speaker. Blending faith and finance to empower people worldwide.",
  keywords: ["Myles Yeo Tan", "Myles Tan", "crypto trading", "Christian entrepreneur", "financial planning", "real estate broker", "public speaker", "faith and finance", "Singapore"],
  authors: [{ name: "Myles Yeo Tan" }],
  openGraph: {
    title: "Myles Yeo Tan | Crypto Trader, Christian Entrepreneur & Public Speaker",
    description: "Blending faith and finance to empower people worldwide. Expert in crypto trading, Christian entrepreneurship, and financial planning.",
    type: "website",
    siteName: "Myles Yeo Tan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myles Yeo Tan | Crypto Trader, Christian Entrepreneur & Public Speaker",
    description: "Blending faith and finance to empower people worldwide. Expert in crypto trading, Christian entrepreneurship, and financial planning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Myles Yeo Tan",
      alternateName: "Myles Tan",
      description: "Crypto trader, Christian entrepreneur, financial planner, real estate broker, and public speaker specializing in blending faith and finance.",
      jobTitle: [
        "Crypto Trader",
        "Christian Entrepreneur",
        "Public Speaker",
        "Financial Planner",
        "Real Estate Broker"
      ],
      knowsAbout: [
        "Cryptocurrency Trading",
        "Christian Entrepreneurship",
        "Financial Planning",
        "Real Estate",
        "Public Speaking",
        "Faith-Based Finance",
        "Investment Strategy",
        "Business Coaching"
      ],
      url: "https://mylesyeotan.com",
    },
    {
      "@type": "ProfessionalService",
      name: "Myles Yeo Tan - Faith & Finance Services",
      description: "Professional services in crypto trading, Christian entrepreneurship coaching, financial planning, and real estate, blending faith with financial expertise.",
      provider: {
        "@type": "Person",
        name: "Myles Yeo Tan"
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Crypto & Trading Insights",
              description: "Market analysis, trading strategies, and digital investment insights"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Financial Planning",
              description: "Comprehensive financial planning from budgeting to long-term investments"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Christian Entrepreneurship Coaching",
              description: "Business coaching combining biblical wisdom with practical strategies"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Speaking Engagements",
              description: "Professional speaking on faith, finance, entrepreneurship, and personal growth"
            }
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${darkerGrotesque.variable} ${inter.variable} ${poppins.variable} ${albertSans.variable} antialiased bg-[#0f100a] text-white`}
      >
        <Navbar />
        {children}
        <Footer />

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
