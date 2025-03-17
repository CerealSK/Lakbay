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
        viewBox="0 0 500 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 50 L50 150 L150 150" stroke="#4BD0D0" strokeWidth="40" fill="none" strokeLinecap="round"/>
        <path d="M50 150 L150 150" stroke="black" strokeWidth="8" strokeDasharray="8,8"/>
        <text x="170" y="150" fontSize="80" fontFamily="sans-serif" fontWeight="bold">AKBAY</text>
        {withTagline && (
          <text x="170" y="180" fontSize="24" fontFamily="sans-serif">GABAY SA BAWAT BYAHE</text>
        )}
        <g transform="translate(450, 80)">
          <circle cx="0" cy="0" r="30" stroke="#4BD0D0" strokeWidth="4" fill="none"/>
          <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="#4BD0D0" strokeWidth="4"/>
          <path d="M0 -20 L0 20" stroke="#4BD0D0" strokeWidth="4" strokeDasharray="4,4"/>
        </g>
      </svg>
    </div>
  );
};
