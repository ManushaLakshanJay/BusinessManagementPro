import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-opacity-90 backdrop-blur-md shadow-md" : ""
      } bg-dark-darker`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-primary to-primary-light">
            <i className="fas fa-cube text-white text-xl"></i>
          </div>
          <span className="font-poppins font-semibold text-xl md:text-2xl tracking-tight text-white">BMP</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-lato text-gray-300 hover:text-white transition duration-300">Features</a>
          <a href="#showcase" className="font-lato text-gray-300 hover:text-white transition duration-300">Platform</a>
          <a href="#contact" className="font-lato text-gray-300 hover:text-white transition duration-300">Contact</a>
          <Button variant="outline" className="border-primary-light text-white hover:bg-primary hover:border-primary transition duration-300">
            Sign In
          </Button>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-dark-lighter ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="py-2 text-gray-300 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#showcase" 
            className="py-2 text-gray-300 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Platform
          </a>
          <a 
            href="#contact" 
            className="py-2 text-gray-300 hover:text-white transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Button 
            variant="outline" 
            className="py-2 border-primary-light text-white hover:bg-primary hover:border-primary transition duration-300"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
