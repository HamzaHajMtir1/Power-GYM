export const categories = [
    {
      name: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      color: 'bg-red-500',
    },
    {
      name: 'Cardio',
      description: 'Improve your endurance and burn calories with high-energy cardio sessions.',
      color: 'bg-blue-500',
    },
    {
      name: 'Yoga & Flexibility',
      description: 'Enhance flexibility, balance, and mental wellness through yoga practices.',
      color: 'bg-green-500',
    },
    {
      name: 'HIIT',
      description: 'Maximum results in minimum time with High-Intensity Interval Training.',
      color: 'bg-purple-500',
    },
  ];
  
  export const instructors = [
    {
      name: 'Sarah Johnson',
      specialization: 'Yoga & Meditation',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      name: 'Mike Thompson',
      specialization: 'Strength & Conditioning',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      name: 'Emma Davis',
      specialization: 'HIIT & Cardio',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    },
  ];
  
  export const defaultSchedule = {
    Monday: [
      {
        className: 'Morning Yoga',
        time: '07:00 - 08:00',
        instructor: 'Sarah Johnson',
        capacity: 20,
        categoryColor: 'bg-green-500',
      },
      {
        className: 'HIIT Blast',
        time: '09:00 - 10:00',
        instructor: 'Emma Davis',
        capacity: 15,
        categoryColor: 'bg-purple-500',
      },
      {
        className: 'Strength Fundamentals',
        time: '17:00 - 18:30',
        instructor: 'Mike Thompson',
        capacity: 12,
        categoryColor: 'bg-red-500',
      },
    ],
    Tuesday: [
      {
        className: 'Cardio Kickboxing',
        time: '08:00 - 09:00',
        instructor: 'Emma Davis',
        capacity: 20,
        categoryColor: 'bg-blue-500',
      },
      // Add more sessions for Tuesday
    ],
    Wednesday: [
      {
        className: 'Power Yoga',
        time: '07:00 - 08:00',
        instructor: 'Sarah Johnson',
        capacity: 20,
        categoryColor: 'bg-green-500',
      },
      // Add more sessions for Wednesday
    ],
    Thursday: [
      {
        className: 'Muscle Pump',
        time: '18:00 - 19:00',
        instructor: 'Mike Thompson',
        capacity: 15,
        categoryColor: 'bg-red-500',
      },
      // Add more sessions for Thursday
    ],
    Friday: [
      {
        className: 'HIIT & Core',
        time: '07:00 - 08:00',
        instructor: 'Emma Davis',
        capacity: 20,
        categoryColor: 'bg-purple-500',
      },
      // Add more sessions for Friday
    ],
    Saturday: [
      {
        className: 'Weekend Warrior',
        time: '09:00 - 10:30',
        instructor: 'Mike Thompson',
        capacity: 20,
        categoryColor: 'bg-red-500',
      },
      // Add more sessions for Saturday
    ],
    Sunday: [
      {
        className: 'Gentle Yoga',
        time: '10:00 - 11:00',
        instructor: 'Sarah Johnson',
        capacity: 20,
        categoryColor: 'bg-green-500',
      },
      // Add more sessions for Sunday
    ],
  };