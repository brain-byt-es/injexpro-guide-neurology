
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector('#waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-medical-grey-light z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="font-source-serif text-xl font-bold text-medical-blue">
              InjexPro Therapeutics
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-inter text-medical-grey-dark hover:text-medical-blue transition-colors">
              Features
            </a>
            <a href="#faq" className="font-inter text-medical-grey-dark hover:text-medical-blue transition-colors">
              FAQ
            </a>
            <Button 
              onClick={scrollToWaitlist}
              className="bg-medical-green hover:bg-medical-green-dark text-white font-inter"
            >
              Join Waitlist
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button 
              onClick={scrollToWaitlist}
              size="sm"
              className="bg-medical-green hover:bg-medical-green-dark text-white font-inter"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
