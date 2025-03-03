"use client";
import React, { useState } from 'react';
import { Dumbbell, Calendar, Clock, Users, ChevronRight, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';

export function MainSection() {
    const [activeTab, setActiveTab] = useState('workoutPlans');
    return (
        <div>
          {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <button 
                onClick={() => setActiveTab('workoutPlans')}
                className={`px-6 py-3 rounded-full font-medium transition ${activeTab === 'workoutPlans' ? 'bg-custom-yellow text-black' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Workout Plans
              </button>
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
              <button 
                onClick={() => setActiveTab('progressTracking')}
                className={`px-6 py-3 rounded-full font-medium transition ${activeTab === 'progressTracking' ? 'bg-custom-yellow text-black' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Progress Tracking
              </button>
            </div>

            {/* Workout Plans */}
            {activeTab === 'workoutPlans' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Beginner Plan</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">4 Weeks</span>
                    </div>
                    <p className="text-gray-600 mb-4">Perfect for those new to fitness. Build foundational strength and learn proper techniques.</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 3 workouts per week</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Full-body routines</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Video tutorials included</li>
                    </ul>
                    <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium flex items-center justify-center">
                      View Plan <ChevronRight size={18} className="ml-1" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Intermediate Plan</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">8 Weeks</span>
                    </div>
                    <p className="text-gray-600 mb-4">Take your fitness to the next level with more challenging workouts and specialized routines.</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 4-5 workouts per week</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Split training routines</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Nutrition guidance</li>
                    </ul>
                    <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium flex items-center justify-center">
                      View Plan <ChevronRight size={18} className="ml-1" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Advanced Plan</h3>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">12 Weeks</span>
                    </div>
                    <p className="text-gray-600 mb-4">Designed for experienced fitness enthusiasts looking to push their limits and maximize results.</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 5-6 workouts per week</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Periodized training</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Advanced techniques</li>
                    </ul>
                    <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium flex items-center justify-center">
                      View Plan <ChevronRight size={18} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Class Schedule */}
            {activeTab === 'classSchedule' && (
              <div>
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h3 className="text-2xl font-bold">Weekly Class Schedule</h3>
                    <div className="mt-4 md:mt-0 flex space-x-2">
                      <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">Previous Week</button>
                      <button className="px-4 py-2 bg-custom-yellow text-black rounded-lg hover:bg-yellow-500 transition">Next Week</button>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left">Time</th>
                          <th className="py-3 px-4 text-left">Monday</th>
                          <th className="py-3 px-4 text-left">Tuesday</th>
                          <th className="py-3 px-4 text-left">Wednesday</th>
                          <th className="py-3 px-4 text-left">Thursday</th>
                          <th className="py-3 px-4 text-left">Friday</th>
                          <th className="py-3 px-4 text-left">Saturday</th>
                          <th className="py-3 px-4 text-left">Sunday</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">06:00 - 07:00</td>
                          <td className="py-4 px-4 bg-red-50">HIIT</td>
                          <td className="py-4 px-4 bg-blue-50">Yoga</td>
                          <td className="py-4 px-4 bg-red-50">HIIT</td>
                          <td className="py-4 px-4 bg-green-50">Spinning</td>
                          <td className="py-4 px-4 bg-red-50">HIIT</td>
                          <td className="py-4 px-4 bg-purple-50">CrossFit</td>
                          <td className="py-4 px-4">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">09:00 - 10:00</td>
                          <td className="py-4 px-4 bg-yellow-50">Pilates</td>
                          <td className="py-4 px-4 bg-green-50">Spinning</td>
                          <td className="py-4 px-4 bg-yellow-50">Pilates</td>
                          <td className="py-4 px-4 bg-orange-50">Zumba</td>
                          <td className="py-4 px-4 bg-yellow-50">Pilates</td>
                          <td className="py-4 px-4 bg-blue-50">Yoga</td>
                          <td className="py-4 px-4 bg-blue-50">Yoga</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">17:00 - 18:00</td>
                          <td className="py-4 px-4 bg-orange-50">Zumba</td>
                          <td className="py-4 px-4 bg-purple-50">CrossFit</td>
                          <td className="py-4 px-4 bg-orange-50">Zumba</td>
                          <td className="py-4 px-4 bg-purple-50">CrossFit</td>
                          <td className="py-4 px-4 bg-orange-50">Zumba</td>
                          <td className="py-4 px-4">-</td>
                          <td className="py-4 px-4">-</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-4 px-4 font-medium">19:00 - 20:00</td>
                          <td className="py-4 px-4 bg-pink-50">Body Pump</td>
                          <td className="py-4 px-4 bg-indigo-50">Boxing</td>
                          <td className="py-4 px-4 bg-pink-50">Body Pump</td>
                          <td className="py-4 px-4 bg-indigo-50">Boxing</td>
                          <td className="py-4 px-4 bg-pink-50">Body Pump</td>
                          <td className="py-4 px-4">-</td>
                          <td className="py-4 px-4">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Users size={24} className="text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold">Class Capacity</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Our classes have limited spots to ensure quality instruction and proper attention to all participants.</p>
                    <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium">Book Your Spot</button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Calendar size={24} className="text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Special Events</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Check out our upcoming fitness challenges, workshops, and community events.</p>
                    <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium">View Calendar</button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <Clock size={24} className="text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">Gym Hours</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li className="flex justify-between"><span>Monday - Friday:</span> <span className="font-medium">5:00 AM - 11:00 PM</span></li>
                      <li className="flex justify-between"><span>Saturday:</span> <span className="font-medium">6:00 AM - 10:00 PM</span></li>
                      <li className="flex justify-between"><span>Sunday:</span> <span className="font-medium">7:00 AM - 8:00 PM</span></li>
                    </ul>
                    <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium">Get Directions</button>
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
                        Work one-on-one with our certified personal trainers to achieve your fitness goals faster. 
                        Our trainers create customized workout plans tailored to your specific needs and provide 
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
                
                <h3 className="text-2xl font-bold mb-6">Meet Our Trainers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                      alt="Trainer Sarah" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Sarah Johnson</h4>
                      <p className="text-gray-500 mb-4">Strength & Conditioning Specialist</p>
                      <p className="text-gray-600 mb-6">
                        With 8+ years of experience, Sarah specializes in strength training, 
                        weight loss, and post-rehabilitation exercise programs.
                      </p>
                      <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium">
                        View Profile
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                      alt="Trainer Michael" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Michael Rodriguez</h4>
                      <p className="text-gray-500 mb-4">Functional Training Expert</p>
                      <p className="text-gray-600 mb-6">
                        Michael focuses on functional movement patterns to improve everyday 
                        performance and athletic abilities for clients of all levels.
                      </p>
                      <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium">
                        View Profile
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                      alt="Trainer Emma" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Emma Chen</h4>
                      <p className="text-gray-500 mb-4">Nutrition & Fitness Coach</p>
                      <p className="text-gray-600 mb-6">
                        Emma combines nutritional expertise with effective training methods 
                        to help clients achieve sustainable, long-term results.
                      </p>
                      <button className="w-full bg-custom-yellow text-black py-3 rounded-lg font-medium">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Tracking */}
            {activeTab === 'progressTracking' && (
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6">Track Your Fitness Journey</h3>
                  <p className="text-gray-600 mb-8">
                    Monitor your progress, set goals, and celebrate your achievements with our comprehensive 
                    tracking tools. Our digital platform helps you stay motivated and accountable.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <BarChart3 size={24} className="text-blue-600 mr-3" />
                        <h4 className="text-xl font-bold">Performance Metrics</h4>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Track key metrics like strength gains, cardio performance, body measurements, 
                        and more to visualize your progress over time.
                      </p>
                      <div className="h-48 bg-white rounded-lg p-4 flex items-center justify-center">
                        <p className="text-gray-400 text-center">Interactive charts and graphs will appear here after login</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <Calendar size={24} className="text-green-600 mr-3" />
                        <h4 className="text-xl font-bold">Workout Calendar</h4>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Log your workouts, schedule future sessions, and maintain consistency 
                        with our easy-to-use calendar system.
                      </p>
                      <div className="h-48 bg-white rounded-lg p-4 flex items-center justify-center">
                        <p className="text-gray-400 text-center">Your personalized calendar will appear here after login</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-custom-yellow text-black px-8 py-3 rounded-lg font-medium inline-flex items-center">
                      Sign Up to Start Tracking <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-2xl font-bold mb-4">Power GYM Mobile App</h3>
                      <p className="text-gray-300 mb-6">
                        Take your fitness tracking to the next level with our mobile app. 
                        Access your workout plans, track progress, and connect with trainers 
                        anytime, anywhere.
                      </p>
                      <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                          <CheckCircle size={20} className="text-yellow-400 mr-3" />
                          <span>Real-time workout tracking</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={20} className="text-yellow-400 mr-3" />
                          <span>Exercise video library</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={20} className="text-yellow-400 mr-3" />
                          <span>Nutrition and meal planning</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={20} className="text-yellow-400 mr-3" />
                          <span>Community challenges and support</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={20} className="text-yellow-400 mr-3" />
                          <span>Direct messaging with trainers</span>
                        </li>
                      </ul>
                      <div className="flex space-x-4">
                        <button className="bg-black border border-white px-6 py-3 rounded-lg font-medium">
                          App Store
                        </button>
                        <button className="bg-black border border-white px-6 py-3 rounded-lg font-medium">
                          Google Play
                        </button>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Mobile App" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div> 
        </div>
    )
}