import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { TariffPageComponent } from "../../components/tarifs/tariff-page";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Planning', href: '#' },
  { name: 'Contact', href: '#' },
];

const TarifPage: React.FC = () => {
  return (
    <div>
      <Navbar navigation={navigation} />
      <TariffPageComponent />
      <Footer />
    </div>
  );
};

export default TarifPage;