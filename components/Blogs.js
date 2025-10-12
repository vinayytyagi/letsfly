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
      image: '/assets/Pacific-blog-1.png',
    },
    {
      title: 'Tales Of Maritime Journeys',
      author: 'DEVELOPER',
      comments: 2,
      excerpt: 'Ridiculus cubilia ultricies sem blandit rutrum odio morbi hendrerit venenatis...',
      image: '/assets/Pacific-blog-2.png',
    },
    {
      title: 'Mountain Climbing Objectives',
      author: 'DEVELOPER',
      comments: 2,
      excerpt: 'Duis massa et porta conubia adipiscing torquent senectus phasellus...',
      image: '/assets/Pacific-blog-3.png',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 gap-4 lg:gap-0">
          <div className="w-full lg:w-auto">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-500">NEWS & TRENDS IN TRAVEL</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0B3D4A]">News, Tips & Destination Stories</h2>
          </div>
          <div className="text-left w-full lg:w-auto">
            <p className="text-gray-600 text-xs sm:text-sm mb-2 lg:mb-0">Blandit conubia ullamcorper nullam dictum non Tincidunt augue interdum velit<br className="hidden sm:block" /> euismod in pellentesque. Molestie nunc non blandit massa enim.</p>
            <Link href="/" className="text-primary font-bold underline text-sm sm:text-base">View All Blogs</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="relative rounded-lg overflow-hidden shadow-lg group h-[400px] sm:h-[450px] lg:h-[500px]">
              <Image src={post.image} alt={post.title} width={400} height={400} className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 m-3 sm:m-6 bg-white rounded-t-lg shadow-md">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <FaUser className="mr-1 sm:mr-2" />
                  <span>{post.author}</span>
                  <FaComments className="ml-2 sm:ml-4 mr-1 sm:mr-2" />
                  <span>{post.comments} COMMENTS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-[#0B3D4A] mb-2">{post.title}</h3>
                <p className="text-[#0] mb-3 sm:mb-4 text-sm sm:text-base">{post.excerpt}</p>
                <Link href="/" className="text-primary underline text-sm sm:text-base">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
