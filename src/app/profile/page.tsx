import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-full  ">
      <Navbar />
      <div
        className=" h-full inset-0 items-start grid grid-cols-1 justify-center pt-10
      bg-gradient-to-tr from-sky-300 to-sky-500 "
      >
        <div className="grid grid-rows-1 mb-10 m-30 bg-white shadow-lg p-10  rounded-md ">
          <Image
            className="m-auto rounded-lg"
            src="/images/image.png"
            alt="Sunset in the mountains"
            width={300}
            height={300}
          />
          <div className="px-6 py-4 text-left">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">Nome: {"Matheus Levi"}</p>
            <p className="text-gray-700 text-base">Empresa:{"Meta"}</p>
            <p className="text-gray-700 text-base">
              CNPJ: {"34.651.751/0001-90"}
            </p>
            <p className="text-gray-700 text-base">
              Local:{"Praça do Fripisa"}
            </p>
            <p className="text-gray-700 text-base">Telefone:{"4002-8922"}</p>
          </div>
          <div className="px-6 pt-4 pb-2 m-auto">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tecido
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Concreto
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Madeira
            </span>
          </div>
        </div>
        <div className=" bg-white shadow-lg p-10 m-10 mx-20 rounded-md ">
          <div className="px-6 py-4 text-left">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">Nome: {"Matheus Levi"}</p>
            <p className="text-gray-700 text-base">Empresa:{"Meta"}</p>
            <p className="text-gray-700 text-base">
              CNPJ: {"34.651.751/0001-90"}
            </p>
            <p className="text-gray-700 text-base">
              Local:{"Praça do Fripisa"}
            </p>
            <p className="text-gray-700 text-base">Telefone:{"4002-8922"}</p>
          </div>
          <div className="px-6 pt-4 pb-2 m-auto">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tecido
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Concreto
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Madeira
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
