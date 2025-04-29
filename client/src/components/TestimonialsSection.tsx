import { useRef } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "The Business Management Platform completely transformed how we operate. Incredible efficiency gains across all departments.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, GlobalTech",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      quote: "As a tech company, we're very particular about our tools. BMP exceeded our expectations with its robust features and intuitive interface.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Operations Director, Vertex Corp",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "The automation capabilities alone have saved us countless hours. The analytics dashboard gives us insights we never had before.",
      rating: 4
    },
    {
      id: 4,
      name: "David Wilson",
      role: "CFO, Horizon Financial",
      image: "https://randomuser.me/api/portraits/men/97.jpg",
      quote: "For financial operations, security and accuracy are paramount. BMP delivers on both fronts while streamlining our processes.",
      rating: 5
    }
  ];
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className={`py-20 md:py-28 relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02] -z-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-80 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-80 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-5">
            <span className="text-sm font-medium text-gray-200">Customer Success</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-5">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">Trusted by businesses worldwide to streamline operations and boost productivity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-animation">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-dark-lighter/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-card relative card-3d hover:shadow-glow transition-all duration-500 overflow-hidden group"
            >
              {/* Testimonial quote */}
              <div className="card-3d-content">
                <div className="absolute -top-4 -left-2 text-8xl text-primary/10">
                  <i className="fas fa-quote-left"></i>
                </div>
                
                <div className="mb-6 relative">
                  <p className="text-gray-300 text-lg relative z-10">{testimonial.quote}</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div>
                    <h4 className="font-poppins font-semibold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  
                  <div className="ml-auto">
                    <div className="flex text-primary-light">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "" : "text-gray-600"}>
                          <i className="fas fa-star"></i>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Trusted by logos */}
        <div className="mt-20">
          <p className="text-center text-gray-400 mb-8">Trusted by leading companies worldwide</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-24 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="fab fa-microsoft text-gray-400 text-4xl"></i>
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="fab fa-amazon text-gray-400 text-4xl"></i>
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="fab fa-google text-gray-400 text-4xl"></i>
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="fab fa-spotify text-gray-400 text-4xl"></i>
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="fab fa-slack text-gray-400 text-4xl"></i>
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <i className="fab fa-adobe text-gray-400 text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}