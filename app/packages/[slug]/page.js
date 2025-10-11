'use client'
import { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import { FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';

const packages = [
  {
    name: 'Exotic Goa',
    slug: 'exotic-goa',
    description: 'A 4-day trip to the sunny beaches of Goa, where you can relax, enjoy water sports, and experience the vibrant nightlife. This package includes a stay at a 4-star resort with beach access, daily breakfast, and a guided tour of Old Goa. We will also arrange for a seafood-making workshop with a local chef. So pack your bags for an unforgettable coastal adventure in India!',
    price: '$300',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Majestic Himalayas',
    slug: 'majestic-himalayas',
    description: 'A 7-day trek through the breathtaking Himalayan mountains, offering stunning views and a challenging adventure. This trek is suitable for both novice and experienced trekkers. You will be accompanied by a certified guide and a team of porters. All your camping equipment and meals will be provided. Get ready to witness some of the most spectacular landscapes on Earth!',
    price: '$800',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Cultural Rajasthan',
    slug: 'cultural-rajasthan',
    description: 'A 5-day tour of the vibrant palaces and forts of Rajasthan, showcasing the rich history and culture of the region. This tour will take you through the cities of Jaipur, Jodhpur, and Udaipur. You will visit magnificent forts, opulent palaces, and bustling markets. We will also arrange for a traditional Rajasthani dinner with a cultural performance.',
    price: '$500',
    image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Serene Kerala',
    slug: 'serene-kerala',
    description: 'A 6-day journey through the tranquil backwaters of Kerala, with its lush greenery and peaceful houseboat stays. This package includes a 2-night stay on a traditional houseboat, where you can enjoy the serene backwaters and delicious local cuisine. You will also visit a tea plantation in Munnar and relax on the beaches of Kovalam.',
    price: '$600',
    image: 'https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const phoneNumber = "917289840031";

export default function PackageDetail({ params }) {
  const [isVisible, setIsVisible] = useState(false);
  const { slug } = params;
  const pkg = packages.find((p) => p.slug === slug);

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

  if (!pkg) {
    return <div>Package not found</div>;
  }

  return (
    <div className="bg-secondary">
      <Navbar 
        initialBgColor="bg-white"
        initialTextColor="text-[#0B3D4A]"
        initialLogoColor="text-[#0B3D4A]"
      />
      <main className="container mx-auto py-24 px-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[500px]">
                 <Image src={pkg.image} alt={pkg.name} layout="fill" objectFit="cover" />
            </div>
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-heading font-bold text-gray-800 mb-4">{pkg.name}</h1>
            <p className="text-gray-600 font-body mb-6 text-lg">{pkg.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-bold text-primary font-heading">{pkg.price}</p>
              <a
                href={`https://wa.me/${phoneNumber}?text=Hello!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.name)}%20package%20(${pkg.price}).%20Could%20you%20please%20provide%20more%20details%20and%20availability?%20Thank%20you!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-foreground font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
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
