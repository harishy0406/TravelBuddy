
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-travel-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">TravelBuddy</h3>
            <p className="text-gray-300 mb-4">
              Creating personalized travel experiences with AI-powered itineraries
              tailored just for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-travel-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-travel-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-travel-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-travel-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plan-trip" className="text-gray-300 hover:text-travel-teal transition-colors">
                  Plan a Trip
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-travel-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-travel-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-teal transition-colors">
                  Jaipur, Rajasthan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-teal transition-colors">
                  New Delhi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-teal transition-colors">
                  Chennai, Tamil Nadu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-teal transition-colors">
                 Pondycherry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-travel-teal transition-colors">
                  Shimla, Himachal pradesh
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-travel-teal shrink-0 mt-1" />
                <span className="text-gray-300">VIT Vellore</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-travel-teal shrink-0" />
                <a href="mailto:info@travelbuddy.com" className="text-gray-300 hover:text-travel-teal transition-colors">
                  harivelgm76@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-travel-teal shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-travel-teal transition-colors">
                  +91 7889289504
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} TravelBuddy. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-gray-400 hover:text-travel-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-travel-teal transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
