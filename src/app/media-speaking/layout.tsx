import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Speaking Engagements | Myles Yeo Tan",
  description: "Explore Myles Tan's media appearances, speaking engagements, and public talks on faith, finance, leadership, and entrepreneurship. Featured on Bilyonaryo News, ZFT Trading Republic, and more.",
  alternates: {
    canonical: "/media-speaking",
  },
  openGraph: {
    title: "Media & Speaking Engagements | Myles Yeo Tan",
    description: "Explore Myles Tan's media appearances, speaking engagements, and public talks on faith, finance, leadership, and entrepreneurship.",
    url: "https://mylesyeotan.com/media-speaking",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Yeo Tan Media & Speaking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Speaking Engagements | Myles Yeo Tan",
    description: "Explore media appearances and speaking engagements on faith, finance, and leadership.",
    images: ["/og-image.jpg"],
  },
};

export default function MediaSpeakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
