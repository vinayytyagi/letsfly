import Navbar from '../../components/Navbar.js';
import Link from 'next/link';
import Image from 'next/image';

const packages = [
  {
    name: 'Exotic Goa',
    description: 'A 4-day trip to the sunny beaches of Goa.',
    price: '$300',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Majestic Himalayas',
    description: 'A 7-day trek through the breathtaking Himalayan mountains.',
    price: '$800',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Cultural Rajasthan',
    description: 'A 5-day tour of the vibrant palaces and forts of Rajasthan.',
    price: '$500',
    image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Serene Kerala',
    description: 'A 6-day journey through the tranquil backwaters of Kerala.',
    price: '$600',
    image: 'https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const phoneNumber = "7289840031";

export default function Packages() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-serif text-center mb-8">Our Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={pkg.image} alt={pkg.name} width={500} height={300} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                <p className="text-gray-700 mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-primary">{pkg.price}</p>
                  <a
                    href={`https://wa.me/${phoneNumber}?text=I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-foreground font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
