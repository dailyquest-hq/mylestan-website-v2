"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

// Assets
import imgTicker1 from "figma:asset/f78360e4be7e9a1661cfa0c498def3203380ef51.png";
import imgTicker2 from "figma:asset/56973181793d0559b0124604344bd6ba5c4d241e.png";
import imgTicker3 from "figma:asset/f87f649b3b2f23aa77df960c560df6bb0216f4a5.png";
import imgTicker4 from "figma:asset/ff0ad59b66b4aca8a3cf065d2b0d597d335772cf.png";
// imgTicker5 seems to be another one or repetition? Using the first 4 for the row.
import imgTimelineCard from "figma:asset/9cd8da70bc103b52b37ed5fd3e7136829a3c6e01.png";
import imgStory from "figma:asset/b253e82081540176b3d882f6bb3f15d69992b182.png";

// Social Grid Images
import imgSocial1 from "figma:asset/d0934957009cfd03eb06d63d25a8976b37965681.png";
import imgSocial2 from "figma:asset/d72ebac6f1b8c46df9e9709b6ed9aee6ae235822.png";
import imgSocial3 from "figma:asset/1f193e0016cf4f0a417249bad529f1b793ba72e8.png";
import imgSocial4 from "figma:asset/a2b57061ef1fc4bd06444663d7a9380524d86d73.png";
import imgSocial5 from "figma:asset/28a4f614d987694196ce41b965605d10f4a1cf87.png";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[80px] md:text-[100px] leading-none">About Us</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Discover the story of Myles Tan — a journey of blending professional expertise with biblical principles to empower people worldwide.
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
                     Myles Tan is a speaker, mentor, and entrepreneur passionate about integrating faith with finance to empower people in both life and business. His career journey spans multiple fields — from crypto and trading to financial planning, real estate, and Christian entrepreneurship.
                  </p>
                  <p>
                     Grounded in biblical principles, Myles has built a reputation for guiding individuals and communities to steward resources wisely while living with purpose. Beyond business, he has committed himself to ministry, teaching and speaking at conferences, panels, and workshops to inspire growth, transformation, and Kingdom impact.
                  </p>
                  <p>
                     Myles’ story is one of alignment between calling and career. What began as a pursuit of success in business has grown into a mission to help others discover abundance that is not just financial, but also spiritual and relational.
                  </p>
               </div>
            </div>

            {/* Image Ticker/Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {[imgTicker1, imgTicker2, imgTicker3, imgTicker4].map((img, idx) => (
                  <div key={idx} className="h-[300px] md:h-[370px] w-full relative overflow-hidden bg-gray-100">
                     <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
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
                                  <img src={imgTimelineCard} alt="2025" className="w-full h-full object-cover" />
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
               <img src={imgStory} alt="Myles Story" className="w-full h-full object-cover" />
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
                  {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                     <div key={i} className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors cursor-pointer">
                        <Icon size={24} strokeWidth={1.5} />
                     </div>
                  ))}
               </div>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
               {[imgSocial1, imgSocial2, imgSocial3, imgSocial4, imgSocial5].map((img, idx) => (
                  <div key={idx} className="aspect-square relative overflow-hidden bg-gray-100 group">
                     <img src={img} alt={`Social ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
            <Link to="/contact">
               <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-14 px-8 text-lg font-bold rounded-none uppercase">
                  BOOK A SPEAKING ENGAGEMENT
               </Button>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
