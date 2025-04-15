
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plan a Trip", path: "/plan-trip" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Plane size={28} className="text-travel-teal" />
          <span className="font-poppins font-bold text-xl text-travel-navy">
            Travel<span className="text-travel-teal">Buddy</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition duration-200 hover:text-travel-teal ${
                isActive(link.path) 
                  ? "text-travel-teal" 
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 bg-white shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md ${
                  isActive(link.path) 
                    ? "text-travel-teal bg-gray-100" 
                    : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
