import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Dumbbell className="h-12 w-12 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Class Schedule</h1>
          <p className="text-xl text-yellow-100">
            Find the perfect class to achieve your fitness goals
          </p>
        </div>
      </div>
    </div>
  );
}