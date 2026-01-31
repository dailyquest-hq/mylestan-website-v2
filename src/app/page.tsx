"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Assets
import imgHero from "figma:asset/b8f78dd8dc270e5f9737537d99a3a5e1cf6ee83a.png";
import imgAboutLarge from "figma:asset/f8a15c9bbe2cd8cb14e753e8e4a59ff2fbafe0ef.png";
import imgAboutSmall1 from "figma:asset/1b7b9ed06e53fa11ed934b127bbe0f87cc647900.png";
// Reusing small1 or finding another asset if available, the import list showed two GalleryImage1 usages in Frame16, 
// but let's check if there's a third image. 
// In imports/Homepage-3-523.tsx:
// import imgGalleryImage from "...ef.png"; (Large)
// import imgGalleryImage1 from "...00.png"; (Small 1)
// The Frame16 uses GalleryImage1 twice? 
// No, looking at lines 4-7 of the import file:
// imgThumbnailImage1 is d6dbe12...
// Let's use that for the second small image in About just in case, or reuse if intended.
// Actually, I'll use d6dbe12... as a placeholder for the second small image to vary it.
import imgAboutSmall2 from "figma:asset/d6dbe12a4a1ae670adbb682f9f3bb7e083e7f65e.png"; 

// Blog Images
import imgBlog1 from "figma:asset/c1e57017c54c3f6bc788abd25e0ed91bbe87351e.png";
import imgBlog2 from "figma:asset/d6dbe12a4a1ae670adbb682f9f3bb7e083e7f65e.png";
import imgBlog3 from "figma:asset/7d78fafec50ff790a2dda5404c27187528d40c17.png";

// Media Background
import imgMediaBg from "figma:asset/6795e162202e3c0307963e5e15999946d0dee112.png";

export default function Homepage() {
  return (
    <main className="bg-[#0f100a] min-h-screen text-white w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 flex flex-col items-center">
        <div className="max-w-[1600px] w-full px-5 flex flex-col items-center gap-12">
          
          {/* Hero Content Wrapper */}
          <div className="flex flex-col items-center text-center w-full overflow-hidden">
            <h1 className="font-darker font-semibold text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] xl:text-[280px] leading-[0.8] tracking-tight text-center break-words max-w-full px-4">
              Myles Yeo Tan
            </h1>
            <p className="font-darker font-semibold text-xl md:text-2xl mt-8 md:mt-12 text-right w-full max-w-4xl ml-auto xl:mr-20">
              Crypto Trader | Christian Entrepreneur | Public Speaker | Financial Planner | Real Estate Broker
            </p>
            
            {/* Description & Buttons */}
            <div className="flex flex-col items-center gap-8 mt-16 max-w-lg mx-auto">
              <p className="font-inter text-base text-center text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
              </p>
              <div className="flex gap-4">
                <Link to="/about">
                  <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
                    ABOUT ME
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#ed5128] text-[#ed5128] hover:bg-[#ed5128] hover:text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
                    WORK WITH ME
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full relative mt-12 h-[500px] md:h-[700px] xl:h-[800px]">
             <img src={imgHero} alt="Myles Tan" className="w-full h-full object-cover" />
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
                Myles Tan is a speaker, mentor, and entrepreneur passionate about blending faith and finance to empower people in every area of life. With experience spanning crypto, trading, financial planning, real estate, and Christian entrepreneurship, he guides individuals to steward their resources wisely while keeping Christ at the centre.
              </p>
              <p>
                Beyond business, Myles is deeply devoted to ministry — teaching, coaching, and speaking in ways that inspire growth, purpose, and transformation. His mission is simple: to help people live abundantly in both faith and finance.
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="md:w-[60%] h-[500px] md:h-[772px] relative overflow-hidden">
               <img src={imgAboutLarge} alt="Myles Speaking" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-[40%] flex flex-col gap-6">
               <div className="h-[240px] md:h-[372px] relative overflow-hidden">
                  <img src={imgAboutSmall1} alt="Audience" className="w-full h-full object-cover" />
               </div>
               <div className="h-[240px] md:h-[372px] relative overflow-hidden">
                  <img src={imgAboutSmall2} alt="Workshop" className="w-full h-full object-cover" />
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
                { year: "2010", text: "Founded the ministry with a mission to teach and demonstrate God’s Word through both online and in-person gatherings." },
                { year: "2011", text: "Launched a YouTube channel and reached the first 10,000 subscribers within the year." },
                { year: "2012", text: "Expanded digital ministry during the pandemic, livestreaming weekly Bible studies, prayer nights, and deliverance sessions." },
                { year: "2013", text: "Introduced the Prophetic H.E.D.G.E. program, empowering hundreds of believers through healing, deliverance, and evangelism." },
                { year: "2014", text: "Partnered with local and international churches to conduct training and outreach events." },
                { year: "2015", text: "Surpassed 1 million video views and built an active global community engaging with teachings weekly." },
                { year: "2024", text: "Launched official website and prayer resources, making materials available to a wider audience." },
                { year: "2024", text: "Continuing to grow in reach, expanding mentoring, discipleship, and global evangelism initiatives." }
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
                <div key={i} className="bg-white p-8 md:p-10 flex flex-col gap-6 text-[#282828] min-h-[400px]">
                   <h3 className="font-darker font-semibold text-3xl leading-none">{service.title}</h3>
                   <p className="font-inter text-[#3c3c3c] text-base leading-relaxed">{service.desc}</p>
                   <div className="mt-auto pt-4">
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                        <ArrowRight size={18} className="text-[#ed5128]" />
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <Button className="border-2 border-white bg-transparent hover:bg-white hover:text-[#ed5128] text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide mt-8">
             LET'S CONNECT
           </Button>
        </div>
      </section>

      {/* What's Happening (Blogs) */}
      <section className="bg-[#0f100a] py-24 px-5 text-white">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-12">
          
          {/* Header */}
          <div className="flex flex-col gap-6 px-5">
             <SectionLabel color="white" className="opacity-80">what's happening</SectionLabel>
             <div className="flex flex-col md:flex-row justify-between items-end gap-8">
               <div className="max-w-2xl">
                 <h2 className="font-darker font-semibold text-4xl md:text-[48px] leading-[0.9] mb-4">
                   Insights Beyond the Stage
                 </h2>
                 <p className="font-poppins text-[#9f9f9f] text-base">
                   Key lessons and reflections from the events I host and join — distilled into practical takeaways for your journey.
                 </p>
               </div>
               <Link to="/blogs">
                 <Button variant="outline" className="border-[#ed5128] text-[#ed5128] hover:bg-[#ed5128] hover:text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
                    SHOW ALL
                 </Button>
               </Link>
             </div>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
             <BlogCard 
               image={imgBlog1}
               category="EVENTS & RECAPS"
               title="Faith & Business Summit 2025"
               desc="My top 3 lessons on merging Kingdom values with practical strategies."
             />
             <BlogCard 
               image={imgBlog2}
               category="EVENTS & RECAPS"
               title="Crypto & Stewardship Webinar"
               desc="Breaking down how believers can navigate digital investments responsibly."
             />
             <BlogCard 
               image={imgBlog3}
               category="BLOGS & INSIGHTS"
               title="Why Kingdom Entrepreneurs Think Differently About Wealth"
               desc=""
               isBlog
             />
          </div>

        </div>
      </section>

      {/* Media Speaking */}
      <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
         <div className="absolute inset-0">
           <img src={imgMediaBg} alt="Media Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-[#18140e]/40" />
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
                  <p className="font-poppins text-[#9f9f9f] text-base leading-relaxed">
                    Myles Tan has been featured across conferences, panels, podcasts, and media platforms — delivering insights on faith, finance, entrepreneurship, and purposeful living. From local gatherings to international stages, each engagement is driven by the mission to inspire, equip, and empower people to live out their calling with wisdom and faith.
                  </p>
                  <Link to="/media-speaking">
                    <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide w-fit">
                      WATCH AND LISTEN
                    </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}

function BlogCard({ image, category, title, desc, isBlog = false }: { image: string, category: string, title: string, desc: string, isBlog?: boolean }) {
  return (
    <div className="flex flex-col gap-6 group cursor-pointer">
       <div className="w-full h-[300px] md:h-[345px] relative overflow-hidden bg-gray-800">
         <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
       </div>
       <div className="flex flex-col gap-2">
         <span className="font-inter font-medium text-sm tracking-wider uppercase text-white/80">{category}</span>
         <h3 className="font-darker font-semibold text-3xl leading-none text-white">{title}</h3>
         {desc && <p className="font-inter text-[#9f9f9f] text-base mt-2">{desc}</p>}
       </div>
       <div className="mt-auto pt-2">
         <Button variant="outline" className="border-[#ed5128] text-[#ed5128] hover:bg-[#ed5128] hover:text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide w-full md:w-auto">
           {isBlog ? "READ FULL BLOG" : "READ FULL RECAP"}
         </Button>
       </div>
    </div>
  )
}
