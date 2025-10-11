'use client'
import Link from 'next/link';
import PacificHolidaysLogo from './PacificHolidaysLogo';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'About us', href: '/about' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
              <PacificHolidaysLogo />
              <span className="font-logo text-3xl ml-2">Pacific Holidays</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-green-400 transition-colors">
                  {link.name}
              </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
