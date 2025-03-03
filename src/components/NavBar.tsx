'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname(); // Get the current path

  return (
    <header className="absolute inset-x-10 rounded-full top-4 z-50 backdrop-blur-md bg-white/30">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
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
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-md font-bold leading-4 px-3 py-2 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                  isActive
                    ? 'bg-custom-yellow text-gray-900'
                    : 'text-white hover:text-gray-700 hover:bg-custom-yellow'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-x-4">
          {/* Social Media Icons */}
          <a
            href="https://www.facebook.com/profile.php?id=100093231261606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/powergymbekalta1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.google.com/maps/place/PowerGymbekalta/@35.6232343,10.9895983,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaMapMarkerAlt size={24} />
          </a>
          {/* Register Button */}
          <a
            href="/signup"
            className="ml-4 text-md font-bold leading-4 px-4 py-2 rounded-full bg-custom-yellow text-gray-900 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </a>
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
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
              {/* Navigation Links */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        isActive
                          ? 'bg-custom-yellow text-gray-900'
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                {/* Sign Up Button */}
                <a
                  href="/signup"
                  className="mt-4 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-custom-yellow text-gray-900 text-center"
                >
                  Sign Up
                </a>
              </div>
              {/* Social Media Icons */}
              <div className="py-6 flex gap-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100093231261606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/powergymbekalta1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://www.google.com/maps/place/PowerGymbekalta/@35.6232343,10.9895983,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
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