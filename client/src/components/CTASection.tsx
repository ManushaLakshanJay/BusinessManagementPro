import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      ref={sectionRef}
      className={`py-20 md:py-28 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="rounded-3xl backdrop-blur-lg p-2 shadow-xl relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          {/* Inner content area with glass effect */}
          <div className="bg-dark-lighter/50 backdrop-blur-md rounded-2xl p-10 md:p-16 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 animate-float" style={{ animationDuration: "20s" }}></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32 animate-float" style={{ animationDuration: "15s", animationDelay: "2s" }}></div>
            
            {/* Decorative shape 1 */}
            <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full" />
            
            {/* Decorative shape 2 */}
            <div className="absolute bottom-10 left-10 w-48 h-48 border-2 border-accent/20 rounded-full" />
            
            {/* Decorative dots */}
            <div className="absolute top-24 left-1/4 w-2 h-2 bg-primary rounded-full" />
            <div className="absolute bottom-24 right-1/4 w-3 h-3 bg-accent rounded-full" />
            
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-lighter/70 backdrop-blur-md border border-gray-700/50 mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">Take the next step</span>
              </div>
              
              <h2 className="font-poppins font-bold text-3xl md:text-5xl text-gradient mb-6">Ready to Transform Your Business?</h2>
              
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Join thousands of businesses already using our platform to streamline operations, improve productivity, and drive growth in today's competitive market.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto px-10 py-6 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-poppins font-semibold text-lg shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-10 py-6 rounded-xl border-2 border-gray-700 hover:border-primary text-white font-poppins font-semibold text-lg transition-all duration-300 hover:bg-dark-lighter"
                >
                  <i className="fas fa-headset mr-2 text-primary-light"></i>
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-primary-light mr-2"></i>
                  <span className="text-gray-400 text-sm">Enterprise-grade security</span>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-credit-card text-primary-light mr-2"></i>
                  <span className="text-gray-400 text-sm">No credit card required</span>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-calendar-check text-primary-light mr-2"></i>
                  <span className="text-gray-400 text-sm">14-day free trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
