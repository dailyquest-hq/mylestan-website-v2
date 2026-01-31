import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white";
  children: React.ReactNode;
}

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  const baseStyles = "h-[48px] px-6 py-2 flex items-center justify-center uppercase font-albert font-bold text-sm tracking-wide transition-colors duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-primary-orange text-white hover:bg-[#d6411b]",
    outline: "border border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white",
    white: "bg-white text-primary-orange hover:bg-gray-100",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
