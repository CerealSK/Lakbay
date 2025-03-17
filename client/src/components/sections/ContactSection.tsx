import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "feedback", label: "Feedback" },
  { value: "partnership", label: "Partnership Opportunities" }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    info: "support@lakbayapp.ph"
  },
  {
    icon: MapPin,
    title: "Office",
    info: "Cavite, Philippines"
  },
  {
    icon: MessageCircle,
    title: "Social Media",
    social: true
  }
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" }
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    submitContactForm.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFF5F5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Montserrat'] font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            
            <motion.p 
              className="mb-8 font-['Nunito']"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions, suggestions, or feedback about Lakbay? We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
            </motion.p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <item.icon className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold">{item.title}</h3>
                    {item.social ? (
                      <div className="flex space-x-4 mt-2">
                        {socialLinks.map((social, idx) => (
                          <a 
                            key={idx} 
                            href={social.href} 
                            className="text-primary hover:text-primary/80 transition"
                            aria-label={social.label}
                          >
                            <social.icon className="text-xl" />
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="font-['Nunito']">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Montserrat'] font-medium">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="px-4 py-3 h-auto font-['Nunito']"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Montserrat'] font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email" 
                            {...field} 
                            className="px-4 py-3 h-auto font-['Nunito']"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Montserrat'] font-medium">Subject</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="px-4 py-3 h-auto font-['Nunito']">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subjectOptions.map((option) => (
                              <SelectItem 
                                key={option.value} 
                                value={option.value} 
                                className="font-['Nunito']"
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Montserrat'] font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5} 
                            {...field} 
                            className="px-4 py-3 font-['Nunito']"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-['Montserrat'] py-3 h-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
