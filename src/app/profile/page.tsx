import Navbar from "@/components/Navbar";
import { Progress, Stack } from "@chakra-ui/react";
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
        <div className=" bg-white shadow-lg p-10 m-10 mx-20 rounded-md ">
          <div className="px-6 py-4 text-left flex">
            <Image
              className=" rounded-full  mr-5"
              src="/images/image.png"
              alt="Sunset in the mountains"
              width={200}
              height={200}
            />
            <div className="my-auto">
              <p className="text-gray-700 text-base">Nome: {"Matheus Levi"}</p>
              <p className="text-gray-700 text-base">Empresa:{"Meta"}</p>
              <p className="text-gray-700 text-base">
                CNPJ: {"34.651.751/0001-90"}
              </p>
              <p className="text-gray-700 text-base">
                Local:{"Praça do Fripisa"}
              </p>
              <p className="text-gray-700 text-base">Telefone:{"4002-8922"}</p>
              <div className="pr-6 pt-4 pb-2 ">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #Tecido
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Concreto
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Madeira
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2 m-auto">
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-base font-medium text-blue-700 ">
                  Metal:
                </span>
                <span className="text-sm font-medium text-blue-700 ">45%</span>
              </div>
              <div className="w-30 bg-gray-200 rounded-full h-2.5 mb-3">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: " 25%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-base font-medium text-blue-700 ">
                  Madeira:
                </span>
                <span className="text-sm font-medium text-blue-700 ">70%</span>
              </div>
              <div className="w-30 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: " 70%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mx-auto justify-center px-6 py-4 flex ">
            <button
              type="submit"
              className=" px-4 py-3 mx-auto font-bold text-white bg-blue-600  rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
            >
              Baixar
            </button>
          </div>
        </div>
        <div className="bg-white shadow-lg p-10 mb-5 mx-20 rounded-md  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Retalhos de Tecido Variado{" "}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Olá, a distribuição é gratuíta basta vir buscar em nossa sede na
            AV.Brito - 1009, setor 3 - Centro.
          </p>
        </div>
        <div className="bg-blue-100 shadow-lg p-10 mb-5 mx-20 rounded-md border border-blue-200 rounded-lg shadow hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
            Oferta Especial: Tecidos Estampados
          </h5>
          <p className="font-normal text-blue-700 dark:text-gray-400">
            Olá, temos uma oferta especial de tecidos estampados disponíveis
            para retirada imediata em nossa loja! Venha nos visitar no endereço:
            AV.Brito - 1009, setor 3 - Centro.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
