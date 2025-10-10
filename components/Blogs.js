import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaComments } from 'react-icons/fa';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Travel Advice And Insights',
      author: 'DEVELOPER',
      comments: 2,
      excerpt: 'Inceptos curae conubia arcu volutpat ac dignissim. Consectetur commodo...',
      image: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Tales Of Maritime Journeys',
      author: 'DEVELOPER',
      comments: 2,
      excerpt: 'Ridiculus cubilia ultricies sem blandit rutrum odio morbi hendrerit venenatis...',
      image: 'https://images.pexels.com/photos/1654883/pexels-photo-1654883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Mountain Climbing Objectives',
      author: 'DEVELOPER',
      comments: 2,
      excerpt: 'Duis massa et porta conubia adipiscing torquent senectus phasellus...',
      image: 'https://images.pexels.com/photos/2694389/pexels-photo-2694389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
            <div>
                <p className="text-sm font-bold tracking-widest text-gray-500">NEWS & TRENDS IN TRAVEL</p>
                <h2 className="text-5xl font-serif text-[#0B3D4A]">News, Tips & Destination Stories</h2>
            </div>
            <div className="text-right">
                <p className="text-gray-600">Blandit conubia ullamcorper nullam dictum non Tincidunt augue interdum velit<br/> euismod in pellentesque. Molestie nunc non blandit massa enim.</p>
                <Link href="/blogs" className="text-primary font-bold underline">View All Blogs</Link>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="rounded-lg overflow-hidden shadow-lg group">
                <div className="overflow-hidden">
                    <Image src={post.image} alt={post.title} width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
              <div className="p-6 bg-white relative -mt-16 mx-6 rounded-lg shadow-md z-10">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaUser className="mr-2" />
                  <span>{post.author}</span>
                  <FaComments className="ml-4 mr-2" />
                  <span>{post.comments} COMMENTS</span>
                </div>
                <h3 className="text-2xl font-serif text-[#0B3D4A] mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="/blog/post" className="font-bold text-primary underline">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
