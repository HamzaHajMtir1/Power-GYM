import AboutUsHeroSection from '@/components/AboutUs/AboutUsHeroSection';
import Footer from '@/components/Footer';
import { OurWelcome } from '@/components/AboutUs/OurWelcome';
import { WhatSetsUsApart } from '@/components/AboutUs/WhatSetsUsApart';
import { MeetOurTeam } from '@/components/AboutUs/MeetOurTeam';
import { CallToAction } from '@/components/AboutUs/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutUsHeroSection />
      <OurWelcome />
      <WhatSetsUsApart />
      <MeetOurTeam />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default AboutPage;