import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-serif text-center mb-8">About Us</h1>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p className="mb-6">
            Welcome to Letsgo, your ultimate partner in crafting unforgettable travel experiences. We believe that travel is not just about visiting new places, but about creating lasting memories. Our team of passionate travel experts is dedicated to curating unique and personalized journeys that cater to your every need and desire.
          </p>
          <p className="mb-6">
            At Letsgo, we specialize in a wide range of travel packages, from thrilling adventures in the heart of nature to serene beach getaways and cultural explorations of ancient cities. We are committed to providing you with the highest level of service and ensuring that every aspect of your trip is seamless and enjoyable.
          </p>
          <p>
            Our mission is to inspire you to explore the world and discover its hidden gems. Whether you&apos;re a solo traveler, a couple on a romantic escape, or a family seeking a fun-filled vacation, we have the perfect itinerary for you. Let us take you on a journey of a lifetime.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
