'use client';
import AnounceCard from '@/components/AnounceCard';
import Navbar from '@/components/Navbar';
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
function ProfileId() {
  const [data, setData] = useState<any>([]);
  const [Announcements, setAnnouncements] = useState<any>([]);
  const [relatory, setReĺatory] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const token = getTokenFromLocalStorage();
  let id = String;
  if (typeof document !== 'undefined') {
    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get('id');
    console.log(id);
    return id
  } else {
    console.log('O objeto document não está disponível neste ambiente.');
  }

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
      setLoading2(true);
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchProfile();
    fetchAnnouncements();
    console.log(data);
  }, []);

  if (Announcements.length === 0) {
    return (
      <div className=" bg-gradient-to-r from-cyan-500 to-blue-500  ">
        <Navbar />
        <div className="h-screen flex flex-col items-center pt-40 ">
          {' '}
          <Image
            className="  animate-pulse"
            src="./LogoLow.svg"
            alt={'Logo'}
            width={100}
            height={100}
          />
          <h2 className="mx-auto font-bold text-white mt-4 justify-start animate-pulse">
            Aguarde só um pouquinho, estamos preparando tudo para você!
          </h2>
        </div>
      </div>
    );
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
                CNPJ: {'34.651.751/0001-90'}
              </p>
              <p className="text-gray-700 text-base">
                Local:{data.city}-{data.uf}
              </p>
              <p className="text-gray-700 text-base">Telefone:{data.phone}</p>
              <div className="pr-6 pt-4 pb-2 "></div>
            </div>
          </div>
        </div>
        <h2 className="text-xl text px-5 text-center font-semibold text-white">
          Propostas Disponiveis
        </h2>{' '}
        <div className=" px-10  rounded-md ">
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

export default ProfileId;
