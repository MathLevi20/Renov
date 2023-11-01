/* eslint-disable react/jsx-no-undef */
// components/Navbar.tsx
"use client";
import {
  AddIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  InfoOutlineIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BsJournalText } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex">
            <Image src="./LogoLow.svg" alt={"Logo"} width={50} height={50} />
            <p className="text-white text-2xl m-auto px-2 font-bold">Renov</p>
          </Link>
          <div className="hidden lg:flex space-x-4">
            <Link className="flex" href="/anounce">
              <BsJournalText className="m-auto" />{" "}
              <p className="block m-auto px-2 text-gray-100">Anuncios</p>
            </Link>
            <Link className="flex" href="/createanounce">
              <AddIcon className="m-auto" />{" "}
              <p className=" m-auto px-2 text-gray-100">Adicionar resíduo</p>
            </Link>
            <Link className="flex" href="/sent">
              <ArrowUpIcon className="m-auto" />{" "}
              <p className="m-auto px-2 text-gray-100">Enviados</p>
            </Link>
            <Link className="flex" href="/received">
              <ArrowDownIcon className="m-auto" />
              <p className="block m-auto px-2 text-gray-100">Recebidos</p>
            </Link>
            <Link className="flex" href="/myanounces">
              <InfoOutlineIcon className="m-auto" />{" "}
              <p className="block m-auto px-2 text-gray-100">Meus resíduos</p>
            </Link>
            <Link className="flex" href="/profile">
              <SettingsIcon className="m-auto" />{" "}
              <p className="block m-auto px-2 text-gray-100">Profile</p>
            </Link>
          </div>
          <div className="lg:hidden">
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
              <div className="absolute top-12 right-0 bg-white px-5 py-2 shadow rounded-md">
                <Link href="/createanounce">
                  <AddIcon />{" "}
                  <p className="block text-gray-800 ">Adicionar resíduo</p>
                </Link>
                <Link href="/sent">
                  <ArrowUpIcon />{" "}
                  <p className="block text-gray-800">Enviados</p>
                </Link>
                <Link href="/received">
                  <ArrowDownIcon />
                  <p className="block text-gray-800">Recebidos</p>
                </Link>
                <Link href="/contact">
                  <InfoOutlineIcon />{" "}
                  <p className="block text-gray-800">Meus resíduos</p>
                </Link>
                <Link href="/contact">
                  <SettingsIcon />{" "}
                  <p className="block text-gray-800">Profile</p>
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
