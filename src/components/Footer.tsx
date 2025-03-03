"use client";

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
          <img
          alt="Power GYM Logo"
          src="/favicon.ico"
          className="h-12 w-auto"
        />
            <span className="font-bold text-xl">Power GYM</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transform your body, elevate your mind.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">FB</a>
            <a href="#" className="text-gray-400 hover:text-white transition">IG</a>
            <a href="#" className="text-gray-400 hover:text-white transition">WA</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Tarifs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Planning</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Workout Plans</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Group Classes</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Personal Training</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Nutrition Coaching</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Fitness Assessment</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>123 Fitness Street, Bekalta</li>
            <li>+216 123 456 789</li>
            <li>info@powergym.com</li>
            <li>Mon-Fri: 5:00 AM - 11:00 PM</li>
            <li>Sat-Sun: 6:00 AM - 10:00 PM</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {currentYear} Power GYM Bekalta. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;