"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, CheckCircle } from "lucide-react";

// Assets
import imgSocial1 from "@/assets/shared/social-1.jpg";
import imgSocial2 from "@/assets/shared/social-2.jpg";
import imgSocial3 from "@/assets/shared/social-3.jpg";
import imgSocial4 from "@/assets/shared/social-4.jpg";
import imgSocial6 from "@/assets/shared/social-6.jpg";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <main id="main-content" className="bg-white min-h-dvh w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-[#0f100a] text-white pt-40 pb-24 md:pt-60 md:pb-32 px-5 text-center">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-6">
            <h1 className="font-darker font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none">Let&apos;s Connect</h1>
            <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-[690px]">
               Whether you’re interested in coaching, speaking engagements, or simply reaching out — we’d love to hear from you.
            </p>
         </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-20 md:py-32 px-5">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-12">
           
           <div className="text-center flex flex-col gap-6">
             <h2 className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-black">
               General Inquiries
             </h2>
             <p className="font-poppins text-[#282828] text-base md:text-lg">
               Have questions about services, events, or collaborations? Reach out anytime.
             </p>
           </div>

           {submitted ? (
             <div className="w-full flex flex-col items-center gap-6 py-8">
               <CheckCircle size={56} className="text-[#ed5128]" strokeWidth={1.5} />
               <h3 className="font-darker font-semibold text-2xl text-[#282828]">Message Received</h3>
               <p className="font-inter text-[#282828]/70 text-center max-w-md">
                 Thank you for reaching out. For a faster response, email directly at{" "}
                 <a href="mailto:mylestan@gmail.com" className="text-[#ed5128] hover:underline">
                   mylestan@gmail.com
                 </a>
                 .
               </p>
               <button
                 onClick={() => setSubmitted(false)}
                 className="font-inter text-sm text-[#282828]/50 hover:text-[#282828] underline"
               >
                 Send another message
               </button>
             </div>
           ) : (
             <form
               onSubmit={async (e) => {
                 e.preventDefault();
                 setLoading(true);
                 setError(null);
                 const form = e.currentTarget;
                 const name = (form.elements.namedItem('contact-name') as HTMLInputElement).value;
                 const email = (form.elements.namedItem('contact-email') as HTMLInputElement).value;
                 const message = (form.elements.namedItem('contact-message') as HTMLTextAreaElement).value;
                 try {
                   const res = await fetch('/api/contact', {
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify({ name, email, message }),
                   });
                   if (!res.ok) throw new Error();
                   setSubmitted(true);
                 } catch {
                   setError('Something went wrong. Please try again or email mylestan@gmail.com directly.');
                 } finally {
                   setLoading(false);
                 }
               }}
               className="w-full flex flex-col gap-3 sm:gap-4"
             >
               <label htmlFor="contact-name" className="sr-only">Name</label>
               <input
                 id="contact-name"
                 type="text"
                 placeholder="Name"
                 required
                 className="w-full bg-[#f0f0f0] px-4 sm:px-6 py-3 sm:py-4 placeholder-[#282828] text-[#282828] font-inter text-base focus:outline-none focus:ring-1 focus:ring-primary-orange"
               />
               <label htmlFor="contact-email" className="sr-only">Email</label>
               <input
                 id="contact-email"
                 type="email"
                 placeholder="Email"
                 required
                 className="w-full bg-[#f0f0f0] px-4 sm:px-6 py-3 sm:py-4 placeholder-[#282828] text-[#282828] font-inter text-base focus:outline-none focus:ring-1 focus:ring-primary-orange"
               />
               <label htmlFor="contact-message" className="sr-only">Message</label>
               <textarea
                 id="contact-message"
                 placeholder="Message"
                 rows={5}
                 required
                 className="w-full bg-[#f0f0f0] px-4 sm:px-6 py-3 sm:py-4 placeholder-[#282828] text-[#282828] font-inter text-base focus:outline-none focus:ring-1 focus:ring-primary-orange resize-none"
               />
               <div className="flex justify-center mt-6">
                 <Button type="submit" disabled={loading} className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-12 px-12 text-base font-bold rounded-none uppercase">
                   {loading ? 'SENDING...' : 'SEND MESSAGE'}
                 </Button>
               </div>
               {error && (
                 <p className="font-inter text-red-500 text-sm text-center">{error}</p>
               )}
             </form>
           )}

        </div>
      </section>

      {/* Connect & Social Section */}
      <section className="bg-[#f5f5f5] pt-20 md:pt-28 pb-0">
         <div className="w-full flex flex-col items-center">
            
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-6 px-5 mb-16">
               <SectionLabel color="black" className="opacity-80">follow us</SectionLabel>
               <h2 className="font-darker font-semibold text-5xl md:text-[48px] leading-[0.9] text-black">
                 Let’s Stay Connected
               </h2>
               <p className="font-poppins text-[#282828] text-base md:text-lg max-w-2xl">
                 Follow along for daily inspiration, financial wisdom, and faith-driven content across all platforms.
               </p>
               
               {/* Social Icons */}
               <div className="flex gap-4 mt-2">
                  <Link href="https://www.facebook.com/mylestanministries" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Facebook size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.instagram.com/mylestan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Instagram size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Youtube size={24} strokeWidth={1.5} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/myles-yeo-tan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 bg-[#ed5128] flex items-center justify-center text-white hover:bg-[#d6411b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2">
                     <Linkedin size={24} strokeWidth={1.5} />
                  </Link>
               </div>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
               {[imgSocial1, imgSocial2, imgSocial3, imgSocial4, imgSocial6].map((img, idx) => (
                  <div key={idx} className="aspect-square relative overflow-hidden bg-gray-200 group">
                     <Image src={img} alt="Myles Tan on Instagram" fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Instagram className="text-white" size={32} />
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>

    </main>
  );
}
