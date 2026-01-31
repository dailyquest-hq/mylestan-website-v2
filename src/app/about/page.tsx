import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About Myles Yeo Tan - Journey of Faith & Finance",
  description: "Discover the story of Myles Tan — a journey of blending professional expertise in crypto trading, Christian entrepreneurship, financial planning, and real estate with biblical principles to empower people worldwide.",
};
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

// Assets
import imgTicker1 from "@/assets/about/ticker-1.jpg";
import imgTicker2 from "@/assets/about/ticker-2.jpg";
import imgTicker3 from "@/assets/about/ticker-3.jpg";
import imgTicker4 from "@/assets/about/ticker-4.jpg";
import imgTimelineCard from "@/assets/about/timeline-card.jpg";
import imgStory from "@/assets/about/story.jpg";

// Social Grid Images
import imgSocial1 from "@/assets/shared/social-1.jpg";
import imgSocial2 from "@/assets/shared/social-2.jpg";
import imgSocial3 from "@/assets/shared/social-3.jpg";
import imgSocial4 from "@/assets/shared/social-4.jpg";
import imgSocial5 from "@/assets/shared/social-5.jpg";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[80px] md:text-[100px] leading-none">About Myles Tan</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Myles Yeo Tan wants to start a faith-driven movement committed to glorifying God through excellence, wisdom, and stewardship. Where faith meets finance, and purpose drives impact.
            </p>
         </div>
      </section>

      {/* Intro Content Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start mb-20">
               <SectionLabel color="black" className="shrink-0 min-w-[200px]">about myles tan</SectionLabel>
               <div className="flex flex-col gap-8 font-inter text-lg text-[#282828] leading-relaxed max-w-3xl">
                  <p>
                     I'm Myles Yeo Tan—a speaker, mentor, and entrepreneur passionate about helping people live with clarity, conviction, and purpose. I operate at the intersection of faith, finance, and leadership, equipping individuals to steward their influence, resources, and calling with wisdom, discipline, and obedience to God.
                  </p>
                  <p>
                     My journey has taken me through business, investing, crypto, trading, and real estate—environments filled with opportunity, pressure, and constant noise. Along the way, I learned that success without direction leads to emptiness, and faith without action leads to stagnation. True transformation happens when biblical truth, disciplined execution, and Spirit-led discernment work together.
                  </p>
                  <p>
                     Today, my work is shaped by a commitment to seek God's voice in decision-making, learning to recognize prophetic insight, exercise spiritual discernment, and act with courage in the marketplace. I believe God still gives wisdom for timing, direction, and restraint. I believe that spirit-led decisions, when anchored in Scripture and tested by sound counsel, produce peace, clarity, and lasting impact.
                  </p>
                  <p>
                     What drives me forward is simple: to see people grounded in Christ, confident in their decisions, and courageous in their calling—building lives and legacies that honor God and advance His Kingdom.
                  </p>
               </div>
            </div>

            {/* Image Ticker/Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {[imgTicker1, imgTicker2, imgTicker3, imgTicker4].map((img, idx) => (
                  <div key={idx} className="h-[300px] md:h-[370px] w-full relative overflow-hidden bg-gray-100">
                     <img src={img.src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white text-[#282828] py-20 md:py-32 px-5 overflow-hidden">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center">
             <SectionLabel color="black" className="mb-6">key achievements</SectionLabel>
             <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-none mb-4">Building Impact, Year by Year</h2>
             <p className="font-poppins text-base md:text-[18px] text-[#282828] max-w-2xl mb-24">
                From career beginnings in finance to global recognition, here’s the journey of growth, influence, and purpose.
             </p>

             {/* Timeline Visual */}
             <div className="relative w-full max-w-[1400px] mx-auto min-h-[500px]">
                {/* Horizontal Line */}
                <div className="absolute top-[50px] left-0 right-0 h-px bg-[#8f887c] w-full" />
                
                {/* Years Row */}
                <div className="flex justify-between relative z-10 w-full px-4 md:px-12">
                   {["2025", "2024", "2023", "2022", "2021"].map((year, i) => (
                      <div key={year} className="flex flex-col items-center relative group">
                         {/* Year Text */}
                         <span className={`font-darker font-semibold text-3xl md:text-[40px] mb-8 bg-white px-4 z-20 ${i === 0 ? 'text-[#ed5128]' : 'text-[#282828]'}`}>
                            {year}
                         </span>
                         
                         {/* Dot */}
                         <div className={`w-4 h-4 rounded-full z-20 ${i === 0 ? 'bg-[#ed5128] shadow-[0_0_0_4px_rgba(237,81,40,0.2)]' : 'bg-[#8f887c]'}`} />

                         {/* Active Card (Only for 2025 based on design) */}
                         {i === 0 && (
                            <div className="absolute top-[80px] left-0 md:left-0 w-[280px] md:w-[320px] bg-white rounded-xl shadow-xl border border-gray-100 p-2 text-left mt-8">
                               <div className="h-[160px] w-full rounded-lg overflow-hidden mb-4 bg-gray-200">
                                  <img src={imgTimelineCard.src} alt="2025" className="w-full h-full object-cover" />
                               </div>
                               <p className="font-inter text-sm md:text-base text-[#575756] px-2 pb-2">
                                  Continuing mission to equip believers worldwide through media, events, and one-on-one coaching.
                               </p>
                            </div>
                         )}
                      </div>
                   ))}
                </div>
             </div>
         </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#ed5128] text-white py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            {/* Image */}
            <div className="w-full lg:w-[45%] h-[400px] lg:h-[600px] relative overflow-hidden rounded-sm">
               <img src={imgStory.src} alt="Myles Story" className="w-full h-full object-cover" />
            </div>

            {/* Text */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8">
               <SectionLabel color="white" className="opacity-80">the story behind the mission</SectionLabel>
               <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-[0.9]">
                  A glimpse into the life experiences and values that shaped Myles Tan’s journey of faith, finance, and purpose.
               </h2>
               <div className="font-poppins text-base md:text-lg space-y-6 opacity-90">
                  <p>
                     Beyond the roles of entrepreneur, mentor, and speaker, Myles Tan is a husband, friend, and lifelong learner who values relationships as much as results. His journey has been shaped by faith, perseverance, and a deep desire to help others discover purpose in both life and work.
                  </p>
                  <p>
                     Myles’ personal story is rooted in transformation — from pursuing success in business to embracing a calling that integrates biblical principles with professional expertise. He believes true abundance is found not only in financial stability, but also in spiritual growth, family, and community.
                  </p>
                  <p>
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
                  <Link href="https://www.facebook.com/mylestanministries" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors">
                     <Facebook size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.instagram.com/mylestan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors">
                     <Instagram size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/myles-yeo-tan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors">
                     <Linkedin size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors">
                     <Youtube size={24} strokeWidth={1.5} />
                  </Link>
               </div>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
               {[imgSocial1, imgSocial2, imgSocial3, imgSocial4, imgSocial5].map((img, idx) => (
                  <div key={idx} className="aspect-square relative overflow-hidden bg-gray-100 group">
                     <img src={img.src} alt={`Social ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     {/* Overlay on hover */}
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Instagram className="text-white" size={32} />
                     </div>
                  </div>
               ))}
            </div>
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
            <Link href="/contact">
               <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-14 px-8 text-lg font-bold rounded-none uppercase">
                  BOOK A SPEAKING ENGAGEMENT
               </Button>
            </Link>
         </div>
      </section>

    </main>
  );
}
