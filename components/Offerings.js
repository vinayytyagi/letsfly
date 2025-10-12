import { FaUmbrellaBeach, FaMountain, FaCity, FaPlane } from 'react-icons/fa';
import Image from 'next/image';
import Button from './Button';

const Offerings = () => {
  const offerings = [
    {
      icon: <FaUmbrellaBeach className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'Beach Destinations',
      description: 'Explore pristine beaches and tropical paradises with our Andaman Islands and Goa packages.',
    },
    {
      icon: <FaMountain className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'Adventure Tours',
      description: 'Experience thrilling adventures with our Kerala backwater tours and Himalayan expeditions.',
    },
    {
      icon: <FaCity className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'City Experiences',
      description: 'Discover vibrant cities and cultural heritage with our Dubai and Bangkok tour packages.',
    },
    {
      icon: <FaPlane className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'International Tours',
      description: 'Explore exotic destinations worldwide with our premium international travel packages.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-1 lg:order-1">
            <Image
              src="/assets/pacific-girl.png"
              alt="Happy traveler"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="order-2 lg:order-2">
            <p className="text-xs sm:text-sm font-bold text-gray-500 animate-slide-in-left">GET TAILOR-MADE EXPERIENCE</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-[#0B3D4A] my-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Your Passport To Memorable Adventures</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 mt-8 lg:mt-10">
              {offerings.map((offering) => (
                <div key={offering.title}>
                  <div className="flex items-center mb-6 md:mb-2">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0">
                      {offering.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold ml-9 sm:ml-4 text-[#0B3D4A]">{offering.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{offering.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button>Discover Our Offerings</Button>
              <div className="flex items-center">
                <div className="flex -space-x-2 sm:-space-x-4">
                  <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" width={32} height={32} className="rounded-full cursor-pointer border-2 border-white sm:w-10 sm:h-10 transition-transform duration-300 hover:scale-110" />
                  <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 2" width={32} height={32} className="rounded-full cursor-pointer border-2 border-white sm:w-10 sm:h-10 transition-transform duration-300 hover:scale-110" />
                  <Image src="https://randomuser.me/api/portraits/men/36.jpg" alt="Client 3" width={32} height={32} className="rounded-full cursor-pointer border-2 border-white sm:w-10 sm:h-10 transition-transform duration-300 hover:scale-110" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="font-bold text-base sm:text-lg gradient-text">114K+</p>
                  <p className="text-gray-500 text-sm sm:text-base">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
