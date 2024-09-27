'use client'

import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Target, Zap } from "lucide-react"
import Image from "next/image"

export function AboutUsComponent() {
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