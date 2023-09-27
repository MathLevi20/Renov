// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="./LogoLow.svg" alt={"Logo"} width={50} height={50} />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/about">
              <p className="text-white">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white">Contact</p>
            </Link>
            <Link href="/contact">
              <p className="block text-white">Contact</p>
            </Link>
            <Link href="/register">
              <p className="block text-white">Register</p>
            </Link>
            <Link href="/login">
              <p className="block text-white">Login</p>
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {showMenu && (
              <div className="absolute top-12 right-0 bg-white p-4 shadow rounded-md">
                <Link href="/about">
                  <p className="block text-gray-800 mb-2">About</p>
                </Link>
                <Link href="/contact">
                  <p className="block text-gray-800">Contact</p>
                </Link>
                <Link href="/contact">
                  <p className="block text-gray-800">Contact</p>
                </Link>
                <Link href="/contact">
                  <p className="block text-gray-800">Contact</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
