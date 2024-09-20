"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const OurPictures: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      {isClient && (
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <Image
                    fetchPriority="high"
                    quality={100}
                    priority={true}
                    layout="aspect-fill"
                    height={500}
                    width={700}
                    src="/HomePage/Pict3.webp"
                    alt="Power GYM Space."
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <Image
                  fetchPriority="high"
                  quality={100}
                  priority={true}
                  layout="aspect-fill"
                  height={500}
                  width={700}
                  src="/HomePage/Pict1.webp"
                  alt="Power GYM Space."
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <Image
                    fetchPriority="high"
                    quality={100}
                    priority={true}
                    layout="aspect-fill"
                    height={500}
                    width={700}
                    src="/HomePage/Pict2.webp"
                    alt="Power GYM Space."
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <Image
                    fetchPriority="high"
                    quality={100}
                    priority={true}
                    layout="aspect-fill"
                    height={500}
                    width={700}
                    src="/HomePage/Pict3.webp"
                    alt="Power GYM Space."
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <Image
                    fetchPriority="high"
                    quality={100}
                    priority={true}
                    layout="aspect-fill"
                    height={500}
                    width={700}
                    src="/HomePage/Pict4.webp"
                    alt="Power GYM Space."
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurPictures;