
import { Plane } from "lucide-react";

interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({ 
  message = "Our AI model is generating the perfect plan for you... ✈️"
}: LoadingStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <div className="text-center mb-8">
        <Plane 
          className="text-travel-teal animate-plane-fly mx-auto mb-6" 
          size={60}
        />
        
        <h2 className="font-poppins text-2xl font-medium text-travel-navy mb-3">
          Creating Your Dream Itinerary
        </h2>
        
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          {message}
        </p>
      </div>
      
      <div className="w-full max-w-md mx-auto">
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-travel-teal rounded-full animate-pulse origin-left" 
               style={{ 
                 width: "100%",
                 animation: "pulse 2s infinite"
               }}>
          </div>
        </div>
        
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>Finding best options</span>
          <span>Personalizing itinerary</span>
        </div>
      </div>
      
      <div className="mt-8 text-center px-4">
        <p className="text-gray-500 italic">
          This usually takes 3-5 seconds, but it's worth the wait!
        </p>
      </div>
    </div>
  );
};

export default LoadingState;
