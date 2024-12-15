import React from 'react';
import { instructors } from '@/data/PlanningData';

export default function InstructorsList() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Instructors</h2>
      <div className="space-y-6">
        {instructors.map((instructor) => (
          <div key={instructor.name} className="flex items-center space-x-4">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{instructor.name}</h3>
              <p className="text-sm text-gray-500">{instructor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}