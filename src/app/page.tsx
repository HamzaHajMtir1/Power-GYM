import HeroSection from '@/components/HeroSection/HeroSection';
import { OurServices } from '@/components/HeroSection/OurServices';
import OurPictures from '@/components/HeroSection/OurPictures';
import VideoSection from '@/components/HeroSection/VideoSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <OurPictures />
      <VideoSection />
      <Footer />
    </div>
  );
}