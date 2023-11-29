'use client';
import React, { useState } from 'react';
import WithSubnavigation from '@/components/Navbar';
import { API, BASE_URL, getIdFromLocalStorage, getTokenFromLocalStorage } from '@/utils/API';
import axios from 'axios';
import Popup from '@/components/Popup';

interface Residue {
  title: string;
  description: string;
  unit: string;
  quantity: number;
  total: number;
  residue_fk: string;
}
const brands = [
  {
    "id": "964b53ce-899a-4803-83ad-7b19127dd0c6",
    "name": "Borracha"
  },
  {
    "id": "a2720909-f092-4c7d-8fa2-4db56660436a",
    "name": "Plástico"
  },
  {
    "id": "a5213cd4-e2fe-453b-b4df-451415d86b5e",
    "name": "Vidro"
  },
  {
    "id": "cef1844e-1874-4ad6-a860-11106fb0f30d",
    "name": "Madeira"
  },
  {
    "id": "fa8dcfa3-67f8-49dd-83ed-7f31565d2d2c",
    "name": "Papel"
  },
  {
    "id": "fb05836f-cb9b-4b63-99aa-5849a6a4f67f",
    "name": "Tecido"
  }
]

function Formulario() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');
  const id = getIdFromLocalStorage()
  const [residue_fk, setResidue_fk] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleBrandSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    console.log("Valor selecionado:", selectedValue); // Verifique o valor selecionado
  };

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
    console.log("Valor selecionado:", { name, value }); // Verifique o valor selecionado

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
    console.log(formData)

    try {
      // Fazer a solicitação POST com os dados do formulário
      const response = await API.post('/anounce/create', jsonDaa, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token JWT ao cabeçalho Authorization
        },
      });

      // Redefinir o formulário após o envio bem-sucedido
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



  return (
    <>
      <WithSubnavigation />
      <div
        className=" inset-0 items-start justify-center pt-10
     h-full  min-h-screen  bg-gradient-to-b from-[#009473] to-[#63ff8d]    p-10 "
      >
        <div className="bg-white shadow-lg p-10 m-10 mx-20 rounded-md">
          <h2 className="text-xl text-center p-2 font-semibold">
            Adicionar Resíduo
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
                rows={5}
                name="description"
                className="border border-gray-300 p-2 h-30 rounded w-full"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Selecione a unidade:
              </label>
              <div>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="unit"
                    value="kg"
                    checked={formData.unit === 'kg'}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2">Kg</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="unit"
                    value="unit"
                    checked={formData.unit === 'unit'}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <span className="ml-2">Unit</span>
                </label>
              </div>
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
            <div className='py-2 flex'>
              <label htmlFor="residue_fk" className='mr-3'>Escolha um resíduo:</label>
              <select
                id="residue_fk"
                name="residue_fk"
                onChange={handleChange}
                value={formData.residue_fk}
              >
                <option value="">Selecione um resíduo</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              {/* Aqui você pode usar o formData, se necessário */}
            </div>
            <button
              type="submit"
              className=" bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
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
                  className="mt-4 px-4 py-2  mx-10  bg-gray-800  text-white rounded hover:bg-gray-400 "
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
}

export default Formulario;
