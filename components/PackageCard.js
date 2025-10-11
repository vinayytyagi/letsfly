'use client'
import Image from 'next/image';
import Link from 'next/link';

const PackageCard = ({ name, description, price, image, slug }) => {
  const phoneNumber = "7289840031";
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:rounded-br-[90] transform hover:-translate-y-2">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="transform translate-y-0 group-hover:-translate-y-3 transition-all duration-500 ease-out">
            <h3 className="text-2xl font-heading mb-2 font-semibold transform transition-transform duration-300 delay-100 group-hover:scale-105">
              {name}
            </h3>
            <p className="text-sm font-body opacity-90 mb-4 transform transition-transform duration-300 delay-150 group-hover:scale-105 line-clamp-3">
              {description}
            </p>
            <p className="text-lg font-bold text-primary mb-4 transform transition-transform duration-300 delay-150 group-hover:scale-105">{price}</p>

            <div className="flex items-center space-x-4">
                <a
                    href={`https://wa.me/${phoneNumber}?text=I'm%20interested%20in%20the%20${encodeURIComponent(name)}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 delay-200 hover:text-[#d5e880] relative"
                >
                    Book Now
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5e880] group-hover:w-full transition-all duration-900"></span>
                </a>
                <Link href={`/packages/${slug}`} className="text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 delay-200 hover:text-[#d5e880] relative">
                    Read More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d5e880] group-hover:w-full transition-all duration-900"></span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;