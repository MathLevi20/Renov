'use client';

import { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button, CircularProgress, Spinner } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { API } from '@/utils/API';

export default function Login() {
  const navigate = useRouter();
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [username, setEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    cnpj: '',
    name: '',
    trading_name: '',
    type: 'default',
    uf: '',
    city: '',
    phone: '',
    image_url: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    const jsonDaa = JSON.parse(jsonData);
    try {
      setLoading(true);

      // Fazer a solicitação POST com os dados do formulário
      await API.post('/auth/signup', formData);
      setLoading(false);

      // Redefinir o formulário após o envio bem-sucedido
      setMessage('ENVIADO');
      console.log('Dados enviados com sucesso!');
    } catch (error) {
      setMessage('ERRO AO ENVIAR');
      console.log(jsonDaa);
      setLoading(false);

      console.error('Erro ao enviar os dados:', error);
    }
  };
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 h-screen">
      <div className=" hidden md:grid bg-violet-700">
        <Image
          src="/images/image.png"
          width={1000}
          height={1000}
          alt="Logo"
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
          className="  "
          priority={true}
        />
      </div>
      <div className="px-0 md:px-20 sm:px-10  py-10 mx-20 sm:mx-10 md:mx-20 my-auto">
        <div className="w-full  space-y-8 ">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block font-bold text-gray-700"
              >
                Username
                <input
                  id="username"
                  type="username"
                  name="username"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="cnpj" className="block font-bold text-gray-700">
                CNPJ
                <input
                  id="cnpj"
                  type="cnpj"
                  name="cnpj"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.cnpj}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="name" className="block font-bold text-gray-700">
                Name
                <input
                  id="name"
                  type="name"
                  name="name"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="uf" className="block font-bold text-gray-700">
                Estado
                <input
                  id="uf"
                  type="uf"
                  name="uf"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.uf}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city" className="block font-bold text-gray-700">
                Cidade
                <input
                  id="city"
                  type="city"
                  name="city"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.city}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold text-gray-700">
                Telefone
                <input
                  id="phone"
                  type="phone"
                  name="phone"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                {loading ? (
                  <div className="flex px-4 py-3 font-bold text-slate-800 bg-indigo-100  rounded-md border-2  border-indigo-400 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700">
                    <Button
                      isLoading={loading}
                      loadingText="Loading..."
                      leftIcon={<AddIcon />}
                    >
                      {' '}
                      Add Item
                    </Button>
                  </div>
                ) : (
                  <button
                    className="w-full px-4 py-3 font-bold text-slate-800 bg-indigo-100  rounded-md border-2  border-indigo-400 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                )}
              </div>
              <Link href="/login">
                <button className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
