import Image from 'next/image';
import TeamCard from './TeamCard.js';

const Team = () => {
  const teamMembers = [
    {
      name: 'Scarlett Hughes',
      title: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Ryan White',
      title: 'Destination Specialist',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Jessy Mathew',
      title: 'Alliances Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#E0F7FA]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 0 50 C 25 25, 75 75, 100 50 L 100 100 L 0 100 Z' fill='%23D1F2EB' /%3E%3C/svg%3E\")" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-[#0B3D4A] order-2 lg:order-1">
            <p className="text-xs sm:text-sm font-bold tracking-widest">YOUR MOST TRUSTED GUIDES</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif my-4">People Who Make Travel Enchanting</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">Lobortis facilisis sollicitudin tincidunt pellentesque elit ullamcorper dignissim. Condimentum id venenatis a condimentum viet.</p>
            <button className="bg-[#0B3D4A] text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-md hover:bg-opacity-80 transition duration-300 text-sm sm:text-base">
              View Our Team
            </button>
            <div className="mt-6 sm:mt-8">
              <Image src="/stamp.png" alt="Travel Stamp" width={80} height={80} className="sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-25 xl:h-25" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 order-1 lg:order-2">
            {teamMembers.map((member, index) => (
              <div key={member.name} className={index === 1 ? 'sm:mt-8 lg:mt-8' : ''}>
                <TeamCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
