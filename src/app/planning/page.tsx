import React from 'react';
import Hero from '@/components/Planning/Hero';
import WeeklySchedule from '@/components/Planning/WeeklySchedule';
import ClassCategories from '@/components/Planning/ClassCategories';
import InstructorsList from '@/components/Planning/InstructorsList';
import { useSchedule } from '@/components/Planning/useSchedule';

export default function Planning() {
  /*const { schedule, activeDay, setActiveDay } = useSchedule();*/

  return (
    <h1>Planning</h1>
    /*<div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <WeeklySchedule 
          schedule={schedule} 
          activeDay={activeDay} 
          setActiveDay={setActiveDay} 
        />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ClassCategories />
          </div>
          <div>
            <InstructorsList />
          </div>
        </div>
      </div>
    </div>*/
  );
}
