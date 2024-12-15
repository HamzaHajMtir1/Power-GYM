import React from 'react';
import { categories } from '@/data/PlanningData';

export default function ClassCategories() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Class Categories</h2>
      <div className="grid gap-6">
        {categories.map((category) => (
          <div key={category.name} className="flex items-start space-x-4">
            <div className={`w-2 h-12 rounded-full ${category.color} mt-1`} />
            <div>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
              <p className="text-gray-500 mt-1">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}