
import { Target, Shield, Users } from "lucide-react";

const OutcomeSection = () => {
  return (
    <section className="py-20 bg-medical-grey-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-source-serif text-4xl font-bold text-medical-blue mb-4">
            Treat Every Patient with the Confidence of a Seasoned Expert
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center space-y-6">
            <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-medical-green" />
            </div>
            <div>
              <h3 className="font-source-serif text-xl font-semibold text-medical-blue mb-4">
                Enhanced Efficacy
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                You perform every procedure—from routine migraines to complex cervical dystonia—with 
                a clear, evidence-backed plan, leading to better, more consistent patient outcomes.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center space-y-6">
            <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-medical-green" />
            </div>
            <div>
              <h3 className="font-source-serif text-xl font-semibold text-medical-blue mb-4">
                Unwavering Confidence
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                You eliminate the guesswork and uncertainty. You walk into every treatment room with 
                an interactive, peer-reviewed guide, allowing you to focus completely on your patient 
                and your technique.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center space-y-6">
            <div className="w-16 h-16 bg-medical-green/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-medical-green" />
            </div>
            <div>
              <h3 className="font-source-serif text-xl font-semibold text-medical-blue mb-4">
                Teaching & Standardization
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                You have a powerful tool to train residents and fellows, ensuring your entire team 
                operates with the same high standard of care and evidence-based methodology.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="font-inter text-lg text-medical-grey-dark leading-relaxed italic">
              "What if you could augment your clinical expertise with an on-demand digital tool that 
              visualizes every injection and validates every decision? It's time to move beyond static 
              references to a dynamic, interactive standard of care."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
