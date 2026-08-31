import type { Metadata } from "next";
import { videoSchema, breadcrumbSchema, eventSchema } from "@/lib/schemas";
import imgFwtPhotoContest from "@/assets/media-speaking/fwt-travel-photo-contest-august-2026.jpg";

export const metadata: Metadata = {
  title: "Myles Tan Media Features, Speaking Engagements & Awards",
  description: "Press features, speaking engagements, awards, and recognitions for Myles Yeo Tan — covering faith, finance, leadership, and entrepreneurship. Featured on Bilyonaryo News, ZFT Trading Republic, YGG Play Summit, and more.",
  alternates: {
    canonical: "/media-speaking",
  },
  openGraph: {
    title: "Myles Tan Media Features, Speaking Engagements & Awards",
    description: "Press features, speaking engagements, awards, and recognitions for Myles Yeo Tan — covering faith, finance, leadership, and entrepreneurship.",
    url: "https://mylesyeotan.com/media-speaking",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Tan Media Features, Speaking Engagements & Awards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myles Tan Media Features, Speaking Engagements & Awards",
    description: "Press features, speaking engagements, and awards across faith, finance, and leadership.",
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
    name: "Lean Six Sigma White Belt Certification",
    startDate: "2026-03-01",
    location: "Virtual Program",
    isOnline: true,
    description: "Completed foundational Lean Six Sigma White Belt training under Prof. Dr. Marcelo Machado Fernandes — covering process improvement, waste reduction, and operational excellence.",
  }),
  eventSchema({
    name: "Lean Six Sigma Yellow Belt Certification",
    startDate: "2026-03-01",
    location: "Virtual Program",
    isOnline: true,
    description: "Completed advanced 20-hour Lean Six Sigma Yellow Belt training in process improvement, data-driven decision-making, and scaling operations.",
  }),
  eventSchema({
    name: "Inducted into Rotary Club of Manila",
    startDate: "2026-04-16",
    location: "Manila Polo Club, Makati City, Philippines",
    isOnline: false,
    description: "Officially inducted into the Rotary Club of Manila — the first Rotary club in Asia — joining a network of business, civic, and community leaders united under 'Service Above Self.'",
  }),
  eventSchema({
    name: "Speaker at 'Crypto, Stocks, or Gold?' Webinar",
    startDate: "2026-04-30",
    location: "Virtual via Zoom",
    isOnline: true,
    url: "https://www.facebook.com/share/p/1VRYJS5f4Z/",
    description: "Speaker at the 'Crypto, Stocks, or Gold?' webinar discussing where Filipino traders should position in a peso vs. dollar world — covering peso/dollar trends, crypto, stocks, gold, and global positioning.",
  }),
  eventSchema({
    name: "Named Filipino World Travelers Affiliate",
    startDate: "2026-05-01",
    location: "Philippines",
    isOnline: false,
    url: "https://filipinoworldtravelers.com/affiliates/list",
    description: "Recognized as a Filipino World Travelers (FWT) Affiliate — a distinction reserved for Filipinos who have visited a minimum of 10 countries. Myles has set foot in 69 countries across all 7 continents.",
  }),
  eventSchema({
    name: "Myles Yeo Tan of JCI Manila Receives the JCI Foundation Pin: A Phil Pugsley Patron Recognized for Faith-Driven Leadership",
    startDate: "2026-06-15",
    location: "Philippines",
    isOnline: false,
    url: "https://mylesyeotan.com/blogs/jci-foundation-pin-phil-pugsley-patron-2026",
    description: "Myles Yeo Tan received the JCI Foundation Pin and the Phil Pugsley Patron recognition at age 39 — presented by 2026 JCI World President Alejandra Castillo — as a commitment to sowing into the next generation of leaders ahead of JCI World Congress 2026 in Clark, Pampanga.",
  }),
  eventSchema({
    name: "Featured in The Asian Pearl — Grand Slam Mission for Clark 2026",
    startDate: "2026-05-01",
    location: "Philippines / International",
    isOnline: false,
    url: "https://theasianpearl.com/project-chairman-myles-tan-and-the-grand-slam-mission-for-clark-2026/",
    description: "Featured in The Asian Pearl, JCI Manila's official publication, as Project Chairman of the Grand Slam Mission for Clark 2026 — leading a global campaign across three continents (Malaga, Antigua, and Abidjan) to rally international support for the Philippines' JCI World Congress 2026 bid.",
  }),
  eventSchema({
    name: "Welcomed as US Stocks Advisor at Alpha Intel",
    startDate: "2026-06-16",
    location: "Online Community",
    isOnline: true,
    url: "https://www.facebook.com/photo?fbid=122168134622956785&set=a.122094931448956785",
    description: "Alpha Intel welcomed Myles Tan as its US Stocks Advisor — providing insights, research, and guidance to help the community navigate the US stock market with greater confidence.",
  }),
  eventSchema({
    name: "Speaker at 'More Than an Angpao: Blessed to Be a Blessing' — CCF FilChi Davao",
    startDate: "2026-07-11T17:30:00+08:00",
    location: "CCF Davao Center, Davao City, Philippines",
    isOnline: false,
    url: "https://www.facebook.com/share/p/18M2HAiAgx/",
    description: "A special Bible study with CCF FilChi Davao on blessing, biblical boundaries, generosity, and faithful stewardship — Myles shares his personal journey of learning to handle money, opportunities, and influence according to biblical principles.",
  }),
  eventSchema({
    name: "Speaker at 'Know Yourself, Know Your Money' — Rotary Club of Manila",
    startDate: "2026-08-29T14:00:00+08:00",
    location: "Zero Ten Park, Makati City, Philippines",
    isOnline: false,
    url: "https://www.rivervalleyirregulars.com",
    description: "'Your Voice Matters' — a Rotary Youth & Vocational Service initiative by River Valley Irregulars, the Rotary Club of Manila, Myles Tan Ministries, and the Rotaract Club of Manila — a two-part workshop on understanding your personality, money habits, and financial future. Part 1 covers DISC personality, leadership, communication, self-awareness, and S.M.A.R.T. goal-setting; Part 2 covers money personality, budgeting, emergency funds, cash flow, generational wealth, responsible investing, market basics, and an introduction to cryptocurrency.",
  }),
];

// The 2026 FWT Travel Photo Contest win is an award, not an event — modelling it as an
// Event would assert an organizer, a performer, and ticket offers that do not exist.
// Person.award (lib/schemas.ts) carries the recognition; this node describes the work itself.
const awardedPhotograph = {
  "@context": "https://schema.org",
  "@type": "Photograph",
  "@id": "https://mylesyeotan.com/media-speaking#fwt-2026-antarctica",
  "name": "Antarctica — Top 12 Winner, 2026 FWT Travel Photo Contest",
  "creator": { "@id": "https://mylesyeotan.com/#person" },
  "copyrightHolder": { "@id": "https://mylesyeotan.com/#person" },
  "award": "Top 12 Winner — 2026 Filipino World Travelers (FWT) Travel Photo Contest",
  "contentLocation": { "@type": "Place", "name": "Antarctica" },
  "image": `https://mylesyeotan.com${imgFwtPhotoContest.src}`,
  "url": "https://filipinoworldtravelers.com/activities/2026-fwt-travel-photo-contest/2026-winners",
  "description":
    "The photograph that made Myles Yeo Tan one of the Top 12 Winners of the 2026 Filipino World Travelers (FWT) Travel Photo Contest — a lone figure in bright orange seated on weathered rock in Antarctica, looking out over ice floes and snow-capped peaks.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://mylesyeotan.com" },
  { name: "Press & Awards", url: "https://mylesyeotan.com/media-speaking" },
]);

const graph = {
  "@context": "https://schema.org",
  "@graph": [breadcrumb, ...videos, ...events, awardedPhotograph],
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
