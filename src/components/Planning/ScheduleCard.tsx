import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Session } from '@/types/PlanningTypes';

interface ScheduleCardProps {
  session: Session;
}

export default function ScheduleCard({ session }: ScheduleCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
      <div className="flex items-center space-x-4">
        <div className={`w-2 h-12 rounded-full ${session.categoryColor}`} />
        <div>
          <h3 className="font-semibold text-gray-900">{session.className}</h3>
          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {session.time}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {session.capacity} spots
            </div>
          </div>
        </div>
      </div>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors">
        Book Now
      </button>
    </div>
  );
}