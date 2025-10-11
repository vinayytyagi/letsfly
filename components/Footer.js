import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa';

const whatsappNumber = '7289840031';
const whatsappMsg = `Hello! I'm interested in booking a package. Could you please provide more details and availability? Thank you!`;

const Footer = () => {
  return (
    <footer className="bg-[#0B3D4A] text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 w-full">
          <Image src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Footer background" width={800} height={600} className="h-full w-full object-cover" />
        </div>
        <div className="lg:w-2/3 w-full p-4 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-sm font-bold tracking-widest">OUR NEWSLETTER</h3>
              <h2 className="text-3xl font-serif my-4">Sign Up To Stay Ahead With The Latest Updates And New Exciting Deals!</h2>
              <div className="flex mt-4">
                <input type="email" placeholder="Your Email Id" className="bg-white text-black p-3 mr-2 rounded-md w-full" />
                <button className="bg-[#B2D83C] text-[#0d3a48] text-sm cursor-pointer p-3 px-12 rounded-md rounded-br-[30]">Submit</button>
              </div>
              <p className="text-xs mt-2">By Entering the email you accept the terms & conditions</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <h3 className="font-serif text-xl mb-4">Information</h3>
              <ul>
                <li className="mb-2">About Us</li>
                <li className="mb-2">Destinations</li>
                <li className="mb-2">Refunds & Returns</li>
                <li className="mb-2">Customer Reviews</li>
                <li className="mb-2">Special Offers</li>
                <li className="mb-2">Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Help</h3>
              <ul>
                <li className="mb-2">Search</li>
                <li className="mb-2">My Account</li>
                <li className="mb-2">Information</li>
                <li className="mb-2">Packages</li>
                <li className="mb-2">Shipping Details</li>
                <li className="mb-2">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Support</h3>
              <ul>
                <li className="flex items-center mb-2">
                  <FaWhatsapp className="mr-2 text-[#B2D83C]" />
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#B2D83C] transition-colors"
                  >
                    Whatsapp Us
                  </a>
                </li>
                <li className="flex items-center mb-2">
                  <FaPhone className="mr-2 text-[#B2D83C]" />
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#B2D83C] transition-colors"
                  >
                    (+91) {whatsappNumber}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Download Our App</h3>
              <p className="text-sm mb-4">Aliquam eleifend posuere sollicitudin ultrices. Porta nibh venenatis Sodales ut etiam amet.</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12 border-t border-gray-700 pt-8">
            <div className="flex items-center">
              <p className="ml-4 text-sm">Copyright @ All Rights Reserved 2025</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterest />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
