import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <img 
          src="/lovable-uploads/cc471882-55a8-4d23-8e58-41fcb2306403.png"
          alt="Artistic nose profile illustration"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-secondary/20" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide animate-fade-down" 
            style={{ animationDelay: "0.2s" }}
          >
            Transform With Confidence
          </span>
          
          <h1 
            className="text-4xl md:text-6xl font-bold leading-tight animate-fade-up" 
            style={{ animationDelay: "0.4s" }}
          >
            Refine Your Profile, <br />
            Redefine Your Confidence
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" 
            style={{ animationDelay: "0.6s" }}
          >
            Expert open, closed, and revision rhinoplasty tailored to your needs
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" 
            style={{ animationDelay: "0.8s" }}
          >
            <Button size="lg" className="hover-scale group">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};