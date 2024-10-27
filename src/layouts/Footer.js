import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 text-white transition-transform duration-300 bg-gray-900 hover:scale-105">
      <div className="container px-6 mx-auto lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left Section: Logo and Tagline */}
          <div className="mb-10 md:mb-0 md:w-1/3">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold text-yellow-400 animate-pulse">💻</span>
              <span className="text-2xl font-semibold">Your Tech Hub</span>
            </div>
            <p className="max-w-xs mt-2 text-gray-400">
              Empowering businesses with innovative IT solutions and seamless technology integration.
            </p>
            {/* Social Icons */}
            <div className="flex mt-4 space-x-4">
              <NavLink to="#" className="text-gray-400 transition-transform duration-300 transform hover:text-yellow-400 hover:scale-125">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to="#" className="text-gray-400 transition-transform duration-300 transform hover:text-yellow-400 hover:scale-125">
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to="#" className="text-gray-400 transition-transform duration-300 transform hover:text-yellow-400 hover:scale-125">
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink to="#" className="text-gray-400 transition-transform duration-300 transform hover:text-yellow-400 hover:scale-125">
                <i className="fab fa-github"></i>
              </NavLink>
              <NavLink to="#" className="text-gray-400 transition-transform duration-300 transform hover:text-yellow-400 hover:scale-125">
                <i className="fab fa-linkedin"></i>
              </NavLink>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:w-2/3">
            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-yellow-400">Our Solutions</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><NavLink to="/cloud-computing" className="transition duration-300 hover:text-yellow-400">Cloud Computing</NavLink></li>
                <li><NavLink to="/cybersecurity" className="transition duration-300 hover:text-yellow-400">Cybersecurity</NavLink></li>
                <li><NavLink to="/data-analytics" className="transition duration-300 hover:text-yellow-400">Data Analytics</NavLink></li>
                <li><NavLink to="/software-development" className="transition duration-300 hover:text-yellow-400">Software Development</NavLink></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-yellow-400">Customer Support</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><NavLink to="/help-center" className="transition duration-300 hover:text-yellow-400">Help Center</NavLink></li>
                <li><NavLink to="/service-status" className="transition duration-300 hover:text-yellow-400">Service Status</NavLink></li>
                <li><NavLink to="/faqs" className="transition duration-300 hover:text-yellow-400">FAQs</NavLink></li>
                <li><NavLink to="/contact" className="transition duration-300 hover:text-yellow-400">Contact Us</NavLink></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-yellow-400">About Us</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><NavLink to="/mission" className="transition duration-300 hover:text-yellow-400">Our Mission</NavLink></li>
                <li><NavLink to="/sustainability" className="transition duration-300 hover:text-yellow-400">Sustainability Practices</NavLink></li>
                <li><NavLink to="/careers" className="transition duration-300 hover:text-yellow-400">Careers</NavLink></li>
                <li><NavLink to="/testimonials" className="transition duration-300 hover:text-yellow-400">Testimonials</NavLink></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-yellow-400">Legal</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><NavLink to="/terms" className="transition duration-300 hover:text-yellow-400">Terms of Service</NavLink></li>
                <li><NavLink to="/privacy" className="transition duration-300 hover:text-yellow-400">Privacy Policy</NavLink></li>
                <li><NavLink to="/licensing" className="transition duration-300 hover:text-yellow-400">Licensing Information</NavLink></li>
                <li><NavLink to="/cookie-policy" className="transition duration-300 hover:text-yellow-400">Cookie Policy</NavLink></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700"></div>

        {/* Bottom Text */}
        <p className="mt-8 text-sm text-center text-gray-400">
          &copy; 2024 Your Tech Hub. All rights reserved. Innovating the future with technology.
        </p>
      </div>
    </footer>
  );
}
