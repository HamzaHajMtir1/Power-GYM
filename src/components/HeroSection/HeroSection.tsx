'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'

export default function HeroSection() {
  const [occupancy, setOccupancy] = useState(0)

  useEffect(() => {
    // Simulate real-time occupancy updates
    const interval = setInterval(() => {
      setOccupancy(Math.floor(Math.random() * 50) + 20) // Random number between 20 and 70
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/HomePage/Pict1.webp"
          alt="Gym background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          PUSH YOUR LIMITS
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Transform your body, elevate your mind
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-custom-yellow hover-bg-custom-yellow text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
            Start Your Journey
            <ArrowRight className="ml-2" />
          </button>
        </motion.div>

        {/* Animated elements */}
        <div className="absolute top-10 left-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="w-16 h-16 border-t-4 border-r-4 border-yellow-300 rounded-full"
          />
        </div>
        <div className="absolute bottom-10 right-10">
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0.5
            }}
            className="w-20 h-20 bg-custom-yellow rounded-full flex items-center text-gray-700 justify-center text-2xl font-bold"
          >
            GO!
          </motion.div>
        </div>

      </div>
    </div>
  )
}