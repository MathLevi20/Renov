'use client';
import React, { useState } from 'react';
import WithSubnavigation from '@/components/Navbar';
import { API, BASE_URL, getTokenFromLocalStorage } from '@/utils/API';
import axios from 'axios';

interface Residue {
  title: string;
  description: string;
  unit: string;
  quantity: number;
  total: number;
  residue_fk: string;
}

function Formulario() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    unit: '',
    quantity: 0,
    total: 0,
    residue_fk: '',
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
    const token = getTokenFromLocalStorage();
    const jsonData = JSON.stringify(formData);
    const jsonDaa = JSON.parse(jsonData);
    try {
      // Fazer a solicitação POST com os dados do formulário
      await API.post('/anounce/create', jsonDaa, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token JWT ao cabeçalho Authorization
        },
      });

      // Redefinir o formulário após o envio bem-sucedido
      setMessage('ENVIADO');
      console.log('Dados enviados com sucesso!');
    } catch (error) {
      setMessage('ERRO AO ENVIAR');
      console.log(jsonDaa);

      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <>
      <WithSubnavigation />
      <div
        className=" h-screen w-full inset-0 items-start grid grid-cols-1 justify-center pt-10
      bg-gradient-to-b from-[#009473] to-[#63ff8d]   "
      >
        <div className="bg-white shadow-lg p-10 m-10 mx-20 rounded-md">
          <h2 className="text-xl text-center p-2 font-semibold">
            Adicionar resido
          </h2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Título:
              </label>
              <input
                placeholder="Digite o título"
                type="text"
                id="title"
                name="title"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Descrição e a Localização do Material:
              </label>
              <textarea
                placeholder="Exemplo: Endereço: Av. das Árvores, 1234 - Bairro Verde, Cidade Sustentável
Descrição: Ponto de coleta com estrutura para receber diversos materiais recicláveis, incluindo papel, plástico, vidro e metal. Aceita também eletrônicos e pilhas usadas.
Horário de Funcionamento: Segunda a Sexta, das 8h às 18h / Sábados, das 9h às 13h."
                id="description"
                name="description"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="unit"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Unidade:
              </label>
              <input
                placeholder="Digite a unidade ,ex: Kg ou unit"
                type="text"
                id="unit"
                name="unit"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.unit}
                aria-placeholder="kg ou unit"
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
                value={formData.quantity.toString()}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="total"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Total:
              </label>
              <input
                type="text"
                id="total"
                name="total"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.total.toString()}
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
          <h3>{message}</h3>
        </div>
      </div>
    </>
  );
}

export default Formulario;
