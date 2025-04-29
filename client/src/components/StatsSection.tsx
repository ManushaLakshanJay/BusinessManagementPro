import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.1);
  
  // State for animated counters
  const [counters, setCounters] = useState({
    clients: 0,
    countries: 0,
    solutions: 0,
    savings: 0
  });
  
  // Target counter values
  const targetCounters = {
    clients: 5000,
    countries: 42,
    solutions: 150,
    savings: 37
  };
  
  // Animate counters when section is visible
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Animation duration in ms
      const frameRate = 16; // ms per frame (60fps approx)
      const totalFrames = duration / frameRate;
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        
        setCounters({
          clients: Math.floor(easeOutQuad(progress) * targetCounters.clients),
          countries: Math.floor(easeOutQuad(progress) * targetCounters.countries),
          solutions: Math.floor(easeOutQuad(progress) * targetCounters.solutions),
          savings: Math.floor(easeOutQuad(progress) * targetCounters.savings)
        });
        
        if (frame === totalFrames) {
          clearInterval(timer);
          setCounters(targetCounters);
        }
      }, frameRate);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);
  
  // Easing function for smoother counter animation
  const easeOutQuad = (t: number): number => t * (2 - t);
  
  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="py-16 md:py-24 relative"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 z-0"></div>
      <div className="absolute inset-0 bg-dark-darker/80 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Clients Stat */}
            <div className="bg-dark-lighter/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700/30 text-center transform hover:scale-105 transition-all duration-300 shadow-glow-sm hover:shadow-glow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-primary-light text-xl md:text-2xl"></i>
              </div>
              
              <h3 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                {counters.clients.toLocaleString()}+
              </h3>
              <p className="text-gray-400">Active Clients</p>
            </div>
            
            {/* Countries Stat */}
            <div className="bg-dark-lighter/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700/30 text-center transform hover:scale-105 transition-all duration-300 shadow-glow-sm hover:shadow-glow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-accent text-xl md:text-2xl"></i>
              </div>
              
              <h3 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                {counters.countries}
              </h3>
              <p className="text-gray-400">Countries</p>
            </div>
            
            {/* Solutions Stat */}
            <div className="bg-dark-lighter/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700/30 text-center transform hover:scale-105 transition-all duration-300 shadow-glow-sm hover:shadow-glow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-light/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-puzzle-piece text-primary-light text-xl md:text-2xl"></i>
              </div>
              
              <h3 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                {counters.solutions}+
              </h3>
              <p className="text-gray-400">Custom Solutions</p>
            </div>
            
            {/* Efficiency Stat */}
            <div className="bg-dark-lighter/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-700/30 text-center transform hover:scale-105 transition-all duration-300 shadow-glow-sm hover:shadow-glow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-purple-500 text-xl md:text-2xl"></i>
              </div>
              
              <h3 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                {counters.savings}%
              </h3>
              <p className="text-gray-400">Efficiency Gain</p>
            </div>
          </div>
          
          {/* Divider with message */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="flex items-center justify-center">
              <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <p className="px-6 text-gray-400 text-sm italic">Real-time impact across global enterprises</p>
              <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative dots - visible on larger screens */}
      <div className="hidden md:block absolute top-10 left-10 w-20 h-20">
        <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary animate-pulse" style={{animationDelay: "0s"}}></div>
        <div className="absolute top-8 left-8 w-1 h-1 rounded-full bg-primary-light animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute top-4 left-12 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="hidden md:block absolute bottom-10 right-10 w-20 h-20">
        <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-accent animate-pulse" style={{animationDelay: "0.2s"}}></div>
        <div className="absolute bottom-8 right-8 w-1 h-1 rounded-full bg-primary animate-pulse" style={{animationDelay: "0.7s"}}></div>
        <div className="absolute bottom-4 right-12 w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" style={{animationDelay: "1.2s"}}></div>
      </div>
    </section>
  );
}