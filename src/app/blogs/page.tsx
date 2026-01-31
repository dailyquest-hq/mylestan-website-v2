"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Assets
import imgBlog1 from "figma:asset/c1e57017c54c3f6bc788abd25e0ed91bbe87351e.png";
import imgBlog2 from "figma:asset/d6dbe12a4a1ae670adbb682f9f3bb7e083e7f65e.png";
import imgBlog3 from "figma:asset/7d78fafec50ff790a2dda5404c27187528d40c17.png";

// Placeholder images for additional content
const imgCrypto = "https://images.unsplash.com/photo-1639825752750-5061ded5503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjB0cmFkaW5nJTIwY2hhcnR8ZW58MXx8fHwxNzY5ODUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgFaith = "https://images.unsplash.com/photo-1622674869899-9d92d60be95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBjcm9zcyUyMGJpYmxlJTIwc3R1ZHl8ZW58MXx8fHwxNzY5ODUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgFinance = "https://images.unsplash.com/photo-1768839720849-fef976b3ffff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzY5ODUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[80px] md:text-[100px] leading-none">Blogs & Insights</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Key lessons, event recaps, and reflections on faith, finance, and purposeful living.
            </p>
         </div>
      </section>

      {/* Featured Blog */}
      <section className="py-20 px-5">
         <div className="max-w-[1600px] mx-auto">
            <SectionLabel color="black" className="mb-12">featured post</SectionLabel>
            
            <div className="flex flex-col lg:flex-row gap-12 group cursor-pointer">
               <div className="lg:w-2/3 h-[400px] lg:h-[600px] relative overflow-hidden rounded-sm bg-gray-100">
                  <img src={imgBlog1} alt="Faith & Business Summit 2025" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="lg:w-1/3 flex flex-col justify-center gap-6">
                  <div className="flex items-center gap-4">
                     <span className="bg-[#ed5128] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider font-albert">EVENTS & RECAPS</span>
                     <span className="text-[#9f9f9f] font-inter text-sm">March 15, 2025</span>
                  </div>
                  <h2 className="font-darker font-semibold text-4xl md:text-5xl leading-[0.9] group-hover:text-[#ed5128] transition-colors">
                     Faith & Business Summit 2025: Merging Kingdom Values with Strategy
                  </h2>
                  <p className="font-inter text-[#575756] text-lg leading-relaxed">
                     A deep dive into my top 3 takeaways from this year's summit, exploring how entrepreneurs can build sustainable businesses without compromising their faith.
                  </p>
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none w-fit mt-4">
                     READ FULL ARTICLE
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-5 bg-[#f9f9f9]">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-12">
               <SectionLabel color="black">latest articles</SectionLabel>
               
               {/* Categories Filter (Visual only for now) */}
               <div className="hidden md:flex gap-8 font-albert font-bold text-sm text-[#9f9f9f] uppercase tracking-wide">
                  <span className="text-[#ed5128] cursor-pointer">All</span>
                  <span className="hover:text-black cursor-pointer transition-colors">Faith</span>
                  <span className="hover:text-black cursor-pointer transition-colors">Finance</span>
                  <span className="hover:text-black cursor-pointer transition-colors">Entrepreneurship</span>
                  <span className="hover:text-black cursor-pointer transition-colors">Events</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
               <BlogCard 
                  image={imgBlog2}
                  category="EVENTS & RECAPS"
                  date="Feb 28, 2025"
                  title="Crypto & Stewardship Webinar Recap"
                  excerpt="Breaking down how believers can navigate digital investments responsibly and avoid common pitfalls."
               />
               <BlogCard 
                  image={imgBlog3}
                  category="BLOGS & INSIGHTS"
                  date="Feb 10, 2025"
                  title="Why Kingdom Entrepreneurs Think Differently About Wealth"
                  excerpt="Wealth isn't just about accumulation—it's about distribution. Here's how to shift your mindset."
               />
               <BlogCard 
                  image={imgCrypto}
                  category="FINANCE"
                  date="Jan 24, 2025"
                  title="Understanding Market Cycles: A Faith-Based Perspective"
                  excerpt="Patience is a virtue, especially in trading. Learning to wait on the right opportunities."
               />
               <BlogCard 
                  image={imgFaith}
                  category="FAITH"
                  date="Jan 15, 2025"
                  title="3 Daily Habits for Spiritual Growth in a Busy World"
                  excerpt="Practical ways to keep God at the center of your schedule, even when business is booming."
               />
               <BlogCard 
                  image={imgFinance}
                  category="FINANCE"
                  date="Jan 05, 2025"
                  title="Financial Planning 101: Starting the Year Strong"
                  excerpt="The foundational steps every family needs to take to secure their financial future this year."
               />
               <BlogCard 
                  image={imgBlog1} // Reusing for layout fill
                  category="ENTREPRENEURSHIP"
                  date="Dec 20, 2024"
                  title="The Power of Mentorship in Business"
                  excerpt="Why you need a Paul, a Barnabas, and a Timothy in your professional life."
               />
            </div>

            <div className="flex justify-center mt-20">
               <Button className="border-2 border-[#ed5128] text-[#ed5128] bg-transparent hover:bg-[#ed5128] hover:text-white h-12 px-8 text-base font-bold rounded-none uppercase">
                  LOAD MORE ARTICLES
               </Button>
            </div>
         </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-24 px-5 text-white text-center">
         <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="font-darker font-semibold text-5xl md:text-[64px] leading-[0.9]">Stay Equipped. Stay Inspired.</h2>
            <p className="font-inter text-[#9f9f9f] text-lg">
               Get faith-driven insights on finance, entrepreneurship, and purposeful living delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full gap-4 mt-4">
               <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 px-6 py-4 font-inter focus:outline-none focus:border-[#ed5128]"
               />
               <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-auto py-4 px-10 text-base font-bold rounded-none uppercase">
                  SUBSCRIBE
               </Button>
            </div>
         </div>
      </section>

    </main>
  );
}

function BlogCard({ image, category, date, title, excerpt }: { image: string, category: string, date: string, title: string, excerpt: string }) {
   return (
      <div className="flex flex-col gap-6 group cursor-pointer">
         <div className="w-full h-[300px] relative overflow-hidden bg-gray-200">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
         </div>
         <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
               <span className="font-albert font-bold text-xs tracking-wider text-[#ed5128] uppercase">{category}</span>
               <span className="font-inter text-xs text-[#9f9f9f]">{date}</span>
            </div>
            <h3 className="font-darker font-semibold text-3xl leading-none text-[#282828] group-hover:text-[#ed5128] transition-colors">
               {title}
            </h3>
            <p className="font-inter text-[#575756] text-base leading-relaxed line-clamp-3">
               {excerpt}
            </p>
            <div className="flex items-center gap-2 text-[#282828] font-bold font-albert text-xs tracking-wide uppercase mt-2 group-hover:text-[#ed5128] transition-colors">
               READ MORE <ArrowRight size={16} />
            </div>
         </div>
      </div>
   )
}
