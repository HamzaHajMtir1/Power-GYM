'use client';

import { Dumbbell, Users, Target, Zap } from 'lucide-react';

export function WhatSetsUsApart() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">What Sets Us Apart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Dumbbell className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Cutting-edge Equipment</h3>
          <p className="text-gray-600">Experience fitness with our top-of-the-line, regularly updated gym equipment.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
          <p className="text-gray-600">Our certified trainers are passionate about helping you achieve your fitness goals.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Target className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
          <p className="text-gray-600">We offer tailored fitness plans that adapt to your unique needs and goals.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="text-xl font-semibold mb-2">Energetic Community</h3>
          <p className="text-gray-600">Join a vibrant community that motivates and supports each other.</p>
        </div>
      </div>
    </section>
  );
}