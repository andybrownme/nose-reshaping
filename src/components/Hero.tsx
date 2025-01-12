import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide fade-in" style={{ animationDelay: "0.2s" }}>
            Transform With Confidence
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight fade-in" style={{ animationDelay: "0.4s" }}>
            Refine Your Profile, <br />
            Redefine Your Confidence
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in" style={{ animationDelay: "0.6s" }}>
            Expert open, closed, and revision rhinoplasty tailored to your needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in" style={{ animationDelay: "0.8s" }}>
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
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>
    </section>
  );
};