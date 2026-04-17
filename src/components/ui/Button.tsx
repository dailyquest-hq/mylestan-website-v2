import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "ghost";
  size?: "default" | "icon";
  children: React.ReactNode;
}

export function buttonVariants({ variant = "primary", size = "default" }: { variant?: "primary" | "outline" | "white" | "ghost"; size?: "default" | "icon" } = {}) {
  const baseStyles = "flex items-center justify-center uppercase font-poppins font-bold text-sm tracking-wide transition-colors duration-300 cursor-pointer";

  const sizeStyles = {
    default: "h-[48px] px-6 py-2",
    icon: "h-10 w-10 p-0",
  };

  const variants = {
    primary: "bg-primary-orange text-white hover:bg-[#d6411b]",
    outline: "border border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white",
    white: "bg-white text-primary-orange hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return cn(baseStyles, sizeStyles[size], variants[variant]);
}

export function Button({ className, variant = "primary", size = "default", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
