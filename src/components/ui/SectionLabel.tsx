
interface SectionLabelProps {
  children: React.ReactNode;
  color?: "orange" | "black" | "white";
  className?: string;
}

export function SectionLabel({ children, color = "orange", className = "" }: SectionLabelProps) {
  const colorClass = {
    orange: "text-primary-orange",
    black: "text-dark-text",
    white: "text-white",
  }[color];

  return (
    <div className={`flex items-center gap-2 font-darker font-bold text-xl leading-none whitespace-nowrap opacity-80 ${colorClass} ${className}`}>
      <span>//</span>
      <span>{children}</span>
    </div>
  );
}
