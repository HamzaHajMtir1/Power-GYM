'use client';

import { useState } from 'react';
import { defaultSchedule } from '@/data/PlanningData';

export function useSchedule() {
  const [activeDay, setActiveDay] = useState('Monday');
  const schedule = defaultSchedule;

  return {
    schedule,
    activeDay,
    setActiveDay,
  };
}
