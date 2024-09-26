'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: "Alex Flex",
    role: "Head Trainer",
    description: "10+ years of experience in strength and conditioning. Alex will push you to your limits and beyond!",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Samantha Stretch",
    role: "Yoga Instructor",
    description: "Certified in Vinyasa and Hatha yoga. Samantha's classes will leave you feeling zen and rejuvenated.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mike Muscle",
    role: "Nutrition Specialist",
    description: "Degree in Nutritional Science. Mike will help you fuel your workouts and reach your fitness goals.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function TeamSection() {
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
                <p className="text-gray-700">{member.description}</p>
              </div>
              <motion.div
                className="flex justify-center space-x-4 py-4 bg-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}