import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Open Rhinoplasty",
    description: "Comprehensive reshaping with precision and detail",
    features: [
      "Maximum surgical visibility",
      "Ideal for complex cases",
      "Natural-looking results",
      "Long-lasting outcomes"
    ]
  },
  {
    title: "Closed Rhinoplasty",
    description: "Minimal incisions for subtle yet effective enhancements",
    features: [
      "No visible scarring",
      "Faster recovery time",
      "Less post-operative swelling",
      "Preserved nasal structure"
    ]
  },
  {
    title: "Revision Rhinoplasty",
    description: "Correct or refine the results of a previous surgery",
    features: [
      "Advanced surgical techniques",
      "Customized approach",
      "Improved functionality",
      "Enhanced aesthetics"
    ]
  }
];

export const Services = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground">
            Discover our range of specialized rhinoplasty procedures
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="glass-card hover-scale">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};