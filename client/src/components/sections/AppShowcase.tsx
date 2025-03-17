import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface ShowcaseItem {
  image: string;
  title: string;
  description: string;
}

interface BenefitItem {
  title: string;
  description: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    image: "https://miro.medium.com/v2/resize:fit:1200/1*rDQebCdztGr8y3Kqh0CGVA.png",
    title: "Cost Calculation",
    description: "Know exactly how much your trip will cost"
  },
  {
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Transport Options",
    description: "Compare different modes of transportation"
  }
];

const benefits: BenefitItem[] = [
  {
    title: "Accurate Cost Estimation",
    description: "Get precise fare calculations for your entire journey."
  },
  {
    title: "Local Transportation Focus",
    description: "Specifically designed for Philippine commuting options like jeepneys, tricycles, and buses."
  },
  {
    title: "Growing Coverage",
    description: "Currently available in Cavite with plans to expand throughout the Philippines."
  },
  {
    title: "User-Friendly Interface",
    description: "Simple, intuitive design that's easy to navigate even for first-time users."
  }
];

export const AppShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    let newIndex = index;
    if (newIndex < 0) newIndex = showcaseItems.length - 1;
    if (newIndex >= showcaseItems.length) newIndex = 0;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Auto-rotate slides with reset on manual navigation
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    };

    startTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Montserrat'] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            See Lakbay in Action
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg font-['Nunito']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore how the app helps you navigate transportation in Cavite
          </motion.p>
        </div>

        <div className="relative mb-16">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {showcaseItems.map((item, index) => (
                <div key={index} className="min-w-full flex justify-center px-4">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="rounded-xl shadow-lg max-h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-xl">
                      <h3 className="font-['Montserrat'] font-bold">{item.title}</h3>
                      <p className="font-['Nunito']">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button 
            onClick={prevSlide}
            size="icon"
            variant="secondary"
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full shadow-md z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </Button>
          <Button 
            onClick={nextSlide}
            size="icon"
            variant="secondary"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full shadow-md z-10"
            aria-label="Next slide"
          >
            <ChevronRight />
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {showcaseItems.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-['Montserrat'] font-bold mb-4 text-center">Why Choose Lakbay?</h3>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 bg-primary/20 rounded-full p-2 mr-4">
                  <Check className="text-primary h-4 w-4" />
                </div>
                <p className="font-['Nunito']">
                  <strong>{benefit.title}:</strong> {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};