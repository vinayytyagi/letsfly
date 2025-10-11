'use client'
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Offerings from '../components/Offerings';
import Team from '../components/Team';
import Blogs from '../components/Blogs';
import Button from '../components/Button';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleImageClick = (index) => {
        setCurrentImage(index);
    }

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center transition-background-image duration-500 ease-in-out"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
            <div className="absolute inset-0 bg-[#0B3D4A] opacity-60"></div>
          <div className="container mx-auto text-center z-10">
            <p className="text-sm font-bold tracking-widest">PACKAGE FOR THRILL-SEEKERS</p>
            <h1 className="text-6xl font-heading my-4">Nature Escapes Exiting<br/>Adventures Trip</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Pretium fusce id velit ut. Aliquam eleifend nulla posuere sollicitudin aliquam ultrices. Porta nibh venenatis felis. Sodales ut etiam amet.</p>
            <div className="flex justify-center gap-4 mb-8">
                {images.map((image, index) => (
                    <Image 
                        key={index}
                        src={image} 
                        alt="Thumbnail" 
                        width={200} 
                        height={150} 
                        className={`rounded-lg cursor-pointer ${currentImage === index ? 'ring-4 ring-white' : ''}`} 
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>
            <Button href="/packages">Explore More</Button>
          </div>
        </section>

        <Offerings />

        {/* Discover Destinations Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-heading mb-8">Discover Stunning Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Destination Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Australia" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-heading mb-2">Australia</h3>
                  <p className="text-gray-600">Price Starts ($116 - $225)</p>
                </div>
              </div>
              {/* Destination Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Switzerland" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-heading mb-2">Switzerland</h3>
                  <p className="text-gray-600">Price Starts ($175 - $200)</p>
                </div>
              </div>
              {/* Destination Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Thailand" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-heading mb-2">Thailand</h3>
                  <p className="text-gray-600">Price Starts ($85 - $200)</p>
                </div>
              </div>
              {/* Destination Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Korea" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-heading mb-2">Korea</h3>
                  <p className="text-gray-600">Price Starts ($175 - $285)</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                <Button href="/packages">Explore All Destinations</Button>
            </div>
          </div>
        </section>
        <Team />
        <Blogs />
      </main>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg"
        >
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
}
