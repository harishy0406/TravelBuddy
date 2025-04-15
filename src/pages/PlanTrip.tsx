
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripForm from "@/components/TripForm";

const PlanTrip = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-travel-navy font-poppins mb-4">
                Plan Your Perfect Trip
              </h1>
              <p className="text-gray-600">
                Fill out the form below and our AI will generate a personalized travel itinerary just for you.
              </p>
            </div>
            
            <TripForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlanTrip;
