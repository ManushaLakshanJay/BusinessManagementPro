export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-12 bg-dark-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-0 w-1/4 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent shadow-glow">
                <i className="fas fa-cube text-white text-lg"></i>
              </div>
              <span className="font-poppins font-bold text-2xl text-gradient">BMP</span>
            </div>
            
            <p className="text-gray-400 text-base mb-6 leading-relaxed">
              Business Management Platform - Enterprise SaaS solution that brings all your business operations together in one powerful, intuitive system.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary-light hover:border-primary-light hover:shadow-glow transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary-light hover:border-primary-light hover:shadow-glow transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary-light hover:border-primary-light hover:shadow-glow transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary-light hover:border-primary-light hover:shadow-glow transition-all duration-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
            
            <div className="p-5 rounded-2xl bg-dark-lighter/50 backdrop-blur-sm border border-gray-700/50">
              <h5 className="font-poppins font-medium text-white mb-3">Subscribe to our newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-dark-darker border border-gray-700 rounded-l-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                <button className="bg-primary hover:bg-primary-light text-white rounded-r-lg px-4 transition-colors duration-300">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          
          {/* Links columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Platform column */}
              <div>
                <h4 className="font-poppins font-semibold text-white text-lg mb-5 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  Platform
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Features
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Security
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Enterprise
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Pricing
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Company column */}
              <div>
                <h4 className="font-poppins font-semibold text-white text-lg mb-5 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        About Us
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Careers
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Blog
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Contact
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Resources column */}
              <div>
                <h4 className="font-poppins font-semibold text-white text-lg mb-5 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-light mr-2"></div>
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Documentation
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        API Reference
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Support
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="relative overflow-hidden">
                        Community
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <i className="fas fa-chevron-right text-xs ml-1.5 opacity-0 transform translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact information in desktop */}
            <div className="hidden lg:flex mt-12 p-6 rounded-2xl bg-dark-lighter/50 backdrop-blur-sm border border-gray-700/50 items-center justify-between">
              <div className="flex items-center">
                <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-headset text-primary-light text-xl"></i>
                </div>
                <div>
                  <h5 className="font-poppins font-medium text-white text-lg">Need assistance?</h5>
                  <p className="text-gray-400">Our support team is here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-gray-400 text-sm">Email us at</p>
                  <a href="mailto:support@bmp.com" className="text-primary-light hover:text-white transition-colors duration-300">support@bmp.com</a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call us at</p>
                  <a href="tel:+18001234567" className="text-primary-light hover:text-white transition-colors duration-300">+1 (800) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-gradient font-medium">Business Management Platform</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">Cookies</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
