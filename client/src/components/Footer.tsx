export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-dark-darker border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center bg-gradient-to-br from-primary to-primary-light">
                <i className="fas fa-cube text-white text-sm"></i>
              </div>
              <span className="font-poppins font-semibold text-lg text-white">BMP</span>
            </div>
            <p className="text-gray-400 text-sm">Business Management Platform - Enterprise SaaS solution for modern businesses.</p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-primary-light transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-primary-light transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-primary-light transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-white text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-white text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-white text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Business Management Platform. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
