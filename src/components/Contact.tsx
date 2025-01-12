import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll be in touch soon!");
  };

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Schedule your free consultation or ask us any questions
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input id="phone" type="tel" placeholder="Your phone number" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your interests or concerns"
                className="min-h-[120px]"
                required
              />
            </div>
            
            <Button type="submit" className="w-full hover-scale">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};