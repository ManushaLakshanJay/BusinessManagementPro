import { useRef, useEffect } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      id="features" 
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-80 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-80 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-5">
            <span className="text-sm font-medium text-gray-200">Advanced Business Tools</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-5">Enterprise-Grade Solutions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">Our platform integrates seamlessly with your existing workflows while providing powerful new capabilities for modern business.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Enterprise Feature Card */}
          <div className="bg-dark-lighter rounded-2xl p-8 border border-gray-700/50 shadow-card backdrop-blur-sm transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-glow group">
            <div className="w-full h-40 mb-8 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute w-40 h-40 bg-primary/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:scale-125"></div>
              <i className="fas fa-building text-white text-5xl relative z-10"></i>
            </div>
            
            <div className="mb-6">
              <h3 className="font-poppins font-semibold text-2xl text-white mb-4">Enterprise Solution</h3>
              <p className="text-gray-300">Comprehensive suite of business management tools designed for scalability and enterprise-level operations.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-primary-light text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">CRM Integration</h4>
                  <p className="text-sm text-gray-400">Manage customer relationships effortlessly</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-primary-light text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Invoicing System</h4>
                  <p className="text-sm text-gray-400">Automated billing and payment tracking</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-primary-light text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">HR Management</h4>
                  <p className="text-sm text-gray-400">Complete employee lifecycle tools</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-primary-light text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Operations</h4>
                  <p className="text-sm text-gray-400">Streamline business processes</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center font-medium text-primary-light hover:text-white transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-primary-light after:left-0 after:bottom-[-3px] after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left after:duration-300">
                Learn more about enterprise features
                <i className="fas fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>
          
          {/* Cloud Feature Card */}
          <div className="bg-dark-lighter rounded-2xl p-8 border border-gray-700/50 shadow-card backdrop-blur-sm transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-glow group">
            <div className="w-full h-40 mb-8 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute w-40 h-40 bg-accent/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:scale-125"></div>
              <i className="fas fa-cloud text-white text-5xl relative z-10"></i>
            </div>
            
            <div className="mb-6">
              <h3 className="font-poppins font-semibold text-2xl text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">Secure, scalable cloud hosting with redundant systems ensuring 99.9% uptime and global accessibility.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-accent text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Secure Hosting</h4>
                  <p className="text-sm text-gray-400">Enterprise-grade security protocols</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-accent text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Cross-device Access</h4>
                  <p className="text-sm text-gray-400">Work from anywhere, any device</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-accent text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Data Backup</h4>
                  <p className="text-sm text-gray-400">Automated regular backups</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-3 shrink-0">
                  <i className="fas fa-check text-accent text-sm"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Disaster Recovery</h4>
                  <p className="text-sm text-gray-400">Robust recovery systems</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center font-medium text-accent hover:text-white transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-accent after:left-0 after:bottom-[-3px] after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left after:duration-300">
                Explore cloud capabilities
                <i className="fas fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
