import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/NavBar';
import AuthProvider from "@/providers/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Planning', href: '/planning' },
  { name: 'Store', href: '/store' },
  { name: 'Contact', href: '/contact' },
];

export const metadata: Metadata = {
  title: "Power GYM Bekalta",
  description:
    "Site web pour la salle de sport Power Gym. Il présente les services, cours, entraîneurs et infos clés. Conçu pour une navigation fluide et une expérience moderne, le site est responsive et utilise des technologies web récentes pour de meilleures performances.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Navbar navigation={navigation} />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}