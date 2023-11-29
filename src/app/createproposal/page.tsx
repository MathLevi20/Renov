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
  capitalizeFirstLetter,
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

  const [data, setData] = useState<any>(null);

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
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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
      setMessage('Enviado');
      setShowPopup(true)
      setData(response.data)
      console.log('Dados enviados com sucesso!');
    } catch (error) {
      setMessage('Erro ao enviar');
      setShowPopup(true)

      console.log(data);

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
        className=" inset-0 items-start justify-center pt-10
     h-full  min-h-screen  bg-gradient-to-b from-[#009473] to-[#63ff8d]    p-10 "
      >
        <div className="bg-white  min-h-screen shadow-lg p-10 m-10 mx-20 rounded-md">
          <div className="text-xl text p-2  text-center font-semibold">
            Anuncio
          </div>
          <div className="pb-2">
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
              className="bg-gray-800 hover:bg-gray-400 flex mt-5  text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded"

              onClick={handleSubmit}
            >
              Enviar
            </button>
          </form>
          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
              <div className="bg-white   rounded-lg p-6">
                <h3 className="py-3 text-center mx-auto font-normal">{message}</h3>
                <button
                  className="mt-4 px-4 py-2  mx-10  bg-gray-800  text-white rounded hover:bg-gray-500 "
                  onClick={togglePopup}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default createproposal;
