"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImagePreviewModal } from "@/components/ui/ImagePreviewModal";
import { ArrowRight } from "lucide-react";

// Assets
import imgBlog1 from "@/assets/home/blog-1.jpg";
import imgBlog2 from "@/assets/home/blog-2.jpg";
import imgBlog3 from "@/assets/home/blog-3.jpg";

// Placeholder images for additional content
const imgCrypto = "https://images.unsplash.com/photo-1639825752750-5061ded5503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjB0cmFkaW5nJTIwY2hhcnR8ZW58MXx8fHwxNzY5ODUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgFaith = "https://images.unsplash.com/photo-1622674869899-9d92d60be95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBjcm9zcyUyMGJpYmxlJTIwc3R1ZHl8ZW58MXx8fHwxNzY5ODUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgFinance = "https://images.unsplash.com/photo-1768839720849-fef976b3ffff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzY5ODUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080";

export default function BlogsPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none">Blogs & Insights</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Key lessons, event recaps, and reflections on faith, finance, and purposeful living.
            </p>
         </div>
      </section>

      {/* Featured Blog */}
      <section className="py-20 px-5">
         <div className="max-w-[1600px] mx-auto">
            <SectionLabel color="black" className="mb-12">featured post</SectionLabel>
            
            <div className="flex flex-col lg:flex-row gap-12 group">
               <div
                 className="lg:w-2/3 h-[400px] lg:h-[600px] relative overflow-hidden rounded-sm bg-gray-100 cursor-pointer"
                 onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   setPreviewImage(imgBlog1.src);
                 }}
               >
                  <img src={imgBlog1.src} alt="Faith & Business Summit 2025" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold bg-black/50 px-3 py-1 rounded">
                      Click to preview
                    </span>
                  </div>
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
                  image={imgBlog2.src}
                  category="EVENTS & RECAPS"
                  date="Feb 28, 2025"
                  title="Crypto & Stewardship Webinar Recap"
                  excerpt="Breaking down how believers can navigate digital investments responsibly and avoid common pitfalls."
                  onImageClick={setPreviewImage}
               />
               <BlogCard
                  image={imgBlog3.src}
                  category="BLOGS & INSIGHTS"
                  date="Feb 10, 2025"
                  title="Why Kingdom Entrepreneurs Think Differently About Wealth"
                  excerpt="Wealth isn't just about accumulation—it's about distribution. Here's how to shift your mindset."
                  onImageClick={setPreviewImage}
               />
               <BlogCard
                  image={imgCrypto}
                  category="FINANCE"
                  date="Jan 24, 2025"
                  title="Understanding Market Cycles: A Faith-Based Perspective"
                  excerpt="Patience is a virtue, especially in trading. Learning to wait on the right opportunities."
                  onImageClick={setPreviewImage}
               />
               <BlogCard
                  image={imgFaith}
                  category="FAITH"
                  date="Jan 15, 2025"
                  title="3 Daily Habits for Spiritual Growth in a Busy World"
                  excerpt="Practical ways to keep God at the center of your schedule, even when business is booming."
                  onImageClick={setPreviewImage}
               />
               <BlogCard
                  image={imgFinance}
                  category="FINANCE"
                  date="Jan 05, 2025"
                  title="Financial Planning 101: Starting the Year Strong"
                  excerpt="The foundational steps every family needs to take to secure their financial future this year."
                  onImageClick={setPreviewImage}
               />
               <BlogCard
                  image={imgBlog1.src}
                  category="ENTREPRENEURSHIP"
                  date="Dec 20, 2024"
                  title="The Power of Mentorship in Business"
                  excerpt="Why you need a Paul, a Barnabas, and a Timothy in your professional life."
                  onImageClick={setPreviewImage}
               />
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
               <Button onClick={() => alert('Newsletter subscription coming soon!')} className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-auto py-4 px-10 text-base font-bold rounded-none uppercase">
                  SUBSCRIBE
               </Button>
            </div>
         </div>
      </section>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        imageUrl={previewImage}
        onClose={() => setPreviewImage(null)}
      />

    </main>
  );
}

function BlogCard({ image, category, date, title, excerpt, onImageClick }: { image: string, category: string, date: string, title: string, excerpt: string, onImageClick?: (image: string) => void }) {
   return (
      <div className="flex flex-col gap-6 group">
         <div
           className="w-full h-[300px] relative overflow-hidden bg-gray-200 cursor-pointer"
           onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             onImageClick?.(image);
           }}
         >
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold bg-black/50 px-3 py-1 rounded">
                Click to preview
              </span>
            </div>
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
