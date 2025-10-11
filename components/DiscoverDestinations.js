'use client'
import DestinationCard from './DestinationCard.js';
import Button from './Button.js';

const DiscoverDestinations = () => {
  const destinations = [
    {
      destination: "Australia",
      image: "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "Price Starts ($116 - $225)",
      href: "/packages"
    },
    {
      destination: "Switzerland",
      image: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "Price Starts ($175 - $200)",
      href: "/packages"
    },
    {
      destination: "Thailand",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "Price Starts ($85 - $200)",
      href: "/packages"
    },
    {
      destination: "Korea",
      image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "Price Starts ($175 - $285)",
      href: "/packages"
    }
  ];

  return (
    <section className="py-16 bg-[#ddf8ff]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-heading mb-8">Discover Stunning Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard 
              key={index}
              destination={dest.destination}
              image={dest.image}
              price={dest.price}
              href={dest.href}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/packages">Explore All Destinations</Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverDestinations;
