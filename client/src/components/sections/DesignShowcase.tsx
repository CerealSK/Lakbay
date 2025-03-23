
import { AspectRatio } from "@/components/ui/aspect-ratio";

const designFeatures = [
  {
    title: "Professional Theme",
    description: "Clean and modern interface with a professional color scheme"
  },
  {
    title: "Responsive Layout",
    description: "Perfectly adapts to any screen size or device"
  },
  {
    title: "Custom Components",
    description: "Carefully crafted UI components for a consistent experience"
  },
  {
    title: "Accessibility",
    description: "Built with accessibility in mind using semantic HTML and ARIA"
  }
];

export const DesignShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Thoughtful Design</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {designFeatures.map((feature, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <AspectRatio ratio={16/9}>
              <img 
                src="https://cdn.discordapp.com/attachments/753898307549528105/1353308478462099567/image.png?ex=67e12e3c&is=67dfdcbc&hm=d83f9d1615066d3fdb622a7284c5732a36d4aff5e5db80bde3c04fa576c0eccc" 
                alt="App Interface" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};
