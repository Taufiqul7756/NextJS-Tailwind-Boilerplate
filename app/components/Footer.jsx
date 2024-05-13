import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* Logo and Newsletter */}
      <div className="flex justify-start gap-60 mb-8 md:mb-0 px-20 lg:mb-5">
        <div>
          <h1 className="text-2xl font-bold mb-2"> Logo</h1>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 w-48 mr-2 rounded-l"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r">
            Subscribe
          </button>
        </div>
      </div>
      <div className="container mx-auto flex lg:gap-20 md:gap-10 sm:gap-3 flex-col md:flex-row items-center justify-end px-4">
        {/* Important Links */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Important Links</h2>
          <ul>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>

      <hr className="border-gray-700 my-5" />

      {/* Social Icons */}
      <div className="container mx-auto flex items-center justify-center px-4">
        <Link href="#" className="text-gray-300 hover:text-white mr-4">
          <FaFacebookF />
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white mr-4">
          <FaTwitter />
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white mr-4">
          <FaInstagram />
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
