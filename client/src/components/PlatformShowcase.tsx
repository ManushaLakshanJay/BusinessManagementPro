import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function PlatformShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      id="showcase" 
      ref={sectionRef}
      className={`py-24 md:py-32 bg-dark-darker relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-darker opacity-80"></div>
      <div className="absolute inset-0 grid-pattern opacity-[0.02]"></div>
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm mb-5">
            <span className="text-sm font-medium text-gray-200">Powerful Interface</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-5">Platform Showcase</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">Experience the power of our integrated business management platform with intuitive interfaces.</p>
        </div>
        
        <div className="flex justify-center mb-20">
          <div className="relative w-full max-w-5xl">
            {/* Platform device frame */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
              {/* Glowing effect behind the screen */}
              <div className="absolute inset-10 bg-primary/20 blur-3xl"></div>
              
              {/* Dashboard image */}
              <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-inner animate-float" style={{animationDuration: "10s"}}>
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                  alt="Dashboard interface" 
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Glass overlay with UI elements */}
                <div className="absolute top-3 left-3 right-3 flex justify-between">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="w-8 h-3 rounded-full bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  </div>
                </div>
                
                {/* Active notification dot */}
                <div className="absolute top-4 right-10 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
            </div>
            
            {/* Platform label */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-full text-white font-medium shadow-glow">
              Live Dashboard Preview
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 stagger-animation">
          {/* Key feature tiles */}
          <div className="bg-dark-lighter/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-light shadow-md transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-glow group">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500">
              <i className="fas fa-cogs text-primary-light text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl text-white mb-3">Workflow Automation</h3>
            <p className="text-gray-400">Automate repetitive tasks and streamline business processes with intelligent workflows.</p>
          </div>
          
          <div className="bg-dark-lighter/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-light shadow-md transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-glow group">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500">
              <i className="fas fa-chart-pie text-primary-light text-2xl transition-transform duration-500 group-hover:scale-110"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl text-white mb-3">Analytics Dashboard</h3>
            <p className="text-gray-400">Real-time business insights with customizable reports and interactive visualizations.</p>
          </div>
          
          <div className="bg-dark-lighter/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-light shadow-md transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-glow group">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500">
              <i className="fas fa-users text-primary-light text-2xl transition-transform duration-500 group-hover:scale-110"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl text-white mb-3">Team Collaboration</h3>
            <p className="text-gray-400">Integrated tools for seamless team coordination with real-time messaging and file sharing.</p>
          </div>
          
          <div className="bg-dark-lighter/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-primary-light shadow-md transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-glow group">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-500">
              <i className="fas fa-lock text-primary-light text-2xl transition-transform duration-500 group-hover:scale-110"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl text-white mb-3">Secure Cloud Storage</h3>
            <p className="text-gray-400">Enterprise-grade security for your business data with advanced encryption and access controls.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="px-10 py-6 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-poppins font-medium text-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
            Explore All Features
            <i className="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover:translate-x-1"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
