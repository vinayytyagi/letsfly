'use client'
import Image from 'next/image';
import Link from 'next/link';

const PackageCard = ({ name, description, price, image, slug }) => {
  const phoneNumber = "917289840031";
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
            <h3 className="text-2xl font-heading mb-2 font-semibold transform transition-transform duration-300 delay-100">
              {name}
            </h3>
            <p className="text-sm font-body opacity-90 mb-4 transform transition-transform duration-300 delay-150 line-clamp-3">
              {description}
            </p>
            <p className="text-lg font-bold text-primary mb-4 transform transition-transform duration-300 delay-150">{price}</p>

            <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                <a
                    href={`https://wa.me/${phoneNumber}?text=Hello!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(name)}%20package%20(${price}).%20Could%20you%20please%20provide%20more%20details%20and%20availability?%20Thank%20you!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d5e880] text-[#0d3a48] py-2 px-4 rounded-br-3xl rounded-md hover:bg-[#0d3a48] hover:text-white hover:rounded-lg transition-all duration-500 cursor-pointer text-sm font-medium"
                >
                    Book Now
                </a>
                <Link 
                    href={`/packages/${slug}`} 
                    className="bg-[#0d3a48] text-white py-2 px-4 rounded-br-3xl rounded-md hover:bg-[#d5e880] hover:text-[#0d3a48] hover:rounded-lg transition-all duration-500 cursor-pointer text-sm font-medium"
                >
                    Read More
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;