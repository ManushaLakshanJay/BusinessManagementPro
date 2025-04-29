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
      className={`py-16 md:py-24 bg-dark-darker relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-darker opacity-50"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4">Platform Showcase</h2>
          <p className="max-w-2xl mx-auto text-gray-300">Experience the power of our integrated business management platform.</p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl">
            <div className="bg-dark-lighter p-3 rounded-xl shadow-xl border border-gray-700 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Dashboard interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-primary px-6 py-2 rounded-full text-white font-medium shadow-glow">
              Live Dashboard Preview
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Key feature tiles */}
          <div className="bg-dark-lighter rounded-xl p-6 border border-gray-700 hover:border-primary-light transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-cogs text-primary-light text-2xl transition-transform duration-300 group-hover:scale-110"></i>
            </div>
            <h3 className="font-poppins font-medium text-xl text-white mb-2">Workflow Automation</h3>
            <p className="text-gray-400">Automate repetitive tasks and streamline business processes.</p>
          </div>
          
          <div className="bg-dark-lighter rounded-xl p-6 border border-gray-700 hover:border-primary-light transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-chart-pie text-primary-light text-2xl transition-transform duration-300 group-hover:scale-110"></i>
            </div>
            <h3 className="font-poppins font-medium text-xl text-white mb-2">Analytics Dashboard</h3>
            <p className="text-gray-400">Real-time business insights with customizable reports.</p>
          </div>
          
          <div className="bg-dark-lighter rounded-xl p-6 border border-gray-700 hover:border-primary-light transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-users text-primary-light text-2xl transition-transform duration-300 group-hover:scale-110"></i>
            </div>
            <h3 className="font-poppins font-medium text-xl text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-400">Integrated tools for seamless team coordination.</p>
          </div>
          
          <div className="bg-dark-lighter rounded-xl p-6 border border-gray-700 hover:border-primary-light transition-all duration-300">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-lock text-primary-light text-2xl transition-transform duration-300 group-hover:scale-110"></i>
            </div>
            <h3 className="font-poppins font-medium text-xl text-white mb-2">Secure Cloud Storage</h3>
            <p className="text-gray-400">Enterprise-grade security for your business data.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="inline-flex items-center px-8 py-3 rounded-md bg-dark-lighter text-white font-poppins font-medium border border-primary hover:bg-primary-dark transition duration-300">
            Explore All Features
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
