import React from 'react';
import { Schedule, DaySchedule } from '@/types/PlanningTypes';
import ScheduleCard from './ScheduleCard';

interface WeeklyScheduleProps {
  schedule: Schedule;
  activeDay: string;
  setActiveDay: (day: string) => void;
}

export default function WeeklySchedule({ schedule, activeDay, setActiveDay }: WeeklyScheduleProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex divide-x divide-gray-200">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-1 py-4 px-4 text-sm font-medium text-center ${
                activeDay === day
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {day}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-6">
        <div className="grid gap-4">
          {schedule[activeDay as keyof Schedule].map((session, index) => (
            <ScheduleCard key={index} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
}