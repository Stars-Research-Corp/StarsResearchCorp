import React from 'react';
import { Target, Lightbulb, Users2, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About STARS Research Corp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a dynamic community of students at Johns Creek High School who are passionate about 
            technology, programming, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              STARS Research Corp is dedicated to advancing student research in artificial intelligence, 
              machine learning, and data science. We provide hands-on experience through cutting-edge 
              research projects, academic publications, and competitive opportunities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From IEEE research paper publications to AI competitions like WAICY, we prepare students 
              for academic and professional success in the rapidly evolving field of artificial intelligence.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Goal-Oriented</h4>
                <p className="text-sm text-gray-600">Focused on achieving meaningful outcomes</p>
              </div>
              
              <div className="text-center">
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Innovative</h4>
                <p className="text-sm text-gray-600">Encouraging creative problem-solving</p>
              </div>
              
              <div className="text-center">
                <Users2 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Collaborative</h4>
                <p className="text-sm text-gray-600">Working together to achieve more</p>
              </div>
              
              <div className="text-center">
                <Rocket className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Growth-Focused</h4>
                <p className="text-sm text-gray-600">Continuous learning and improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder sections for future content */}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">What We Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Research & Publications</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• IEEE Research Paper Publications</li>
                  <li>• Machine Learning Research Projects</li>
                  <li>• Conference Presentations (INFORMS Analytics+)</li>
                  <li>• Academic Research Collaboration</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Workshops & Competitions</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Machine Learning Workshops</li>
                  <li>• AI Project Development</li>
                  <li>• WAICY AI Competition Participation</li>
                  <li>• Technical Skill Building Sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;