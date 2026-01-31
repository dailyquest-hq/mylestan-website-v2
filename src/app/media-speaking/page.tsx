"use client";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Play, Calendar, MapPin, CheckCircle } from "lucide-react";

// Assets
import imgMediaBg from "@/assets/home/media-bg.jpg";
import imgSpeaker from "@/assets/home/about-large.jpg";

// Media appearances
import imgBNC from "@/assets/media-speaking/BNC.jpg";
import imgZFT from "@/assets/media-speaking/zft-coo.jpg";
import imgFrancisKong from "@/assets/media-speaking/francis-kong.jpg";

export default function MediaSpeakingPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none">Media & Speaking</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Sharing faith, finance, and purpose with audiences worldwide through conferences, podcasts, and events.
            </p>
         </div>
      </section>

      {/* Featured Video / Reel */}
      <Link href="https://www.youtube.com/watch?v=nZJeBBMlAjM" target="_blank" rel="noopener noreferrer">
         <section className="relative w-full h-[600px] bg-black group overflow-hidden">
            <div className="absolute inset-0 opacity-60">
               <img src={imgMediaBg.src} alt="Speaking Background" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-5 text-center">
               <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer hover:bg-[#ed5128] hover:border-[#ed5128] transition-all duration-300 group-hover:scale-110">
                  <Play size={32} className="fill-white text-white ml-1" />
               </div>
               <h2 className="font-darker font-semibold text-4xl md:text-6xl text-white mt-8">Watch 2024 Highlight Reel</h2>
               <p className="font-inter text-white/80 text-lg mt-4 max-w-xl">
                  A compilation of key moments from the "Kingdom Impact" tour across Southeast Asia.
               </p>
            </div>
         </section>
      </Link>

      {/* Recent Engagements */}
      <section className="py-20 md:py-32 px-5 bg-white">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="flex flex-col gap-4">
                  <SectionLabel color="black">latest talks</SectionLabel>
                  <h2 className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-black">
                     Recent Features & Interviews
                  </h2>
               </div>
               <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase">
                     VIEW ALL ON YOUTUBE
                  </Button>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <VideoCard
                  image={imgBNC.src}
                  title="Bilyonaryo News Channel - Market Analysis"
                  type="MEDIA INTERVIEW"
                  duration="30 min"
                  url="https://www.youtube.com/watch?v=nZJeBBMlAjM"
               />
               <VideoCard
                  image={imgZFT.src}
                  title="ZFT Trading Republic - New COO Announcement"
                  type="CORPORATE FEATURE"
                  duration="15 min"
                  url="https://www.youtube.com/watch?v=GYb1q8tm36s&list=PL033hJEN0tRt2wQyz8KxKEu5xWhCKrDuI"
               />
               <VideoCard
                  image={imgFrancisKong.src}
                  title="Speaking Engagement with Francis Kong"
                  type="CONFERENCE TALK"
                  duration="45 min"
                  url="https://staphilippines.org/pathways-to-success-of-myles-y-tan-cta/"
               />
            </div>
         </div>
      </section>

      {/* Signature Topics */}
      <section className="bg-[#f5f5f5] py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 h-[500px] relative">
               <div className="absolute inset-0 bg-black rounded-sm translate-x-4 translate-y-4"></div>
               <img src={imgSpeaker.src} alt="Myles Speaking" className="absolute inset-0 w-full h-full object-cover rounded-sm border border-gray-200" />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-8">
               <SectionLabel color="black">signature topics</SectionLabel>
               <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-[0.9] text-black">
                  Messages That Move Hearts & Minds
               </h2>
               <p className="font-inter text-[#575756] text-lg leading-relaxed">
                  Myles delivers tailored messages for diverse audiences, blending biblical truth with practical professional insights.
               </p>

               <ul className="flex flex-col gap-4 mt-2">
                  <TopicItem title="Biblical Stewardship in a Crypto World" />
                  <TopicItem title="Building a Business on Kingdom Principles" />
                  <TopicItem title="Faith, Family, and Financial Freedom" />
                  <TopicItem title="The Entrepreneur’s Calling" />
               </ul>
            </div>

         </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 px-5 bg-white">
         <div className="max-w-[1600px] mx-auto">
            <SectionLabel color="black" className="mb-12">upcoming schedule</SectionLabel>
            
            <div className="flex flex-col border-t border-gray-200">
               <EventRow
                  date="FEB 2025"
                  title="ZFT Trading Republic Leadership Forum"
                  location="Manila, Philippines"
                  role="Chief Operating Officer"
               />
               <EventRow
                  date="MAR 2025"
                  title="Bilyonaryo Market Insights Series"
                  location="Virtual Broadcast"
                  role="Market Analyst"
               />
               <EventRow
                  date="APR 2025"
                  title="Faith & Finance Leadership Summit"
                  location="Singapore"
                  role="Keynote Speaker"
               />
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ed5128] py-24 px-5 text-white">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center gap-8">
            <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-[0.9]">Invite Myles to Your Next Event</h2>
            <p className="font-poppins text-white/90 text-lg max-w-2xl">
               Whether it's a church service, corporate conference, or youth seminar, Myles brings a message of hope, wisdom, and empowerment.
            </p>
            <Link href="/contact" className="cursor-pointer">
               <Button className="bg-white text-[#ed5128] hover:bg-gray-100 h-14 px-10 text-lg font-bold rounded-none uppercase mt-4">
                  BOOK NOW
               </Button>
            </Link>
         </div>
      </section>

    </main>
  );
}

function VideoCard({ image, title, type, duration, url }: { image: string, title: string, type: string, duration: string, url: string }) {
   return (
      <Link href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 group cursor-pointer">
         <div className="relative w-full h-[240px] overflow-hidden bg-gray-900 rounded-sm">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#ed5128] transition-colors">
                  <Play size={20} className="fill-white text-white ml-1" />
               </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-sm font-inter">
               {duration}
            </div>
         </div>
         <div className="flex flex-col gap-1">
            <span className="font-albert font-bold text-xs text-[#ed5128] tracking-wider uppercase">{type}</span>
            <h3 className="font-darker font-semibold text-2xl leading-none text-black group-hover:text-[#ed5128] transition-colors">{title}</h3>
         </div>
      </Link>
   )
}

function TopicItem({ title }: { title: string }) {
   return (
      <div className="flex items-start gap-4">
         <div className="mt-1">
            <CheckCircle size={20} className="text-[#ed5128]" />
         </div>
         <span className="font-darker font-semibold text-2xl text-black">{title}</span>
      </div>
   )
}

function EventRow({ date, title, location, role }: { date: string, title: string, location: string, role: string }) {
   return (
      <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 gap-4 hover:bg-gray-50 transition-colors px-4 cursor-pointer">
         <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1">
            <span className="font-albert font-bold text-[#ed5128] w-40 shrink-0">{date}</span>
            <span className="font-darker font-semibold text-3xl text-black">{title}</span>
         </div>
         <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 text-[#575756] font-inter text-sm md:text-base">
            <div className="flex items-center gap-2 w-40">
               <MapPin size={18} /> {location}
            </div>
            <div className="flex items-center gap-2 w-40">
               <Calendar size={18} /> {role}
            </div>
         </div>
      </div>
   )
}
