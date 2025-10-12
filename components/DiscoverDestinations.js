'use client'
import DestinationCard from './DestinationCard.js';
import Button from './Button.js';
import { packages } from '../data/packages.js';

const DiscoverDestinations = () => {
  const getPackageCount = (destination) => {
    const destinationKeywords = {
      'Andaman': ['Port Blair', 'Havelock', 'Neil', 'Baratang'],
      'Kerala': ['Cochin', 'Munnar', 'Thekkady', 'Alleppey', 'Kanyakumari'],
      'Goa': ['North Goa', 'South Goa'],
      'Dubai': ['Dubai', 'Abu Dhabi'],
      'Bangkok': ['Bangkok', 'Pattaya'],
      'Bali': ['Kuta', 'Ubud', 'Nusa Penida', 'Bedugul']
    };
    
    const keywords = destinationKeywords[destination] || [destination];
    
    return packages.filter(pkg => 
      keywords.some(keyword => 
        pkg.destinations.toLowerCase().includes(keyword.toLowerCase())
      )
    ).length;
  };

  const getPriceRange = (destination) => {
    const destinationKeywords = {
      'Andaman': ['Port Blair', 'Havelock', 'Neil', 'Baratang'],
      'Kerala': ['Cochin', 'Munnar', 'Thekkady', 'Alleppey', 'Kanyakumari'],
      'Goa': ['North Goa', 'South Goa'],
      'Dubai': ['Dubai', 'Abu Dhabi'],
      'Bangkok': ['Bangkok', 'Pattaya'],
      'Bali': ['Kuta', 'Ubud', 'Nusa Penida', 'Bedugul']
    };
    
    const keywords = destinationKeywords[destination] || [destination];
    
    const destinationPackages = packages.filter(pkg => 
      keywords.some(keyword => 
        pkg.destinations.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    
    if (destinationPackages.length === 0) return "Starting from ₹15,999";
    
    const prices = destinationPackages.map(pkg => 
      parseInt(pkg.price.replace(/[₹,]/g, ''))
    );
    
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    if (minPrice === maxPrice) {
      return `Starting from ₹${minPrice.toLocaleString()}`;
    }
    
    return `₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`;
  };

  const destinations = [
    {
      destination: "Andaman Islands",
      image: "/assets/andaman5d.png",
      price: getPriceRange("Andaman"),
      packageCount: getPackageCount("Andaman"),
      href: "/packages"
    },
    {
      destination: "Kerala",
      image: "/assets/kerala.png",
      price: getPriceRange("Kerala"),
      packageCount: getPackageCount("Kerala"),
      href: "/packages"
    },
    {
      destination: "Bangkok",
      image: "/assets/bangkok.png",
      price: getPriceRange("Bangkok"),
      packageCount: getPackageCount("Bangkok"),
      href: "/packages"
    },
    {
      destination: "Dubai",
      image: "/assets/dubai.png",
      price: getPriceRange("Dubai"),
      packageCount: getPackageCount("Dubai"),
      href: "/packages"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#ddf8ff]">
      <div className="container mx-auto text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading mb-6 sm:mb-8">Discover Stunning Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard
              key={index}
              destination={dest.destination}
              image={dest.image}
              price={dest.price}
              packageCount={dest.packageCount}
              href={dest.href}
            />
          ))}
        </div>
        <div className="mt-6 sm:mt-8">
          <Button href="/packages">Explore All Destinations</Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverDestinations;
