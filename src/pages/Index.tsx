import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, MapPin, Calendar, Map, BadgeDollarSign, Sparkles, Utensils, Bed } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section flex-grow bg-hero-pattern bg-cover bg-center relative">
        <div className="container mx-auto px-4 py-24 md:py-36 flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins max-w-4xl">
            Your AI Travel Companion for Perfect Itineraries
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Let our AI create personalized travel plans tailored to your preferences.
            Just tell us where you want to go, and we'll handle the rest.
          </p>
          
          <Link to="/plan-trip">
            <Button size="lg" className="bg-travel-teal hover:bg-travel-teal/90 text-white">
              <Sparkles className="mr-2 h-5 w-5" /> Plan Your Trip Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-travel-navy font-poppins">How TravelBuddy Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creating your perfect travel itinerary has never been easier.
              Our AI-powered platform does all the heavy lifting so you can focus on enjoying your trip.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-travel-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-travel-teal h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travel-navy">1. Choose Your Destination</h3>
              <p className="text-gray-600">
                Tell us where you're going and for how long. The more specific, the better your itinerary will be.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-travel-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeDollarSign className="text-travel-teal h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travel-navy">2. Set Your Preferences</h3>
              <p className="text-gray-600">
                Let us know your budget, accommodation style, activity interests, and food preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-travel-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="text-travel-teal h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-travel-navy">3. Get Your Itinerary</h3>
              <p className="text-gray-600">
                Our AI creates a day-by-day plan with activities, accommodations, and food recommendations just for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-travel-navy font-poppins">Why Choose TravelBuddy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform offers everything you need for a perfect travel experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Sparkles className="text-travel-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-travel-navy">AI-Powered Recommendations</h3>
              <p className="text-gray-600">
                Our smart algorithm suggests activities and places based on your unique preferences and travel style.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Calendar className="text-travel-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-travel-navy">Day-by-Day Itinerary</h3>
              <p className="text-gray-600">
                Get a detailed schedule for each day of your trip, perfectly balanced with activities and rest time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <BadgeDollarSign className="text-travel-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-travel-navy">Budget-Friendly Options</h3>
              <p className="text-gray-600">
                We suggest accommodation and activities that align with your specified budget range.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Utensils className="text-travel-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-travel-navy">Food Recommendations</h3>
              <p className="text-gray-600">
                Discover local restaurants and dishes that match your dietary preferences and tastes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Bed className="text-travel-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-travel-navy">Accommodation Suggestions</h3>
              <p className="text-gray-600">
                Find the perfect places to stay, from budget-friendly hostels to luxury resorts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Plane className="text-travel-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-travel-navy">Travel Tips</h3>
              <p className="text-gray-600">
                Get insider advice for each destination, including best times to visit and local customs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-travel-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Ready to Plan Your Dream Vacation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our AI travel assistant create the perfect itinerary for your next adventure.
          </p>
          <Link to="/plan-trip">
            <Button size="lg" className="bg-white text-travel-teal hover:bg-gray-100">
              Plan Your Trip Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
