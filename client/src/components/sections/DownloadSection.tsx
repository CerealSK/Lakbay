import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary/30 to-[#FFF5F5]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-['Montserrat'] font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get Lakbay Today
        </motion.h2>
        
        <motion.p 
          className="max-w-2xl mx-auto text-lg mb-10 font-['Nunito']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Start planning your commutes with confidence. Download the Lakbay app now and experience hassle-free transportation planning.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white py-3 px-8 h-auto rounded-xl flex items-center space-x-4"
          >
            <FaApple className="text-3xl" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-xl font-semibold">App Store</div>
            </div>
          </Button>
          
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white py-3 px-8 h-auto rounded-xl flex items-center space-x-4"
          >
            <FaGooglePlay className="text-3xl" />
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-xl font-semibold">Google Play</div>
            </div>
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative">
            <div className="absolute -z-10 bg-primary/30 rounded-full w-80 h-80 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Lakbay app usage" 
              className="rounded-3xl shadow-2xl max-w-xs md:max-w-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
