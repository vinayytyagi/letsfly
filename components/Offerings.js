import { FaMountain, FaRoad, FaTree, FaCampground } from 'react-icons/fa';
import Image from 'next/image';
import Button from './Button';

const Offerings = () => {
  const offerings = [
    {
      icon: <FaMountain className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'Hill Stations',
      description: 'Vivamus non fringilla cras leo scelerisque. Cubilia neque nascetur pharetra parturient.',
    },
    {
      icon: <FaRoad className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'Road Trips',
      description: 'Feugiat phasellus aenean lobortis vulputate pretium hac nec. Libero condimentum.',
    },
    {
      icon: <FaCampground className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'Outdoor Packages',
      description: 'Feugiat phasellus aenean lobortis vulputate pretium nec. Libero eget vitae potenti.',
    },
    {
      icon: <FaTree className="h-12 w-12 text-[#0B3D4A]" />,
      title: 'Forest Safari',
      description: 'Non porta etiam, lectus massa gravida vivamus pellentesque aliquam. Dapibus quis.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://wdtletsgo.wpengine.com/wp-content/uploads/2025/03/Demo-1-Filler-Image.png"
              alt="Happy traveler"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/stamp.png" // Assuming you have a stamp image in your public folder
                alt="Travel Stamp"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">GET TAILOR-MADE EXPERIENCE</p>
            <h2 className="text-4xl font-heading text-[#0B3D4A] my-4">Your Passport To Memorable Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {offerings.map((offering) => (
                <div key={offering.title}>
                  <div className="flex items-center mb-2">
                    {offering.icon}
                    <h3 className="text-xl font-bold ml-4 text-[#0B3D4A]">{offering.title}</h3>
                  </div>
                  <p className="text-gray-600">{offering.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center">
                <Button>Discover Our Offerings</Button>
                <div className="flex items-center ml-6">
                    <div className="flex -space-x-4">
                        <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" width={40} height={40} className="rounded-full border-2 border-white" />
                        <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 2" width={40} height={40} className="rounded-full border-2 border-white" />
                        <Image src="https://randomuser.me/api/portraits/men/36.jpg" alt="Client 3" width={40} height={40} className="rounded-full border-2 border-white" />
                    </div>
                    <div className="ml-4">
                        <p className="font-bold text-lg">114K+</p>
                        <p className="text-gray-500">Happy Clients</p>
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
