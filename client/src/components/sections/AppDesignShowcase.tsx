
import { motion } from "framer-motion";

export const AppDesignShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-['Montserrat'] font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Modern Interface Design
        </motion.h2>
        
        <motion.div 
          className="max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card rounded-xl shadow-2xl overflow-hidden">
            <img 
              src="https://cdn.discordapp.com/attachments/753898307549528105/1353310192338735155/image.png?ex=67e12fd5&is=67dfde55&hm=615f60377bf051caf4503ea1dc0073a591888a2aaedb65a91cddb487404daf18" 
              alt="Lakbay App Interface" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
