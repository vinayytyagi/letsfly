import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
    <section className="py-20 bg-[#E0F7FA]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 0 50 C 25 25, 75 75, 100 50 L 100 100 L 0 100 Z' fill='%23D1F2EB' /%3E%3C/svg%3E\")" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-[#0B3D4A]">
            <p className="text-sm font-bold tracking-widest">YOUR MOST TRUSTED GUIDES</p>
            <h2 className="text-5xl font-serif my-4">People Who Make Travel Enchanting</h2>
            <p className="mb-6">Lobortis facilisis sollicitudin tincidunt pellentesque elit ullamcorper dignissim. Condimentum id venenatis a condimentum viet.</p>
            <button className="bg-[#0B3D4A] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition duration-300">
              View Our Team
            </button>
            <div className="mt-8">
                <Image src="/stamp.png" alt="Travel Stamp" width={100} height={100} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={member.name} className={`relative rounded-lg overflow-hidden shadow-lg ${index === 1 ? 'mt-8' : ''}`}>
                <Image src={member.image} alt={member.name} width={300} height={400} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-serif">{member.name}</h3>
                  <p className="text-white">{member.title}</p>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="bg-yellow-400 p-2 rounded-full text-black"><FaFacebookF /></div>
                    <div className="bg-yellow-400 p-2 rounded-full text-black"><FaTwitter /></div>
                    <div className="bg-yellow-400 p-2 rounded-full text-black"><FaInstagram /></div>
                    <div className="bg-yellow-400 p-2 rounded-full text-black"><FaLinkedinIn /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
