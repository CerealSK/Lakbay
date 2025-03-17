import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}

export const LakbayLogo = ({ className, size = "md", withTagline = true }: LogoProps) => {
  const sizes = {
    sm: "h-10",
    md: "h-12",
    lg: "h-16",
  };

  return (
    <div className={cn(className)}>
      <svg 
        className={cn(sizes[size], "w-auto")} 
        viewBox="0 0 500 500" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 150 L150 150 L230 370 L230 150 L400 150 L400 370" stroke="#4BD0D0" strokeWidth="40" fill="none" strokeLinecap="round"/>
        <path d="M150 150 L150 370" stroke="black" strokeWidth="15" strokeDasharray="15,15"/>
        <path d="M230 370 L400 370" stroke="black" strokeWidth="15" strokeDasharray="15,15"/>
        <g transform="translate(400, 180)">
          <circle cx="0" cy="0" r="40" fill="#4BD0D0" opacity="0.8"/>
          <path d="M-15 -10 L15 -10 L15 10 L-15 10 L-15 -10 M-10 -10 L-10 -20 L10 -20 L10 -10" stroke="white" strokeWidth="5" fill="none"/>
          <path d="M0 20 L10 30 L-10 30 Z" stroke="white" strokeWidth="5" fill="none"/>
        </g>
        <text x="250" y="420" fontSize="24" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">
          {withTagline ? "GABAY SA BAWAT BYAHE" : ""}
        </text>
        <text x="300" y="270" fontSize="80" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">AKBAY</text>
      </svg>
    </div>
  );
};
