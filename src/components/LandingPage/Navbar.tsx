// components/Navbar.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between m-auto items-center">
          <Link href="/">
            <Image src="./LogoLow.svg" alt={'Logo'} width={50} height={50} />
          </Link>
          <div className="hidden md:flex  space-x-4">
            <Link href="#feature" className="m-auto px-3">
              <p className="text-white m-auto ">Feature</p>
            </Link>
            <Link href="#coments" className="m-auto  px-3">
              <p className="text-white m-auto ">Coments</p>
            </Link>
            <Link href="#contacts" className="m-auto px-3">
              <p className="m-auto  text-white">Contact</p>
            </Link>
            <Link href="/register" className="">
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white  rounded-md border-2 hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Register
              </button>
            </Link>
            <Link href="/login">
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-slate-800 bg-[#63FF8D]  rounded-md border-2  border-[#63FF8D]	 hover:bg-[#4aff7b] focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Login
              </button>
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
              <div className="absolute top-15 right-0 bg-white p-4 shadow rounded-md">
                <Link href="#feature">
                  <p className=" px-4  justify-center block text-gray-800 mb-2">
                    Feature
                  </p>
                </Link>
                <Link href="#coments">
                  <p className=" px-4  justify-center block text-gray-800 mb-2">
                    Coments
                  </p>
                </Link>
                <Link href="#contacts">
                  <p className="px-4  text-gray-800">Contact</p>
                </Link>

                <Link href="/register" className="">
                  <button
                    type="submit"
                    className="block text-gray-800  rounded-md border-2  border-[#63FF8D] px-4 py-2 font-bold	"
                  >
                    Register
                  </button>
                </Link>
                <Link href="/login">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 mt-2 font-bold text-slate-800 bg-[#63FF8D]  rounded-md border-2  border-[#63FF8D]	 hover:bg-[#4aff7b] focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                  >
                    Login
                  </button>
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
