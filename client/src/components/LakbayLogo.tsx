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
      <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/484866353_2019282591929843_5263586361773981030_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF_o1fXupWdAkaa_von5xqWoYf2q7Y8Je6hh_artjwl7tkJ7zh9pNeqle7z67wpAZk&_nc_ohc=xZQpT6dlWToQ7kNvgEStThv&_nc_oc=AdmPeUJivyU2AhFhND-TW9MyVnYnyaz5egtAxypKUd1_WGedd4BjkHda4Sr4_ikC21pFxDGxtbiEZXPa-wLTMuMp&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=tLoLyYkvuWjUX-hr7y3y9w&oh=00_AYH4ZhJGT2urBibX4xL-mjmjclXqqdUtVjEyTwJI_l0FEw&oe=67E5987D" alt="Lakbay" className="h-8" />
    </div>
  );
};