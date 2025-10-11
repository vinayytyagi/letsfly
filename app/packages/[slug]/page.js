'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Button from '../../../components/Button';
import { 
  FaArrowUp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCheck, 
  FaTimes,
  FaShieldAlt,
  FaGift,
  FaStar,
  FaHeart,
  FaUsers,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaExclamationTriangle,
  FaInfoCircle,
  FaPhone,
  FaWhatsapp,
  FaRocket
 } from 'react-icons/fa';
import Image from 'next/image';
import { packages, phoneNumber } from '../../../data/packages.js';

export default function PackageDetail({ params }) {
  const [isVisible, setIsVisible] = useState(false);
  const [slug, setSlug] = useState(null);
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      setPkg(packages.find((p) => p.slug === resolvedParams.slug));
    };
    getSlug();
  }, [params]);

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
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d5e880] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading package details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <Navbar 
        initialBgColor="bg-white"
        initialTextColor="text-[#0B3D4A]"
        initialLogoColor="text-[#0B3D4A]"
      />
      
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0B3D4A] hover:text-[#d5e880] transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/packages" className="text-[#0B3D4A] hover:text-[#d5e880] transition-colors">Package</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">{pkg.name}</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto py-8 px-6">
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-t-xl">
            <Image 
              src={pkg.image} 
              alt={pkg.name} 
              fill
              className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 gap-2 mb-3 w-fit">
                <FaStar className="text-[#d5e880] text-xl" />
                <span className="text-[#d5e880] font-semibold">Premium Package</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-2">{pkg.name}</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">{pkg.description}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <FaMapMarkerAlt className="text-[#d5e880] text-lg" />
                  <span className="font-medium">{pkg.destinations}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <FaClock className="text-[#d5e880] text-lg" />
                  <span className="font-medium">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <FaUsers className="text-[#d5e880] text-lg" />
                  <span className="font-medium">Group Tour</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <FaMoneyBillWave className="text-[#d5e880] text-2xl" />
                  <div>
                    <p className="text-4xl font-bold text-[#0B3D4A] font-heading">{pkg.price}</p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <FaUsers className="text-sm" />
                      Per Person (Double Sharing)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaShieldAlt className="text-green-500" />
                    <span>Secure Booking</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaGift className="text-blue-500" />
                    <span>Best Price Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHeart className="text-red-500" />
                    <span>Instant Confirmation</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${phoneNumber}?text=Hello!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.name)}%20package%20(${pkg.price}).%20Could%20you%20please%20provide%20more%20details%20and%20availability?%20Thank%20you!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d5e880] text-[#0d3a48] py-4 px-8 rounded-br-3xl rounded-md hover:bg-[#0d3a48] hover:text-white hover:rounded-lg transition-all duration-500 cursor-pointer font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center"
                >
                  <FaWhatsapp className="text-xl" />
                  Book Now
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-600 justify-center">
                  <FaPhone className="text-[#d5e880]" />
                  <span>Call: +91 7289840031</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaCalendarAlt className="text-[#d5e880] text-3xl" />
            <h2 className="text-3xl font-heading font-bold text-[#0B3D4A]">Tour Itinerary</h2>
          </div>
          <div className="space-y-8">
            {pkg.itinerary.map((day, index) => (
                <div key={index} className="border-l-4 border-[#d5e880] pl-6 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#d5e880] text-[#0d3a48] px-3 py-1 rounded-full font-bold text-sm">
                    {day.day}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#0B3D4A]">{day.title}</h3>
                </div>
                <ul className="space-y-2">
                  {day.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#d5e880] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
                  </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FaCheck className="text-green-500 text-xl" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-[#0B3D4A]">Package Includes</h2>
            </div>
            <ul className="space-y-4">
              {pkg.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 bg-green-50 p-3 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <FaTimes className="text-red-500 text-xl" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-[#0B3D4A]">Exclusions</h2>
            </div>
            <ul className="space-y-4">
              {pkg.exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 bg-red-50 p-3 rounded-lg">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <FaTimes className="text-white text-xs" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <FaCreditCard className="text-blue-500 text-xl" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-[#0B3D4A]">Payment Terms & Options</h2>
          </div>
          <div className="space-y-2">
            {pkg.paymentTerms.map((term, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-[#0B3D4A] text-lg">{term.option}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{term.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <FaExclamationTriangle className="text-orange-500 text-xl" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-[#0B3D4A]">Cancellation Policy</h2>
          </div>
          <div className="space-y-4">
            {pkg.cancellationPolicy.map((policy, index) => (
              <div key={index} className="flex items-start gap-4 text-gray-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <FaInfoCircle className="text-white text-xs" />
                </div>
                <span className="leading-relaxed">{policy}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0B3D4A] to-[#1a4d5a] rounded-xl shadow-lg p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D4A]/90 to-[#1a4d5a]/90"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaRocket className="text-[#d5e880] text-3xl" />
              <h2 className="text-3xl font-heading font-bold">Ready for Your Adventure?</h2>
            </div>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">Book now and create unforgettable memories with our premium travel experience</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${phoneNumber}?text=Hello!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.name)}%20package%20(${pkg.price}).%20Could%20you%20please%20provide%20more%20details%20and%20availability?%20Thank%20you!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d5e880] text-[#0d3a48] py-4 px-8 rounded-br-3xl rounded-md hover:bg-white hover:text-[#0d3a48] hover:rounded-lg transition-all duration-500 cursor-pointer font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Book Your Dream Trip Now
              </a>
            </div>
          </div>
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
