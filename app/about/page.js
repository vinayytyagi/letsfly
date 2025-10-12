'use client'
import Navbar from '../../components/Navbar.js';
import Button from '../../components/Button.js';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaHeart, 
  FaUsers, 
  FaGlobe, 
  FaStar, 
  FaAward, 
  FaHandshake,
  FaWhatsapp,
  FaArrowUp,
  FaRocket,
  FaShieldAlt,
  FaGift,
  FaCheckCircle
} from 'react-icons/fa';

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const stats = [
    { icon: <FaUsers className="text-4xl text-[#d5e880]" />, number: "5000+", label: "Happy Travelers" },
    { icon: <FaGlobe className="text-4xl text-[#d5e880]" />, number: "50+", label: "Destinations" },
    { icon: <FaStar className="text-4xl text-[#d5e880]" />, number: "4.9/5", label: "Customer Rating" },
    { icon: <FaAward className="text-4xl text-[#d5e880]" />, number: "8+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <FaHeart className="text-3xl text-[#d5e880]" />,
      title: "Passionate Service",
      description: "We are passionate about creating unforgettable travel experiences that exceed your expectations."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#d5e880]" />,
      title: "Trust & Safety",
      description: "Your safety and security are our top priorities. We ensure secure bookings and reliable services."
    },
    {
      icon: <FaGift className="text-3xl text-[#d5e880]" />,
      title: "Best Value",
      description: "We offer the best prices with no hidden costs, ensuring you get maximum value for your money."
    },
    {
      icon: <FaHandshake className="text-3xl text-[#d5e880]" />,
      title: "Personalized Care",
      description: "Every journey is tailored to your preferences with dedicated support throughout your trip."
    }
  ];


  return (
    <div className="bg-gray-50">
      <Navbar 
        initialBgColor="bg-white"
        initialTextColor="text-[#0B3D4A]"
        initialLogoColor="text-[#0B3D4A]"
      />
      
      <section className="relative mt-10 bg-gradient-to-r from-[#0B3D4A] to-[#1a4d5a] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D4A]/90 to-[#1a4d5a]/90"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center text-white">
            <p className="text-sm sm:text-base font-bold tracking-widest text-[#d5e880] mb-4">ABOUT PACIFIC HOLIDAYS</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Your Trusted Travel Partner
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Creating unforgettable memories through exceptional travel experiences across the globe
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0B3D4A] hover:text-[#d5e880] transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto py-8 px-4 sm:px-6">
        <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3D4A] mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Numbers that speak for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0B3D4A] mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3D4A] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Welcome to Pacific Holidays, your ultimate partner in crafting unforgettable travel experiences. 
                  Founded with a passion for exploration and a commitment to excellence, we believe that travel 
                  is not just about visiting new places, but about creating lasting memories that enrich your life.
                </p>
                <p>
                  Our journey began with a simple vision: to make world-class travel accessible to everyone. 
                  Over the years, we have grown from a small team of travel enthusiasts to a trusted name 
                  in the industry, serving thousands of satisfied customers across the globe.
                </p>
                <p>
                  We specialize in curating unique and personalized journeys that cater to your every need 
                  and desire. From thrilling adventures in the heart of nature to serene beach getaways 
                  and cultural explorations of ancient cities, we have the perfect itinerary for every traveler.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/pacific-girl.png"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3D4A] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#0B3D4A] mb-3">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="bg-gradient-to-r from-[#0B3D4A] to-[#1a4d5a] rounded-xl shadow-lg p-6 sm:p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D4A]/90 to-[#1a4d5a]/90"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <FaRocket className="text-[#d5e880] text-4xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                To inspire and enable people to explore the world by providing exceptional travel experiences 
                that create lasting memories, foster cultural understanding, and bring joy to every journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <FaCheckCircle className="text-[#d5e880] text-3xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quality Service</h3>
                <p className="text-sm opacity-90">Ensuring every detail is perfect</p>
              </div>
              <div className="text-center">
                <FaGlobe className="text-[#d5e880] text-3xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="text-sm opacity-90">Connecting you to the world</p>
              </div>
              <div className="text-center">
                <FaHeart className="text-[#d5e880] text-3xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Customer First</h3>
                <p className="text-sm opacity-90">Your satisfaction is our priority</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3D4A] mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you plan your next adventure. Our travel experts are here to create the perfect itinerary for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917289840031?text=Hello!%20I'm%20interested%20in%20planning%20a%20trip.%20Could%20you%20please%20help%20me%20with%20more%20details?%20Thank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d5e880] text-[#0d3a48] py-3 sm:py-4 px-6 sm:px-8 rounded-br-3xl rounded-md hover:bg-[#0d3a48] hover:text-white hover:rounded-lg transition-all duration-500 cursor-pointer font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center"
              >
                <FaWhatsapp className="text-lg sm:text-xl" />
                Get in Touch
              </a>
              <Link
                href="/packages"
                className="bg-[#0B3D4A] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-br-3xl rounded-md hover:bg-[#d5e880] hover:text-[#0d3a48] hover:rounded-lg transition-all duration-500 cursor-pointer font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center"
              >
                <FaGlobe className="text-lg sm:text-xl" />
                View Packages
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 rounded-full shadow-lg cursor-pointer"
      >
        <FaArrowUp />
      </Button>
    </div>
  );
}
