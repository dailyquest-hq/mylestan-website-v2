import type { Metadata } from "next";
import { videoSchema, breadcrumbSchema, eventSchema } from "@/lib/schemas";

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

const videos = [
  videoSchema({
    name: "Myles Yeo Tan — 2024 Highlight Reel",
    description: "A compilation of key moments from the 'Kingdom Impact' tour across Southeast Asia, featuring keynote talks on faith, finance, and leadership.",
    thumbnailUrl: "https://i.ytimg.com/vi/nZJeBBMlAjM/maxresdefault.jpg",
    uploadDate: "2024-12-01",
    contentUrl: "https://www.youtube.com/watch?v=nZJeBBMlAjM",
    duration: "PT30M",
  }),
  videoSchema({
    name: "Bilyonaryo News Channel — Market Analysis with Myles Tan",
    description: "In-depth market analysis covering crypto trends, trading strategies, and financial insights for Filipino investors.",
    thumbnailUrl: "https://i.ytimg.com/vi/nZJeBBMlAjM/maxresdefault.jpg",
    uploadDate: "2025-11-01",
    contentUrl: "https://www.youtube.com/watch?v=nZJeBBMlAjM",
    duration: "PT30M",
  }),
  videoSchema({
    name: "ZFT Trading Republic — New COO Announcement",
    description: "Official announcement of Myles Yeo Tan's appointment as Chief Operating Officer of ZFT Trading Republic.",
    thumbnailUrl: "https://i.ytimg.com/vi/GYb1q8tm36s/maxresdefault.jpg",
    uploadDate: "2025-06-01",
    contentUrl: "https://www.youtube.com/watch?v=GYb1q8tm36s",
    duration: "PT15M",
  }),
  videoSchema({
    name: "ZFT Kingdom Playlist — Trading Republic Series",
    description: "Educational series covering trading fundamentals, market analysis techniques, and kingdom principles in finance.",
    thumbnailUrl: "https://i.ytimg.com/vi/GYb1q8tm36s/maxresdefault.jpg",
    uploadDate: "2025-03-01",
    contentUrl: "https://www.youtube.com/watch?v=GYb1q8tm36s&list=PL033hJEN0tRt2wQyz8KxKEu5xWhCKrDuI",
  }),
];

const events = [
  eventSchema({
    name: "Guest Speaker at Revelation City Church",
    startDate: "2020-10-01",
    location: "Manila, Philippines",
    isOnline: false,
    url: "https://www.youtube.com/watch?v=74K1HXLi53I",
    description: "Guest speaker engagement at Revelation City Church on faith and biblical principles.",
  }),
  eventSchema({
    name: "Guest Speaker at Revelation City Church",
    startDate: "2020-11-01",
    location: "Manila, Philippines",
    isOnline: false,
    url: "https://www.youtube.com/watch?v=Wh8kTarTS6A",
    description: "Returning guest speaker at Revelation City Church.",
  }),
  eventSchema({
    name: "Regular Speaker at Revelation City Church",
    startDate: "2021-02-01",
    location: "Manila, Philippines",
    isOnline: false,
    url: "https://www.youtube.com/watch?v=L7Xa2_V1_u4",
    description: "Joined Revelation City Church as a regular speaker.",
  }),
  eventSchema({
    name: "Resource Speaker at Grace Christian College Senior High School",
    startDate: "2023-10-01",
    location: "Manila, Philippines",
    isOnline: false,
    description: "Resource speaker engagement at Grace Christian College Senior High School.",
  }),
  eventSchema({
    name: "ZFT Airdrop Resource Speaker",
    startDate: "2024-03-01",
    location: "Manila, Philippines",
    isOnline: false,
    url: "https://www.facebook.com/photo?fbid=846900120783203&set=a.465969958876223",
    description: "Invited resource speaker for ZFT's airdrop event covering crypto fundamentals.",
  }),
  eventSchema({
    name: "Regular Speaker on The Trading Republic's YouTube",
    startDate: "2025-03-01",
    location: "Virtual Broadcast",
    isOnline: true,
    description: "Appearing as a regular speaker on The Trading Republic's YouTube channel covering market analysis and trading discipline.",
  }),
  eventSchema({
    name: "Faith for Financial Future Talk",
    startDate: "2025-10-01",
    location: "Manila, Philippines",
    isOnline: false,
    description: "Keynote talk on integrating faith and financial planning for long-term stewardship.",
  }),
  eventSchema({
    name: "Bilyonaryo News Interview",
    startDate: "2025-11-01",
    location: "Virtual Broadcast",
    isOnline: true,
    url: "https://www.youtube.com/watch?v=nZJeBBMlAjM",
    description: "Interview on Bilyonaryo News Channel as a market analyst covering crypto and Philippine market trends.",
  }),
  eventSchema({
    name: "Featured Speaker / KOL — YGG Play Summit 2025 (Icon of Play)",
    startDate: "2025-11-01",
    location: "Manila, Philippines",
    isOnline: false,
    description: "Recognized as Icon of Play at YGG Play Summit 2025, featured speaker on Web3, gaming, and finance.",
  }),
  eventSchema({
    name: "Speaker at 'Crypto, Stocks, or Gold?' Webinar",
    startDate: "2026-04-01",
    location: "Virtual via Zoom",
    isOnline: true,
    description: "Speaker at the 'Crypto, Stocks, or Gold?' webinar discussing asset allocation and investment strategy.",
  }),
];

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://mylesyeotan.com" },
  { name: "Media & Speaking", url: "https://mylesyeotan.com/media-speaking" },
]);

const graph = {
  "@context": "https://schema.org",
  "@graph": [breadcrumb, ...videos, ...events],
};

export default function MediaSpeakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <link rel="preconnect" href="https://i.ytimg.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      {children}
    </>
  );
}
