import { Link } from "wouter";
import { LakbayLogo } from "../LakbayLogo";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const currentYear = new Date().getFullYear();

interface FooterLinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const linkGroups: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Features", href: "#features" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Report a Bug", href: "#" }
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" }
];

export const Footer = () => {
  // Handle smooth scrolling for anchor links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="bg-white inline-block p-2 rounded-md mb-4">
              <LakbayLogo withTagline={false} />
            </div>
            <p className="max-w-xs">
              Your reliable transportation guide for commuting in the Philippines. Gabay sa bawat byahe.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-400 hover:text-primary transition"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="font-['Montserrat'] font-bold text-lg mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        onClick={handleNavLinkClick}
                        className="text-gray-400 hover:text-primary transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center md:text-left">
          <p className="text-gray-500">
            &copy; {currentYear} Lakbay App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
