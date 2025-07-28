
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What clinical sources are used for the data?",
      answer: "InjexPro Therapeutics is built upon peer-reviewed clinical literature from leading neurology and movement disorder journals, anatomical atlases, and evidence-based treatment guidelines from professional societies including the American Academy of Neurology and Movement Disorder Society."
    },
    {
      question: "Is the platform HIPAA-compliant?",
      answer: "Yes, InjexPro Therapeutics is designed with healthcare privacy and security as a top priority. The platform is fully HIPAA-compliant and employs enterprise-grade encryption and security measures to protect patient information and clinical data."
    },
    {
      question: "Is this intended to provide CME credits?",
      answer: "While InjexPro Therapeutics serves as a comprehensive educational resource, we are currently evaluating partnerships with accredited CME providers to offer continuing medical education credits for platform usage and training modules."
    },
    {
      question: "How do you handle different botulinum toxin formulations (e.g., Botox, Dysport)?",
      answer: "The platform includes conversion calculators and dosage guidelines for all major botulinum toxin formulations including onabotulinumtoxinA (Botox), abobotulinumtoxinA (Dysport), incobotulinumtoxinA (Xeomin), and rimabotulinumtoxinB (Myobloc), with real-time unit conversion capabilities."
    },
    {
      question: "Can this be integrated with our clinic's EMR system?",
      answer: "We are developing EMR integration capabilities with major healthcare systems. Our API will allow seamless integration with popular EMR platforms, enabling direct documentation and treatment plan exports to your existing workflow."
    },
    {
      question: "Who is on the clinical advisory board?",
      answer: "Our clinical advisory board consists of leading neurologists, movement disorder specialists, and physiatrists from major academic medical centers. Board members include department chairs and fellowship directors with extensive experience in therapeutic botulinum toxin applications."
    }
  ];

  return (
    <section className="py-20 bg-medical-grey-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-source-serif text-4xl font-bold text-medical-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-xl text-medical-grey-dark">
            Get answers to common questions about InjexPro Therapeutics
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-inter font-semibold text-medical-blue text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-medical-grey-dark leading-relaxed">
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
