import { useRef, useEffect } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      id="features" 
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4">Enterprise-Grade Solutions</h2>
          <p className="max-w-2xl mx-auto text-gray-300">Our platform integrates seamlessly with your existing workflows while providing powerful new capabilities.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Enterprise Feature Card */}
          <div className="bg-dark-lighter rounded-xl p-8 border border-gray-700 shadow-card transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-glow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <i className="fas fa-building text-primary-light text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-2xl text-white">Enterprise Solution</h3>
            </div>
            
            <p className="text-gray-300 mb-6">Comprehensive suite of business management tools designed for scalability and enterprise-level operations.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">CRM Integration</h4>
                  <p className="text-sm text-gray-400">Manage customer relationships effortlessly</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">Invoicing System</h4>
                  <p className="text-sm text-gray-400">Automated billing and payment tracking</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">HR Management</h4>
                  <p className="text-sm text-gray-400">Complete employee lifecycle tools</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">Operations</h4>
                  <p className="text-sm text-gray-400">Streamline business processes</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center font-medium text-primary-light hover:text-primary transition duration-300">
                Learn more about enterprise features
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </div>
          
          {/* Cloud Feature Card */}
          <div className="bg-dark-lighter rounded-xl p-8 border border-gray-700 shadow-card transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-glow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <i className="fas fa-cloud text-primary-light text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-2xl text-white">Cloud Infrastructure</h3>
            </div>
            
            <p className="text-gray-300 mb-6">Secure, scalable cloud hosting with redundant systems ensuring 99.9% uptime and global accessibility.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">Secure Hosting</h4>
                  <p className="text-sm text-gray-400">Enterprise-grade security protocols</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">Cross-device Access</h4>
                  <p className="text-sm text-gray-400">Work from anywhere, any device</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">Data Backup</h4>
                  <p className="text-sm text-gray-400">Automated regular backups</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check text-primary-light mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-white mb-1">Disaster Recovery</h4>
                  <p className="text-sm text-gray-400">Robust recovery systems</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center font-medium text-primary-light hover:text-primary transition duration-300">
                Explore cloud capabilities
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
