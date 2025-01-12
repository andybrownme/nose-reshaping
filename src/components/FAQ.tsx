import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the difference between open and closed rhinoplasty?",
    answer: "Open rhinoplasty involves a small incision on the columella (tissue between nostrils), providing full visibility of nasal structures. Closed rhinoplasty is performed entirely through the nostrils, leaving no visible scars. The choice depends on your specific needs and desired outcomes."
  },
  {
    question: "Who is a good candidate for revision rhinoplasty?",
    answer: "Candidates for revision rhinoplasty typically include patients who are unhappy with the results of their previous surgery, experience breathing difficulties, or have developed complications. A thorough evaluation is necessary to determine suitability."
  },
  {
    question: "How long is the recovery process?",
    answer: "Initial recovery takes about 1-2 weeks, with most patients returning to work after 7-10 days. Full results develop over 6-12 months as swelling gradually subsides. The exact timeline varies by individual and procedure type."
  },
  {
    question: "Will the procedure leave scars?",
    answer: "Closed rhinoplasty leaves no visible external scars. Open rhinoplasty results in a tiny scar on the columella, which typically becomes nearly invisible once healed. Our techniques minimize scarring for optimal aesthetic results."
  },
  {
    question: "How much does rhinoplasty cost?",
    answer: "The cost varies based on procedure complexity, technique used, and individual needs. During your consultation, we'll provide a detailed cost breakdown. We offer financing options to help make treatment accessible."
  },
  {
    question: "Is rhinoplasty covered by insurance?",
    answer: "Insurance may cover rhinoplasty if it's performed to correct breathing problems or repair injury. Purely cosmetic procedures are typically not covered. We can help you understand your coverage and payment options."
  }
];

export const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about rhinoplasty procedures
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};