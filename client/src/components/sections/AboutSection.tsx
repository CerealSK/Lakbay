import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface RoadmapItem {
  step: number;
  title: string;
  description: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    step: 1,
    title: "Cavite Coverage",
    description: "Comprehensive mapping of all transportation routes, costs, and options throughout Cavite province."
  },
  {
    step: 2,
    title: "Metro Manila Expansion",
    description: "Expanding our coverage to include the bustling transportation network of Metro Manila."
  },
  {
    step: 3,
    title: "Nationwide Implementation",
    description: "Full coverage of transportation routes and options across the entire Philippines."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#FFF5F5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581321825690-944511645947?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Philippines transportation scene" 
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          
          <div className="md:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Montserrat'] font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-primary">Lakbay</span>
            </motion.h2>
            
            <div className="space-y-4 font-['Nunito']">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Lakbay was created with a simple mission: to simplify commuting in the Philippines by providing accurate transportation information and cost estimates to travelers and daily commuters alike.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Starting in Cavite, we're building a comprehensive transportation guide that helps you navigate public transportation options with ease. Our goal is to expand across the entire Philippines, making commuting more accessible and predictable for everyone.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Whether you're a student trying to get to school, a professional commuting to work, or a tourist exploring the beautiful Philippines, Lakbay is your reliable companion for every journey.
              </motion.p>
              
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-['Montserrat'] font-bold mb-2">Our Vision</h3>
                <p>
                  To become the best app for commuter support not only in the Philippines but around the world by offering accurate, user-friendly, and dependable transportation information.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <motion.h3 
            className="text-2xl font-['Montserrat'] font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Roadmap
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-['Montserrat'] font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h4 className="text-lg font-['Montserrat'] font-bold mb-2">{item.title}</h4>
                    <p className="font-['Nunito']">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
