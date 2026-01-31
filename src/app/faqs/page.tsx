"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Myles Yeo Tan offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Myles Tan offers crypto trading insights, financial planning, Christian entrepreneurship coaching, and speaking engagements on faith, finance, and personal growth."
        }
      }
    ]
  };

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[60px] md:text-[100px] leading-none">Frequently Asked Questions</h1>
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
                     q: "What kind of services?",
                     a: "We offer a range of services including Crypto & Trading Insights, Financial Planning, and Christian Entrepreneurship Coaching. Each service is designed to bridge professional expertise with biblical principles."
                   },
                   {
                     q: "Do you work with individuals or groups?",
                     a: "Yes, Myles works with both individuals for one-on-one financial planning and coaching, as well as groups through workshops, seminars, and speaking engagements."
                   },
                   {
                     q: "How do I book a coaching session?",
                     a: "You can book a session directly through our Services page or by contacting us via the form below to schedule a consultation."
                   }
                 ]}
               />

               <FAQGroup 
                 title="Speaking Engagements"
                 items={[
                   {
                     q: "What topics does Myles usually speak on?",
                     a: "Myles speaks on Faith & Finance, Kingdom Entrepreneurship, Stewardship, and Purposeful Living, tailoring his message to the specific needs of the audience."
                   },
                   {
                     q: "How do I invite Myles to speak at my event?",
                     a: "Please fill out the booking form on the Speaking Engagements page or the Contact page with details about your event, date, and audience."
                   },
                   {
                     q: "Are speaking engagements available internationally?",
                     a: "Yes, Myles travels internationally for speaking engagements. Please reach out well in advance to coordinate schedules and travel arrangements."
                   }
                 ]}
               />

               <FAQGroup 
                 title="Events & Media"
                 items={[
                   {
                     q: "Where can I find updates on upcoming events?",
                     a: "Upcoming events are listed on our Homepage and social media channels. Subscribe to our newsletter to get the latest updates delivered to your inbox."
                   },
                   {
                     q: "Has Myles been featured in media or podcasts?",
                     a: "Yes, Myles has appeared on various podcasts and media outlets discussing faith, crypto, and business. Check our Media section for recent features."
                   }
                 ]}
               />

               <FAQGroup 
                 title="General Questions"
                 items={[
                   {
                     q: "How can I stay connected with Myles?",
                     a: "Follow us on Instagram, Facebook, and LinkedIn for daily insights. You can also join our email list for exclusive content and updates."
                   },
                   {
                     q: "Do you offer free resources?",
                     a: "Yes! We regularly publish blogs, market updates, and devotionals. Check out the Blogs section for free educational content."
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
            <Link href="/contact">
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
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-200/50"
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
