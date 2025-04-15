
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Sparkles } from "lucide-react";
import { generateItinerary } from "@/services/travelApi";

export interface TripFormData {
  startingPoint: string;
  destination: string;
  tripDuration: number;
  budget: string;
  accommodation: string;
  activities: string[];
  foodPreferences: string[];
  startDate: Date | undefined;
  endDate: Date | undefined;
  notes: string;
}

const TripForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<TripFormData>({
    startingPoint: "",
    destination: "",
    tripDuration: 3,
    budget: "medium",
    accommodation: "mid-range",
    activities: [],
    foodPreferences: [],
    startDate: undefined,
    endDate: undefined,
    notes: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const activityOptions = [
    { id: "adventure", label: "Adventure" },
    { id: "relaxation", label: "Relaxation" },
    { id: "cultural", label: "Cultural" },
    { id: "shopping", label: "Shopping" },
    { id: "nature", label: "Nature & Outdoors" },
    { id: "nightlife", label: "Nightlife" },
    { id: "family", label: "Family Friendly" },
  ];
  
  const foodOptions = [
    { id: "local", label: "Local Cuisine" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "fineDining", label: "Fine Dining" },
    { id: "streetFood", label: "Street Food" },
    { id: "seafood", label: "Seafood" },
    { id: "halal", label: "Halal" },
    { id: "kosher", label: "Kosher" },
  ];
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.startingPoint.trim()) {
      newErrors.startingPoint = "Please enter your starting point";
    }
    
    if (!formData.destination.trim()) {
      newErrors.destination = "Please enter your destination";
    }
    
    if (formData.tripDuration < 1) {
      newErrors.tripDuration = "Trip must be at least 1 day";
    }
    
    if (formData.activities.length === 0) {
      newErrors.activities = "Please select at least one activity";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value) || 0,
    });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const toggleActivity = (activityId: string) => {
    setFormData((prev) => {
      const activities = prev.activities.includes(activityId)
        ? prev.activities.filter((id) => id !== activityId)
        : [...prev.activities, activityId];
        
      // Clear error when field is changed
      if (errors.activities && activities.length > 0) {
        setErrors({
          ...errors,
          activities: "",
        });
      }
      
      return {
        ...prev,
        activities,
      };
    });
  };
  
  const toggleFoodPreference = (foodId: string) => {
    setFormData((prev) => {
      const foodPreferences = prev.foodPreferences.includes(foodId)
        ? prev.foodPreferences.filter((id) => id !== foodId)
        : [...prev.foodPreferences, foodId];
      
      return {
        ...prev,
        foodPreferences,
      };
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // In a real app, we would use the API to generate the itinerary
        // For now, we'll just navigate to the loading page
        localStorage.setItem("tripFormData", JSON.stringify(formData));
        navigate("/loading", { state: { formData } });
      } catch (error) {
        console.error("Error generating itinerary:", error);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="startingPoint">Starting Point</Label>
          <Input
            id="startingPoint"
            name="startingPoint"
            placeholder="e.g. Vellore, Tamil Nadu"
            value={formData.startingPoint}
            onChange={handleInputChange}
            className={errors.startingPoint ? "border-red-500" : ""}
          />
          {errors.startingPoint && (
            <p className="text-sm text-red-500">{errors.startingPoint}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            name="destination"
            placeholder="e.g. Jaipur, Rajasthan"
            value={formData.destination}
            onChange={handleInputChange}
            className={errors.destination ? "border-red-500" : ""}
          />
          {errors.destination && (
            <p className="text-sm text-red-500">{errors.destination}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tripDuration">Trip Duration (days)</Label>
          <Input
            id="tripDuration"
            name="tripDuration"
            type="number"
            min="1"
            max="30"
            value={formData.tripDuration}
            onChange={handleNumberChange}
            className={errors.tripDuration ? "border-red-500" : ""}
          />
          {errors.tripDuration && (
            <p className="text-sm text-red-500">{errors.tripDuration}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select
            value={formData.budget}
            onValueChange={(value) => handleSelectChange("budget", value)}
          >
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (Budget Conscious)</SelectItem>
              <SelectItem value="medium">Medium (Moderate Spending)</SelectItem>
              <SelectItem value="high">High (Luxury Experience)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="accommodation">Accommodation Preference</Label>
          <Select
            value={formData.accommodation}
            onValueChange={(value) => handleSelectChange("accommodation", value)}
          >
            <SelectTrigger id="accommodation">
              <SelectValue placeholder="Select accommodation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="budget">Budget (Hostels, Guest Houses)</SelectItem>
              <SelectItem value="mid-range">Mid-Range (3-4 Star Hotels)</SelectItem>
              <SelectItem value="luxury">Luxury (5-Star Hotels, Resorts)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Travel Dates (Optional)</Label>
          <div className="grid grid-cols-2 gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.startDate ? (
                    format(formData.startDate, "PPP")
                  ) : (
                    <span>Start Date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.startDate}
                  onSelect={(date) =>
                    setFormData((prev) => ({ ...prev, startDate: date }))
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.endDate ? (
                    format(formData.endDate, "PPP")
                  ) : (
                    <span>End Date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.endDate}
                  onSelect={(date) =>
                    setFormData((prev) => ({ ...prev, endDate: date }))
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label className="block mb-2">Activity Preferences</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {activityOptions.map((activity) => (
              <div 
                key={activity.id}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  id={`activity-${activity.id}`}
                  checked={formData.activities.includes(activity.id)}
                  onCheckedChange={() => toggleActivity(activity.id)}
                />
                <Label
                  htmlFor={`activity-${activity.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {activity.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.activities && (
            <p className="text-sm text-red-500 mt-2">{errors.activities}</p>
          )}
        </div>
        
        <div>
          <Label className="block mb-2">Food Preferences</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {foodOptions.map((food) => (
              <div 
                key={food.id}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  id={`food-${food.id}`}
                  checked={formData.foodPreferences.includes(food.id)}
                  onCheckedChange={() => toggleFoodPreference(food.id)}
                />
                <Label
                  htmlFor={`food-${food.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {food.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Any specific requirements, places you'd like to visit, or things you'd like to do..."
          value={formData.notes}
          onChange={handleInputChange}
          rows={4}
          className="resize-none"
        />
      </div>
      
      <Button type="submit" className="w-full bg-travel-teal hover:bg-travel-teal/90 text-white" size="lg">
        <Sparkles className="mr-2 h-4 w-4" />
        Generate Itinerary
      </Button>
    </form>
  );
};

export default TripForm;
