import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What areas does Lakbay currently cover?",
    answer: "Lakbay currently provides comprehensive transportation information for Cavite province. We are actively working to expand our coverage to Metro Manila and eventually the entire Philippines."
  },
  {
    id: "faq-2",
    question: "How accurate are the transportation costs in the app?",
    answer: "We strive to maintain the most up-to-date fare information. Our team regularly updates the app with the latest fare matrices from transportation regulatory bodies. However, please note that actual fares may vary slightly due to promotions or recent changes not yet reflected in our system."
  },
  {
    id: "faq-3",
    question: "What types of transportation does Lakbay include?",
    answer: "Lakbay currently includes jeepneys and tricycles. We're continuously working to add more transportation options in the future to provide comprehensive coverage."
  },
  {
    id: "faq-4",
    question: "Does Lakbay work offline?",
    answer: "Yes, Lakbay has offline functionality that allows you to access previously saved routes and maps without an internet connection. However, real-time updates and new route calculations require an internet connection."
  },
  {
    id: "faq-5",
    question: "How often is the app updated?",
    answer: "We release updates regularly to improve functionality and add new features. Transportation information is updated as soon as we receive notifications of changes from official sources. You can enable automatic updates in your app store settings to ensure you always have the latest version."
  }
];

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Montserrat'] font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg font-['Nunito']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about the Lakbay app
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-6"
            value={openItem || undefined}
            onValueChange={(value) => setOpenItem(value)}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden data-[state=open]:bg-white"
                >
                  <AccordionTrigger
                    className="p-4 bg-gray-50 hover:bg-gray-100 font-['Montserrat'] font-bold text-left px-4"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-white">
                    <p className="font-['Nunito']">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
