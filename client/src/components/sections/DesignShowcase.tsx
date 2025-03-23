
import { AspectRatio } from "@/components/ui/aspect-ratio";

const designFeatures = [
  {
    title: "Intuitive Navigation",
    description: "Easy-to-use interface with clear route planning"
  },
  {
    title: "Interactive Map",
    description: "Real-time visualization of your travel routes"
  },
  {
    title: "Smart Route Planning",
    description: "Efficient pathfinding with multiple transport options"
  },
  {
    title: "Location Services",
    description: "Precise location tracking and destination search"
  }
];

export const DesignShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">App Design</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience seamless navigation with our thoughtfully designed interface that puts the power of local transportation at your fingertips.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-xl shadow-2xl overflow-hidden order-2 lg:order-1">
            <AspectRatio ratio={16/9}>
              <img 
                src="https://cdn.discordapp.com/attachments/753898307549528105/1353310192338735155/image.png?ex=67e12fd5&is=67dfde55&hm=615f60377bf051caf4503ea1dc0073a591888a2aaedb65a91cddb487404daf18" 
                alt="Lakbay App Interface" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {designFeatures.map((feature, index) => (
                <div key={index} className="border border-border rounded-lg p-4 bg-background/50 backdrop-blur-sm hover:bg-accent/10 transition-colors">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
