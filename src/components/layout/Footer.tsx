"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Media Speaking", href: "/media-speaking" },
    { name: "Blogs", href: "/blogs" },
  ];

  const helpLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-8 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          {/* Subscribe Section */}
          <div className="flex flex-col gap-4 max-w-lg w-full">
            <h3 className="font-darker font-semibold text-3xl">Stay Equipped. Stay Inspired.</h3>
            <p className="font-inter text-[#9f9f9f] text-base">
              Get faith-driven insights on finance, entrepreneurship, and purposeful living delivered straight to your inbox.
            </p>
            <div className="flex gap-2 w-full mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-[#bbc6c6] focus:outline-none focus:border-primary-orange transition-colors"
              />
              <Button onClick={() => alert('Newsletter subscription coming soon!')} className="h-auto">SUBSCRIBE</Button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-12 md:gap-20">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-darker font-bold text-xl">Quick Links</h4>
              <div className="flex flex-col gap-2 font-inter text-[#9f9f9f]">
                {quickLinks.map(link => (
                  <Link key={link.name} href={link.href} className="hover:text-primary-orange transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Need Help */}
            <div className="flex flex-col gap-4">
              <h4 className="font-darker font-bold text-xl">Need Help?</h4>
              <div className="flex flex-col gap-2 font-inter text-[#9f9f9f]">
                {helpLinks.map(link => (
                  <Link key={link.name} href={link.href} className="hover:text-primary-orange transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h4 className="font-darker font-bold text-xl">Follow Us</h4>
              <div className="flex gap-3">
                <Link href="https://www.facebook.com/mylestanministries" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors cursor-pointer">
                  <Facebook size={18} />
                </Link>
                <Link href="https://www.instagram.com/mylestan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors cursor-pointer">
                  <Instagram size={18} />
                </Link>
                <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors cursor-pointer">
                  <Youtube size={18} />
                </Link>
                <Link href="https://www.linkedin.com/in/myles-yeo-tan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors cursor-pointer">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Big Name */}
        <div className="w-full overflow-hidden px-4">
          <h1 className="font-darker font-semibold text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] xl:text-[280px] leading-none text-center tracking-tighter text-white break-words max-w-full">
            Myles Yeo Tan
          </h1>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 pt-8 flex justify-between items-center text-[#9f9f9f] text-sm">
          <p>©2025, Myles Tan</p>
        </div>
      </div>
    </footer>
  );
}
