import type { StaticImageData } from "next/image";
import imgCtaWebinar from "@/assets/media-speaking/cta-webinar-april-2026.jpg";
import imgPesoDollar from "@/assets/blogs/peso-dollar-april-2026.jpg";

export interface Tip {
  number: number;
  title: string;
  emoji?: string;
  quote?: string;
  bullets: string[];
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  /** ISO date string YYYY-MM-DD */
  datePublished: string;
  excerpt: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  secondaryImage?: StaticImageData;
  secondaryImageAlt?: string;
  /** Public URL where the post originally appeared (Facebook, etc.) */
  originalUrl: string;
  originalSource: string;
  /** Human-readable original publish date e.g. "May 1, 2026" */
  originalDate: string;
  intro: string[];
  tips: Tip[];
  closing: string[];
  cta: {
    label: string;
    url: string;
    description: string;
  };
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "crypto-stocks-or-gold-5-lessons",
    title: "Crypto, Stocks, or Gold? 5 Lessons from a Filipino Investor in a Peso vs Dollar World",
    category: "FINANCE",
    datePublished: "2026-05-01",
    excerpt:
      "Two years ago, I made the boldest move of my financial life. Here are the 5 lessons that helped me diversify into gold, silver, and dollar assets before the wave hit — and how you can position yourself for the next cycle.",
    heroImage: imgCtaWebinar,
    heroImageAlt:
      "Crypto, Stocks, or Gold? — Where Filipino Traders Should Position in a Peso vs Dollar World — April 30, 2026 webinar flyer",
    secondaryImage: imgPesoDollar,
    secondaryImageAlt:
      "ABS-CBN News graphic showing the Philippine peso closing at 61.300 to a dollar on April 28, 2026",
    originalUrl: "https://www.facebook.com/share/p/1VRYJS5f4Z/",
    originalSource: "Facebook",
    originalDate: "May 1, 2026",
    intro: [
      "Two years ago, I made the boldest move of my financial life.",
      "When BBM won the presidency in 2022, I saw that difficult times were ahead for the Philippine economy. When Bitcoin hit $100K in 2024, I read that as the end of easy-money euphoria.",
      "After much prayer and fasting, God impressed upon my heart to heavily and aggressively diversify into gold, silver, and other unconventional assets back in 2024.",
      "Today, I'm enjoying the fruits of my labor and live life stress-free thanks to Jesus and for the wisdom to act. Here's what I learned. I hope it helps you.",
    ],
    tips: [
      {
        number: 1,
        title: "Stop Chasing, Start Positioning",
        emoji: "🧭",
        quote: "Position before the news, not after the noise.",
        bullets: [
          "The biggest mistake investors make is buying AFTER the headline — Bitcoin at $100K, gold hitting all-time highs week after week, silver posting multiple all-time highs.",
          "Surfing in Elyu taught me this about investing: don't chase every wave, you'll exhaust yourself. Watch where the big waves form, position yourself early, and let it come to you.",
          "Stop chasing hot stock tips from influencers or paid alpha Discord groups. You never know when you'll be the one getting dumped on.",
        ],
      },
      {
        number: 2,
        title: "Your Emergency Fund Is Your First Investment",
        emoji: "💰",
        quote: "If the market doesn't wipe you out, life will.",
        bullets: [
          "Before you buy a single share of $DMC or any memecoin — 3 to 6 months of living expenses must sit untouched in a high-yield savings account. No exceptions.",
          "Build the foundation first. Always.",
        ],
      },
      {
        number: 3,
        title: "Diversify Across All Assets, Not Just Tickers",
        emoji: "🏆",
        quote: "Don't invest in what you know — know what you invest in.",
        bullets: [
          "Most Filipino retail investors think diversification means owning 5 PSE stocks. That is not diversification.",
          "True diversification means owning across: 📈 PSE equities (growth), 🥇 gold & silver (hedge & store of value), 💵 dollar-denominated assets via ETFs or BKR, ₿ crypto (small, strategic, not emotional), and 🏦 fixed income (T-bills, MP2, bonds).",
          "When BBM won and the peso started weakening, investors with only PSE exposure got hit on both ends. Dollar, gold, and silver investors cushioned the blow.",
        ],
      },
      {
        number: 4,
        title: "Your Savings Account Is Losing",
        emoji: "🏦",
        bullets: [
          "0.1% interest while inflation runs at 4–5%? You are losing money by doing nothing.",
          "Even buying one gram of gold a month beats a passbook account long-term. Your money needs to work harder than you do.",
        ],
      },
      {
        number: 5,
        title: "Study Now, Profit Next Cycle",
        emoji: "📚",
        quote:
          "Most people wait to be rich before they invest. The investor invests before they're rich — that's why they become rich.",
        bullets: [
          "The next bull run is coming — but sadly, not many will catch it. My honest forecast (you don't need to be a prophet to see it): more financial pain incoming until the next elections. Markets don't like instability. Position accordingly.",
          "The investors who prepare today are the ones who win it. ₱500 spent on financial education today returns more than any hot stock tip ever will.",
          "You don't need expensive paid courses, paid alpha groups, or paid mentoring. There's a wealth of free resources and free Discord groups online. Lock in, self-study, build your network, stay consistent.",
          "Remember: lahat ng sikat na influencers and KOLs ngayon nagsimula sa wala. Many of today's loudest influencers are already fading because they aren't adapting to this current cycle. Don't be them.",
        ],
      },
    ],
    closing: [
      "I'm talking about all of this — and more — at my upcoming STA talk. If you want to learn how to position yourself before the next wave hits, grab your slot.",
    ],
    cta: {
      label: "Register for the STA × RFPI Talk",
      url: "https://eventhubph.com/e/cpd-043026-4pm/",
      description:
        "Registered Financial Planner Institute–Philippines × Society of Technical Analysts — featuring Myles Yeo Tan, RFP, CTA.",
    },
    tags: ["#mylestan", "#mylesyeotan", "MylesTanMinistries"],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
