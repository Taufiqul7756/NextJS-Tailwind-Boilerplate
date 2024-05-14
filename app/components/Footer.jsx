import Image from "next/image";
import Link from "next/link";
import { BsTelephoneForward } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import map from "../images/map.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 ">
      <div className="font-bold text-4xl px-16 mb-10">LOGO</div>
      <div className=" flex px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Get In touch */}
          <div className="grid">
            <h4 className="text-lg font-bold">Get In touch</h4>
            <p className="flex justify-center items-center gap-5">
              <BsTelephoneForward className="text-xl" />{" "}
              <span>Flat#4/6, House#1/5 Mizan Tower, Dhaka</span>
            </p>
            <p className="flex justify-center items-center gap-5">
              <BsTelephoneForward className="text-xl " />{" "}
              <span>Phone: +88 01744 79 88 65, +88 01329 74 22 00</span>
            </p>
            <p className="flex justify-center items-center gap-5">
              <BsTelephoneForward className="text-xl" />{" "}
              <span>
                E-mail: falconsolution18@gmail.com Web: www.falconsolutionbd.com
              </span>
            </p>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h4 className="text-lg font-bold mb-4">COMPANY</h4>
            <ul className="grid gap-5">
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div className="">
            <h4 className="text-lg font-bold mb-4">Important Links</h4>
            <ul className="grid gap-5">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office Location Map */}
          <div>
            <h4 className="text-lg font-bold mb-4">Head Office Location Map</h4>
            <Link href="/about">
              <Image
                src={map}
                alt="Location Map"
                width={380}
                height={250}
                className="cursor-pointer"
              />
            </Link>
            <div className="flex text-xl mt-5 justify-center items-center bg-slate-400 py-2 rounded-lg">
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
