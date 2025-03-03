'use client';
import React, { useState } from 'react';
import { User, Mail, Lock, Phone } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const { error } = await response.json();
      alert(error);
      return;
    }

    alert('User created successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-custom-yellow" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Full Name"
            />
          </div>

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

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-custom-yellow" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Phone Number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-custom-yellow text-gray-900 py-3 rounded-2xl font-semibold hover-bg-custom-yellow transition duration-300 transform hover:scale-[1.02]"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-custom-yellow hover-text-custom-yellow font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}