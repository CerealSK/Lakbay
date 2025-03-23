import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Info } from "lucide-react";

export const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="bg-gradient-to-br from-primary/10 to-[#FFF5F5] py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="md:w-1/2 md:pr-8"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-bold mb-4">
              <span className="text-primary">Gabay</span> sa bawat byahe
            </h1>
            <p className="text-xl mb-8 font-['Nunito']">
              Navigate transportation in the Philippines with ease. Calculate costs, find routes, and simplify your commute with the Lakbay app.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => handleNavigate("download")}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-['Montserrat'] rounded-full shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" /> Get the App
              </Button>
              <Button 
                onClick={() => handleNavigate("features")}
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-black font-['Montserrat'] rounded-full hover:bg-gray-50"
              >
                <Info className="mr-2 h-5 w-5" /> Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute -z-10 bg-primary/30 rounded-full w-64 h-64 md:w-80 md:h-80 blur-3xl"></div>
              <motion.img 
                src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/484868911_2019283081929794_7040319670369872696_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFiY0uXQgiABni-ao68beXNr0eZbPbf5d2vR5ls9t_l3dNpvZaJSpL89zbbCeZfilk&_nc_ohc=PXBZ551e3eMQ7kNvgG3RiAe&_nc_oc=Adk2cBZ6Q-Dj-IHVL6aBXgCRZ4-20zUxAKKvfAA_uluurgddlAJrh096tp-6zWwxYe4NJwbbeP88a4neg_5ZOrfY&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=Jhr0RdT2wSNg1_FCZmXd4A&oh=00_AYH0gD_HBpeLJ2phUN9je_iEb1cV_wtah7p5jvHUsxFGJA&oe=67E5B701" 
                alt="Lakbay App on Phone" 
                className="rounded-3xl shadow-2xl w-64 md:w-80 object-cover border-8 border-white"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
