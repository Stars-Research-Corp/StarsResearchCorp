import React from 'react';
import { ExternalLink, Users, Calendar, MessageCircle } from 'lucide-react';

const JoinSection = () => {
  return (
    <section id="join" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join STARS Research Corp?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Take the first step towards an exciting journey in technology and computing. 
            Join our community of innovators and creators!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-blue-200 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Join Our Community</h3>
                <p className="text-blue-100">
                  Connect with fellow students who share your passion for technology and programming.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Calendar className="w-8 h-8 text-purple-200 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Regular Meetings</h3>
                <p className="text-blue-100">
                  Participate in weekly meetings, workshops, and special events throughout the school year.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-8 h-8 text-green-200 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Stay Connected</h3>
                <p className="text-blue-100">
                  Get updates on club activities, project opportunities, and upcoming competitions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Sign Up Today!
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">What you'll get:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Access to exclusive workshops and tutorials</li>
                  <li>• Opportunities to work on real projects</li>
                  <li>• Networking with industry professionals</li>
                  <li>• Competition and hackathon participation</li>
                  <li>• Leadership and mentorship opportunities</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=mLHcDGmBcEu6n9p-O6cAwngYjNSXNvZArBLFqVDKa_RUMlpPVVVFNjNHNUpCS0wxOEtZTVM1UkNBSi4u&embed=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Join Our Club - Sign Up Now!</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-gray-600 text-center mt-4">
              Click above to fill out our membership form and join STARS Research Corp!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;