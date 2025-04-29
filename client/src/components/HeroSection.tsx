import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark-lighter/80 to-dark/95"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Enterprise SaaS
          </h2>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 opacity-0 animate-fade-in bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent" style={{ animationDelay: "0.5s" }}>
            Business Management Platform
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Cloud-based business management solution with integrated workflows and advanced reporting.
          </p>
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <Button 
              size="lg" 
              className="px-8 py-6 rounded-md bg-gradient-to-r from-primary to-primary-light text-white font-poppins font-medium text-lg border border-secondary-light shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16 w-full max-w-3xl opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
            <div className="flex items-center space-x-3">
              <i className="fas fa-shield-alt text-primary-light text-xl"></i>
              <span className="font-lato">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-cloud text-primary-light text-xl"></i>
              <span className="font-lato">Cloud-Based</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-sync-alt text-primary-light text-xl"></i>
              <span className="font-lato">Real-time Updates</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-chart-line text-primary-light text-xl"></i>
              <span className="font-lato">Advanced Analytics</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-10 h-16 border-2 border-gray-400 rounded-full flex items-start justify-center opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          <div className="w-2 h-4 bg-primary-light rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
