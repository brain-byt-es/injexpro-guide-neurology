
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckSquare, Play } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-source-serif text-4xl font-bold text-medical-blue mb-6">
            Introducing InjexPro Therapeutics: Your Interactive Guide to Clinical Excellence
          </h2>
          <p className="font-inter text-xl text-medical-grey-dark max-w-4xl mx-auto leading-relaxed">
            InjexPro Therapeutics is a peer-reviewed software platform built by a neurologist, 
            for neurologists. We've synthesized decades of clinical literature and anatomical 
            expertise into an intuitive guide that supports your decision-making and enhances patient safety.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto">
              <FileText className="h-8 w-8 text-medical-blue" />
            </div>
            <div>
              <h3 className="font-source-serif text-2xl font-semibold text-medical-blue mb-4">
                1. Plan
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                Select an indication (e.g., "Cervical Dystonia") and instantly see the recommended 
                muscles, injection patterns, and dosage ranges.
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto">
              <CheckSquare className="h-8 w-8 text-medical-blue" />
            </div>
            <div>
              <h3 className="font-source-serif text-2xl font-semibold text-medical-blue mb-4">
                2. Verify
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                Use our pre-injection workflow to confirm dosages, review key anatomical 
                considerations, and check complication protocols.
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto">
              <Play className="h-8 w-8 text-medical-blue" />
            </div>
            <div>
              <h3 className="font-source-serif text-2xl font-semibold text-medical-blue mb-4">
                3. Execute
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                Perform your procedure with the full backing of a trusted, evidence-based 
                clinical resource.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-medical-grey-light rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-medical-blue rounded-full flex-shrink-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-source-serif text-2xl font-semibold text-medical-blue mb-4">
                  Message from the Founder
                </h3>
                <p className="font-inter text-medical-grey-dark leading-relaxed italic">
                  "As a neurologist, I understand the immense responsibility we carry. I've seen firsthand 
                  the challenge of translating complex, 3D anatomical knowledge into precise injections for 
                  conditions like spasticity and dystonia. Textbooks and articles are essential, but they 
                  fall short in the treatment room. I built InjexPro Therapeutics to be the tool I wished 
                  I had during my own training—a dynamic, evidence-based co-pilot to enhance our skill, 
                  improve patient outcomes, and bring a new level of confidence to every procedure."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
