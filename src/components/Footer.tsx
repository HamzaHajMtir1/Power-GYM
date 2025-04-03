"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
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
            <a
              href="https://www.facebook.com/profile.php?id=100093231261606"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover-text-custom-yellow transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/powergymbekalta1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover-text-custom-yellow transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover-text-custom-yellow transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.google.com/maps/place/PowerGymbekalta/@35.6232343,10.9895983,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover-text-custom-yellow transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaMapMarkerAlt size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="/tarifs" className="text-gray-400 hover:text-white transition">Tarifs</a></li>
            <li><a href="/planning" className="text-gray-400 hover:text-white transition">Planning</a></li>
            <li><a href="/store" className="text-gray-400 hover:text-white transition">Store</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Workout Plans</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Group Classes</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Personal Training</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Nutrition Consultations</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Nutrition Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Fitness Assessment</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>123 Fitness Street, Bekalta</li>
            <li>+216 123 456 789</li>
            <li>info@powergym.com</li>
            <li>Mon-Sat: 8:00 - 22:00</li>
            <li>Sun: 16:00 - 21:00</li>
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