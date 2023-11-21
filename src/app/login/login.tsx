'use client';

import { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button, CircularProgress, Spinner } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function Login() {
  const navigate = useRouter();
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: any) => {
    setPassword(event.target.value);
  };
  const handleSignIn = async () => {
    try {
      setLoading(true);
      const signInResult = await signIn({ email: username, password });
      console.log('finalizado');
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.error(err);
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
      <div className="px-0 md:px-20 sm:px-10  mx-20 sm:mx-10 md:mx-20 my-auto">
        <div className="w-full  space-y-8 ">
          <div>
            <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
            <p className="mt-2 text-gray-600">
              Por favor, faça login na sua conta.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={username}
                  onChange={handleEmailInput}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Senha
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-3 mt-1 border-gray-300  border-2  rounded-md focus:bg-[#63FF8D] focus:ring focus:ring-indigo-200"
                  value={password}
                  onChange={handlePasswordInput}
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                {loading ? (
                  <div className="flex px-4 py-3 font-bold text-slate-800 bg-indigo-100  rounded-md border-2  border-[#63FF8D] hover:bg-[#63FF8D] focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700">
                    <Button
                      className="m-auto"
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
                    className="w-full px-4 py-3 font-bold text-slate-800 bg-[#63FF8D] rounded-md border-2  border-[#63FF8D] hover:bg-[#63FF8D] focus:outline-none focus:shadow-outline-indigo focus:border-[#63FF8D]"
                    onClick={handleSignIn}
                  >
                    Entrar
                  </button>
                )}
              </div>

              <button className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
