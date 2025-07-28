
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import OutcomeSection from "@/components/OutcomeSection";
import ProductSection from "@/components/ProductSection";
import FAQSection from "@/components/FAQSection";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainSection />
      <OutcomeSection />
      <ProductSection />
      <div id="faq">
        <FAQSection />
      </div>
      <div id="waitlist">
        <WaitlistForm />
      </div>
    </div>
  );
};

export default Index;
