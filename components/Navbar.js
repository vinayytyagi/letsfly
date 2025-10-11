'use client'
import Link from 'next/link';
import PacificHolidaysLogo from './PacificHolidaysLogo';
import Button from './Button';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'About us', href: '/about' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClassName = `transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-[#d5e880] text-[#0B3D4A] shadow-lg' : 'absolute top-0 left-0 right-0 z-50 bg-transparent text-white'}`;
  const linkClassName = `relative group transition-colors duration-300 ${isSticky ? 'text-[#0B3D4A] hover:text-primary' : 'text-[#fff] hover:text-[#d5e880]'}`;
  const underlineClassName = isSticky ? 'bg-[#0B3D4A]' : 'bg-[#d5e880]';
  const mobileButtonClassName = `transition-colors duration-300 p-2 ${isSticky ? 'text-[#0B3D4A] hover:text-primary' : 'text-white hover:text-[#d5e880]'}`;

  return (
    <nav className={navClassName}>
      <div className="px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <PacificHolidaysLogo />
            </div>
            <span className={`font-logo text-lg sm:text-2xl lg:text-3xl ml-2 ${isSticky ? 'text-[#0B3D4A]' : 'text-white'}`}>Pacific Holidays</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClassName}>
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underlineClassName} group-hover:w-full transition-all duration-300`}></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Button href="/contact" className={isSticky ? 'bg-white text-[#0b3d4a]' : 'bg-[0B3D4A] text-[#0B3D4A]'}>
            Register Now
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={mobileButtonClassName}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed top-0 right-0 h-full w-68 bg-[#0B3D4A] transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-[#d5e880] transition-colors duration-300 p-2"
          >
            <FaTimes size={24} />
          </button>

          <div className="flex flex-col space-y-6 mb-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#d5e880] text-xl font-semibold transition-colors duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto mb-8">
            <Button href="/contact" className="w-full text-center">
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 bg-opacity-30 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
