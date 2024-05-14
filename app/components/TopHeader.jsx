import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const TopHeader = () => {
  return (
    <div className="flex justify-around items-center px-4 py-2 bg-gray-400">
      {/* Social Icons */}
      <div className="flex text-xl">
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

      {/* Contact Information - Hidden on Small Devices */}
      <div className="hidden md:flex justify-center items-center gap-20">
        <div className="flex justify-center items-center gap-5">
          <div>
            <BsTelephoneForward className="text-3xl text-white" />
          </div>
          <div className="grid">
            <span className="font-bold">+8801634139003</span>
            <span className="font-sm text-sm text-gray-300">
              We are open 9 am - 6pm{" "}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div>
            <TfiEmail className="text-3xl text-white" />
          </div>
          <div className="grid">
            <span className="font-bold">Taufiq@gmail.com</span>
            <span className="font-sm text-sm text-gray-300">
              {" "}
              You can email us{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
