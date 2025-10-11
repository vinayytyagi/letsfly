'use client'
import Image from 'next/image';
import Button from './Button.js';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const images = [
        'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleImageClick = (index) => {
        setCurrentImage(index);
    }

    return (
        <section
            className="bg-cover pt-20 bg-center h-screen text-white flex flex-col justify-center items-center transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
            <div className="absolute inset-0 bg-[#0B3D4A] opacity-60"></div>
            <div className="container mx-auto text-center z-10 px-4">
                <p className="text-xs sm:text-sm font-bold tracking-widest animate-fade-in-up">PACKAGE FOR THRILL-SEEKERS</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading my-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Nature Escapes Exiting<br className="hidden sm:block" />Adventures Trip</h1>
                <p className="text-sm sm:text-base lg:text-lg font-body mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Pretium fusce id velit ut. Aliquam eleifend nulla posuere sollicitudin aliquam ultrices. Porta nibh venenatis felis. Sodales ut etiam amet.</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    {images.map((image, index) => (
                        currentImage !== index && (
                            <Image
                                key={index}
                                src={image}
                                alt="Thumbnail"
                                width={200}
                                height={120}
                                className="rounded-lg cursor-pointer opacity-70 hover:opacity-100 transition-all duration-500 ease-in-out w-[120px] h-[72px] sm:w-[150px] sm:h-[90px] lg:w-[200px] lg:h-[120px] object-cover hover:rounded-br-[50] transform hover:scale-105"
                                onClick={() => handleImageClick(index)}
                            />
                        )
                    ))}
                </div>
                <Button href="/packages" className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Explore More</Button>
            </div>
        </section>
    );
};

export default HeroSection;
