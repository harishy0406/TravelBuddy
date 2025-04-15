
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingState from "@/components/LoadingState";
import { generateItinerary } from "@/services/travelApi";
import type { TripFormData } from "@/components/TripForm";

const Loading = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData as TripFormData;
  
  useEffect(() => {
    if (!formData) {
      // If no form data, redirect back to plan trip page
      navigate("/plan-trip");
      return;
    }
    
    const timer = setTimeout(() => {
      // In a real app, we would use the API to generate the itinerary
      generateItinerary(formData)
        .then((itineraryData) => {
          // Save itinerary data to localStorage for demo purposes
          localStorage.setItem("itineraryData", JSON.stringify(itineraryData));
          // Navigate to the itinerary page
          navigate("/itinerary");
        })
        .catch((error) => {
          console.error("Error generating itinerary:", error);
          // In case of error, still navigate to itinerary with mock data
          navigate("/itinerary");
        });
    }, 3000); // 3 second delay to simulate API call
    
    return () => clearTimeout(timer);
  }, [formData, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <LoadingState />
      </div>
      
      <Footer />
    </div>
  );
};

export default Loading;
