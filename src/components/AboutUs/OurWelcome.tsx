'use client';

import Image from 'next/image';
import '../../app/globals.css'; // Ensure this path is correct based on your project structure

export function OurWelcome() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-custom-yellow "></h2>
      <h2 className="text-4xl font-bold text-center mb-8 text-custom-yellow fireworks">Our welcome</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/About/about-power.png"
            alt="Gym interior"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-300 mb-4">
            Welcome to Power Gym Bekalta! Your ultimate fitness destination. Whether you're looking to build strength, improve endurance, or reach peak athletic performance,
          </p>
          <p className="text-lg text-gray-300 mb-4">
            our state-of-the-art facilities and expert trainers are here to guide you every step of the way. Unleash your potential with us through a wide range of classes, from strength training and boxing to martial arts. Join a community of fitness enthusiasts committed to achieving their goals.
          </p>
          <p className="text-lg text-gray-300">
            We believe that fitness is not just about building muscles, but about building confidence, resilience, and a healthier lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}