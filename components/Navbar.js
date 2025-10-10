'use client'
import { Menu, Transition } from '@headlessui/react';
import { FaChevronDown, FaSearch, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import { Fragment } from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Pages',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    { name: 'Browse Trips', href: '/packages' },
    {
      name: 'Destination',
      dropdown: [
        { name: 'Australia', href: '#' },
        { name: 'Switzerland', href: '#' },
        { name: 'Thailand', href: '#' },
        { name: 'Korea', href: '#' },
      ],
    },
    { name: 'Shop', href: '#' },
    { name: 'Help Center', href: '#' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
              <FaGlobe className="h-8 w-8 mr-2 text-green-400" />
              <span className="text-2xl font-bold">Letsgo</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <Menu as="div" key={link.name} className="relative">
                <Menu.Button className="flex items-center">
                  {link.name}
                  <FaChevronDown className="h-5 w-5 ml-1" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white text-black rounded-md shadow-lg">
                    {link.dropdown.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link href={item.href} className={`${ active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}>
                              {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link key={link.name} href={link.href} className="hover:text-green-400">
                  {link.name}
              </Link>
            )
          )}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-green-400 text-black font-bold py-2 px-4 rounded-md">
            Register Now
          </button>
          <FaSearch className="h-6 w-6" />
        </div>
        {/* Mobile Menu Button (optional) */}
      </div>
    </nav>
  );
};

export default Navbar;
