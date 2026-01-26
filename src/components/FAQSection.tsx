import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most projects take 2-4 weeks depending on complexity. Simple animations can be delivered within a week, while comprehensive brand motion packages may take longer."
  },
  {
    question: "What file formats do you deliver?",
    answer: "I deliver in all major formats including MP4, MOV, GIF, and Lottie animations for web. Source files can also be provided upon request."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, all projects include 2 rounds of revisions to ensure the final output perfectly matches your vision."
  },
  {
    question: "How do we get started?",
    answer: "Simply reach out through the contact form or email. We'll schedule a call to discuss your project goals, timeline, and budget."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Header */}
          <div>
            <span className="text-xs font-body text-primary tracking-[0.3em] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Common
              <br />
              Questions
            </h2>
            <p className="text-base font-body text-muted-foreground max-w-md">
              Have a question not listed here? Feel free to reach out and I'll get back to you promptly.
            </p>
          </div>

          {/* Right - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-border pb-4"
                >
                  <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary py-2 hover:no-underline text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm md:text-base pt-2 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;