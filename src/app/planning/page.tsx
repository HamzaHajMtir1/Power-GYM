"use client";
import React from 'react';
import { HeroSection } from '@/components/Planning/HeroSection';
import { MainSection } from '@/components/Planning/MainSection';
import { CTASection } from '@/components/Planning/CTASection';
import Footer from '@/components/Footer';

function Planning() {

  return (
    <div className="min-h-screen ">
      <HeroSection />
      <MainSection />
      <CTASection />
      <Footer />
    </div>
    
  );
}

export default Planning;