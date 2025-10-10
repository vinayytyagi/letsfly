import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen text-white py-32"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        >
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-serif mb-4">Nature Escapes, Exiting Adventures Trip</h1>
            <p className="text-xl mb-8">Pretium fusce id velit ut. Aliquam etiam erat velit scelerisque in dictum non consectetur. Porttitor rhoncus dolor purus non enim praesent.</p>
            <Link href="/packages" className="bg-accent text-foreground font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition duration-300">Explore More
            </Link>
          </div>
        </section>

        {/* Discover Destinations Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-serif mb-8">Discover Stunning Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Destination Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Australia" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Australia</h3>
                  <p className="text-gray-600">Price Starts ($116 - $225)</p>
                </div>
              </div>
              {/* Destination Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Switzerland" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Switzerland</h3>
                  <p className="text-gray-600">Price Starts ($175 - $200)</p>
                </div>
              </div>
              {/* Destination Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Thailand" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Thailand</h3>
                  <p className="text-gray-600">Price Starts ($85 - $200)</p>
                </div>
              </div>
              {/* Destination Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Korea" width={500} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">Korea</h3>
                  <p className="text-gray-600">Price Starts ($175 - $285)</p>
                </div>
              </div>
            </div>
            <Link href="/packages" className="bg-primary text-white font-bold py-3 px-8 rounded-full mt-8 inline-block hover:bg-opacity-80 transition duration-300">Explore All Destinations
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
