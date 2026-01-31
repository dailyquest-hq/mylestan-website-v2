"use client";

import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TrendingUp, ShieldCheck, Heart, ThumbsUp, Wallet, PieChart, Users, Star, Mic, MessageCircle, Home } from "lucide-react";

// Assets
import imgServicePlaceholder from "figma:asset/b253e82081540176b3d882f6bb3f15d69992b182.png";

// Reusing some assets from other pages if available for variety, otherwise fallback to placeholder
// Ideally we would have distinct images for each service as shown in design
const serviceImages = {
  crypto: imgServicePlaceholder,
  financial: imgServicePlaceholder,
  coaching: imgServicePlaceholder,
  realEstate: imgServicePlaceholder,
  speaking: imgServicePlaceholder,
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[80px] md:text-[100px] leading-none">Services</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Explore services designed to help you grow spiritually, steward resources wisely, and make an impact in business and life.
            </p>
         </div>
      </section>

      {/* Service Sections */}
      <div className="flex flex-col">
        
        {/* Crypto & Trading */}
        <ServiceSection 
          id="crypto"
          label="Crypto & Trading Insights"
          title="Navigate the digital economy with clarity."
          description="Stay ahead in crypto and trading with market insights, strategies, and educational resources rooted in both financial wisdom and biblical stewardship."
          image={serviceImages.crypto}
          layout="left"
          buttonText="Get Trading Insights"
          bullets={[
            { icon: TrendingUp, text: "Market trend analysis and practical trading guidance", color: "orange" },
            { icon: ShieldCheck, text: "Risk management strategies for long-term success", color: "orange" },
            { icon: Heart, text: "Insights on aligning investments with Kingdom values", color: "orange" }
          ]}
        />

        {/* Financial Planning */}
        <ServiceSection 
          id="financial"
          label="Financial Planning"
          title="Build a foundation that lasts."
          description="From budgeting to long-term investing, financial planning helps ensure stability and growth for individuals, families, and businesses."
          image={serviceImages.financial}
          layout="right"
          buttonText="Start Planning Today"
          bullets={[
            { icon: ThumbsUp, text: "Personalised strategies tailored to your goals", color: "green" },
            { icon: Wallet, text: "Budgeting, saving, and debt management guidance", color: "green" },
            { icon: PieChart, text: "Long-term wealth creation with purpose-driven principles", color: "green" }
          ]}
        />

        {/* Christian Entrepreneurship Coaching */}
        <ServiceSection 
          id="coaching"
          label="Christian Entrepreneurship Coaching"
          title="Grow a business anchored in faith."
          description="Entrepreneurship isn’t just about profit — it’s about purpose. Coaching empowers business leaders to integrate biblical wisdom with practical strategies."
          image={serviceImages.coaching}
          layout="left"
          buttonText="Book a Coaching Session"
          bullets={[
            { icon: Users, text: "One-on-one coaching for business owners and startups", color: "peach" },
            { icon: Star, text: "Guidance on Kingdom leadership and ethical practices", color: "peach" },
            { icon: TrendingUp, text: "Strategies for sustainable growth aligned with faith values", color: "peach" }
          ]}
        />

        {/* Real Estate Brokerage */}
        <ServiceSection 
          id="real-estate"
          label="Real Estate Brokerage"
          title="Invest with wisdom, create lasting value."
          description="Real estate remains one of the strongest wealth-building tools. Brokerage services connect clients with opportunities that are financially sound and ethically grounded."
          image={serviceImages.realEstate}
          layout="right"
          buttonText="Explore Real Estate Opportunities"
          bullets={[
            { icon: Home, text: "Buy, sell, or invest in properties with confidence", color: "orange" },
            { icon: PieChart, text: "Market expertise and tailored investment strategies", color: "orange" },
            { icon: Heart, text: "Support throughout the process with integrity and care", color: "orange" }
          ]}
        />

        {/* Speaking Engagements */}
        <ServiceSection 
          id="speaking"
          label="Speaking Engagements"
          title="Inspiring audiences, transforming lives."
          description="From churches and conferences to business summits, Myles brings messages that bridge faith and finance, leaving audiences both encouraged and equipped."
          image={serviceImages.speaking}
          layout="left"
          buttonText="Book Myles to Speak"
          bullets={[
            { icon: Mic, text: "Keynote speaking on faith, finance, and entrepreneurship", color: "orange" },
            { icon: Users, text: "Workshops and seminars for ministries or organisations", color: "orange" },
            { icon: MessageCircle, text: "Tailored topics for community, church, or business events", color: "orange" }
          ]}
        />

      </div>

      {/* Bottom CTA */}
      <section className="bg-black py-20 px-5 border-t border-white/10">
         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="text-left max-w-3xl">
               <h2 className="font-darker font-semibold text-4xl md:text-[64px] leading-none text-white mb-6">Take the Next Step Today</h2>
               <p className="font-inter text-[#9f9f9f] text-lg max-w-2xl">
                  Whether you’re seeking financial guidance, entrepreneurial coaching, or a speaker for your next event — these services are designed to equip and empower you.
               </p>
            </div>
            <Link to="/contact">
               <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-14 px-8 text-lg font-bold rounded-none uppercase shrink-0">
                  Contact Myles
               </Button>
            </Link>
         </div>
      </section>

    </main>
  );
}

interface ServiceBullet {
  icon: React.ElementType;
  text: string;
  color: "orange" | "green" | "peach";
}

interface ServiceSectionProps {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  layout: "left" | "right";
  buttonText: string;
  bullets: ServiceBullet[];
}

function ServiceSection({ id, label, title, description, image, layout, buttonText, bullets }: ServiceSectionProps) {
  const isRight = layout === "right";

  return (
    <section id={id} className="py-20 md:py-32 px-5 border-b border-gray-100 last:border-0">
      <div className={cn(
        "max-w-[1600px] mx-auto flex flex-col gap-12 lg:gap-24 items-center",
        isRight ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
        
        {/* Content */}
        <div className="flex-1 flex flex-col gap-8 lg:gap-10 items-start">
           <SectionLabel color="black">{label}</SectionLabel>
           
           <div className="flex flex-col gap-6">
             <h2 className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-black max-w-xl">
               {title}
             </h2>
             <p className="font-poppins text-[#282828] text-base md:text-lg leading-relaxed max-w-xl">
               {description}
             </p>
           </div>

           <div className="flex flex-col gap-4 mt-2">
             {bullets.map((bullet, i) => (
               <div key={i} className="flex gap-4 items-center">
                 <div className={cn(
                   "w-8 h-8 flex items-center justify-center shrink-0",
                   bullet.color === "orange" && "text-[#ed5128]",
                   bullet.color === "green" && "text-[#2d9739]",
                   bullet.color === "peach" && "text-[#ed5128]"
                 )}>
                   <bullet.icon size={28} strokeWidth={2} />
                 </div>
                 <span className="font-poppins text-[#282828] text-base">{bullet.text}</span>
               </div>
             ))}
           </div>

           <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-12 px-8 text-base font-bold rounded-none uppercase mt-4">
             {buttonText}
           </Button>
        </div>

        {/* Image */}
        <div className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden rounded-sm bg-gray-100">
           <img src={image} alt={title} className="w-full h-full object-cover object-center" />
        </div>

      </div>
    </section>
  );
}
