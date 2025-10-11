'use client'
import Link from 'next/link';
import PacificHolidaysLogo from './PacificHolidaysLogo';
import Button from './Button';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'About us', href: '/about' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent text-white">
      <div className="px-10 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
              <PacificHolidaysLogo />
              <span className="font-logo text-3xl ml-2">Pacific Holidays</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
          {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[#fff] hover:text-[#d5e880] relative group transition-colors duration-300">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5e880] group-hover:w-full transition-all duration-300"></span>
              </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center">
          <Button href="/contact">
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
