'use client'
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TeamCard = ({ name, title, image }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:rounded-br-[90]">
      {/* Image Container with Zoom Effect */}
      <div className="relative h-96 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          width={300} 
          height={400} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {/* Text Container with Enhanced Animation */}
          <div className="transform translate-y-0 group-hover:-translate-y-3 transition-all duration-500 ease-out">
            <h3 className="text-2xl font-heading mb-2 font-semibold transform transition-transform duration-300 delay-100">
              {name}
            </h3>
            <p className="text-sm font-body opacity-90 mb-4 transform transition-transform duration-300 delay-150">
              {title}
            </p>
          </div>
        </div>

        {/* Social Icons - Right Side */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-[#d5e880] p-2 rounded-full text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:delay-200 transform translate-x-4 group-hover:translate-x-0">
            <FaFacebookF />
          </div>
          <div className="bg-[#d5e880] p-2 rounded-full text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:delay-300 transform translate-x-4 group-hover:translate-x-0">
            <FaTwitter />
          </div>
          <div className="bg-[#d5e880] p-2 rounded-full text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:delay-400 transform translate-x-4 group-hover:translate-x-0">
            <FaInstagram />
          </div>
          <div className="bg-[#d5e880] p-2 rounded-full text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:delay-500 transform translate-x-4 group-hover:translate-x-0">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
