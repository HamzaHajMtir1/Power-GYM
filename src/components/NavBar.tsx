'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

interface NavigationItem {
  name: string;
  href: string;
}

interface NavbarProps {
  navigation: NavigationItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    // Récupérer l'élément actif depuis le stockage local
    const savedActiveItem = localStorage.getItem('activeNavItem');
    if (savedActiveItem) {
      setActiveItem(savedActiveItem);
    } else {
      setActiveItem('Home'); // Définir "Home" comme activé par défaut
    }
  }, []);

  const handleItemClick = (name: string) => {
    setActiveItem(name);
    localStorage.setItem('activeNavItem', name); // Enregistrer l'élément actif dans le stockage local
  };

  return (
    <header className="absolute inset-x-10 rounded-full top-4 z-50 backdrop-blur-md bg-white/30">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Power GYM Bekalta</span>
            <img
              alt="Power GYM Logo"
              src="/favicon.ico"
              className="h-12 w-auto"
            />
            <h2 className="ml-3 text-xl font-bold text-gray-100">Power GYM Bekalta</h2>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleItemClick(item.name)}
              className={`text-md font-bold leading-4 px-3 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                activeItem === item.name ? 'bg-custom-yellow text-gray-900' : 'text-white hover:text-gray-700 hover:bg-custom-yellow'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
          <a href="https://www.facebook.com/profile.php?id=100093231261606" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/powergymbekalta1" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.google.com/maps/place/PowerGymbekalta/@35.6232343,10.9895983,17z/data=!4m6!3m5!1s0x13023d5117055d6d:0xf71f30353657d63d!8m2!3d35.6232343!4d10.9895983!16s%2Fg%2F11svlg8j5z?hl=en-TN&entry=tts&shorturl=1" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            <FaMapMarkerAlt size={24} />
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Power GYM Bekalta</span>
              <img
                alt="Power GYM Logo"
                src="/favicon.ico"
                className="h-12 w-auto"
              />
              <h2 className="ml-3 text-xl font-bold text-black">Power GYM Bekalta</h2>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-custom-yellow"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleItemClick(item.name)}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      activeItem === item.name ? 'bg-custom-yellow text-gray-900' : 'text-gray-900'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 flex gap-x-4">
                <a href="https://www.facebook.com/profile.php?id=100093231261606" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.instagram.com/powergymbekalta1" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://www.google.com/maps/place/PowerGymbekalta/@35.6232343,10.9895983,17z/data=!4m6!3m5!1s0x13023d5117055d6d:0xf71f30353657d63d!8m2!3d35.6232343!4d10.9895983!16s%2Fg%2F11svlg8j5z?hl=en-TN&entry=tts&shorturl=1" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                  <FaMapMarkerAlt size={24} />
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;