
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    specialty: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist form submitted:", formData);
    
    toast({
      title: "Thank you for joining our waitlist!",
      description: "We'll be in touch soon with updates on early access.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      title: "",
      specialty: ""
    });
  };

  return (
    <section className="py-20 bg-medical-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-source-serif text-4xl font-bold mb-6">
            Elevate Your Practice. Enhance Patient Safety.
          </h2>
          <p className="font-inter text-xl leading-relaxed mb-8">
            Join a community of forward-thinking clinicians dedicated to a higher standard of care 
            in therapeutic injections. Be the first to access the tool that will define the future of the field.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-6">
            <h3 className="font-source-serif text-2xl font-semibold text-medical-blue text-center mb-6">
              Join the Waitlist
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-inter font-medium text-medical-blue">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="font-inter border-medical-grey-light focus:border-medical-blue"
                  placeholder="Dr. John Smith"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-inter font-medium text-medical-blue">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="font-inter border-medical-grey-light focus:border-medical-blue"
                  placeholder="john.smith@hospital.edu"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="font-inter font-medium text-medical-blue">
                  Professional Title *
                </Label>
                <Select value={formData.title} onValueChange={(value) => setFormData(prev => ({ ...prev, title: value }))}>
                  <SelectTrigger className="font-inter border-medical-grey-light">
                    <SelectValue placeholder="Select title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="md">MD</SelectItem>
                    <SelectItem value="do">DO</SelectItem>
                    <SelectItem value="np">NP</SelectItem>
                    <SelectItem value="pa">PA</SelectItem>
                    <SelectItem value="resident">Resident</SelectItem>
                    <SelectItem value="fellow">Fellow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialty" className="font-inter font-medium text-medical-blue">
                  Specialty *
                </Label>
                <Select value={formData.specialty} onValueChange={(value) => setFormData(prev => ({ ...prev, specialty: value }))}>
                  <SelectTrigger className="font-inter border-medical-grey-light">
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="movement-disorders">Movement Disorders</SelectItem>
                    <SelectItem value="pmr">PM&R</SelectItem>
                    <SelectItem value="pain-management">Pain Management</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-medical-green hover:bg-medical-green-dark text-white font-inter font-semibold text-lg py-4"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
