import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Route, 
  Calculator, 
  Bus, 
  MapPin, 
  Bell, 
  Bookmark 
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Route,
    title: "Route Planning",
    description: "Find the best routes for your commute with detailed step-by-step navigation and transportation options."
  },
  {
    icon: Calculator,
    title: "Cost Calculator",
    description: "Know exactly how much your trip will cost before you leave with our accurate fare estimation system."
  },
  {
    icon: Bus,
    title: "Transport Options",
    description: "Compare different transportation modes including jeepneys, buses, tricycles, and more to find your perfect ride."
  },
  {
    icon: MapPin,
    title: "Offline Maps",
    description: "Access maps and saved routes even without internet connection for seamless navigation anywhere."
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Receive notifications about traffic conditions, route changes, and transportation updates in real-time."
  },
  {
    icon: Bookmark,
    title: "Saved Locations",
    description: "Save your favorite and frequent destinations for quick access to routes and transportation options."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Montserrat'] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            App Features
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg font-['Nunito']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how Lakbay can transform your daily commute and travel experiences
            throughout Cavite and soon, the entire Philippines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-[#FFF5F5] to-white h-full hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-['Montserrat'] font-bold mb-2">{feature.title}</h3>
                  <p className="font-['Nunito']">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};