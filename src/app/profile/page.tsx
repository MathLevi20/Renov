"use client"
import Navbar from "@/components/Navbar";
import { getTokenFromLocalStorage, API, getIdFromLocalStorage } from "@/utils/API";
import { Progress, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface User {
  id: string;
  username: string;
  name: string;
  type: string;
  uf: string;
  city: string;
  phone: string;
  image_url: string | null;
}

function Profile() {

  const [data, setData] = useState<any>(    );
    const [loading, setLoading] = useState(false);
    const token = getTokenFromLocalStorage()
    const id = getIdFromLocalStorage()
        const [search, setSearch] = useState('')

    const fetchAnnouncements = async () => {
    try {
      const response = await API.get(`/profile/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` // Adiciona o token JWT ao cabeçalho Authorization
        }}); // Rota da sua API
            console.log(response)

      setData(response.data);
      setLoading(true)
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

    useEffect(() => {

      fetchAnnouncements();
      console.log(data)
  }, [data]); 



  if (!data) {

    return (   <div className=" bg-gradient-to-r from-cyan-500 to-blue-500  ">
      <Navbar />
      <div className=" h-screen w-auto m-auto  pt-40 ">            <Image className="  animate-pulse m-auto" src="./LogoLow.svg" alt={"Logo"} width={100} height={100} />
</div>

    </div>)
  }
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
              <p className="text-gray-700 text-base">Nome: {data.username}</p>
              <p className="text-gray-700 text-base">Empresa:{data.name}</p>
              <p className="text-gray-700 text-base">
                CNPJ: {"34.651.751/0001-90"}
              </p>
              <p className="text-gray-700 text-base">
                Local:{data.city}-{data.uf }
              </p>
              <p className="text-gray-700 text-base">Telefone:{data.phone}</p>
              <div className="pr-6 pt-4 pb-2 ">

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
        <div className="bg-white p-10 mb-5 mx-20 rounded-md  border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Retalhos de Tecido Variado{" "}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Olá, a distribuição é gratuíta basta vir buscar em nossa sede na
            AV.Brito - 1009, setor 3 - Centro.
          </p>
        </div>
        <div className="bg-blue-100 shadow-lg p-10 mb-5 mx-20 rounded-md border border-blue-200 hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
