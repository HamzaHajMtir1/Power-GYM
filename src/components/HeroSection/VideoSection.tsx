"use client";

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Adjust this option as needed
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      {isClient && (
        <>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              know more about our gym
            </h2>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none" ref={ref}>
            {inView && (
              <article className="relative isolate justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <video
                  loop
                  playsInline
                  src="/HomePage/PowerGYM.webm"
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                  autoPlay
                  muted
                  controls
                />
              </article>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoSection;