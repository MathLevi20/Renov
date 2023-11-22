/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import WithSubnavigation from '@/components/Navbar';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useSearchParams, useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AnounceCard from './AnounceCard';
import Navbar from '@/components/Navbar';
import {
  getTokenFromLocalStorage,
  API,
  getIdFromLocalStorage,
} from '@/utils/API';
import { Progress, Stack } from '@chakra-ui/react';
import Image from 'next/image';

interface AnounceData {
  id: string;
  title: string;
  description: string;
  unit: string;
  quantity: number;
  price: number;
  total: string;
  anounce_fk?: string | null;
  residue_fk?: string | null;
  created_at: string;
}

const createproposal = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // retorna a string "Jonathan"
  let anouncer_fk: string = '';
  let id: string = '';

  if (typeof document !== 'undefined') {
    const params = new URLSearchParams(document.location.search.substring(1));
    id = params.get('id') || '';
    anouncer_fk = params.get('anouncer_fk') || '';
  } else {
    console.log('O objeto document não está disponível neste ambiente.');
  }

  console.log(id);

  const [data, setData] = useState<any>([]);

  console.log(id);
  console.log(anouncer_fk);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message, setMessage] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState<any>([{
    description: '',
    price: 0,
    quantity: 0,
    anounce_fk: '',
  }]);
  const token = getTokenFromLocalStorage();

  const fetchAnnouncements = async () => {
    try {
      const response = await API.get(`/anounce/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token JWT ao cabeçalho Authorization
        },
      }); // Rota da sua API // Rota da sua API
      console.log(response.data.anounce_fk);
      console.log(response.data);
      setFormData({
        description: '',
        quantity: Number(''),
        price: Number(''),
        anounce_fk: response.data.id,
      });
      setData(response.data);
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    console.log(data);
  }, []);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Fazer a solicitação POST com os dados do formulário
      console.log(formData)
      const response = await API.post(`/proposal/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token JWT ao cabeçalho Authorization
        },
      }); // Rota da sua API // Rota da sua API);

      // Redefinir o formulário após o envio bem-sucedido
      setFormData({
        description: '',
        quantity: Number(''),
        price: Number(''),
        anounce_fk: '',
      });
      setMessage('ENVIADO');
      console.log('Dados enviados com sucesso!');
    } catch (error) {
      setMessage('ERRO AO ENVIAR');
      console.error('Erro ao enviar os dados:', error);
    }
  };
  if (!data) {
    return (
      <div className=" bg-gradient-to-b from-[#009473] to-[#63ff8d]   ">
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
    <>
      <WithSubnavigation />
      <div
        className=" h-screen  inset-0 items-start grid grid-cols-1 justify-center pt-10
     bg-gradient-to-b from-[#009473] to-[#63ff8d]   "
      >
        <div className="bg-white shadow-lg p-10 m-10 mx-20 rounded-md">
          <div className="text-xl text p-2  text-center font-semibold">
            Anuncio
          </div>
          <div className="pb-5">
            <AnounceCard
              anounce_fk={data.anouncer_fk}
              title={data.title}
              description={data.description}
              unit={data.unit}
              quantity={data.quantity}
              total={data.total}
            />
          </div>
          <h2 className="text-xl text py-2 text-center  font-semibold">
            Proposta
          </h2>

          <form className="border border-gray-200  bg-slate-200 rounded shadow-md p-4 mb-4 ">
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Descrição:
              </label>
              <textarea
                id="description"
                name="description"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Preço:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.price !== undefined ? formData.price.toString() : ''}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Quantidade:
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.quantity !== undefined ? formData.quantity.toString() : ''}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </form>
          <div className="bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl">{message}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default createproposal;
