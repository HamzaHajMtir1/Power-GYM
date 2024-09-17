"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";




export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-cover bg-center bg-sky-100"
      style={{ backgroundImage: "url('/Footer/footerBachkground.png')" }}
      aria-labelledby="footer-heading">

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {isClient && (
        <div className="mx-auto max-w-7xl px-6 pt-8 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="grid lg:grid-cols-2 lg:gap-8 xs:grid-cols-1">
            <div className="space-y-8 pt-0">
              <div className="flex items-center space-x-4 text-white">
                <Image
                  height={160}
                  width={160}
                  className="h-30"
                  src="/Footer/logo.webp"
                  alt="Power GYM Logo."
                />
              </div>


            </div>

            <div className="grid pt-10 lg:grid-cols-3 lg:gap-2 xs:grid-cols-1 xs:gap-1">
              <div className="lg:pt-0 xs:pt-10">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  <div className="flex items-center">
                    <FaPhoneSquareAlt className="w-5 h-5 text-custom-yellow" />
                    <p className="text-sm leading-6 text-gray-600 ml-2">
                      24222310
                    </p>
                  </div>
                </h3>
              </div>
              <div className="lg:pt-0 xs:pt-12">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="w-5 h-5 text-custom-yellow" />
                    <p className="text-sm leading-6 text-gray-600 ml-2">
                      Bekalta
                    </p>
                  </div>
                </h3>
              </div>
              <div className="lg:pt-0 xs:pt-10">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  <div className="flex items-center">
                    <FaEnvelope className="w-6 h-6 text-custom-yellow" />
                    <p className="text-sm leading-6 text-gray-600 ml-2">
                      powergymbekalta
                    </p>
                  </div>
                </h3>
              </div>
              
            </div>
          </div>

          <div className="xs:pb-6 xs:pt-6 flex justify-center">
            <Link
              href="https://www.facebook.com/promolab.tunisie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 mx-2 text-custom-yellow" />
            </Link>
            <Link
              href="https://www.instagram.com/promolabtunisie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 mx-2 text-custom-yellow" />
            </Link>
          </div>

          <div className="xs:pb-20 xs:pt-10 md:pb-20 md:pt-10 lg:pb-24 lg:pt-10 border-t border-gray-900/10 flex justify-center">
            <p className="text-xs leading-5 text-white">
              &copy; 2024 Power GYM Bekalta, All rights reserved.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}

/* The Old Version */

/*
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";


const navigation = {
  solution: [
    { name: "footer.price", href: "/contact" },
    { name: "footer.document", href: "/contact" },
    { name: "footer.information", href: "/contact" },
    { name: "footer.complaint", href: "/contact" },
    { name: "footer.form", href: "Form.pdf" },
  ],
  aboutus: [
    { name: "footer.ourPartnerships", href: "/about#partnership" },
    { name: "footer.promolabHistory", href: "/about#history" },
    { name: "footer.ourEthics", href: "/about#ethics" },
    { name: "footer.meetourTeam", href: "/about#team" },
    { name: "footer.customerFeedbacks", href: "/about#feedbacks" },
  ],
  quicklinks: [
    { name: "footer.home", href: "/" },
    { name: "footer.aboutUs", href: "/about" },
    { name: "footer.categories", href: "#Catalogue" },
    { name: "footer.products", href: "/produits" },
    { name: "footer.contactUs", href: "/contact" },
  ],
};

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-sky-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {isClient && (
        <div className="mx-auto max-w-7xl px-6 pt-8 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="grid lg:grid-cols-2 lg:gap-8 xs:grid-cols-1">
            <div className="space-y-8 pt-0">
              <div className="flex items-center space-x-4 text-black">
                <Image
                  height={160}
                  width={160}
                  className="h-30"
                  src="/Footer/logo.webp"
                  alt="Power GYM Logo."
                />
              </div>

              <div className="flex space-x-6 items-center">
                <FaPhoneSquareAlt className="w-6 h-6 text-gray-600" />
                <p className="text-sm leading-6 text-gray-600">
                  24222310
                </p>
              </div>

              <div className="flex space-x-6 items-center">
                <FaEnvelope className="w-6 h-6 text-gray-600" />
                <p className="text-sm leading-6 text-gray-600">
                  powergymbekalta@gmail.com
                </p>
              </div>

              <div className="flex space-x-6 items-center">
                <FaMapMarkerAlt className="w-6 h-6 text-gray-600" />
                <p className="text-sm leading-6 text-gray-600">
                  Bekalta
                </p>
              </div>
            </div>

            <div className="grid pt-10 lg:grid-cols-3 lg:gap-2 xs:grid-cols-1 xs:gap-1">
              <div className="lg:pt-0 xs:pt-10">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    AboutUs
                </h3>
                <ul role="list" className="pt-6 xs:mt:1 space-y-4 xs:space-y-1">
                  {navigation.aboutus.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <div className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          test1
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:pt-0 xs:pt-10">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Quicklinks
                </h3>
                <ul role="list" className="pt-6 xs:mt:1 space-y-4 xs:space-y-1">
                  {navigation.quicklinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <div className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            test2
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:pt-0 xs:pt-12">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Solution
                </h3>
                <ul role="list" className="pt-6 xs:mt:1 space-y-4 xs:space-y-1">
                  {navigation.solution.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} target="_blank">
                        <div className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            test3
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="xs:pb-6 xs:pt-6 flex justify-center">
            <Link
              href="https://www.facebook.com/promolab.tunisie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 mx-2" />
            </Link>
            <Link
              href="https://www.threads.net/@promolab_tun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Threads"
            >
              <svg className="w-6 h-6 mx-2" height="1em" viewBox="0 0 448 512">
                <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/promolabtunisie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 mx-2" />
            </Link>
          </div>

          <div className="xs:pb-20 xs:pt-10 md:pb-20 md:pt-10 lg:pb-24 lg:pt-10 border-t border-gray-900/10">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2024 Power GYM Bekalta, All rights reserved.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
*/