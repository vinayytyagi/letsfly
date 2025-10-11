'use client'
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import Offerings from '../components/Offerings.js';
import Team from '../components/Team.js';
import Blogs from '../components/Blogs.js';
import Button from '../components/Button.js';
import DiscoverDestinations from '../components/DiscoverDestinations.js';
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
        <HeroSection />
        <Offerings />

        <DiscoverDestinations />
        <Team />
        <Blogs />
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
