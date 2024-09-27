'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'

const teamMembers = [
  {
    name: "Brahem Aziz",
    role: "Personal Trainer & Fitness Model",
    description: "Personal trainer at Club Gym Stars and Power Gym Bekalta, fitness model, and physical education teacher with a passion for helping clients.",
    image: "/About/aziz.png"
},
{
    name: "Belkahla Md Aziz",
    role: "Kickboxing Coach",
    description: "Kickboxing, Yoseikan Budo, and MMA expert offering group classes and private coaching to help clients reach peak performance and master combat skills.",
    image: "/About/med_aziz.png"
},
{
    name: "Coach Nourhene",
    role: "Karate Coach",
    description: "Specialist in cardio and endurance training, helping clients boost their stamina and fitness through focused group and one-on-one training sessions.",
    image: "/About/nourhen.png"
}

]

export function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 bg-power">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-custom-yellow mb-12">Meet Our Team</h2>
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
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Facebook size={24} />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* npx shadcn@latest add "https://v0.dev/chat/b/b_ue0D9LKmys2?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..PEBLEunTLGdk-7go.zzfQPsYRrQhWAKrtE918xHme6YpcTXCtl6v7Js6moWVQ8hmd2NfNciUuesY.xtSBi3ebG1weruMxXORG4g"



import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">FitFusion Gym</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Classes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Membership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Gym interior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                FitFusion Gym was born from a passion for fitness and a desire to create a community where everyone feels welcome and inspired to achieve their health goals.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2010 by fitness enthusiasts Jack and Jill Smith, our gym has grown from a small studio to a state-of-the-art facility that caters to all fitness levels and interests.
              </p>
              <p className="text-lg text-gray-700">
                We believe that fitness is not just about building muscles, but about building confidence, resilience, and a healthier lifestyle.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Dumbbell className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Cutting-edge Equipment</h3>
              <p className="text-gray-600">Experience fitness with our top-of-the-line, regularly updated gym equipment.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Our certified trainers are passionate about helping you achieve your fitness goals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p className="text-gray-600">We offer tailored fitness plans that adapt to your unique needs and goals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Energetic Community</h3>
              <p className="text-gray-600">Join a vibrant community that motivates and supports each other.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jack Smith", role: "Founder & Head Trainer", image: "/placeholder.svg?height=300&width=300" },
              { name: "Jill Smith", role: "Founder & Nutrition Specialist", image: "/placeholder.svg?height=300&width=300" },
              { name: "Alex Johnson", role: "Yoga Instructor", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
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

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-lg text-gray-700 mb-8">Join FitFusion Gym today and experience the difference!</p>
          <Button size="lg">
            Join Now
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 FitFusion Gym. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
 */