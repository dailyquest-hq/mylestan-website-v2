import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Myles Yeo Tan JCI Manila | JCI Philippines Member & Leader",
  description:
    "Explore the JCI Manila achievements of Myles Yeo Tan — a long-time JCI Philippines member, public speaking champion, ONTO project leader, and Commissioner for Training since 2012.",
  alternates: {
    canonical: "/jci-manila",
  },
  openGraph: {
    title: "Myles Yeo Tan JCI Manila | JCI Philippines Member & Leader",
    description:
      "A decade-plus record of leadership, service, and community impact within JCI Manila and JCI Philippines.",
    url: "https://mylesyeotan.com/jci-manila",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Yeo Tan JCI Manila member and leader in JCI Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myles Yeo Tan JCI Manila | JCI Philippines Member & Leader",
    description:
      "A decade-plus record of leadership, service, and community impact within JCI Manila and JCI Philippines.",
    images: ["/og-image.jpg"],
  },
};

export default function JCILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
