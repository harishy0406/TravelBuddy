
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-travel-navy py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
              About TravelBuddy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're on a mission to revolutionize travel planning with AI-powered personalized itineraries 
              that take the stress out of vacation planning.
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-travel-navy font-poppins text-center">Our Story</h2>
              
              <div className="prose prose-lg mx-auto">
                <p>
                  TravelBuddy was born from a simple realization: planning the perfect trip is time-consuming 
                  and often overwhelming. Our founders, avid travelers themselves, wanted to create a solution 
                  that would make customized travel planning accessible to everyone.
                </p>
                
                <p>
                  Launched in 2025, we've combined advanced AI technology with travel expertise to build a 
                  platform that creates personalized itineraries tailored to your unique preferences, budget, 
                  and travel style.
                </p>
                
                <p>
                  Today, TravelBuddy helps thousands of travelers explore the world with custom-crafted 
                  travel plans that take the guesswork out of trip planning, allowing you to focus on creating 
                  memories that last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-travel-navy font-poppins text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-travel-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-travel-teal h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-travel-navy">Exploration</h3>
                <p className="text-gray-600">
                  We believe travel opens minds and creates lasting connections. We're committed to helping you discover 
                  the world in ways that are meaningful to you.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-travel-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-travel-teal h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-travel-navy">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push the boundaries of what's possible with AI and travel technology to create 
                  better experiences for our users.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-travel-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-travel-teal h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-travel-navy">Personalization</h3>
                <p className="text-gray-600">
                  We understand everyone's travel style is unique. Our commitment is to create itineraries as individual as you are.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-travel-navy font-poppins text-center">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "M Harish Gautham",
                  title: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Azmil Ashruff",
                  title: "CTO",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
                },
                {
                  name: "Thomas",
                  title: "Head of Travel",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
                },
               
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-travel-navy">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-travel-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Ready to Experience TravelBuddy?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you create the perfect itinerary for your next adventure.
            </p>
            <Link to="/plan-trip">
              <Button size="lg" className="bg-white text-travel-teal hover:bg-gray-100">
                Plan Your Trip Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
