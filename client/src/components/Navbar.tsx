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
        scrolled ? "bg-dark-lighter/90 glass-effect shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent shadow-glow animate-float">
              <i className="fas fa-cube text-white text-xl"></i>
            </div>
            <span className="font-poppins font-bold text-2xl md:text-2xl tracking-tight text-gradient">BMP</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="font-poppins text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:w-0 after:h-0.5 after:bg-primary-light after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
              Features
            </a>
            <a href="#showcase" className="font-poppins text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:w-0 after:h-0.5 after:bg-primary-light after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
              Platform
            </a>
            <a href="#contact" className="font-poppins text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:w-0 after:h-0.5 after:bg-primary-light after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
            <div className="pl-4">
              <Button 
                variant="outline" 
                className="rounded-xl border-2 border-primary-light text-white hover:bg-primary hover:border-transparent transition-all duration-300 hover:shadow-glow"
              >
                Sign In
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-300 bg-dark-lighter/90 backdrop-blur-sm border border-gray-700 hover:text-white focus:outline-none transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-dark-lighter/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-5">
          <a 
            href="#features" 
            className="py-2 text-gray-300 font-poppins hover:text-white transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#showcase" 
            className="py-2 text-gray-300 font-poppins hover:text-white transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            Platform
          </a>
          <a 
            href="#contact" 
            className="py-2 text-gray-300 font-poppins hover:text-white transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Button 
            variant="outline" 
            className="py-2 rounded-xl border-2 border-primary-light text-white hover:bg-primary hover:border-transparent transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
