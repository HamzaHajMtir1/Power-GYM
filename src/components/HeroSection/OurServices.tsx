import React from 'react';
import { IoMdTime } from "react-icons/io";

export const OurServices: React.FC = () => {
  return (
    <div className="bg-power px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <p className="text-base font-mono text-custom-yellow md:text-lg text-center">
          ______OUR SERVICES FOR YOU
        </p>
        <div className="mb-4">
          <a
            href="/"
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-gray transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
          >
            PUSH YOUR LIMITS FORWARD
            WE OFFER TO YOU
          </a>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden bg-gray-300 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="/OurServices/kingBoxing.webp"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-black hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="Mardi - Jeudi - Samedi"
                >
                  Tuesday - Thursday - Saturday
                </a>
                <span className="flex items-center text-gray-600">
                  <IoMdTime className="mr-1" /> 18:30- 20:00
                </span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-black text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                King Boxing
              </a>
              <p className="mb-2 text-gray-700">
              Kick boxing & MMA timing ⏱️ with our coach <span className='font-bold'>Med Aziz Belkahla</span> 🥊, accessible from the age of 5! Give your child the opportunity to develop physically and mentally in a fun and dynamic environment. 🔥
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden bg-gray-300 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="/OurServices/Karate.webp"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-black hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Monday - Wednesday - Friday
                </a>
                <span className="flex items-center text-gray-600">
                  <IoMdTime className="mr-1" /> 17:00 - 18:00
                </span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-black text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Karate
              </a>
              <p className="mb-2 text-gray-700">
                Join our karate class 🥋 with our coach <span className='font-bold'>Nourhen Toumi</span>, accessible from the age of 5! Give your child the opportunity to develop physically and mentally in a fun and dynamic environment. 🔥
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden bg-gray-300 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="/OurServices/100_Femme.webp"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-black hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Tuesday - Thursday - Friday
                </a>
                <span className="flex items-center text-gray-600">
                  <IoMdTime className="mr-1" /> 18:30 - 19:30
                </span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-black text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                100% Femme
              </a>
              <p className="mb-2 text-gray-700">
                Join our 100% femmee class 🥋 with our coach <span className='font-bold'>Nourhen Toumi</span>, accessible from the women to develop physically and mentally in a fun and dynamic environment. 🔥
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};