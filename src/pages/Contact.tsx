
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-travel-navy font-poppins text-center">
              Contact Us
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Mail className="mx-auto mb-4 text-travel-teal" size={28} />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:info@travelbuddy.com" className="text-gray-600 hover:text-travel-teal">
                  harivelgm76@gmail.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Phone className="mx-auto mb-4 text-travel-teal" size={28} />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href="tel:+11234567890" className="text-gray-600 hover:text-travel-teal">
                  +91 7889289504
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <MapPin className="mx-auto mb-4 text-travel-teal" size={28} />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  VIT Vellore,Tamil Nadu
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-travel-navy">Send Us a Message</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions about our service? Want to suggest a new feature? We'd love to hear from you.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-travel-teal hover:bg-travel-teal/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
                
                <div className="bg-travel-teal h-full flex flex-col justify-center p-8 text-white">
                  <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-1">How does TravelBuddy work?</h3>
                      <p className="text-white/80 text-sm">
                        We use AI to analyze your preferences and create personalized travel itineraries just for you.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">Is TravelBuddy free to use?</h3>
                      <p className="text-white/80 text-sm">
                        Yes! Our basic itinerary generation service is completely free.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">Can I modify my itinerary?</h3>
                      <p className="text-white/80 text-sm">
                        Absolutely! You can regenerate your itinerary as many times as you want with different preferences.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">How accurate are the recommendations?</h3>
                      <p className="text-white/80 text-sm">
                        Our AI uses up-to-date information from various sources to provide the best recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
