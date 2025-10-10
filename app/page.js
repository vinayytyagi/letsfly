'use client'
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Offerings from '../components/Offerings';
import Team from '../components/Team';
import Blogs from '../components/Blogs';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
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
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
            <div className="absolute inset-0 bg-[#0B3D4A] opacity-60"></div>
          <div className="container mx-auto text-center z-10">
            <p className="text-sm font-bold tracking-widest">PACKAGE FOR THRILL-SEEKERS</p>
            <h1 className="text-6xl font-serif my-4">Nature Escapes Exiting<br/>Adventures Trip</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Pretium fusce id velit ut. Aliquam eleifend nulla posuere sollicitudin aliquam ultrices. Porta nibh venenatis felis. Sodales ut etiam amet.</p>
            <div className="flex justify-center gap-4 mb-8">
                <Image src="https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Couple hiking" width={200} height={150} className="rounded-lg" />
                <Image src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Coastal town" width={200} height={150} className="rounded-lg" />
                <Image src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Woman hiking" width={200} height={150} className="rounded-lg" />
            </div>
            <Link href="/packages" className="bg-green-400 text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition duration-300">Explore More
            </Link>
          </div>
        </section>

        <Offerings />

        {/* Discover Destinations Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-serif mb-8">Discover Stunning Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Destination Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Australia" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Australia</h3>
                  <p className="text-gray-600">Price Starts ($116 - $225)</p>
                </div>
              </div>
              {/* Destination Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Switzerland" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Switzerland</h3>
                  <p className="text-gray-600">Price Starts ($175 - $200)</p>
                </div>
              </div>
              {/* Destination Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Thailand" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Thailand</h3>
                  <p className="text-gray-600">Price Starts ($85 - $200)</p>
                </div>
              </div>
              {/* Destination Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Korea" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Korea</h3>
                  <p className="text-gray-600">Price Starts ($175 - $285)</p>
                </div>
              </div>
            </div>
            <Link href="/packages" className="bg-primary text-white font-bold py-3 px-8 rounded-full mt-8 inline-block hover:bg-opacity-80 transition duration-300">Explore All Destinations
            </Link>
          </div>
        </section>
        <Team />
        <Blogs />
      </main>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-green-400 text-black p-3 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
