
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-medical-grey-light min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-source-serif text-5xl lg:text-6xl font-bold text-medical-blue leading-tight">
                Complex Therapeutic Injections, Simplified.
              </h1>
              <p className="font-inter text-xl text-medical-grey-dark leading-relaxed">
                For neurologists and trainees managing spasticity, dystonia, and chronic migraine, 
                InjexPro Therapeutics is the clinical co-pilot that bridges the gap between textbook 
                diagrams and real-world patient care.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-medical-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-medical-blue">Improve Patient Outcomes</h3>
                  <p className="font-inter text-medical-grey-dark">Access standardized, evidence-based injection patterns for dozens of therapeutic indications.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-medical-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-medical-blue">Inject with Precision</h3>
                  <p className="font-inter text-medical-grey-dark">Visualize target muscles, review dosages, and navigate complex anatomy with our interactive 3D models.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-medical-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-medical-blue">Manage Complications</h3>
                  <p className="font-inter text-medical-grey-dark">Get immediate, step-by-step guidance on identifying and managing adverse events.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-medical-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-medical-blue">Streamline Your Workflow</h3>
                  <p className="font-inter text-medical-grey-dark">Reduce pre-procedure research time and document your plans efficiently.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-medical-green hover:bg-medical-green-dark text-white px-8 py-4 font-inter font-semibold text-lg"
              >
                Join the Waitlist for Founder's Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div>
                <a href="#features" className="font-inter text-medical-blue hover:text-medical-blue-light underline">
                  View the Feature Overview
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 border border-medical-grey-light">
              <div className="aspect-video bg-medical-grey-light rounded-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="font-source-serif text-lg font-semibold text-medical-blue mb-2">
                    Anatomical Visualization
                  </h3>
                  <p className="font-inter text-medical-grey text-sm">
                    Interactive 3D models showing injection sites for cervical dystonia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
