"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQPage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[36px] sm:text-[48px] md:text-[70px] lg:text-[100px] leading-none">Frequently Asked Questions</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Explore common questions about services, events, and ways to connect with Myles Tan.
            </p>
         </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20 md:py-32 px-5">
         <div className="max-w-[920px] mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center flex flex-col gap-6 mb-16 max-w-2xl">
               <h2 className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-black">
                 Clarity Made Simple
               </h2>
               <p className="font-poppins text-[#282828] text-base md:text-lg">
                 From coaching to speaking engagements, here’s everything you need to know — all in one place.
               </p>
            </div>

            {/* FAQ Groups */}
            <div className="w-full flex flex-col gap-12">
               <FAQGroup
                 title="Services & Coaching"
                 items={[
                   {
                     q: "What kind of services do you offer?",
                     a: "Myles Yeo Tan offers services across crypto & trading insights, financial planning, Christian entrepreneurship coaching, and speaking engagements. Each service is designed to bring clarity, wisdom, and disciplined execution—both spiritually and practically. You can explore all services in detail on the Services page."
                   },
                   {
                     q: "Do you work with individuals or groups?",
                     a: "Yes—services are available for both individuals and groups, depending on the engagement. Myles Yeo Tan can coach both individuals and groups."
                   },
                   {
                     q: "How do I book a coaching session?",
                     a: "You can book a coaching or planning session directly through the Services page. Once booked, you'll receive instructions on preparation and next steps. Availability is limited to ensure quality and focus for each client."
                   }
                 ]}
               />

               <FAQGroup
                 title="Speaking Engagements"
                 items={[
                   {
                     q: "What topics does Myles usually speak on?",
                     a: "Myles Yeo Tan speaks on faith-driven leadership, financial stewardship, entrepreneurship, market wisdom, and purpose-led living. His talks blend biblical truth, real-world experience, and practical application. Each message is tailored to the audience and setting."
                   },
                   {
                     q: "How do I invite Myles to speak at my event?",
                     a: "To invite Myles Yeo Tan to speak, simply fill out the request form on the Speaking Engagements page or Contact page. Please include event details, audience type, and preferred dates. A member of the team will follow up to discuss alignment and logistics."
                   },
                   {
                     q: "Are speaking engagements available internationally?",
                     a: "Yes, international speaking engagements are available, subject to scheduling and logistics. Virtual engagements are also offered for global audiences. You can indicate your location and format preference in the booking form."
                   }
                 ]}
               />

               <FAQGroup
                 title="Events & Media"
                 items={[
                   {
                     q: "Where can I find updates on upcoming events?",
                     a: "Updates on upcoming talks, seminars, and events are shared through social media channels including Facebook, Instagram, and YouTube."
                   },
                   {
                     q: "Has Myles been featured in media or podcasts?",
                     a: "Yes, Myles Yeo Tan has been featured on media platforms and invited to speak on finance, markets, and faith-based leadership, including appearances on Bilyonaryo News Channel, ZFT Trading Republic, and various financial publications."
                   }
                 ]}
               />

               <FAQGroup
                 title="General Questions"
                 items={[
                   {
                     q: "How can I stay connected with Myles?",
                     a: "You can stay connected to Myles Yeo Tan by following him on social media (Facebook, Instagram, YouTube, LinkedIn) for insights, teachings, and updates. This is where new content, events, and resources are announced first."
                   },
                   {
                     q: "Do you offer free resources?",
                     a: "Yes. Myles Yeo Tan offers free resources such as insights, teachings, and educational content that are shared periodically through social media and the website. The goal is to equip people generously, before any paid engagement."
                   }
                 ]}
               />
            </div>

         </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#ed5128] py-24 px-5">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center gap-8">
            <SectionLabel color="white" className="opacity-80">Still have questions?</SectionLabel>
            <h2 className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-white">Let’s Get in Touch</h2>
            <p className="font-poppins text-white text-base md:text-lg max-w-md">
               Didn’t find the answer you were looking for? Reach out and we’ll be happy to help.
            </p>
            <Link href="/contact" className="cursor-pointer">
               <Button className="border-2 border-white bg-transparent hover:bg-white hover:text-[#ed5128] text-white h-12 px-8 text-base font-bold rounded-none uppercase mt-4">
                  CONTACT US
               </Button>
            </Link>
         </div>
      </section>

    </main>
  );
}

function FAQGroup({ title, items }: { title: string, items: { q: string, a: string }[] }) {
  return (
    <div className="w-full flex flex-col gap-6">
      <h3 className="font-darker font-semibold text-2xl text-black text-center md:text-left">{title}</h3>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f0f0f0] rounded-[4px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-200/50 cursor-pointer"
      >
        <span className="font-inter font-normal text-[#282828] text-base">{question}</span>
        <div className="shrink-0 ml-4 text-[#282828]">
          {isOpen ? <Minus size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 text-[#575756] font-inter text-base leading-relaxed border-t border-black/5 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
