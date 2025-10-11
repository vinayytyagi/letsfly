'use client'
import Image from 'next/image';
import Link from 'next/link';

const DestinationCard = ({ destination, image, price, packageCount, href = "#" }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:rounded-br-[90] transform hover:-translate-y-2">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={image}
          alt={destination}
          width={500}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="transform translate-y-0 group-hover:-translate-y-3 transition-all duration-500 ease-out">
            <h3 className="text-2xl font-heading mb-2 font-semibold transform transition-transform duration-300 delay-100 group-hover:scale-105">
              {destination}
            </h3>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-body opacity-90 transform transition-transform duration-300 delay-150 group-hover:scale-105">
                {price}
              </p>
              <div className="bg-[#d5e880] text-[#0d3a48] px-2 py-1 rounded-full text-xs font-bold">
                {packageCount} {packageCount === 1 ? 'Package' : 'Packages'}
              </div>
            </div>

            <Link
              href={href}
              className="text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 delay-200 hover:text-[#d5e880] relative"
            >
              Browse trip
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5e880] group-hover:w-full transition-all duration-900"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
