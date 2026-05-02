import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights - Crypto Trading, Faith & Finance | Myles Yeo Tan",
  description: "Read articles and insights from Myles Tan on cryptocurrency trading, financial planning, Christian entrepreneurship, and faith-driven business principles.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog & Insights - Crypto Trading, Faith & Finance | Myles Yeo Tan",
    description: "Read articles and insights from Myles Tan on cryptocurrency trading, financial planning, Christian entrepreneurship, and faith-driven business principles.",
    url: "https://mylesyeotan.com/blogs",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Yeo Tan Blog & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights - Crypto Trading, Faith & Finance",
    description: "Read articles and insights on cryptocurrency trading, financial planning, and Christian entrepreneurship.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
