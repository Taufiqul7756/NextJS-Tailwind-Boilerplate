"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import TopHeader from "./TopHeader";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 ${
        scrolling ? "bg-gray-800" : "bg-transparent backdrop-blur-sm shadow-md "
      }`}
    >
      <TopHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-${
                scrolling ? "white" : "black"
              } text-xl font-bold`}
            >
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`text-${
                  scrolling ? "white" : "black"
                } hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-${
                  scrolling ? "white" : "black"
                } hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className={`text-${
                  scrolling ? "white" : "black"
                } hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className={`text-${
                  scrolling ? "white" : "black"
                } hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
              >
                About
              </Link>
              <Link
                onClick={closeNavbar}
                href="/contact"
                className={`text-${
                  scrolling ? "white" : "black"
                } hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
              >
                Contact
              </Link>
              <Link
                href="/profile"
                className={`text-${
                  scrolling ? "white" : "black"
                } hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              onClick={closeNavbar}
              href="/"
              className={`text-${
                scrolling ? "white" : "black"
              } hover:text-white bg-slate-400 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Home
            </Link>
            <Link
              onClick={closeNavbar}
              href="/services"
              className={`text-${
                scrolling ? "white" : "black"
              } hover:text-white bg-slate-400 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Services
            </Link>
            <Link
              onClick={closeNavbar}
              href="/portfolio"
              className={`text-${
                scrolling ? "white" : "black"
              } hover:text-white bg-slate-400 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Portfolio
            </Link>
            <Link
              onClick={closeNavbar}
              href="/about"
              className={`text-${
                scrolling ? "white" : "black"
              } hover:text-white bg-slate-400 block px-3 py-2 rounded-md text-base font-medium`}
            >
              About
            </Link>
            <Link
              onClick={closeNavbar}
              href="/contact"
              className={`text-${
                scrolling ? "white" : "black"
              } hover:text-white bg-slate-400 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Contact
            </Link>
            <Link
              onClick={closeNavbar}
              href="/profile"
              className={`text-${
                scrolling ? "white" : "black"
              } hover:text-white bg-slate-400 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
