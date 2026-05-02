"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async () => {
    const input = document.getElementById('footer-email') as HTMLInputElement;
    if (!input?.value) return;
    setSubscribing(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: input.value }),
      });
      if (res.ok) setSubscribed(true);
    } finally {
      setSubscribing(false);
    }
  };
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Press & Awards", href: "/media-speaking" },
    { name: "Blogs", href: "/blogs" },
    { name: "JCI Manila", href: "/jci-manila" },
    { name: "Ministries", href: "/myles-tan-ministries" },
  ];

  const helpLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Full Bio", href: "/bio" },
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
            {subscribed ? (
              <p className="font-inter text-[#ed5128] text-sm mt-4">
                You&apos;re on the list — we&apos;ll be in touch soon.
              </p>
            ) : (
              <div className="flex gap-2 w-full mt-4">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-[#bbc6c6] focus:outline-none focus:border-primary-orange transition-colors"
                />
                <Button onClick={handleSubscribe} disabled={subscribing} className="h-auto">{subscribing ? 'SUBSCRIBING...' : 'SUBSCRIBE'}</Button>
              </div>
            )}
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
                <Link href="https://www.facebook.com/mylestanministries" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2 focus:ring-offset-black">
                  <Facebook size={18} />
                </Link>
                <Link href="https://www.instagram.com/mylestan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2 focus:ring-offset-black">
                  <Instagram size={18} />
                </Link>
                <Link href="https://www.youtube.com/@MylesTanMinistries" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2 focus:ring-offset-black">
                  <Youtube size={18} />
                </Link>
                <Link href="https://www.linkedin.com/in/myles-yeo-tan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-primary-orange hover:border-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-[#ed5128] focus:ring-offset-2 focus:ring-offset-black">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Big Name */}
        <div className="w-full overflow-hidden px-4">
          <p className="font-darker font-semibold text-xl text-center text-white">
            Myles Yeo Tan - 1 Corinthians 10:31 So, whether you eat or drink, or whatever you do, do all to the glory of God
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 pt-8 flex justify-between items-center text-[#9f9f9f] text-sm">
          <p>©2026, Myles Tan</p>
        </div>
      </div>
    </footer>
  );
}
