
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
  totalCost: "35,000",
  currency: "₹",
  bestTimeToVisit: "October to March",
  statistics: {
    totalDistance: "1550 km",
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
          imageUrl: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FAmer-Fort-40.jpg&w=640&q=90",
          duration: "2-3 hours",
          address: "Devisinghpura, Amer, Jaipur",
          price: "500 per person" // Added price
        },
        {
          name: "City Palace",
          description: "A beautiful blend of Rajasthani and Mughal architecture in the heart of Jaipur",
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/8a/82/this-is-the-time-when.jpg?w=900&h=500&s=1",
          duration: "2 hours",
          address: "Tripoliya Bazaar, Near Jantar Mantar, Jaipur",
          price: "700 per person" // Added price
        },
        {
          name: "Hawa Mahal",
          description: "Palace of Winds with its iconic honeycomb facade and 953 small windows",
          imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0a/06/0b/66/hawa-mahal-travels-day.jpg",
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
          imageUrl: "https://s3-ap-southeast-1.amazonaws.com/img.tasteofcity.com/tasteimages/201508/image_original/B4FF1FD97759C2C3_lassi-6.jpg"
        },
        lunch: {
          name: "Spice Court",
          description: "Authentic Rajasthani thali with variety of local dishes",
          cuisine: "Rajasthani",
          price: "₹₹",
          cost: "400 - 600", // Added actual cost
          imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0d/ca/3d/49/the-spice-court.jpg"
        },
        dinner: {
          name: "Chokhi Dhani",
          description: "Traditional Rajasthani village experience with authentic food",
          cuisine: "Rajasthani",
          price: "₹₹₹",
          cost: "1,200 - 1,500", // Added actual cost
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/11/4c/a4/main-entrance.jpg?w=900&h=500&s=1"
        }
      },
      accommodation: {
        name: "Rambagh Palace Hotel",
        description: "Luxurious heritage hotel converted from a royal palace",
        price: "₹₹₹",
        amenities: ["Spa", "Fine Dining", "Swimming Pool", "Historic Architecture"],
        imageUrl: "https://www.remotelands.com/storage/media/3263/conversions/b130617007-banner-size.jpg"
      }
    },
    {
      day: 2,
      date: "Day 2",
      places: [
        {
          name: "Jantar Mantar",
          description: "UNESCO World Heritage site featuring the world's largest stone sundial",
          imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-2-attr-hero?qlt=82&ts=1726660181979",
          duration: "2 hours",
          address: "Gangori Bazaar, J.D.A. Market, Jaipur",
          price: "300 per person" // Added price
        },
        {
          name: "Albert Hall Museum",
          description: "Oldest museum in Rajasthan with a rich collection of artifacts",
          imageUrl: "https://content-tourist.rajasthan.gov.in/uploads/albert_hall_museum_jaipur_entry_fee_timings_holidays_reviews_header_219f4b832f.jpg",
          duration: "2-3 hours",
          address: "Museum Rd, Ram Niwas Garden, Jaipur",
          price: "350 per person" // Added price
        },
        {
          name: "Nahargarh Fort",
          description: "Historical fort offering panoramic views of Jaipur city",
          imageUrl: "https://www.sunshineseeker.com/wp-content/uploads/2018/09/Jaipur-Nahargarh-Fort-Sunset-Restaurant.jpg",
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
          imageUrl: "https://rawatmisthanbhandar.in/assets/img/blog/related-post2.png"
        },
        lunch: {
          name: "Peacock Rooftop Restaurant",
          description: "Rooftop dining with views of the City Palace",
          cuisine: "North Indian",
          price: "₹₹",
          cost: "500 - 800", // Added actual cost
          imageUrl: "https://d4t7t8y8xqo0t.cloudfront.net/app//resized/818X450/restaurant/646115/restaurant220250402094244.jpg"
        },
        dinner: {
          name: "1135 AD",
          description: "Royal dining experience inside Amber Fort",
          cuisine: "Rajasthani Royal",
          price: "₹₹₹",
          cost: "2,000 - 2,500", // Added actual cost
          imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/2d/78/b0/all-that-glitters.jpg?w=800&h=500&s=1"
        }
      },
      accommodation: {
        name: "Rambagh Palace Hotel",
        description: "Luxurious heritage hotel converted from a royal palace",
        price: "₹₹₹",
        amenities: ["Spa", "Fine Dining", "Swimming Pool", "Historic Architecture"],
        imageUrl: "https://www.remotelands.com/storage/media/3263/conversions/b130617007-banner-size.jpg"
      }
    },
    {
      day: 3,
      date: "Day 3",
      places: [
        {
          name: "Jal Mahal",
          description: "Beautiful water palace situated in the middle of Man Sagar Lake",
          imageUrl: "https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Explore-Jal-Mahal-in-Jaipur.jpg.webp?VersionId=9dIS_pzwVIqfhVw4HTPAjr592JegRVH1&itok=d6ZpGR-1",
          duration: "1 hour",
          address: "Amer Road, Jaipur",
          price: "100 per person" // Added price (viewing from outside)
        },
        {
          name: "Birla Mandir",
          description: "Beautiful Hindu temple made of pure white marble",
          imageUrl: "https://static.toiimg.com/photo/39669197.cms",
          duration: "1-2 hours",
          address: "Jawahar Lal Nehru Marg, Tilak Nagar, Jaipur",
          price: "Free entry" // Added price
        },
        {
          name: "Johri Bazaar",
          description: "Famous market known for traditional Rajasthani jewelry, textiles, and crafts",
          imageUrl: "https://www.jaipurtaxiservices.com/blogtour/johari-bazaar-jaipur-a-must-visit-shopping-place.webp",
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
          imageUrl: "https://allaboutjaipur.com/wp-content/uploads/2024/05/Untitled-design-4.png"
        },
        lunch: {
          name: "Niros",
          description: "Iconic restaurant serving Indian and international cuisine since 1949",
          cuisine: "Multi-cuisine",
          price: "₹₹",
          cost: "600 - 900", // Added actual cost
          imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/01/d4/03/bf/niro-s.jpg"
        },
        dinner: {
          name: "Suvarna Mahal",
          description: "Fine dining restaurant in Rambagh Palace serving royal Indian cuisine",
          cuisine: "Royal Indian",
          price: "₹₹₹",
          cost: "2,500 - 3,500", // Added actual cost
          imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/14/3a/e9/4d/a-fine-dining-experience.jpg"
        }
      },
      accommodation: {
        name: "Rambagh Palace Hotel",
        description: "Luxurious heritage hotel converted from a royal palace",
        price: "₹₹₹",
        amenities: ["Spa", "Fine Dining", "Swimming Pool", "Historic Architecture"],
        imageUrl: "https://www.remotelands.com/storage/media/3263/conversions/b130617007-banner-size.jpg"
      }
    }
  ]
};
