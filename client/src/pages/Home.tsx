import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformShowcase from "@/components/PlatformShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Set up smooth scrolling behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      // Add a body class for certain scroll animations
      if (window.scrollY > 100) {
        setScrolled(true);
        document.body.classList.add('scrolled');
      } else {
        setScrolled(false);
        document.body.classList.remove('scrolled');
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <PlatformShowcase />
      <TestimonialsSection />
      <CTASection />
      <Footer />

      {/* Floating Chat Button */}
      <div className="fixed right-6 bottom-24 z-50">
        <button 
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center shadow-glow hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Chat with us"
        >
          <i className="fas fa-comment-dots text-xl"></i>
        </button>
      </div>

      {/* Back to top button */}
      <div className={`fixed right-6 bottom-6 z-50 transition-all duration-300 ${
        showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-dark-lighter border border-gray-700 text-white flex items-center justify-center hover:border-primary-light hover:text-primary-light transition-all duration-300"
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
      
      {/* Custom cursor effect - visible on larger screens only */}
      <div className="cursor-dot hidden lg:block"></div>
      <div className="cursor-outline hidden lg:block"></div>
    </div>
  );
}
