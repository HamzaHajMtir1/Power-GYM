'use client';

import Image from 'next/image';

export function MeetOurTeam() {
  const teamMembers = [
    { name: "Jack Smith", role: "Founder & Head Trainer", image: "/placeholder.svg?height=300&width=300" },
    { name: "Jill Smith", role: "Founder & Nutrition Specialist", image: "/placeholder.svg?height=300&width=300" },
    { name: "Alex Johnson", role: "Yoga Instructor", image: "/placeholder.svg?height=300&width=300" },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}