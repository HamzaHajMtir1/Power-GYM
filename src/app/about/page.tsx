import Navbar from '@/components/NavBar';
import AboutUsHeroSection from '@/components/AboutUs/AboutUsHeroSection';
import {TeamSection} from '@/components/AboutUs/TeamSection';
import Footer from '@/components/Footer';

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
      <TeamSection />
      <Footer />
    </div>
  );
};

export default AboutPage;