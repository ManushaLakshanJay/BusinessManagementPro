import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.03]"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-darker via-dark to-dark-lighter opacity-80"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-lighter/50 backdrop-blur-md border border-gray-700 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block w-2 h-2 rounded-full bg-primary-light mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Next-Generation Business Platform</span>
          </div>
          
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Enterprise SaaS
          </h2>
          
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-7xl mb-8 opacity-0 animate-fade-in text-gradient" style={{ animationDelay: "0.5s" }}>
            Business Management Platform
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 opacity-0 animate-fade-in leading-relaxed" style={{ animationDelay: "0.7s" }}>
            Cloud-based business management solution with integrated workflows and advanced reporting for modern enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <Button 
              size="lg" 
              className="px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-poppins font-medium text-lg shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-6 rounded-xl border-2 border-gray-700 hover:border-primary-light text-white hover:bg-dark-lighter transition-all duration-300"
            >
              <i className="fas fa-play-circle mr-2 text-primary-light"></i>
              Watch Video
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-4xl opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <div className="bg-dark-lighter/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-800 hover:border-primary-light transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <i className="fas fa-shield-alt text-primary-light text-xl"></i>
                </div>
                <span className="font-poppins font-medium">Enterprise Security</span>
              </div>
            </div>
            
            <div className="bg-dark-lighter/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-800 hover:border-primary-light transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <i className="fas fa-cloud text-primary-light text-xl"></i>
                </div>
                <span className="font-poppins font-medium">Cloud-Based</span>
              </div>
            </div>
            
            <div className="bg-dark-lighter/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-800 hover:border-primary-light transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <i className="fas fa-sync-alt text-primary-light text-xl"></i>
                </div>
                <span className="font-poppins font-medium">Real-time Updates</span>
              </div>
            </div>
            
            <div className="bg-dark-lighter/40 backdrop-blur-sm rounded-2xl p-4 border border-gray-800 hover:border-primary-light transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <i className="fas fa-chart-line text-primary-light text-xl"></i>
                </div>
                <span className="font-poppins font-medium">Advanced Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#features" 
          className="flex flex-col items-center opacity-0 animate-fade-in hover:transform hover:translate-y-2 transition-all duration-300" 
          style={{ animationDelay: "1.5s" }}
        >
          <span className="text-gray-400 text-sm mb-2 font-poppins">Discover more</span>
          <div className="w-10 h-10 rounded-full border-2 border-primary-light/30 flex items-center justify-center">
            <i className="fas fa-chevron-down text-primary-light animate-bounce"></i>
          </div>
        </a>
      </div>
    </section>
  );
}
