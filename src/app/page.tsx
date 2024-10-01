import Navbar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection/HeroSection';
import { OurServices } from '@/components/HeroSection/OurServices';
import OurPictures from '@/components/HeroSection/OurPictures';
import VideoSection from '@/components/HeroSection/VideoSection';
import Footer from '@/components/Footer';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Planning', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Page() {
  return (
    <div>
      <Navbar navigation={navigation} />
      <HeroSection />
      <OurServices />
      <OurPictures />
      <VideoSection />
      <Footer />
    </div>
  );
}