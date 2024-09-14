import Navbar from '@/components/Navbar/NavBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import { OurServices } from '@/components/HeroSection/OurServices';
import OurPictures from '@/components/HeroSection/OurPictures';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Page() {
  return (
    <div>
      <Navbar navigation={navigation} />
      <HeroSection />
      <OurServices />
      <OurPictures />
    </div>
  );
}