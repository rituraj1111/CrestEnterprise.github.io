import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQSection = () => {
  const faqs = [{
    question: "What sizes of thermal paper rolls do you offer?",
    answer: "We offer thermal paper rolls in 57mm and 79mm widths with various lengths including 13m, 15m, 20m, 25m for 57mm rolls and 30m, 40m, 50m for 79mm rolls. Custom sizes are also available on request."
  }, {
    question: "Are your thermal paper rolls BPA-free and eco-friendly?",
    answer: "Yes, all our thermal paper rolls are BPA-free and manufactured using eco-friendly processes. We are committed to environmental sustainability and provide chemical-free thermal paper that is safe for food contact applications."
  }, {
    question: "What is your minimum order quantity for bulk discounts?",
    answer: "We offer competitive bulk pricing starting from orders of 200 rolls. Our wholesale discount structure provides better rates for larger quantities. Contact us for custom pricing based on your specific requirements."
  }, {
    question: "How fast is your delivery across India?",
    answer: "We provide fast shipping across India with delivery within 2-3 business days for major cities like Mumbai, Pune, Delhi, Bangalore, Kolhapur, and Satara. Express delivery options are available for urgent orders."
  }, {
    question: "Can you provide custom printed thermal receipts?",
    answer: "Yes, we offer custom logo thermal receipts and pre-printed thermal paper rolls. We can print your company logo, contact information, or promotional messages on the thermal paper rolls as per your branding requirements."
  }, {
    question: "What industries do you serve with thermal paper rolls?",
    answer: "We serve diverse industries including retail stores, restaurants, hotels, petrol pumps, supermarkets, ATM services, medical facilities, logistics companies, and corporate offices across Maharashtra and India."
  }, {
    question: "Do you offer technical specifications and compatibility information?",
    answer: "Yes, we provide detailed technical specifications including GSM, core diameter, compatibility with specific printer models, and surface coating details. Our team can help you select the right thermal paper for your POS system."
  }, {
    question: "What quality certifications do you have?",
    answer: "We are ISO 9001:2015 certified and follow strict quality control processes. All our thermal paper rolls undergo rigorous testing for print quality, fade resistance, and durability to ensure superior performance."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
        </script>
      </div>
    </section>;
};
export default FAQSection;