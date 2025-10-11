'use client'
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({
  initialBgColor = 'bg-transparent',
  initialTextColor = 'text-white',
  initialLogoColor = 'text-white'
}) => {
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navClassName = `transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 bg-[#d5e880] text-[#0B3D4A] shadow-lg' : `absolute top-0 left-0 right-0 z-50 ${initialBgColor} ${initialTextColor}`}`;
  const linkClassName = `relative group transition-colors duration-300 ${isSticky ? 'text-[#0B3D4A] hover:text-primary' : `${initialTextColor} hover:text-[#d5e880]`}`;
  const underlineClassName = isSticky ? 'bg-[#0B3D4A]' : 'bg-[#d5e880]';
  const mobileButtonClassName = `transition-colors duration-300 p-2 ${isSticky ? 'text-[#0B3D4A] hover:text-primary' : `${initialTextColor} hover:text-[#d5e880]`}`;
  const logoClassName = `font-logo text-lg sm:text-2xl lg:text-3xl ml-2 ${isSticky ? 'text-[#0B3D4A]' : initialLogoColor}`;


  return (
    <nav className={navClassName}>
      <div className="px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold flex items-center">
            <div className="w-10 h-10 sm:w-14 sm:h-14 relative bg-white rounded-full">
              <Image 
                src="/Logo.png" 
                alt="Pacific Holidays Logo" 
                fill
                className="object-cover pt-1 rounded-full"
              />
            </div>
            <span className={logoClassName}>Pacific Holidays</span>
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

      <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#0B3D4A] to-[#1a4d5a] transform transition-all duration-500 ease-in-out z-40 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#2a5d6a]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative bg-white rounded-full p-1">
              <Image 
                src="/Logo.png" 
                alt="Pacific Holidays Logo" 
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span className="text-white font-logo text-xl">Pacific Holidays</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#d5e880] transition-all duration-300 p-2 rounded-full hover:bg-white/10"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[#0B3D4A] bg-[#d5e880] rounded-br-[50] hover:text-[#d5e880] text-lg font-medium transition-all duration-300 py-4 px-4 rounded-md hover:bg-white/10 hover:translate-x-2"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d5e880]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#2a5d6a]">
          <div className="space-y-4">
            <div className="text-center text-white/80 text-sm">
              <p>Ready for your next adventure?</p>
            </div>
            <Button href="/contact" className="w-full text-center bg-[#d5e880] text-[#0B3D4A] hover:bg-[#c4d670] transition-all duration-300 transform hover:scale-105">
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
