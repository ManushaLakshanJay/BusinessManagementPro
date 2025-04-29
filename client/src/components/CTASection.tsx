import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-dark-lighter to-dark rounded-2xl border border-gray-700 p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/10 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">Join thousands of businesses already using our platform to streamline operations, improve productivity, and drive growth.</p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg"
                className="px-8 py-3 rounded-md bg-primary hover:bg-primary-dark text-white font-poppins font-medium text-lg shadow-glow transition-all duration-300"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-md bg-transparent border border-secondary hover:border-white text-white font-poppins font-medium text-lg transition-all duration-300"
              >
                Get a Demo
              </Button>
            </div>
            
            <p className="mt-6 text-gray-400 text-sm">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
