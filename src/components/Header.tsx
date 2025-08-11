import React, { useState } from 'react';
import { Menu, X, Star, Code } from 'lucide-react';
import logo from '/logo-footer-logo.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center w-fit">
              {/* <Star className="w-8 h-8 text-blue-600 fill-current" />
              <Code className="w-4 h-4 text-purple-600 absolute -bottom-1 -right-1" /> */}
              <img src={logo} className="h-8 w-auto" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">STARS Research Corp</h1>
              <p className="text-sm text-gray-600">Johns Creek High School</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Events</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</button>
            <button onClick={() => scrollToSection('join')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold">
              Join Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">About</button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Events</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Contact</button>
              <button onClick={() => scrollToSection('join')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold w-fit">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;