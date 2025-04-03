"use client";
import React, { useState } from 'react';
import { Clock, ArrowRight, CheckCircle } from 'lucide-react';

export function MainSection() {
    const [activeTab, setActiveTab] = useState('classSchedule');
    return (
        <div>
          {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <button 
                onClick={() => setActiveTab('classSchedule')}
                className={`px-6 py-3 rounded-full font-medium transition ${activeTab === 'classSchedule' ? 'bg-custom-yellow text-black' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Class Schedule
              </button>
              <button 
                onClick={() => setActiveTab('personalTraining')}
                className={`px-6 py-3 rounded-full font-medium transition ${activeTab === 'personalTraining' ? 'bg-custom-yellow text-black' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Personal Training
              </button>
            </div>


            {/* Class Schedule */}
            {activeTab === 'classSchedule' && (
              <div>
                <div className="bg-gray-200 rounded-lg shadow-lg p-6 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h3 className="text-2xl font-bold">Weekly Class Schedule</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left">Time</th>
                          <th className="py-3 px-4 text-left">17:00 - 18:00</th>
                          <th className="py-3 px-4 text-left">18:00 - 19:00</th>
                          <th className="py-3 px-4 text-left">9:00 - 12:00</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">Monday</td>
                          <td className="py-4 px-4 bg-red-50">King Boxing</td>
                          <td className="py-4 px-4 bg-white">-</td>
                          <td className="py-4 px-4 bg-white">-</td>
                        </tr>
                        <tr className="border-b bg-gray-100">
                          <td className="py-4 px-4 font-medium">Tuesday</td>
                          <td className="py-4 px-4 bg-green-50">Karate</td>
                          <td className="py-4 px-4 bg-blue-50">100% Femme</td>
                          <td className="py-4 px-4 bg-gray-100">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">Wednesday</td>
                          <td className="py-4 px-4 bg-red-50">King Boxing</td>
                          <td className="py-4 px-4 bg-white">-</td>
                          <td className="py-4 px-4 bg-white">-</td>
                        </tr>
                        <tr className="border-b bg-gray-100">
                          <td className="py-4 px-4 font-medium">Thursday</td>
                          <td className="py-4 px-4 bg-green-50">Karate</td>
                          <td className="py-4 px-4 bg-blue-50">100% Femme</td>
                          <td className="py-4 px-4 bg-gray-100">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">Friday</td>
                          <td className="py-4 px-4 bg-red-50">King Boxing</td>
                          <td className="py-4 px-4 bg-white">-</td>
                          <td className="py-4 px-4 bg-white">-</td>
                        </tr>
                        <tr className="border-b bg-gray-100">
                          <td className="py-4 px-4 font-medium">Saturday</td>
                          <td className="py-4 px-4 bg-green-50">Karate</td>
                          <td className="py-4 px-4 bg-blue-50">100% Femme</td>
                          <td className="py-4 px-4 bg-gray-100">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">Sunday</td>
                          <td className="py-4 px-4 bg-white">-</td>
                          <td className="py-4 px-4 bg-white">-</td>
                          <td className="py-4 px-4 bg-blue-50">100% Femme</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Training */}
            {activeTab === 'personalTraining' && (
              <div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Personal Training" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-2xl font-bold mb-4">Personal Training Sessions</h3>
                      <p className="text-gray-600 mb-6">
                        Work one-on-one with our certified personal trainer to achieve your fitness goals faster. 
                        Our trainer create customized workout plans tailored to your specific needs and provide 
                        motivation, accountability, and expert guidance throughout your fitness journey.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                          <CheckCircle size={20} className="text-green-500 mr-3 mt-1" />
                          <div>
                            <h4 className="font-medium">Personalized Workout Plans</h4>
                            <p className="text-gray-600 text-sm">Customized to your fitness level, goals, and preferences</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle size={20} className="text-green-500 mr-3 mt-1" />
                          <div>
                            <h4 className="font-medium">Nutrition Guidance</h4>
                            <p className="text-gray-600 text-sm">Expert advice on meal planning and nutritional strategies</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle size={20} className="text-green-500 mr-3 mt-1" />
                          <div>
                            <h4 className="font-medium">Progress Tracking</h4>
                            <p className="text-gray-600 text-sm">Regular assessments to monitor improvements and adjust plans</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle size={20} className="text-green-500 mr-3 mt-1" />
                          <div>
                            <h4 className="font-medium">Technique Correction</h4>
                            <p className="text-gray-600 text-sm">Ensure proper form to maximize results and prevent injuries</p>
                          </div>
                        </div>
                      </div>
                      <button className="bg-custom-yellow text-black px-6 py-3 rounded-lg font-medium inline-flex items-center">
                        Schedule a Consultation <ArrowRight size={18} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
                

              </div>
            )}
          </div> 
        </div>
    )
}