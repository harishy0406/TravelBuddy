
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Utensils, MapPin, Clock, ChevronDown, ChevronUp, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ItineraryPlace {
  name: string;
  description: string;
  imageUrl?: string;
  duration?: string;
  address?: string;
  price?: string; // Added price field for places
}

export interface ItineraryMeal {
  name: string;
  description: string;
  cuisine: string;
  price: string;
  cost?: string; // Added cost field for actual price amount
  imageUrl?: string;
}

export interface ItineraryAccommodation {
  name: string;
  description: string;
  price: string;
  amenities: string[];
  imageUrl?: string;
}

export interface ItineraryDay {
  day: number;
  date?: string;
  places: ItineraryPlace[];
  meals: {
    breakfast?: ItineraryMeal;
    lunch?: ItineraryMeal;
    dinner?: ItineraryMeal;
  };
  accommodation: ItineraryAccommodation;
}

interface ItineraryCardProps {
  dayData: ItineraryDay;
  isFirst?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const ItineraryCard = ({ 
  dayData, 
  isFirst = false,
  isActive = false,
  onClick 
}: ItineraryCardProps) => {
  const [expanded, setExpanded] = useState(isFirst || isActive);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
    if (onClick) onClick();
  };
  
  return (
    <Card className={cn(
      "w-full transition-all duration-300 overflow-hidden", 
      expanded ? "max-h-[3000px]" : "max-h-[150px]",
      isActive ? "border-travel-teal shadow-lg ring-1 ring-travel-teal" : ""
    )}>
      <CardHeader 
        className="cursor-pointer flex flex-row justify-between items-center bg-slate-50/50 py-4"
        onClick={toggleExpand}
      >
        <div>
          <CardTitle className="font-poppins text-travel-navy">
            Day {dayData.day} {dayData.date ? `- ${dayData.date}` : ''}
          </CardTitle>
          <CardDescription>
            {dayData.places.length} Places to Visit • {Object.values(dayData.meals).filter(Boolean).length} Meals
          </CardDescription>
        </div>
        
        <Button variant="ghost" size="sm" className="ml-auto">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </Button>
      </CardHeader>
      
      <CardContent className={cn("pt-6 space-y-6", expanded ? "block" : "hidden")}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-poppins flex items-center text-travel-navy">
            <MapPin className="mr-2 text-travel-teal" size={20} />
            Places to Visit
          </h3>
          
          <div className="space-y-6">
            {dayData.places.map((place, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex flex-col md:flex-row gap-4">
                  {place.imageUrl && (
                    <div className="md:w-1/3">
                      <div className="relative h-48 rounded-md overflow-hidden">
                        <img 
                          src={place.imageUrl} 
                          alt={place.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className={place.imageUrl ? "md:w-2/3" : "w-full"}>
                    <div className="flex justify-between items-start">
                      <h4 className="text-base font-medium mb-1">{place.name}</h4>
                      {place.price && (
                        <span className="bg-travel-teal/10 text-travel-teal px-2 py-1 rounded text-sm flex items-center">
                          <IndianRupee size={14} className="mr-1" />
                          {place.price}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{place.description}</p>
                    
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      {place.duration && (
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {place.duration}
                        </span>
                      )}
                      
                      {place.address && (
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {place.address}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-poppins flex items-center text-travel-navy">
            <Utensils className="mr-2 text-travel-teal" size={20} />
            Meal Recommendations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['breakfast', 'lunch', 'dinner'].map((mealType) => {
              // TypeScript needs this type assertion to index properly
              const meal = dayData.meals[mealType as keyof typeof dayData.meals];
              
              return (
                <div key={mealType} className="border border-gray-100 rounded-md p-4">
                  <h4 className="font-medium capitalize mb-2">{mealType}</h4>
                  {meal ? (
                    <>
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-sm">{meal.name}</p>
                        {meal.cost && (
                          <span className="bg-travel-teal/10 text-travel-teal px-2 py-1 rounded text-xs flex items-center">
                            <IndianRupee size={12} className="mr-1" />
                            {meal.cost}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-xs mb-2">{meal.cuisine} • {meal.price}</p>
                      <p className="text-gray-600 text-xs">{meal.description}</p>
                      
                      {meal.imageUrl && (
                        <div className="mt-3 h-32 rounded-md overflow-hidden">
                          <img 
                            src={meal.imageUrl} 
                            alt={meal.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-400 text-sm">No specific recommendation</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-poppins flex items-center text-travel-navy">
            <Bed className="mr-2 text-travel-teal" size={20} />
            Accommodation
          </h3>
          
          <div className="flex flex-col md:flex-row gap-4 border border-gray-100 rounded-md p-4">
            {dayData.accommodation.imageUrl && (
              <div className="md:w-1/4">
                <div className="rounded-md overflow-hidden h-36">
                  <img 
                    src={dayData.accommodation.imageUrl} 
                    alt={dayData.accommodation.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            <div className={dayData.accommodation.imageUrl ? "md:w-3/4" : "w-full"}>
              <h4 className="font-medium mb-1">{dayData.accommodation.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{dayData.accommodation.description}</p>
              <p className="text-sm mb-2">
                <span className="font-medium">Price:</span> {dayData.accommodation.price}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {dayData.accommodation.amenities.map((amenity, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter 
        className={cn(
          "flex items-center justify-center py-2 border-t border-gray-100 bg-slate-50/50",
          expanded ? "block" : "hidden"
        )}
      >
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleExpand}
          className="text-gray-500 hover:text-gray-700"
        >
          <ChevronUp className="mr-1" size={16} />
          Collapse Day {dayData.day}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ItineraryCard;
