'use client';
import AnounceCard from '@/components/ProfilePage/AnounceCard';
import Navbar from '@/components/Navbar';
import ProfileLink from '@/components/Profile/ProfileLink';
import {
  getTokenFromLocalStorage,
  API,
  getIdFromLocalStorage,
} from '@/utils/API';
import { Progress, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
interface Residue {
  ResidueName: string;
  ResidueDescription: string;
  AnounceUnit: string;
  TotalSum: string;
  QuantitySum: string;
}

interface Announcement {
  id: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
  anouncer_fk: string;
  residue_fk: string;
  created_at: string;
  hide: boolean;
  profile: {
    username: string;
    image_url: string | null;
  };
}
function Profile() {
  const [data, setData] = useState<any>([]);
  const [Announcements, setAnnouncements] = useState<any>([]);
  const [relatory, setReĺatory] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const token = getTokenFromLocalStorage();
  const id = getIdFromLocalStorage();

  const fetchProfile = async () => {
    try {
      const response = await API.get(`/profile/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token JWT ao cabeçalho Authorization
        },
      }); // Rota da sua API

      setData(response.data);
      setLoading(true);
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };
  const fetchAnnouncements = async () => {
    try {
      const response = await API.get(
        `/anounce/listbyanouncerid/?skip=0&take=100&id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Adiciona o token JWT ao cabeçalho Authorization
          },
        }
      ); // Rota da sua API
      console.log(response.data);

      setAnnouncements(response.data);
      setLoading(true);
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };
  const fetchRelatory = async () => {
    try {
      const response = await API.get(`/profile/generaterelatory`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token JWT ao cabeçalho Authorization
        },
      }); // Rota da sua API
      setReĺatory(response.data);
      setLoading(true);
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };
  useEffect(() => {
    fetchProfile();
    fetchAnnouncements();
    fetchRelatory();
    console.log(data);
  }, []);

  if (!data) {
    return (
      <div className="bg-gradient-to-b from-[#009473] to-[#63ff8d]   ">
        <Navbar />
        <div className=" h-screen w-auto m-auto  pt-40 ">
          {' '}
          <Image
            className="  animate-pulse m-auto"
            src="./LogoLow.svg"
            alt={'Logo'}
            width={100}
            height={100}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen  min-h-screen bg-[#009473]   ">
      <Navbar />

      <div
        className=" inset-0 min-h-screen  bg-[#009473]  items-start grid grid-cols-1 justify-center pt-10
   l "
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
                CNPJ: {'34.651.751/0001-90'}
              </p>
              <p className="text-gray-700 text-base">
                Local:{data.city}-{data.uf}
              </p>
              <p className="text-gray-700 text-base">Telefone:{data.phone}</p>
              <div className="pr-6 pt-4 pb-2 "></div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2 m-auto">
            <div></div>
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold mb-4">Relatorio</h1>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {relatory.map((residue: any, index: any) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">
                      {residue.ResidueName}
                    </h2>
                    <p className="text-sm text-gray-600 mb-1">
                      {residue.ResidueDescription}
                    </p>
                    <p className="text-sm mb-1">
                      Anounce Unit: {residue.AnounceUnit}
                    </p>
                    <p className="text-sm mb-1">
                      Total Sum: {residue.TotalSum}
                    </p>

                    <p className="text-sm mb-1">
                      Quantity Sum: {residue.QuantitySum}
                    </p>
                    <div className="bg-green-200 h-5 rounded-md">
                      <div
                        className="bg-green-500 h-full rounded-md"
                        style={{
                          width: `${((parseFloat(residue.QuantitySum) / parseFloat(residue.TotalSum)) * 100).toFixed(2)
                            }%`,
                        }}
                      >
                        <div className='mx-2 font-bold text-white text-sm'>{((parseFloat(residue.QuantitySum) / parseFloat(residue.TotalSum)) * 100).toFixed(2)}%</div></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
        <h2 className="text-2xl text mx-auto font-semibold text-white">
          Anúncio do usuario
        </h2>
        <div className=" p-10  min-h-screen   bg-gradient-to-b from-[#009473] to-[#63ff8d]  bg-[#63ff8d]  rounded-md ">
          {Announcements.map((item: any) => (
            <div
              className="bg-white shadow-lg p-10  m-10 mx-10 rounded-md"
              key={item.id}
            >
              {' '}
              <AnounceCard
                isloading={loading}
                id={item.id}
                anouncer_fk={item.anouncer_fk}
                title={item.title}
                description={item.description}
                unit={item.unit}
                quantity={item.quantity}
                total={item.total}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
