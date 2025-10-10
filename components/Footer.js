import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Letsgo</h2>
            <p className="text-gray-400">Your adventure starts here.</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-12">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p>Email: info@letsgo.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Letsgo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
