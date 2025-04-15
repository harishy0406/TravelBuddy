
import { toast } from "sonner";
import type { TripFormData } from "@/components/TripForm";
import type { ItineraryDay } from "@/components/ItineraryCard";

const API_KEY = "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";
const API_BASE_URL = "https://api.example.com/v1"; // This would be the real API endpoint

export const generateItinerary = async (formData: TripFormData) => {
  try {
    // In a real application, you would make an API call here
    // For demo purposes, we'll return mock data after a short delay
    
    // Simulate API call
    // const response = await fetch(`${API_BASE_URL}/itinerary`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    
    // if (!response.ok) {
    //   throw new Error('Failed to generate itinerary');
    // }
    
    // const data = await response.json();
    // return data;
    
    // For demo, return mock data
    return mockItineraryData;
  } catch (error) {
    console.error("Error generating itinerary:", error);
    toast.error("Failed to generate itinerary. Please try again.");
    throw error;
  }
};

// Mock data for demonstration
export const mockItineraryData = {
  destination: "Jaipur, Rajasthan",
  tripDuration: 3,
  totalCost: "85,000",
  currency: "₹",
  bestTimeToVisit: "October to March",
  statistics: {
    totalDistance: "250 km",
    placesToVisit: 8,
    activitiesPlanned: 12,
    localCuisines: 6
  },
  travelTips: [
    "Visit during the Jaipur Literature Festival in January",
    "Wear comfortable walking shoes for exploring palaces",
    "Try local Rajasthani cuisine like Dal Baati Churma",
    "Bargain at local markets like Johari Bazaar",
    "Stay hydrated and protect yourself from the sun"
  ],
  days: [
    {
      day: 1,
      date: "Day 1",
      places: [
        {
          name: "Amber Fort",
          description: "Magnificent hilltop fort known for its artistic Hindu style elements",
          imageUrl: "https://images.unsplash.com/photo-1597053618139-8ac6de0d9346?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "2-3 hours",
          address: "Devisinghpura, Amer, Jaipur",
          price: "500 per person" // Added price
        },
        {
          name: "City Palace",
          description: "A beautiful blend of Rajasthani and Mughal architecture in the heart of Jaipur",
          imageUrl: "https://images.unsplash.com/photo-1580715825973-33eb0511b5c6?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "2 hours",
          address: "Tripoliya Bazaar, Near Jantar Mantar, Jaipur",
          price: "700 per person" // Added price
        },
        {
          name: "Hawa Mahal",
          description: "Palace of Winds with its iconic honeycomb facade and 953 small windows",
          imageUrl: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "1 hour",
          address: "Hawa Mahal Rd, Badi Choupad, Jaipur",
          price: "250 per person" // Added price
        }
      ],
      meals: {
        breakfast: {
          name: "Lassiwala",
          description: "Famous for traditional Rajasthani lassi and breakfast items",
          cuisine: "Rajasthani",
          price: "₹",
          cost: "150 - 250", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=800&h=600"
        },
        lunch: {
          name: "Spice Court",
          description: "Authentic Rajasthani thali with variety of local dishes",
          cuisine: "Rajasthani",
          price: "₹₹",
          cost: "400 - 600", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1564671546498-09a366692274?auto=format&fit=crop&q=80&w=800&h=600"
        },
        dinner: {
          name: "Chokhi Dhani",
          description: "Traditional Rajasthani village experience with authentic food",
          cuisine: "Rajasthani",
          price: "₹₹₹",
          cost: "1,200 - 1,500", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800&h=600"
        }
      },
      accommodation: {
        name: "Rambagh Palace Hotel",
        description: "Luxurious heritage hotel converted from a royal palace",
        price: "₹₹₹",
        amenities: ["Spa", "Fine Dining", "Swimming Pool", "Historic Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1582120021750-1b5b30d49e58?auto=format&fit=crop&q=80&w=800&h=600"
      }
    },
    {
      day: 2,
      date: "Day 2",
      places: [
        {
          name: "Jantar Mantar",
          description: "UNESCO World Heritage site featuring the world's largest stone sundial",
          imageUrl: "https://images.unsplash.com/photo-1612697082279-1abf45717050?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "2 hours",
          address: "Gangori Bazaar, J.D.A. Market, Jaipur",
          price: "300 per person" // Added price
        },
        {
          name: "Albert Hall Museum",
          description: "Oldest museum in Rajasthan with a rich collection of artifacts",
          imageUrl: "https://images.unsplash.com/photo-1590732598610-9299864e337c?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "2-3 hours",
          address: "Museum Rd, Ram Niwas Garden, Jaipur",
          price: "350 per person" // Added price
        },
        {
          name: "Nahargarh Fort",
          description: "Historical fort offering panoramic views of Jaipur city",
          imageUrl: "https://images.unsplash.com/photo-1627301517172-1b96d85bee7d?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "3 hours",
          address: "Krishna Nagar, Jaipur",
          price: "400 per person" // Added price
        }
      ],
      meals: {
        breakfast: {
          name: "Rawat Mishthan Bhandar",
          description: "Famous for pyaaz kachori and traditional Indian sweets",
          cuisine: "Rajasthani",
          price: "₹",
          cost: "150 - 250", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1484300681262-5cca666b0954?auto=format&fit=crop&q=80&w=800&h=600"
        },
        lunch: {
          name: "Peacock Rooftop Restaurant",
          description: "Rooftop dining with views of the City Palace",
          cuisine: "North Indian",
          price: "₹₹",
          cost: "500 - 800", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800&h=600"
        },
        dinner: {
          name: "1135 AD",
          description: "Royal dining experience inside Amber Fort",
          cuisine: "Rajasthani Royal",
          price: "₹₹₹",
          cost: "2,000 - 2,500", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1486771586447-de892eecbb6e?auto=format&fit=crop&q=80&w=800&h=600"
        }
      },
      accommodation: {
        name: "Rambagh Palace Hotel",
        description: "Luxurious heritage hotel converted from a royal palace",
        price: "₹₹₹",
        amenities: ["Spa", "Fine Dining", "Swimming Pool", "Historic Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1582120021750-1b5b30d49e58?auto=format&fit=crop&q=80&w=800&h=600"
      }
    },
    {
      day: 3,
      date: "Day 3",
      places: [
        {
          name: "Jal Mahal",
          description: "Beautiful water palace situated in the middle of Man Sagar Lake",
          imageUrl: "https://images.unsplash.com/photo-1599661046751-f222ffdc2b85?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "1 hour",
          address: "Amer Road, Jaipur",
          price: "100 per person" // Added price (viewing from outside)
        },
        {
          name: "Birla Mandir",
          description: "Beautiful Hindu temple made of pure white marble",
          imageUrl: "https://images.unsplash.com/photo-1578164614429-6c41ef5a6fd1?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "1-2 hours",
          address: "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur",
          price: "Free entry" // Added price
        },
        {
          name: "Johri Bazaar",
          description: "Famous market known for traditional Rajasthani jewelry, textiles, and crafts",
          imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800&h=600",
          duration: "2-3 hours",
          address: "Johri Bazar, Jaipur",
          price: "Shopping only" // Added price info
        }
      ],
      meals: {
        breakfast: {
          name: "Tapri Central",
          description: "Popular café known for its variety of teas and snacks",
          cuisine: "Café",
          price: "₹₹",
          cost: "300 - 400", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1608649226842-f39257c9085f?auto=format&fit=crop&q=80&w=800&h=600"
        },
        lunch: {
          name: "Niros",
          description: "Iconic restaurant serving Indian and international cuisine since 1949",
          cuisine: "Multi-cuisine",
          price: "₹₹",
          cost: "600 - 900", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?auto=format&fit=crop&q=80&w=800&h=600"
        },
        dinner: {
          name: "Suvarna Mahal",
          description: "Fine dining restaurant in Rambagh Palace serving royal Indian cuisine",
          cuisine: "Royal Indian",
          price: "₹₹₹",
          cost: "2,500 - 3,500", // Added actual cost
          imageUrl: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=800&h=600"
        }
      },
      accommodation: {
        name: "Rambagh Palace Hotel",
        description: "Luxurious heritage hotel converted from a royal palace",
        price: "₹₹₹",
        amenities: ["Spa", "Fine Dining", "Swimming Pool", "Historic Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1582120021750-1b5b30d49e58?auto=format&fit=crop&q=80&w=800&h=600"
      }
    }
  ]
};
