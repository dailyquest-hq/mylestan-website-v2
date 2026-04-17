"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImagePreviewModal } from "@/components/ui/ImagePreviewModal";
import { speakableSchema } from "@/lib/schemas";

// Assets
import imgHero from "@/assets/home/hero.png";
import imgAboutLarge from "@/assets/home/about-large.jpg";
import imgAboutSmall1 from "@/assets/home/about-small-1.jpg";
import imgAboutSmall2 from "@/assets/home/about-small-2.jpg";

// Blog Images
import imgBlog1 from "@/assets/home/blog-1.jpg";
import imgBlog2 from "@/assets/home/blog-2.jpg";
import imgBlog3 from "@/assets/home/blog-3.jpg";

// Media Background
import imgMediaBg from "@/assets/home/media-bg.jpg";

export default function Homepage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <main id="main-content" className="bg-[#0f100a] min-h-dvh text-white w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 flex flex-col items-center">
        <div className="max-w-[1600px] w-full px-5 flex flex-col items-center gap-12">
          
          {/* Hero Content Wrapper */}
          <div className="flex flex-col items-center text-center w-full overflow-hidden">
            <h1 className="font-darker font-semibold text-[48px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[280px] leading-[0.8] tracking-tight text-center break-words max-w-full px-4">
              Myles Yeo Tan
            </h1>
            <p className="font-darker font-semibold text-xl md:text-2xl mt-8 md:mt-12 text-center w-full max-w-4xl mx-auto">
              Faith that grounds. Wisdom that compounds.
            </p>

            {/* Description & Buttons */}
            <div className="flex flex-col items-center gap-8 mt-16 max-w-2xl mx-auto">
              <p className="font-inter text-base text-center text-white/90 leading-relaxed speakable-hero">
                I&apos;m Myles Yeo Tan—a speaker, mentor, and entrepreneur helping people grow spiritually and financially. With experience in crypto, trading, financial planning, and real estate, I teach practical stewardship anchored in Scripture and real-world strategy.
              </p>
              <div className="flex gap-4">
                <Link href="/services">
                  <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
                    Explore Services
                  </Button>
                </Link>
                <Link href="/media-speaking">
                  <Button variant="outline" className="border-[#ed5128] text-[#ed5128] hover:bg-[#ed5128] hover:text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
                    Watch Messages
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full relative mt-12 h-[350px] sm:h-[450px] md:h-[700px] xl:h-[800px] overflow-hidden">
             <Image src={imgMediaBg} alt="Myles Tan" fill priority className="object-cover object-top" sizes="100vw" />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-black py-24 px-5">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-16">
          
          {/* Text Block */}
          <div className="flex flex-col gap-8 max-w-4xl mr-auto">
            <SectionLabel color="orange">about</SectionLabel>
            <div className="font-darker font-semibold text-3xl md:text-[32px] leading-tight space-y-8">
              <p>
                I&apos;m Myles Yeo Tan—a speaker, mentor, and entrepreneur passionate about helping people integrate faith and finance in a way that produces peace, clarity, and impact. I believe wealth isn&apos;t the goal, but stewardship for the glory of God is. When you&apos;re blessed, you&apos;re blessed to be a blessing for others.
              </p>
              <p>
                My background spans crypto and trading, financial planning, real estate, and entrepreneurship, giving me a practical perspective on how people can build long-term stability in a fast-changing world. I&apos;ve seen how fear, hype, and pressure destroy decision-making, so my work focuses on replacing noise with principles, and speculation with strategy.
              </p>
              <p>
                Beyond business, I&apos;m deeply devoted to teaching and preaching the word of God. I love helping people encounter Jesus, grow in purpose, and live with conviction. I believe my calling as a kingdom entrepreneur is to marketplace ministers and stay rooted in Christ.{" "}
                <Link href="/myles-tan-ministries" className="text-[#ed5128] hover:underline">Explore Myles Tan Ministries.</Link>
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="md:w-[60%] h-[500px] md:h-[772px] relative overflow-hidden">
               <Image src={imgAboutLarge} alt="Myles Speaking" fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            <div className="md:w-[40%] flex flex-col gap-6">
               <div className="h-[240px] md:h-[372px] relative overflow-hidden">
                  <Image src={imgAboutSmall1} alt="Audience" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
               </div>
               <div className="h-[240px] md:h-[372px] relative overflow-hidden">
                  <Image src={imgAboutSmall2} alt="Workshop" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Past Achievements */}
      <section className="bg-white text-black pb-24 px-5">
        <div className="max-w-[1600px] mx-auto">
           <SectionLabel className="mb-12 opacity-80" color="orange">past achievements</SectionLabel>
           
           <div className="flex flex-col">
              {[
                { year: "2020", text: "Founded Myles Tan Ministries, reaching 1,000 followers in first year." },
                { year: "2021", text: "Launched the MTM YouTube channel that impacted 5,000 individuals. Invited to speak at multiple churches, where messages delivered led to numerous decisions for Christ." },
                { year: "2021", text: "By the grace of God, converted a ₱12,000 NFT purchase into ₱6,000,000, delivering nearly 50,000% ROI through early positioning and disciplined exit strategy." },
                { year: "2022", text: "Accumulated Bitcoin below $20,000 and exited above $100,000, delivering over 400% ROI through cycle awareness and risk-controlled execution." },
                { year: "2023", text: "Entered the gold market at $2,000 and precisely timed a breakout that delivered over 100% upside—well ahead of mainstream consensus." },
                { year: "2024", text: "Invited to speak on faith and finances at the ZFT Trading Republic YouTube channel. Entered the silver market at $30 and timed a breakout delivering over 100% upside." },
                { year: "2025", text: "Became a certified Registered Financial Planner (RFP) and Certified Technical Analyst (CTA). Appointed Chief Operating Officer of ZFT Trading Republic." },
                { year: "2025", text: "Invited to speak on Bilyonaryo News Channel, sharing insights on the Philippine stock market, investor sentiment, and navigating volatility with conviction." },
                { year: "2026", text: "Expanding investment portfolio to include U.S. equities and Philippine luxury art scene, equipping others to grow wealth through timeless, biblical principles." }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-baseline border-t border-black/10 py-10 gap-8 md:gap-24 group hover:bg-gray-50 transition-colors px-4">
                  <span className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-[#282828] w-32 shrink-0">{item.year}</span>
                  <p className="font-inter text-base md:text-[16px] leading-[1.3] text-[#282828] max-w-3xl">{item.text}</p>
                </div>
              ))}
              <div className="border-t border-black/10 w-full" />
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#ed5128] py-24 px-5 text-white">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-12">
           <div className="text-center flex flex-col items-center gap-6 max-w-3xl">
              <SectionLabel color="white" className="opacity-80">our services</SectionLabel>
              <h2 className="font-darker font-semibold text-4xl md:text-[48px] leading-[0.9] text-center">
                Guided by Faith. Grounded in Wisdom. Growing in Impact.
              </h2>
              <p className="font-poppins text-base text-center max-w-xl">
                Discover services that merge financial expertise with biblical principles—equipping you to thrive in business, life, and faith.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full mt-8">
              {[
                {
                  title: "Crypto & Trading Insights",
                  desc: "Stay ahead in the fast-moving digital economy with timely market analysis, trading strategies, and practical insights designed to help you invest wisely and confidently."
                },
                {
                  title: "Financial Planning",
                  desc: "Build a strong foundation for your future. From budgeting to long-term investments, we help you make informed financial decisions that align with your goals and values."
                },
                {
                  title: "Christian Entrepreneurship Coaching",
                  desc: "Learn how to grow and manage a business with faith-driven principles. We mentor entrepreneurs to combine biblical wisdom with practical strategies for sustainable success."
                },
                {
                  title: "Speaking Engagements",
                  desc: "Book Myles Tan for conferences, seminars, and special events. Topics include faith, finance, entrepreneurship, and personal growth—delivered with passion and purpose."
                }
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 text-[#282828] min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                   <h3 className="font-darker font-semibold text-2xl sm:text-3xl leading-none">{service.title}</h3>
                   <p className="font-inter text-[#3c3c3c] text-sm sm:text-base leading-relaxed">{service.desc}</p>
                </div>
              ))}
           </div>

           <Link href="/contact">
             <Button className="border-2 border-white bg-transparent hover:bg-white hover:text-[#ed5128] text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide mt-8">
               LET&apos;S CONNECT
             </Button>
           </Link>
        </div>
      </section>

      {/* What's Happening (Blogs) */}
      <section className="bg-[#0f100a] py-24 px-5 text-white">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-12">
          
          {/* Header */}
          <div className="flex flex-col gap-6 px-5">
             <SectionLabel color="white" className="opacity-80">what&apos;s happening</SectionLabel>
             <div className="flex flex-col md:flex-row justify-between items-end gap-8">
               <div className="max-w-2xl">
                 <h2 className="font-darker font-semibold text-4xl md:text-[48px] leading-[0.9] mb-4">
                   Insights Beyond the Stage
                 </h2>
                 <p className="font-poppins text-[#9f9f9f] text-base">
                   Key lessons and reflections from the events I host and join — distilled into practical takeaways for your journey.
                 </p>
               </div>
               <Link href="/blogs">
                 <Button variant="outline" className="border-[#ed5128] text-[#ed5128] hover:bg-[#ed5128] hover:text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
                    SHOW ALL
                 </Button>
               </Link>
             </div>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
             <BlogCard
               image={imgBlog1.src}
               category="BLOGS & INSIGHTS"
               title="Faith-Driven Investing in 2025: Conviction Over Chaos"
               desc="A practical guide to staying grounded when headlines are loud—how to think in principles, not panic."
               onImageClick={setPreviewImage}
             />
             <BlogCard
               image={imgBlog2.src}
               category="BLOGS & INSIGHTS"
               title="Navigating Crypto as a Christian: Risk, Wisdom, and Self-Control"
               desc="Crypto moves fast—so your values have to move deeper. A framework for discipline, risk management, and stewardship."
               onImageClick={setPreviewImage}
             />
             <BlogCard
               image={imgBlog3.src}
               category="BLOGS & INSIGHTS"
               title="Building Your Kingdom Business: Strategy That Honors God"
               desc="How to grow a business without compromising integrity—systems, leadership, and purpose-driven execution."
               isBlog
               onImageClick={setPreviewImage}
             />
          </div>

        </div>
      </section>

      {/* Media Speaking */}
      <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
         <div className="absolute inset-0">
           <Image src={imgHero} alt="Media Background" fill className="object-cover" sizes="100vw" />
           <div className="absolute inset-0 bg-black/60" />
         </div>

         <div className="relative z-10 max-w-[1600px] mx-auto h-full px-5 py-24 flex flex-col justify-center">
            <div className="max-w-2xl flex flex-col justify-between h-full max-h-[570px]">
               <div className="flex flex-col gap-6">
                  <SectionLabel color="white" className="opacity-80">media speaking</SectionLabel>
                  <h2 className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-white">
                    Sharing Faith and Finance With a Wider Audience
                  </h2>
               </div>

               <div className="flex flex-col gap-8">
                  <p className="font-poppins text-white text-base md:text-lg leading-relaxed">
                    Myles Tan has been featured across conferences, panels, podcasts, and media platforms — delivering insights on faith, finance, entrepreneurship, and purposeful living. From local gatherings to international stages, each engagement is driven by the mission to inspire, equip, and empower people to live out their calling with wisdom and faith.
                  </p>
                  <Link href="/media-speaking">
                    <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide w-fit">
                      WATCH AND LISTEN
                    </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        imageUrl={previewImage}
        onClose={() => setPreviewImage(null)}
      />

      <Script
        id="speakable-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(speakableSchema('https://mylesyeotan.com', ['.speakable-hero', 'h1']))}
      </Script>
    </main>
  );
}

function BlogCard({ image, category, title, desc, isBlog = false, onImageClick }: { image: string, category: string, title: string, desc: string, isBlog?: boolean, onImageClick?: (image: string) => void }) {
  return (
    <div className="flex flex-col gap-6 group">
       <button
         type="button"
         aria-label={`Preview image for ${title}`}
         className="w-full h-[300px] md:h-[345px] relative overflow-hidden bg-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ed5128]"
         onClick={(e) => {
           e.preventDefault();
           e.stopPropagation();
           onImageClick?.(image);
         }}
       >
         <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
           <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold bg-black/50 px-3 py-1 rounded">
             Click to preview
           </span>
         </div>
       </button>
       <div className="flex flex-col gap-2">
         <span className="font-inter font-medium text-sm tracking-wider uppercase text-white/80">{category}</span>
         <h3 className="font-darker font-semibold text-3xl leading-none text-white">{title}</h3>
         {desc && <p className="font-inter text-[#9f9f9f] text-base mt-2">{desc}</p>}
       </div>
       <div className="mt-auto pt-2">
         <Link href="/blogs">
           <Button variant="outline" className="border-[#ed5128] text-[#ed5128] hover:bg-[#ed5128] hover:text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide w-full md:w-auto">
             {isBlog ? "READ FULL BLOG" : "READ FULL RECAP"}
           </Button>
         </Link>
       </div>
    </div>
  )
}
