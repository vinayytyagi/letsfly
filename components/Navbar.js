import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">Letsgo
          </Link>
        </div>
        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="/" className="my-1 text-gray-800 hover:text-blue-400 md:mx-4 md:my-0">Home</Link>
            <Link href="/about" className="my-1 text-gray-800 hover:text-blue-400 md:mx-4 md:my-0">About Us</Link>
            <Link href="/packages" className="my-1 text-gray-800 hover:text-blue-400 md:mx-4 md:my-0">Packages</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
