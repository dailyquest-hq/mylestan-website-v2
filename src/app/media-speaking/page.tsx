"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Play, Calendar, MapPin, CheckCircle, Globe, ArrowUpRight } from "lucide-react";

// Assets
import imgSpeaker from "@/assets/home/about-large.jpg";

// Media appearances
import imgBNC from "@/assets/media-speaking/BNC.jpg";
import imgZFT from "@/assets/media-speaking/zft-coo.jpg";
import imgSTAConference from "@/assets/media-speaking/sta-conference.jpg";
import imgCtaWebinar from "@/assets/media-speaking/cta-webinar-april-2026.jpg";
import imgAlphaIntel from "@/assets/media-speaking/alpha-intel-us-stocks-advisor-june-2026.jpg";
import imgCcfDavaoAngpao from "@/assets/media-speaking/ccf-davao-more-than-an-angpao-july-2026.jpg";
import imgKnowYourMoney from "@/assets/media-speaking/know-yourself-know-your-money-august-2026.jpg";

export default function MediaSpeakingPage() {
  return (
    <main id="main-content" className="bg-white min-h-dvh w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none">Press &amp; Awards</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Media features, speaking engagements, and recognitions across faith, finance, and purposeful leadership.
            </p>
         </div>
      </section>

      {/* Featured Video / Reel */}
      <section className="bg-black py-20 md:py-24 px-5">
         <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-10">
            <div className="text-center">
               <h2 className="font-darker font-semibold text-4xl md:text-6xl text-white">Watch the 2024 Highlight Reel</h2>
               <p className="font-inter text-white/80 text-lg mt-4 max-w-xl mx-auto">
                  A compilation of key moments from the &quot;Kingdom Impact&quot; tour across Southeast Asia.
               </p>
            </div>
            <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
               <iframe
                  src="https://www.youtube-nocookie.com/embed/nZJeBBMlAjM"
                  title="Myles Yeo Tan — 2024 Highlight Reel"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
               />
            </div>
         </div>
      </section>

      {/* Latest Recognition */}
      <section className="bg-[#f5f5f5] py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            <div className="w-full lg:w-1/2 bg-[#0f100a] text-white p-10 md:p-14 flex flex-col justify-center gap-8 rounded-sm">
               <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                     <span className="font-darker font-semibold text-[64px] md:text-[88px] leading-none text-[#ed5128]">69</span>
                     <span className="font-poppins text-sm uppercase tracking-wider text-white/70">Countries Visited</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="font-darker font-semibold text-[64px] md:text-[88px] leading-none text-[#ed5128]">7</span>
                     <span className="font-poppins text-sm uppercase tracking-wider text-white/70">Continents Explored</span>
                  </div>
               </div>
               <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <Globe size={20} className="text-[#ed5128]" />
                  <span className="font-poppins text-sm uppercase tracking-wider text-white/80">Filipino World Travelers Affiliate · May 2026</span>
               </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
               <SectionLabel color="black">latest recognition</SectionLabel>
               <h2 className="font-darker font-semibold text-4xl md:text-[48px] leading-[0.95] text-black">
                  Named FWT Affiliate, Having Explored All 7 Continents and 69 Countries
               </h2>
               <p className="font-poppins text-[#575756] text-base md:text-lg leading-relaxed">
                  Myles Tan has officially joined the ranks of the Filipino World Travelers (FWT) as a recognized Affiliate — a distinction reserved for Filipinos who have demonstrated a serious commitment to global exploration, having visited a minimum of 10 countries.
               </p>
               <p className="font-poppins text-[#575756] text-base md:text-lg leading-relaxed">
                  For Myles, that bar is far exceeded. Having set foot in 69 countries across all 7 continents, his travels reflect not just a passion for discovery but a worldview shaped by lived experience across cultures, geographies, and communities — bringing to FWT the perspective of a purposeful, intentional global explorer.
               </p>
               <Link
                  href="https://filipinoworldtravelers.com/affiliates/list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 self-start"
               >
                  <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none uppercase h-12 px-8 inline-flex items-center gap-2">
                     View FWT Recognition <ArrowUpRight size={16} />
                  </Button>
               </Link>
            </div>
         </div>
      </section>

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
               <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="https://www.youtube.com/watch?v=GYb1q8tm36s&list=PL033hJEN0tRt2wQyz8KxKEu5xWhCKrDuI" target="_blank" rel="noopener noreferrer">
                     <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none uppercase">
                        WATCH MYLES HERE
                     </Button>
                  </Link>
                  <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none uppercase">
                        VIEW ALL ON YOUTUBE
                     </Button>
                  </Link>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <VideoCard
                  image={imgKnowYourMoney}
                  title="Know Yourself, Know Your Money — Rotary Club of Manila"
                  type="UPCOMING TALK"
                  duration="AUG 29 · 2:00 PM"
                  url="https://forms.gle/P1V1UYE8hi7QCGZs5"
                  description="A two-part Rotary Youth & Vocational Service workshop at Zero Ten Park, Makati — Part 1 on DISC personality, leadership, communication and self-awareness; Part 2 on money habits, budgeting, responsible investing, market basics and cryptocurrency. Tap to register."
               />
               <VideoCard
                  image={imgCcfDavaoAngpao}
                  title="More Than an Angpao: Blessed to Be a Blessing — CCF FilChi Davao"
                  type="UPCOMING TALK"
                  duration="JUL 11 · 5:30 PM"
                  url="https://forms.gle/hVCSvV8eEbU5cwgV6"
                  description="A special Bible study at the CCF Davao Center on blessing, biblical boundaries, generosity, and faithful stewardship — what Scripture truly teaches about wealth and Kingdom impact. Limited seats — tap to register."
               />
               <VideoCard
                  image={imgAlphaIntel}
                  title="Welcomed as US Stocks Advisor at Alpha Intel"
                  type="ANNOUNCEMENT"
                  duration="JUN 2026"
                  url="https://www.facebook.com/photo?fbid=122168134622956785&set=a.122094931448956785"
                  description="Alpha Intel welcomes Myles Tan as its US Stocks Advisor — bringing market analysis, research, and guidance to help the community navigate the US stock market with greater confidence."
               />
               <VideoCard
                  image={imgCtaWebinar}
                  title="Crypto, Stocks, or Gold? — 2026 Market Outlook Webinar"
                  type="WEBINAR RECAP"
                  duration="1 hr"
                  url="https://www.facebook.com/share/p/1VRYJS5f4Z/"
                  description="Recap of the April 30, 2026 CTA webinar on where Filipino traders should position in a peso vs. dollar world — covering peso/dollar trends, crypto, stocks, gold, and global positioning."
               />
               <VideoCard
                  image={imgBNC}
                  title="Bilyonaryo News Channel - Market Analysis"
                  type="MEDIA INTERVIEW"
                  duration="30 min"
                  url="https://www.youtube.com/watch?v=nZJeBBMlAjM"
                  description="In-depth market analysis covering crypto trends, trading strategies, and financial insights for Filipino investors."
               />
               <VideoCard
                  image={imgZFT}
                  title="ZFT Trading Republic - New COO Announcement"
                  type="CORPORATE FEATURE"
                  duration="15 min"
                  url="https://www.youtube.com/watch?v=GYb1q8tm36s"
                  description="Official announcement of Myles' appointment as Chief Operating Officer of ZFT Trading Republic."
               />
               <VideoCard
                  image={imgZFT}
                  title="ZFT Kingdom Playlist - Trading Republic Series"
                  type="EDUCATIONAL SERIES"
                  duration="Playlist"
                  url="https://www.youtube.com/watch?v=GYb1q8tm36s&list=PL033hJEN0tRt2wQyz8KxKEu5xWhCKrDuI"
                  description="Complete educational series covering trading fundamentals, market analysis techniques, and kingdom principles in finance."
               />
               <VideoCard
                  image={imgSTAConference}
                  title="STA Pathways to Success: Myles Y. Tan"
                  type="CONFERENCE TALK"
                  duration="45 min"
                  url="https://staphilippines.org/pathways-to-success-of-myles-y-tan-cta/"
                  description="Keynote talk on achieving success through technical analysis, faith-driven principles, and disciplined trading."
               />
            </div>
         </div>
      </section>

      {/* Signature Topics */}
      <section className="bg-[#f5f5f5] py-20 md:py-32 px-5">
         <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-1/2 h-[500px] relative">
               <div className="absolute inset-0 bg-black rounded-sm translate-x-4 translate-y-4"></div>
               <Image src={imgSpeaker} alt="Myles Speaking" fill className="object-cover rounded-sm border border-gray-200" sizes="(max-width: 768px) 100vw, 50vw" />
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

      {/* Speaking History */}
      <section className="py-20 md:py-32 px-5 bg-white">
         <div className="max-w-[1600px] mx-auto">
            <SectionLabel color="black" className="mb-12">speaking history</SectionLabel>

            <div className="flex flex-col border-t border-gray-200">
               <EventRow
                  date="JAN 2020"
                  title="Completed RZIM Academy Apologetics Core Module"
                  location="Virtual Program"
                  role="Graduate"
               />
               <EventRow
                  date="OCT 2020"
                  title="Invited to be Guest Speaker at Revelation City Church"
                  location="Manila, Philippines"
                  role="Guest Speaker"
                  url="https://www.youtube.com/watch?v=74K1HXLi53I"
               />
               <EventRow
                  date="NOV 2020"
                  title="Reinvited to be Guest Speaker at Revelation City Church"
                  location="Manila, Philippines"
                  role="Guest Speaker"
                  url="https://www.youtube.com/watch?v=Wh8kTarTS6A"
               />
               <EventRow
                  date="FEB 2021"
                  title="Invited to be Regular Speaker at Revelation City Church"
                  location="Manila, Philippines"
                  role="Regular Speaker"
                  url="https://www.youtube.com/watch?v=L7Xa2_V1_u4"
               />
               <EventRow
                  date="APR 2021"
                  title="Completed The Preachers' Academy under Pastor Stephen R. Prado"
                  location="Manila, Philippines"
                  role="Graduate"
               />
               <EventRow
                  date="DEC 2021"
                  title="Completed Systematic Theology at CSB Bible School"
                  location="Quezon City, Philippines"
                  role="Graduate"
               />
               <EventRow
                  date="OCT 2023"
                  title="Resource Speaker at Grace Christian College Senior High School"
                  location="Manila, Philippines"
                  role="Resource Speaker"
               />
               <EventRow
                  date="MARCH 2024"
                  title="Invited to be an Airdrop Resource Speaker by ZFT"
                  location="Manila, Philippines"
                  role="Resource Speaker"
                  url="https://www.facebook.com/photo?fbid=846900120783203&set=a.465969958876223"
               />
               <EventRow
                  date="MARCH 2025"
                  title="Appeared as Regular Speaker on The Trading Republic's YouTube"
                  location="Virtual Broadcast"
                  role="Regular Speaker"
               />
               <EventRow
                  date="JUNE 2025"
                  title="Appointed as ZFT Trading Republic COO"
                  location="Manila, Philippines"
                  role="Chief Operating Officer"
               />
               <EventRow
                  date="OCT 2025"
                  title="Faith for Financial Future Talk"
                  location="Manila, Philippines"
                  role="Speaker"
               />
               <EventRow
                  date="NOV 2025"
                  title="Bilyonaryo News Interview"
                  location="Virtual Broadcast"
                  role="Market Analyst"
                  url="https://www.youtube.com/watch?v=nZJeBBMlAjM"
               />
               <EventRow
                  date="NOV 2025"
                  title="Recognized as Icon of Play at YGG Play Summit 2025"
                  location="Manila, Philippines"
                  role="Featured Speaker / KOL"
               />
               <EventRow
                  date="MAR 2026"
                  title="Lean Six Sigma White Belt Certified"
                  location="Virtual Program"
                  role="Graduate"
               />
               <EventRow
                  date="MAR 2026"
                  title="Lean Six Sigma Yellow Belt Certified"
                  location="Virtual Program"
                  role="Graduate"
               />
               <EventRow
                  date="APR 2026"
                  title="Inducted into Rotary Club of Manila"
                  location="Manila Polo Club, Makati City"
                  role="Inductee"
               />
               <EventRow
                  date="APR 2026"
                  title="Speaker at “Crypto, Stocks, or Gold?” Webinar"
                  location="Virtual via Zoom"
                  role="Speaker"
                  url="https://www.facebook.com/share/p/1VRYJS5f4Z/"
               />
               <EventRow
                  date="MAY 2026"
                  title="Named Filipino World Travelers Affiliate"
                  location="Philippines"
                  role="Affiliate"
                  url="https://filipinoworldtravelers.com/affiliates/list"
               />
               <EventRow
                  date="MAY 2026"
                  title="Featured in The Asian Pearl for Grand Slam Mission for Clark 2026"
                  location="JCI Manila · International"
                  role="Project Chairman"
                  url="https://theasianpearl.com/project-chairman-myles-tan-and-the-grand-slam-mission-for-clark-2026/"
               />
               <EventRow
                  date="JUN 2026"
                  title="Welcomed as US Stocks Advisor at Alpha Intel"
                  location="Online Community"
                  role="US Stocks Advisor"
                  url="https://www.facebook.com/photo?fbid=122168134622956785&set=a.122094931448956785"
               />
               <EventRow
                  date="JUL 2026"
                  title="Speaker at “More Than an Angpao: Blessed to Be a Blessing”"
                  location="CCF Davao Center, Davao City"
                  role="Guest Speaker"
                  url="https://www.facebook.com/share/p/18M2HAiAgx/"
               />
               <EventRow
                  date="AUG 2026"
                  title="Speaker at “Know Yourself, Know Your Money”"
                  location="Zero Ten Park, Makati City"
                  role="Resource Speaker"
                  url="https://www.rivervalleyirregulars.com"
               />
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ed5128] py-24 px-5 text-white">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center gap-8">
            <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-[0.9]">Invite Myles to Your Next Event</h2>
            <p className="font-poppins text-white/90 text-lg max-w-2xl">
               Whether it&apos;s a church service, corporate conference, or youth seminar, Myles brings a message of hope, wisdom, and empowerment.
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

function VideoCard({ image, title, type, duration, url, description }: { image: StaticImageData, title: string, type: string, duration: string, url: string, description?: string }) {
   return (
      <Link href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 group cursor-pointer">
         <div className="relative w-full h-[240px] overflow-hidden bg-gray-900 rounded-sm">
            <Image src={image} alt={title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#ed5128] transition-colors">
                  <Play size={20} className="fill-white text-white ml-1" />
               </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-sm font-inter">
               {duration}
            </div>
         </div>
         <div className="flex flex-col gap-2">
            <span className="font-poppins font-bold text-xs text-[#ed5128] tracking-wider uppercase">{type}</span>
            <h3 className="font-darker font-semibold text-2xl leading-none text-black group-hover:text-[#ed5128] transition-colors">{title}</h3>
            {description && (
               <p className="font-inter text-[#575756] text-sm leading-relaxed">{description}</p>
            )}
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

function EventRow({ date, title, location, role, url }: { date: string, title: string, location: string, role: string, url?: string }) {
   const content = (
      <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 gap-4 hover:bg-gray-50 transition-colors px-4 cursor-pointer">
         <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1">
            <span className="font-poppins font-bold text-[#ed5128] w-40 shrink-0">{date}</span>
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

   if (url) {
      return (
         <Link href={url} target="_blank" rel="noopener noreferrer">
            {content}
         </Link>
      )
   }

   return content
}
