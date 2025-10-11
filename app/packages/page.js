'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar.js';
import Button from '../../components/Button.js';
import { FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
import PackageCard from '../../components/PackageCard.js';
import { packages } from '../../data/packages.js';


export default function Packages() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="bg-white">
      <Navbar 
        initialBgColor="bg-white"
        initialTextColor="text-[#0B3D4A]"
        initialLogoColor="text-[#0B3D4A]"
      />
        <div className="bg-[#0B3D4A]/80 pt-16 md:pt-20 text-white">
          <div className="bg-[#0B3D4A]/50 px-10 md:px-28 py-10 md:py-20">
              <h1 className="text-5xl font-heading font-bold">Browse Trips</h1>
              <p className="font-body mt-2"><Link href="/">Home</Link> <span className='text-gray-400'>/</span> Packages</p>
            </div>
        </div>
      <main className="container mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-sm tracking-widest">BUCKETLIST HOTSPOTS</p>
          <h2 className="text-4xl font-heading font-bold text-gray-800 mt-2">Trending Extreme Travel Spots</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.name}
              name={pkg.name}
              description={pkg.description}
              price={pkg.price}
              image={pkg.image} 
              slug={pkg.slug}
            />
          ))}
        </div>
      </main>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 rounded-full shadow-lg cursor-pointer"
        >
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
}
