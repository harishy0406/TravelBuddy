
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ItineraryCard from "@/components/ItineraryCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Map, 
  Download, 
  Share2, 
  Printer, 
  Edit, 
  BadgeDollarSign, 
  CalendarCheck, 
  MapPin,
  Utensils,
  Bed,
  BarChart3,
  Route,
  Flag,
  Compass
} from "lucide-react";
import type { TripFormData } from "@/components/TripForm";
import type { ItineraryDay } from "@/components/ItineraryCard";
import { mockItineraryData } from "@/services/travelApi";

const Itinerary = () => {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState<number>(1);
  const [itineraryData, setItineraryData] = useState<{
    destination: string;
    tripDuration: number;
    totalCost: string;
    currency: string;
    bestTimeToVisit: string;
    travelTips: string[];
    statistics?: {
      totalDistance: string;
      placesToVisit: number;
      activitiesPlanned: number;
      localCuisines: number;
    };
    days: ItineraryDay[];
  } | null>(null);
  
  const [formData, setFormData] = useState<TripFormData | null>(null);
  
  useEffect(() => {
    // In a real app, we would get this from an API
    const savedFormData = localStorage.getItem("tripFormData");
    const savedItineraryData = localStorage.getItem("itineraryData");
    
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    } else {
      // If no form data, redirect back to plan trip page
      navigate("/plan-trip");
    }
    
    if (savedItineraryData) {
      setItineraryData(JSON.parse(savedItineraryData));
    } else {
      // Use mock data for demo purposes
      setItineraryData(mockItineraryData);
    }
  }, [navigate]);
  
  const handleModifyTrip = () => {
    navigate("/plan-trip", { state: { formData } });
  };
  
  if (!itineraryData || !formData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading itinerary...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-travel-navy font-poppins mb-2">
                  Your Trip to {itineraryData.destination}
                </h1>
                <p className="text-gray-600">
                  {itineraryData.tripDuration} days • {formData.startingPoint} to {formData.destination}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="mr-1" size={16} />
                  Save PDF
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Share2 className="mr-1" size={16} />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Printer className="mr-1" size={16} />
                  Print
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-travel-teal hover:bg-travel-teal/90 text-white flex items-center"
                  onClick={handleModifyTrip}
                >
                  <Edit className="mr-1" size={16} />
                  Modify Trip
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="itinerary" className="data-[state=active]:bg-travel-teal data-[state=active]:text-white">
                  <CalendarCheck className="mr-2" size={18} />
                  Day-by-Day Itinerary
                </TabsTrigger>
                <TabsTrigger value="summary" className="data-[state=active]:bg-travel-teal data-[state=active]:text-white">
                  <BadgeDollarSign className="mr-2" size={18} />
                  Trip Summary
                </TabsTrigger>
                <TabsTrigger value="map" className="data-[state=active]:bg-travel-teal data-[state=active]:text-white">
                  <MapPin className="mr-2" size={18} />
                  Map View
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="itinerary" className="space-y-6">
                {itineraryData.days.map((day, index) => (
                  <ItineraryCard
                    key={index}
                    dayData={day}
                    isFirst={index === 0}
                    isActive={day.day === activeDay}
                    onClick={() => setActiveDay(day.day)}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="summary">
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-travel-navy">Trip Overview</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-md p-4 shadow-sm">
                        <h3 className="font-medium text-gray-700 mb-2">Total Estimated Cost</h3>
                        <p className="text-2xl font-bold text-travel-teal">
                          {itineraryData.currency}{itineraryData.totalCost}
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-md p-4 shadow-sm">
                        <h3 className="font-medium text-gray-700 mb-2">Best Time to Visit</h3>
                        <p className="text-gray-600">{itineraryData.bestTimeToVisit}</p>
                      </div>
                      
                      <div className="bg-white rounded-md p-4 shadow-sm">
                        <h3 className="font-medium text-gray-700 mb-2">Trip Duration</h3>
                        <p className="text-gray-600">{itineraryData.tripDuration} days in {itineraryData.destination}</p>
                      </div>
                    </div>
                  </div>
                  
                  {itineraryData.statistics && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h2 className="text-xl font-semibold mb-4 text-travel-navy flex items-center">
                        <BarChart3 size={20} className="mr-2 text-travel-teal" />
                        Trip Statistics
                      </h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded-md p-4 shadow-sm flex flex-col items-center text-center">
                          <Route className="text-travel-teal mb-2" size={28} />
                          <h3 className="font-medium text-gray-700 mb-1">Total Distance</h3>
                          <p className="text-lg font-semibold">{itineraryData.statistics.totalDistance}</p>
                        </div>
                        
                        <div className="bg-white rounded-md p-4 shadow-sm flex flex-col items-center text-center">
                          <MapPin className="text-travel-teal mb-2" size={28} />
                          <h3 className="font-medium text-gray-700 mb-1">Places to Visit</h3>
                          <p className="text-lg font-semibold">{itineraryData.statistics.placesToVisit}</p>
                        </div>
                        
                        <div className="bg-white rounded-md p-4 shadow-sm flex flex-col items-center text-center">
                          <Compass className="text-travel-teal mb-2" size={28} />
                          <h3 className="font-medium text-gray-700 mb-1">Activities Planned</h3>
                          <p className="text-lg font-semibold">{itineraryData.statistics.activitiesPlanned}</p>
                        </div>
                        
                        <div className="bg-white rounded-md p-4 shadow-sm flex flex-col items-center text-center">
                          <Utensils className="text-travel-teal mb-2" size={28} />
                          <h3 className="font-medium text-gray-700 mb-1">Local Cuisines</h3>
                          <p className="text-lg font-semibold">{itineraryData.statistics.localCuisines}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-travel-navy">Travel Tips</h2>
                    <ul className="space-y-3 list-disc pl-5">
                      {itineraryData.travelTips.map((tip, index) => (
                        <li key={index} className="text-gray-600">{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-travel-teal/10 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-travel-navy">How's Your Itinerary?</h2>
                    <p className="mb-4">
                      Not happy with some aspects of your trip plan? You can modify your preferences and generate a new itinerary.
                    </p>
                    <Button 
                      onClick={handleModifyTrip}
                      className="bg-travel-teal hover:bg-travel-teal/90 text-white"
                    >
                      <Edit className="mr-2" size={16} />
                      Modify My Trip
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="map">
                <div className="text-center py-16 border border-gray-200 rounded-lg">
                  <Map className="mx-auto text-travel-teal mb-4" size={48} />
                  <h2 className="text-xl font-semibold mb-2 text-travel-navy">Map View Coming Soon</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We're working on an interactive map feature that will show all your destinations in a visual format.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Itinerary;
