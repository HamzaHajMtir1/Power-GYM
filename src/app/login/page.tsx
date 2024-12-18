'use client';
import React, { FormEvent, useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { login } from './actions'

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/About/about.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="bg-gray-400 rounded-2xl shadow-xl w-full max-w-md p-8 mt-32">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Join Power GYM</h2>
          <p className="text-gray-600 mt-2">Start your fitness journey today</p>
        </div>

        <form className="space-y-6">
        
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-custom-yellow" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-custom-yellow" />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Password"
            />
          </div>
        
          <button
            formAction={login}
            type="submit"
            className="w-full bg-custom-yellow text-gray-900 py-3 rounded-2xl font-semibold hover-bg-custom-yellow transition duration-300 transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 font-semibold">
            <u>Forgot password ?</u>
          </a>
        </p>
      </div>
    </div>
  );
}