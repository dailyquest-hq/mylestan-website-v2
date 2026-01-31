"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "services", href: "/services" },
    // { name: "blogs", href: "/blogs" },
    // { name: "media speaking", href: "/media-speaking" },
    { name: "faqs", href: "/faqs" },
    { name: "contact us", href: "/contact" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-5 md:px-8 py-6 md:py-8 max-w-[1600px] mx-auto w-full text-white">
        <Link href="/" className="font-darker font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-[60%] lg:max-w-none">
          Welcome to Myles Yeo Tan
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 font-medium text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-primary-orange transition-colors duration-200 capitalize",
                pathname === link.href && "text-primary-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-white/10 transition-colors rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/95 backdrop-blur-sm lg:hidden transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-darker font-semibold text-3xl md:text-4xl hover:text-primary-orange transition-colors capitalize",
                pathname === link.href && "text-primary-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
