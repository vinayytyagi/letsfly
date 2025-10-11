import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaCalendarAlt, FaBook, FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B3D4A] text-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 w-full">
            <Image src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Footer background" width={800} height={600} className="h-full w-full object-cover" />
        </div>
        <div className="lg:w-2/3 w-full p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <h3 className="text-sm font-bold tracking-widest">OUR NEWSLETTER</h3>
                    <h2 className="text-3xl font-serif my-4">Sign Up To Stay Ahead With The Latest Updates And New Exciting Deals!</h2>
                    <div className="flex mt-4">
                        <input type="email" placeholder="Your Email Id" className="bg-white text-black p-3 mr-2 rounded-md w-full" />
                        <button className="bg-[#B2D83C] text-[#0d3a48] text-sm cursor-pointer p-3 px-12 rounded-md rounded-br-[30]">Submit</button>
                    </div>
                    <p className="text-xs mt-2">By Entering the email you accept the <Link href="/terms" className="underline">terms & conditions</Link></p>
                </div>
            </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <h3 className="font-serif text-xl mb-4">Information</h3>
              <ul>
                <li className="mb-2"><Link href="/about">About Us</Link></li>
                <li className="mb-2"><Link href="/destinations">Destinations</Link></li>
                <li className="mb-2"><Link href="/refunds">Refunds & Returns</Link></li>
                <li className="mb-2"><Link href="/reviews">Customer Reviews</Link></li>
                <li className="mb-2"><Link href="/offers">Special Offers</Link></li>
                <li className="mb-2"><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Help</h3>
              <ul>
                <li className="mb-2"><Link href="/search">Search</Link></li>
                <li className="mb-2"><Link href="/account">My Account</Link></li>
                <li className="mb-2"><Link href="/information">Information</Link></li>
                <li className="mb-2"><Link href="/packages">Packages</Link></li>
                <li className="mb-2"><Link href="/shipping">Shipping Details</Link></li>
                <li className="mb-2"><Link href="/policy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Support</h3>
              <ul>
                <li className="flex items-center mb-2"><FaCalendarAlt className="mr-2 text-[#B2D83C]" /> Schedule Appointment</li>
                <li className="flex items-center mb-2"><FaBook className="mr-2 text-[#B2D83C]" /> Book Your Trip Now</li>
                <li className="flex items-center mb-2"><FaWhatsapp className="mr-2 text-[#B2D83C]" /> Whatsapp Us</li>
                <li className="flex items-center mb-2"><FaPhone className="mr-2 text-[#B2D83C]" /> (+00)-0123456789</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Download Our App</h3>
              <p className="text-sm mb-4">Aliquam eleifend posuere sollicitudin ultrices. Porta nibh venenatis Sodales ut etiam amet.</p>
              {/* <div className="flex gap-2"> */}
                {/* <Image src="https://i.imgur.com/3Z4YjZt.png" alt="Google Play" width={120} height={40} /> */}
                {/* <Image src="https://i.imgur.com/h22H7xJ.png" alt="App Store" width={120} height={40} /> */}
              {/* </div> */}
            </div>
          </div>
          <div className="flex justify-between items-center mt-12 border-t border-gray-700 pt-8">
            <div className="flex items-center">
                {/* <LogoIcon /> */}
                <p className="ml-4 text-sm">Copyright @ Letsgoexample.Com, All Rights Reserved 2025</p>
            </div>
            <div className="flex gap-4 items-center">
                <FaFacebookF />
                <FaTwitter />
                <FaPinterest />
                <FaYoutube />
                {/* <button className="bg-[#B2D83C] text-black p-3 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300"> */}
                    {/* <FaArrowUp /> */}
                {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
