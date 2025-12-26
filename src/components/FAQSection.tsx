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
    answer: "I deliver in all major formats including MP4, MOV, GIF, and Lottie animations. I can also provide source files upon request."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, all projects include 2 rounds of revisions. Additional revisions can be arranged at an hourly rate."
  },
  {
    question: "How do we get started?",
    answer: "Simply book a free consultation call where we'll discuss your project goals, timeline, and budget. From there, I'll provide a detailed proposal."
  },
  {
    question: "What industries do you work with?",
    answer: "I work across various industries including tech, fashion, entertainment, and startups. My versatile style adapts to different brand aesthetics."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-body text-muted-foreground tracking-[0.3em] uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Common Questions
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
