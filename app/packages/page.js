'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar.js';
import Button from '../../components/Button.js';
import { FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
import PackageCard from '../../components/PackageCard.js';

const packages = [
  {
    name: 'Exotic Goa',
    slug: 'exotic-goa',
    description: 'A 4-day trip to the sunny beaches of Goa, where you can relax, enjoy water sports, and experience the vibrant nightlife.',
    price: '$300',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Majestic Himalayas',
    slug: 'majestic-himalayas',
    description: 'A 7-day trek through the breathtaking Himalayan mountains, offering stunning views and a challenging adventure.',
    price: '$800',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Cultural Rajasthan',
    slug: 'cultural-rajasthan',
    description: 'A 5-day tour of the vibrant palaces and forts of Rajasthan, showcasing the rich history and culture of the region.',
    price: '$500',
    image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Serene Kerala',
    slug: 'serene-kerala',
    description: 'A 6-day journey through the tranquil backwaters of Kerala, with its lush greenery and peaceful houseboat stays.',
    price: '$600',
    image: 'https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];


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
      <Navbar />
        <div className="bg-[#0B3D4A]/80 pt-20 text-white">
          <div className="bg-[#0B3D4A] px-10 md:px-28 py-10 md:py-20">
              <h1 className="text-5xl font-heading font-bold">Browse Trips</h1>
              <p className="font-body mt-2"><Link href="/">Home</Link> / Packages</p>
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
