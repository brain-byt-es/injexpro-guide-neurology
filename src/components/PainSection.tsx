
import { Search, BookOpen, Clock } from "lucide-react";

const PainSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-source-serif text-4xl font-bold text-medical-blue mb-4">
            The Gap Between the Textbook and the Treatment Room
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Search className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h3 className="font-source-serif text-xl font-semibold text-medical-blue mb-4">
                Clinical Uncertainty
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                You've read the literature, but localizing the correct forearm flexors for post-stroke 
                spasticity under pressure is a different challenge entirely. You worry about hitting a 
                nerve or missing the target muscle, compromising the patient's functional outcome.
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-source-serif text-xl font-semibold text-medical-blue mb-4">
                Inadequate Training
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                Residency provided the foundation, but for the vast number of therapeutic applications, 
                you're often left relying on static, 2D textbook diagrams and years of slow, 
                trial-and-error experience to build mastery.
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h3 className="font-source-serif text-xl font-semibold text-medical-blue mb-4">
                Workflow Inefficiency
              </h3>
              <p className="font-inter text-medical-grey-dark leading-relaxed">
                Before each complex procedure, you spend valuable time cross-referencing journals, 
                converting dosages between BoNT brands, and mentally rehearsing the plan—time that 
                could be better spent on patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
