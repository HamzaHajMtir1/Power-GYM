'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: "Brahim Aziz",
    role: "Board trainer & Personal Trainer",
    image: "/About/aziz.png",
  },
  {
    name: "Belkahla Md Aziz",
    role: "Kickboxing trainer",
    image: "/About/med_aziz.png",
  },
  {
    name: "Nourhen",
    role: "Karate Coach",
    image: "/About/nourhen.png",
  },
]

export function MeetOurTeam() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 bg-power">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Meet Our Dream Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">{member.name}</p>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}