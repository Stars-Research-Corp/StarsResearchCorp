import React from 'react';
import { Calendar, Folder, Mail } from 'lucide-react';

const PlaceholderSections = () => {
  return (
    <>
      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Stay tuned for exciting workshops, competitions, and club activities
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Club Calendar</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-md">
                <iframe 
                  src="https://calendar.google.com/calendar/u/0/embed?src=2230e4d8d7fc64050295a1a34ea42d2f3cd4a4130a02eb4695773e63f5b2880c@group.calendar.google.com&ctz=America/New_York" 
                  style={{border: 0}} 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  scrolling="no"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Folder className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600">
              Discover the innovative solutions our members have created
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/Mediapipe.png" 
                  alt="Mediapipe Body Movement Tracking" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Body movement tracking with Google's media pipe machine learning model
              </h3>
              <p className="text-gray-600">
  Our club employed Google’s MediaPipe framework to build a real-time body pose detection and movement analysis system. Using its advanced machine learning and computer vision features, we accurately tracked key body landmarks to map posture and motion with high precision. Processing live video streams with minimal delay, the system enabled detailed study of biomechanics, athletic performance, and gesture-based interaction.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/MLProject.png" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Predictive Modeling with Scikit-Learn: Regression & Classification
              </h3>
              <p className="text-gray-600">
  Our club leveraged Python’s Scikit-Learn library to develop predictive models for both regression and classification tasks. In one project, we built a housing price predictor, training the model to identify patterns in historical data and estimate future prices. A performance chart comparing actual vs. predicted values revealed both the strengths of our model and opportunities for refinement. This project gave members practical, hands-on experience applying machine learning techniques to real-world datasets.
              </p>
            </div>
            

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/starsresearch2025-1.png" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Percent Impact of Sociodemographic and Digital Factors on Health
              </h3>
              <p className="text-gray-600">
                Our team used machine learning models including GLM, Deep Learning, Random Forest, Decision Tree, and Support Vector Machines to analyze national datasets and measure how sociodemographic, digital, healthcare, environmental, and behavioral factors influence physical and mental health. The findings reveal varying impacts depending on the factor, offering insights that could guide future health policy and interventions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/INFORMS.png" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                INFORMS Analytics+ Conference
              </h3>
              <p className="text-gray-600">
  Our team applied a range of advanced machine learning models to analyze national datasets on physical and mental health factors. Guided by a university professor, we refined our methods and synthesized our results for presentation at the 2025 INFORMS Analytics Conference, a premier national gathering of PhD scholars, graduate researchers, and industry experts. Being selected to present at such a prestigious venue was a rare distinction for high school students, giving us the opportunity to engage with leading academics and share our work on a highly specialized stage.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <img 
                  src="/starsresearch2024-1.png" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bridging the Digital Divide for Better Public Health
              </h3>
              <p className="text-gray-600">
Presented at the 2024 National INFORMS Analytics+ Conference, this project explored how technology access, device type, and internet usage patterns influence mental and physical health outcomes across U.S. regions. Using secondary datasets from NTIA, CDC, and FCC, the team conducted spatial regression analysis to uncover key “digital determinants of health.” Findings revealed nuanced impacts—such as the positive effects of mobile phones on mental health but negative effects on physical health, and differing health outcomes based on where and how people go online. The research highlights the urgent need to address digital inequities to improve public health nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? Want to learn more? We'd love to hear from you!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md border border-gray-200">
  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0H8a2 2 0 00-2 2v3a2 2 0 002 2h4m0 0v4m0 0h-4m4 0h4" />
    </svg>
    Contact Information
  </h3>

  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0 4 4 0 018 0zm0 0v5m-4-5v5" />
      </svg>
      <span className="text-gray-600">kungh@fultonschools.org</span>
    </div>

    <div className="flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-gray-600">Work Hours: 8:00 AM – 5:00 PM</span>
    </div>
  </div>
</div>

              
              <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Social Media & Links</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
                    <div className="space-y-3">
                      <a 
                        href="https://www.instagram.com/jchsstarsresearchcorps/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <span>Instagram</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <br />
                      <a 
                        href="https://github.com/Stars-Research-Corp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <span>GitHub</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceholderSections;