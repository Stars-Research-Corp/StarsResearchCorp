import React from 'react';
import { ArrowRight, Users, Briefcase, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-600 rotate-45"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-purple-600 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-blue-600 rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-purple-600 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              STARS Research Corp
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Johns Creek High School's premier computing and technology club. 
            Join us to explore, create, and innovate in the world of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button onClick={() => {
              const element = document.getElementById('join');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center space-x-2 shadow-lg">
              <span>Join Our Club</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }} className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+ Members</h3>
              <p className="text-gray-600">Active students passionate about technology</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Internship Opportunities</h3>
              <p className="text-gray-600">Real-world experience with industry partners</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FileText className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Research Papers</h3>
              <p className="text-gray-600">IEEE publications and academic research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;