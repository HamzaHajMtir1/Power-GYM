import Navbar from '@/components/NavBar';
import AboutUsHeroSection from '@/components/AboutUs/AboutUsHeroSection';
import Footer from '@/components/Footer';
import { OurWelcome } from '@/components/AboutUs/OurWelcome';
import { WhatSetsUsApart } from '@/components/AboutUs/WhatSetsUsApart';
import { MeetOurTeam } from '@/components/AboutUs/MeetOurTeam';
import { CallToAction } from '@/components/AboutUs/CallToAction';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Tarifs', href: '#' },
  { name: 'Planning', href: '#' },
  { name: 'Contact', href: '#' },
];
const AboutPage: React.FC = () => {
  return (
    <div>
    <Navbar navigation={navigation} />
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