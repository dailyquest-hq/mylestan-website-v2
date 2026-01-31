"use client";

import React from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TrendingUp, ShieldCheck, Heart, ThumbsUp, Wallet, PieChart, Users, Star, Mic, MessageCircle } from "lucide-react";

// Assets
import imgCrypto from "@/assets/services/crypto-trading.jpg";
import imgFinancial from "@/assets/services/financial-planning.jpg";
import imgCoaching from "@/assets/services/entrepreneurship.jpg";
import imgSpeaking from "@/assets/services/speaking.jpg";

const serviceImages = {
  crypto: imgCrypto.src,
  financial: imgFinancial.src,
  coaching: imgCoaching.src,
  speaking: imgSpeaking.src,
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none">Services</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Explore services designed to help you grow spiritually, steward resources wisely, and make an impact in business and life.
            </p>
         </div>
      </section>

      {/* Service Sections */}
      <div className="flex flex-col">
        
        {/* Crypto, Stocks & Commodities Trading Analysis */}
        <ServiceSection
          id="crypto"
          label="Crypto, Stocks & Commodities Trading Analysis"
          title="Wisdom over hype. Discipline over emotion."
          description={`Myles Yeo Tan will provide clear, disciplined insights into the markets, grounded in wisdom and risk awareness. The goal is to help you make informed, strategic decisions in volatile markets while avoiding financial losses due to market hype and speculation. "The plans of the diligent lead surely to abundance." — Proverbs 21:5`}
          image={serviceImages.crypto}
          layout="left"
          buttonText="LET'S CHART!"
          bullets={[
            { icon: TrendingUp, text: "Market cycle and technical analysis", color: "orange" },
            { icon: ShieldCheck, text: "Risk management & trade psychology coaching", color: "orange" },
            { icon: Heart, text: "Educational breakdowns of charts and setups", color: "orange" }
          ]}
        />

        {/* Financial Planning and Literacy */}
        <ServiceSection
          id="financial"
          label="Financial Planning and Literacy"
          title="Steward well. Build intentionally."
          description={`Myles Yeo Tan will give a values-aligned financial planning experience focused on clarity, order, and long-term growth. We design financial systems that support your life calling—so you get to manage your money and money doesn't manage you. "Suppose one of you wants to build a tower. Won't you first sit down and estimate the cost?" — Luke 14:28`}
          image={serviceImages.financial}
          layout="right"
          buttonText="BOOK A SESSION"
          bullets={[
            { icon: Wallet, text: "Budgeting and cash-flow optimization", color: "green" },
            { icon: PieChart, text: "Goal-based financial roadmapping", color: "green" },
            { icon: ThumbsUp, text: "Values-aligned investment guidance", color: "green" }
          ]}
        />

        {/* Christian Entrepreneurship Coaching */}
        <ServiceSection
          id="coaching"
          label="Christian Entrepreneurship Coaching"
          title="Build businesses that honor God."
          description={`Myles Yeo Tan will coach and equip entrepreneurs to lead with conviction, integrity, and excellence—combining biblical wisdom with practical execution. Ideal for founders who desire Spirit-led decisions and measurable results. "Commit your work to the Lord, and your plans will be established." — Proverbs 16:3`}
          image={serviceImages.coaching}
          layout="left"
          buttonText="GET COACHED TODAY"
          bullets={[
            { icon: Star, text: "Faith-based business strategy & decision-making", color: "peach" },
            { icon: Users, text: "Mentorship for founders and leaders", color: "peach" },
            { icon: TrendingUp, text: "Clarity on calling, vision, and execution", color: "peach" }
          ]}
        />

        {/* Speaking Engagements */}
        <ServiceSection
          id="speaking"
          label="Speaking Engagements"
          title="Truth spoken. Lives sharpened."
          description={`Let Myles Yeo Tan give high-impact speaking engagements that challenge audiences to think clearly, lead courageously, and steward resources wisely. Messages are grounded in Scripture, real-world experience, and practical application. Any topic is ok! "Plans fail for lack of counsel, but with many advisers they succeed." — Proverbs 20:18`}
          image={serviceImages.speaking}
          layout="right"
          buttonText="Book Me to Speak!"
          bullets={[
            { icon: Mic, text: "Keynotes, seminars, and panel talks", color: "orange" },
            { icon: Users, text: "Faith, finance, leadership, and purpose-driven themes", color: "orange" },
            { icon: MessageCircle, text: "Tailored messages for your audience", color: "orange" }
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
            <Link href="/contact">
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
