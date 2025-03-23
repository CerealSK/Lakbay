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
      <img src="attached_assets/484866353_2019282591929843_5263586361773981030_n.jpg" alt="Lakbay" className="h-8" />
    </div>
  );
};