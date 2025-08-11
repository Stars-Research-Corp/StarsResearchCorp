import React from 'react';
import { Star, Code, Heart } from 'lucide-react';
import logo from '/logo-footer-logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h3 className="text-xl font-bold">STARS Research Corp</h3>
                <p className="text-gray-400 text-sm">Johns Creek High School</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering students to explore, create, and innovate in the world of technology 
              and computer science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* School Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">School Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>Johns Creek High School</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by STARS Research Corp</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 STARS Research Corp - Johns Creek High School
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;