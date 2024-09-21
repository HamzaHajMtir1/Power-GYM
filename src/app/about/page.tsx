import Navbar from '@/components/NavBar';
import OurPictures from '@/components/HeroSection/OurPictures';
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
      <OurPictures />
      <Footer />
    </div>
  );
};

export default AboutPage;