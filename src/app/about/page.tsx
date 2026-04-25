import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { InteractiveTimeline } from "@/components/about/InteractiveTimeline";
import { SocialGrid } from "@/components/ui/SocialGrid";
import { speakableSchema, breadcrumbSchema } from "@/lib/schemas";

const breadcrumbStructuredData = breadcrumbSchema([
  { name: "Home", url: "https://mylesyeotan.com" },
  { name: "About", url: "https://mylesyeotan.com/about" },
]);

export const metadata: Metadata = {
  title: "About Myles Yeo Tan - Journey of Faith & Finance",
  description: "Discover the story of Myles Tan — a journey of blending professional expertise in crypto trading, Christian entrepreneurship, financial planning, and real estate with biblical principles to empower people worldwide.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Myles Yeo Tan - Journey of Faith & Finance",
    description: "Discover the story of Myles Tan — a journey of blending professional expertise in crypto trading, Christian entrepreneurship, financial planning, and real estate with biblical principles to empower people worldwide.",
    url: "https://mylesyeotan.com/about",
    type: "profile",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Myles Yeo Tan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Myles Yeo Tan - Journey of Faith & Finance",
    description: "Discover the story of Myles Tan — a journey of blending professional expertise in crypto trading, Christian entrepreneurship, financial planning, and real estate with biblical principles.",
    images: ["/og-image.jpg"],
  },
};
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

// Assets
import imgTicker1 from "@/assets/about/ticker-1.jpg";
import imgTicker2 from "@/assets/about/ticker-2.jpg";
import imgTicker3 from "@/assets/about/ticker-3.jpg";
import imgTicker4 from "@/assets/about/ticker-4.jpg";
import imgStory from "@/assets/about/story.jpg";

// Social Grid Images
import imgSocial1 from "@/assets/shared/social-1.jpg";
import imgSocial2 from "@/assets/shared/social-2.jpg";
import imgSocial3 from "@/assets/shared/social-3.jpg";
import imgSocial4 from "@/assets/shared/social-4.jpg";
import imgSocial6 from "@/assets/shared/social-6.jpg";
import imgSocial7 from "@/assets/shared/social-7.jpg";
import imgSocial8 from "@/assets/shared/social-8.jpg";
import imgSocial9 from "@/assets/shared/social-9.jpg";

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-white min-h-dvh w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none">About Myles Tan</h1>
         </div>
      </section>

      {/* Intro Content Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col items-center mb-20">
               <div className="flex flex-col gap-8 font-inter text-lg text-[#282828] leading-relaxed max-w-3xl w-full">
                  <p className="text-justify speakable-bio">
                     I&apos;m Myles Yeo Tan—a speaker, mentor, and entrepreneur passionate about helping people live with clarity, conviction, and purpose. I operate at the intersection of faith, finance, and leadership, equipping individuals to steward their influence, resources, and calling with wisdom, discipline, and obedience to God.
                  </p>
                  <p className="text-justify">
                     My journey has taken me through business, investing, crypto, trading, and real estate—environments filled with opportunity, pressure, and constant noise. Along the way, I learned that success without direction leads to emptiness, and faith without action leads to stagnation. True transformation happens when biblical truth, disciplined execution, and Spirit-led discernment work together.
                  </p>
                  <p className="text-justify">
                     Today, my work is shaped by a commitment to seek God&apos;s voice in decision-making, learning to recognize prophetic insight, exercise spiritual discernment, and act with courage in the marketplace. I believe God still gives wisdom for timing, direction, and restraint. I believe that spirit-led decisions, when anchored in Scripture and tested by sound counsel, produce peace, clarity, and lasting impact.
                  </p>
                  <p className="text-justify">
                     What drives me forward is simple: to see people grounded in Christ, confident in their decisions, and courageous in their calling—building lives and legacies that honor God and advance His Kingdom.{" "}
                     <Link href="/myles-tan-ministries" className="text-[#ed5128] hover:underline">Learn more about Myles Tan Ministries.</Link>
                  </p>
               </div>
            </div>

            {/* Image Ticker/Grid */}
            <SocialGrid
              columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              cellClassName="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[370px]"
              showOverlay={false}
              items={[
                { src: imgTicker1, alt: "Myles Tan at a speaking or ministry event" },
                { src: imgTicker2, alt: "Myles Tan at a speaking or ministry event" },
                { src: imgTicker3, alt: "Myles Tan at a speaking or ministry event" },
                { src: imgTicker4, alt: "Myles Tan at a speaking or ministry event" },
              ]}
            />
         </div>
      </section>

      {/* Timeline Section */}
      <InteractiveTimeline />

      {/* Story Section */}
      <section className="bg-[#ed5128] text-white py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            {/* Image */}
            <div className="w-full lg:w-[45%] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] relative overflow-hidden rounded-sm">
               <Image src={imgStory} alt="Myles Story" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            {/* Text */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8">
               <SectionLabel color="white" className="opacity-80">the story behind the mission</SectionLabel>
               <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-[0.9]">
                  A glimpse into the life experiences and values that shaped Myles Tan’s journey of faith, finance, and purpose.
               </h2>
               <div className="font-poppins text-base md:text-lg space-y-6 opacity-90">
                  <p className="text-justify">
                     Beyond the roles of entrepreneur, mentor, and speaker, Myles Tan is a husband, friend, and lifelong learner who values relationships as much as results. His journey has been shaped by faith, perseverance, and a deep desire to help others discover purpose in both life and work.
                  </p>
                  <p className="text-justify">
                     Myles&apos; personal story is rooted in transformation — from pursuing success in business to embracing a calling that integrates biblical principles with professional expertise. He believes true abundance is found not only in financial stability, but also in spiritual growth, family, and community.
                  </p>
                  <p className="text-justify">
                     When not teaching, coaching, or speaking, Myles enjoys spending time with loved ones, exploring new ideas, and investing in experiences that bring lasting impact.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Social / Connect Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center text-center gap-6 mb-16">
               <SectionLabel color="black" className="opacity-80">follow us</SectionLabel>
               <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-none">Let’s Stay Connected</h2>
               <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-2xl">
                  Follow along for daily inspiration, financial wisdom, and faith-driven content across all platforms.
               </p>
               
               {/* Social Icons */}
               <div className="flex gap-4 mt-4">
                  <Link href="https://www.facebook.com/mylestanministries" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Facebook size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.instagram.com/mylestan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Instagram size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/myles-yeo-tan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Linkedin size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Youtube size={24} strokeWidth={1.5} />
                  </Link>
               </div>
            </div>

            {/* Instagram Grid */}
            <SocialGrid
              items={[
                { src: imgSocial1, alt: "Myles Tan on Instagram" },
                { src: imgSocial2, alt: "Myles Tan at Bethel Church" },
                { src: imgSocial3, alt: "Myles Tan at the Colosseum Rome" },
                { src: imgSocial4, alt: "Myles Tan at Iron Man display" },
                { src: imgSocial6, alt: "Myles Tan at Steps of Paul tour" },
                { src: imgSocial7, alt: "Myles Tan outdoors" },
                { src: imgSocial8, alt: "Myles Tan dining" },
                { src: imgSocial9, alt: "Myles Tan tactical experience", objectPosition: "top" },
              ]}
            />
         </div>
      </section>

      {/* Bottom CTA (Before Footer) */}
      <section className="bg-black py-20 px-5 border-t border-white/10">
         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left max-w-2xl">
               <h2 className="font-darker font-semibold text-4xl md:text-6xl text-white mb-4">Bring the Message to Your Community</h2>
               <p className="font-inter text-[#9f9f9f] text-lg">
                  Invite Myles to speak at your event, church, or conference — and inspire others with faith-driven insights on life and finance.
               </p>
            </div>
            <Link href="/contact" className="cursor-pointer">
               <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-14 px-8 text-lg font-bold rounded-none uppercase">
                  BOOK A SPEAKING ENGAGEMENT
               </Button>
            </Link>
         </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('https://mylesyeotan.com/about', ['.speakable-bio', 'h1'])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </main>
  );
}

