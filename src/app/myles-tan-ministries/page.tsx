import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";
import { Heart, Sparkles, Shield, TrendingUp, Moon, BookOpen } from "lucide-react";
import imgMinistry from "@/assets/about/trading-republic-speaker.jpg";
import imgBSSM from "@/assets/ministries/bssm-dinner-2023.jpg";
import imgGGC from "@/assets/ministries/ggc-missionaries-australia.jpg";
import imgBethel from "@/assets/ministries/bethel-visit.jpg";

export const metadata: Metadata = {
  title: "Myles Tan Ministries | Healing, Prophecy, Deliverance, Jesus, Financial Breakthrough",
  description:
    "Discover Myles Tan Ministries, a Christ-centered ministry focused on Jesus, healing, prophecy, deliverance, dream interpretation, and financial breakthrough through biblical teaching.",
  keywords: [
    "Myles Tan Ministries",
    "Myles Tan ministry",
    "Myles Tan healing ministry",
    "Myles Tan prophecy",
    "Myles Tan deliverance",
    "Myles Tan financial breakthrough",
    "Myles Tan dream interpretation",
    "Christian healing ministry",
    "biblical dream interpretation",
    "financial breakthrough prayer",
    "prophetic ministry",
    "deliverance ministry",
  ],
  alternates: {
    canonical: "/myles-tan-ministries",
  },
  openGraph: {
    title: "Myles Tan Ministries | Healing, Prophecy, Deliverance, Jesus, Financial Breakthrough",
    description:
      "A Christ-centered ministry focused on Jesus, healing, prophecy, deliverance, dream interpretation, and financial breakthrough through biblical teaching.",
    url: "https://mylesyeotan.com/myles-tan-ministries",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myles Tan Ministries healing prophecy deliverance Jesus financial breakthrough",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myles Tan Ministries | Healing, Prophecy, Deliverance, Jesus, Financial Breakthrough",
    description:
      "A Christ-centered ministry focused on Jesus, healing, prophecy, deliverance, dream interpretation, and financial breakthrough through biblical teaching.",
    images: ["/og-image.jpg"],
  },
};

const ministryPillars = [
  {
    title: "Healing",
    category: "Physical · Emotional · Spiritual",
    description:
      "Many people are searching for hope, prayer, and restoration in the middle of pain, sickness, emotional wounds, spiritual heaviness, and life struggles. This ministry encourages people to believe God for physical, emotional, inner, mental, and spiritual healing — and for the peace and wholeness that come through the love and power of Jesus.",
    Icon: Heart,
  },
  {
    title: "Prophecy",
    category: "Hearing God · Discernment",
    description:
      "In a time when many people are hungry for direction, Myles Tan Ministries helps believers understand the prophetic in a way that remains centered on Jesus and aligned with the Bible. The focus includes understanding the gift of prophecy, growing in discernment, testing prophetic words through Scripture, and recognizing false voices.",
    Icon: Sparkles,
  },
  {
    title: "Deliverance",
    category: "Spiritual Freedom · Authority",
    description:
      "True deliverance comes through Jesus Christ, repentance, truth, prayer, and the power of the Holy Spirit. Deliverance is about freedom, not fear — walking out the victory Jesus already purchased on the cross. The ministry teaches believers how to stand firm in Christ and walk in lasting spiritual authority.",
    Icon: Shield,
  },
  {
    title: "Financial Breakthrough",
    category: "Biblical Stewardship · Faith",
    description:
      "Financial breakthrough is not treated as greed or material obsession. This ministry emphasizes biblical stewardship, wise decision-making, responsible handling of money, faith over fear, breaking lack and poverty mindsets, and honoring Jesus with finances — connecting spiritual growth with practical wisdom.",
    Icon: TrendingUp,
  },
  {
    title: "Dream Interpretation",
    category: "Biblical · Discernment",
    description:
      "Throughout Scripture, God used dreams to warn, guide, reveal, encourage, and instruct. This ministry explores dreams through a Christian, biblical, and Spirit-led perspective — with a focus on discernment, Scripture, and keeping Jesus at the center of interpretation rather than superstition.",
    Icon: Moon,
  },
  {
    title: "Biblical Teaching",
    category: "Word of God · Faith",
    description:
      "At the core of Myles Tan Ministries is a deep commitment to the Word of God and faith-filled biblical teaching. Rather than promoting empty religion or shallow motivation, the ministry is focused on glorifying Jesus, teaching biblical truth, and helping people live with stronger faith and deeper intimacy with God.",
    Icon: BookOpen,
  },
];

const beliefItems = [
  "Jesus saves",
  "Jesus heals",
  "Jesus delivers",
  "Jesus restores",
  "Jesus speaks",
  "Jesus gives hope and purpose",
];

const missionItems = [
  "Know Jesus Christ more deeply",
  "Grow in the Word of God",
  "Receive healing and restoration",
  "Understand prophecy with biblical discernment",
  "Walk in deliverance and freedom",
  "Pursue financial breakthrough with wisdom and stewardship",
  "Interpret dreams through a biblical lens",
  "Live with faith, boldness, and Kingdom purpose",
];

const faqs = [
  {
    question: "What is Myles Tan Ministries about?",
    answer:
      "Myles Tan Ministries is a Christ-centered ministry focused on Jesus, healing, prophecy, deliverance, financial breakthrough, and dream interpretation through biblical teaching and spiritual encouragement.",
  },
  {
    question: "Is Myles Tan Ministries a Christian ministry?",
    answer:
      "Yes. Myles Tan Ministries is a Christian ministry centered on Jesus Christ, the Word of God, and the work of the Holy Spirit.",
  },
  {
    question: "Does Myles Tan Ministries talk about healing and deliverance?",
    answer:
      "Yes. The ministry emphasizes healing prayer, spiritual freedom, deliverance, and restoration through the power and authority of Jesus.",
  },
  {
    question: "Does Myles Tan Ministries focus on prophecy?",
    answer:
      "Yes. Prophecy and prophetic discernment are part of the ministry's focus, with an emphasis on biblical grounding, wisdom, and testing everything through Scripture.",
  },
  {
    question: "What does Myles Tan Ministries teach about financial breakthrough?",
    answer:
      "The ministry connects financial breakthrough with biblical stewardship, faith, discipline, wisdom, and God-honoring financial principles.",
  },
  {
    question: "Does Myles Tan Ministries interpret dreams?",
    answer:
      "Yes. Dream interpretation is one of the ministry themes, approached from a biblical and Christian perspective with a focus on discernment and scriptural understanding.",
  },
];

export default function MylesTanMinistriesPage() {
  const faqStructuredData = faqSchema(faqs);
  const breadcrumbStructuredData = breadcrumbSchema([
    { name: "Home", url: "https://mylesyeotan.com" },
    { name: "Myles Tan Ministries", url: "https://mylesyeotan.com/myles-tan-ministries" },
  ]);

  return (
    <main id="main-content" className="bg-white min-h-dvh w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
          <SectionLabel color="white">Christ-Centered Ministry</SectionLabel>
          <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.95]">
            Myles Tan Ministries
          </h1>
          <p className="font-darker font-semibold text-[#ed5128] text-[20px] sm:text-[24px] md:text-[32px] leading-snug max-w-4xl">
            Healing, Prophecy, Deliverance, Jesus, Financial Breakthrough, and Dream Interpretation
          </p>
          <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px] leading-relaxed">
            Myles Tan Ministries is a Christ-centered ministry dedicated to making Jesus known through the Word of God, the power of the Holy Spirit, and faith-filled biblical teaching. The ministry focuses on healing, prophecy, deliverance, dream interpretation, financial breakthrough, and helping people grow deeper in their walk with Jesus Christ.
          </p>
        </div>
      </section>

      {/* What Is MTM Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

            {/* Left: Copy */}
            <div className="w-full lg:w-[60%] flex flex-col gap-6">
              <SectionLabel color="orange">What Is Myles Tan Ministries?</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
                A Ministry Built Around Jesus
              </h2>
              <div className="font-inter text-lg text-[#282828] leading-relaxed space-y-5">
                <p>
                  Myles Tan Ministries is a ministry focused on helping people encounter Jesus Christ and experience the power of God in practical and spiritual areas of life. For those seeking prayer, spiritual clarity, biblical wisdom, and breakthrough in life, Myles Tan Ministries exists to point people back to Jesus — the One who saves, heals, restores, delivers, and transforms lives.{" "}
                  <Link href="/about" className="text-[#ed5128] hover:underline">Learn more about Myles Tan</Link> and the story behind the ministry.
                </p>
                <p>
                  At its core, this is a ministry about Jesus, truth, transformation, and breakthrough. Rather than promoting empty religion or shallow motivation, the ministry is committed to glorifying Jesus, teaching biblical truth, and helping people live with stronger faith, deeper intimacy with God, and greater spiritual authority.
                </p>
              </div>
            </div>

            {/* Right: Ministry Focus Cards */}
            <div className="w-full lg:w-[40%] grid grid-cols-2 gap-5">
              {[
                { value: "Healing", label: "Prayer & Restoration" },
                { value: "Prophecy", label: "Biblical Discernment" },
                { value: "Deliverance", label: "Freedom in Christ" },
                { value: "Breakthrough", label: "Faith & Finance" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#0f100a] text-white p-8 flex flex-col justify-center"
                >
                  <div className="font-darker font-bold text-2xl text-[#ed5128] mb-2 leading-tight">
                    {value}
                  </div>
                  <div className="font-inter text-sm text-white/60 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jesus at the Center Section */}
      <section className="bg-[#0f100a] text-white py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <SectionLabel color="white">The Foundation</SectionLabel>
            <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
              Jesus Is the Center of Myles Tan Ministries
            </h2>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-2xl leading-relaxed">
              Everything in Myles Tan Ministries begins and ends with Jesus Christ. This ministry is founded on the belief that:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {beliefItems.map((belief) => (
              <div
                key={belief}
                className="border border-white/10 p-6 flex items-center justify-center text-center hover:border-[#ed5128] transition-colors duration-300"
              >
                <p className="font-darker font-semibold text-xl text-white leading-snug">{belief}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
            <p className="font-inter text-white/60 text-lg leading-relaxed">
              People searching for Jesus-centered ministry, Christian ministry online, or Bible-based spiritual teaching will find that this ministry keeps Christ at the center — always.
            </p>
          </div>
        </div>
      </section>

      {/* Ministry Pillars Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <SectionLabel color="orange">Ministry Focus Areas</SectionLabel>
            <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
              Six Pillars of the Ministry
            </h2>
            <p className="font-poppins text-[#282828]/60 text-base md:text-lg max-w-2xl leading-relaxed">
              From healing prayer to dream interpretation, Myles Tan Ministries speaks to the full range of spiritual and practical life areas — all through the lens of Jesus and biblical truth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministryPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-[#282828]/10 p-8 hover:border-[#ed5128] transition-colors duration-300"
              >
                <pillar.Icon size={36} className="text-[#ed5128] mb-4" strokeWidth={1.5} />
                <div className="text-[#ed5128] text-sm font-inter font-semibold tracking-wider uppercase mb-2">
                  {pillar.category}
                </div>
                <h3 className="font-darker font-semibold text-2xl mb-4">{pillar.title}</h3>
                <p className="font-inter text-[#282828]/70 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#ed5128] text-white py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

            {/* Left: Heading */}
            <div className="w-full lg:w-[40%] flex flex-col gap-6">
              <SectionLabel color="white">The Mission</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[56px] leading-[0.9]">
                The Mission of Myles Tan Ministries
              </h2>
              <p className="font-inter text-white/80 text-lg leading-relaxed">
                This is a ministry for people who are hungry for God, hungry for truth, and ready for breakthrough. The mission of Myles Tan Ministries is to help people move from where they are — toward greater faith, spiritual freedom, and Kingdom purpose — through the power of Jesus Christ. If you would like Myles to speak at your event,{" "}
                <Link href="/media-speaking" className="text-white underline hover:text-white/80">learn more about his speaking engagements</Link>.
              </p>
            </div>

            {/* Right: Mission List */}
            <div className="w-full lg:w-[60%]">
              <ul className="flex flex-col gap-4">
                {missionItems.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-white/20 pb-4 last:border-0">
                    <span className="mt-2 w-2 h-2 bg-white flex-shrink-0" />
                    <span className="font-inter text-lg text-white/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* International Connections Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <SectionLabel color="orange">Ministry in Action</SectionLabel>
            <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
              Serving the Global Church
            </h2>
            <p className="font-poppins text-[#282828]/60 text-base md:text-lg max-w-2xl leading-relaxed">
              Myles Tan Ministries extends beyond Sunday gatherings — hosting international students, missionaries, and believers from across the world as part of a heart for the global Body of Christ.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* BSSM Dinner */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={imgBSSM}
                  alt="Myles Tan hosting a dinner with Bethel School of Supernatural Ministry BSSM students 2023"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="bg-[#f7f7f5] p-6">
                <div className="text-[#ed5128] text-sm font-inter font-semibold tracking-wider uppercase mb-2">2023 · Manila</div>
                <h3 className="font-darker font-semibold text-2xl mb-2">Hosting BSSM Students</h3>
                <p className="font-inter text-[#282828]/70 leading-relaxed text-sm">
                  Myles hosted a dinner for students from Bethel School of Supernatural Ministry (BSSM) — one of the world&apos;s most prominent supernatural ministry training programs — welcoming them into his home and extending fellowship as part of his commitment to the global Body of Christ.
                </p>
              </div>
            </div>

            {/* GGC + Bethel stacked */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={imgGGC}
                    alt="Myles Tan hosting foreign missionaries from GGC College School of Supernatural Ministry of Australia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-[#f7f7f5] p-6">
                  <div className="text-[#ed5128] text-sm font-inter font-semibold tracking-wider uppercase mb-2">Australia · Philippines</div>
                  <h3 className="font-darker font-semibold text-xl mb-2">GGC College Missionaries</h3>
                  <p className="font-inter text-[#282828]/70 leading-relaxed text-sm">
                    Hosting foreign missionaries from GGC College — School of Supernatural Ministry of Australia — reflecting a heart for cross-cultural ministry and global partnership.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={imgBethel}
                    alt="Myles Tan visiting Bethel Church in Redding California"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-[#f7f7f5] p-6">
                  <div className="text-[#ed5128] text-sm font-inter font-semibold tracking-wider uppercase mb-2">Redding, California</div>
                  <h3 className="font-darker font-semibold text-xl mb-2">Bethel Church Visit</h3>
                  <p className="font-inter text-[#282828]/70 leading-relaxed text-sm">
                    A visit to Bethel Church in Redding, California — home of BSSM — representing Myles&apos;s commitment to learning from and connecting with globally recognized ministries.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why People Follow Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">

            {/* Left: Image */}
            <div className="w-full lg:w-[45%] aspect-[4/5] relative overflow-hidden">
              <Image
                src={imgMinistry}
                alt="Myles Tan Ministries — healing, prophecy, deliverance, Jesus, financial breakthrough"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Copy */}
            <div className="w-full lg:w-[55%] flex flex-col gap-6">
              <SectionLabel color="orange">Why This Ministry</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
                Why People Follow Myles Tan Ministries
              </h2>
              <div className="flex flex-col gap-5 font-inter text-lg text-[#282828] leading-relaxed">
                <p>
                  People are drawn to Myles Tan Ministries because they are looking for more than inspiration. They are looking for Jesus, truth, healing, freedom, prophetic clarity, hope, financial breakthrough, biblical answers, spiritual discernment, and transformation. This ministry speaks to people who want authentic Christian teaching that touches both the spiritual and practical realities of life.{" "}
                  <Link href="/blogs" className="text-[#ed5128] hover:underline">Read Myles Tan&apos;s Christian teachings</Link> for biblical insights and encouragement.
                </p>
                <p>
                  Whether you are believing for healing, seeking prophetic clarity, battling spiritual heaviness, praying for financial breakthrough, or trying to understand your dreams through Scripture — Myles Tan Ministries is committed to pointing people back to Jesus Christ. The One who saves, heals, delivers, restores, and transforms.{" "}
                  <Link href="/services" className="text-[#ed5128] hover:underline">Explore faith and finance insights</Link> or{" "}
                  <Link href="/contact" className="text-[#ed5128] hover:underline">get in touch</Link> directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="bg-[#f7f7f5] py-16 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <SectionLabel color="orange">Explore More</SectionLabel>
            <h2 className="font-darker font-semibold text-3xl md:text-[40px] leading-[0.9] text-[#282828]">
              Related Pages
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Learn more about Myles Tan", href: "/about", desc: "The story behind the ministry" },
              { label: "Read Myles Tan's Christian teachings", href: "/blogs", desc: "Biblical insights and encouragement" },
              { label: "Explore faith and finance insights", href: "/services", desc: "Values-aligned financial wisdom" },
              { label: "Invite Myles Tan to speak", href: "/media-speaking", desc: "Speaking engagements and media" },
            ].map(({ label, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-white border border-[#282828]/10 p-6 hover:border-[#ed5128] transition-colors duration-300 group"
              >
                <div className="font-darker font-semibold text-lg text-[#282828] group-hover:text-[#ed5128] transition-colors mb-1">
                  {label}
                </div>
                <div className="font-inter text-sm text-[#282828]/50">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#0f100a] text-white py-20 md:py-32 px-5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <SectionLabel color="white">FAQs</SectionLabel>
            <h2 className="font-darker font-semibold text-4xl md:text-[60px] leading-[0.9]">
              Frequently Asked Questions About Myles Tan Ministries
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-white/10 p-8 hover:border-[#ed5128] transition-colors duration-300"
              >
                <h3 className="font-darker font-semibold text-xl mb-4 leading-snug">{faq.question}</h3>
                <p className="font-inter text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-20 px-5 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left max-w-2xl">
            <h2 className="font-darker font-semibold text-4xl md:text-6xl text-white mb-4">
              Connect With Myles Tan Ministries
            </h2>
            <p className="font-inter text-[#9f9f9f] text-lg">
              Reach out for prayer, speaking engagements, or to learn more about healing, prophecy, deliverance, and breakthrough.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-14 px-8 text-lg font-bold rounded-none uppercase">
                WATCH ON YOUTUBE
              </Button>
            </Link>
            <Link href="/contact" className="cursor-pointer">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black h-14 px-8 text-lg font-bold rounded-none uppercase">
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
