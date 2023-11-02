"use client";
import React, { useState } from "react";
import WithSubnavigation from "@/components/Navbar";
import { BASE_URL } from "@/utils/API";
import axios from "axios";

function createproposal() {

  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    description: '',
    price: 0,
    quantity: 0,
    proposer_fk: "fb05836f-cb9b-4b63-99aa-5849a6a4f67f",
    anounce_fk: "a16e5a12-bc81-40f2-88c3-f91998967c81",
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

    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU3NTAyNWU4LWNmMzktNDRkOC05ODJhLTA5ZGFjNTU4NWRkMyIsInVzZXJuYW1lIjoidmVybWVsaGExIiwidHlwZSI6ImRlZmF1bHQiLCJ0b2tlbiI6ImFjZXRva2VuIiwiaWF0IjoxNjk4OTQ2MDAxLCJleHAiOjE2OTg5ODkyMDF9.fwEz1AVdKcORIeX9yt6XB3zcy0Tsc9-F7xzg4dhaHyg'
      const headers: { [key: string]: string } = {};
      headers['authorization'] = `Bearer ${token}`;
      // Fazer a solicitação POST com os dados do formulário
      await axios.post(`${BASE_URL}/proposal/create`, formData, { headers});

      // Redefinir o formulário após o envio bem-sucedido
      setFormData({
        description: '',
        quantity: Number(''),
        price: Number(''),
        proposer_fk: "random-data", //esse dado precisa ser passado mas não é usado para nada, futuras implementações prevêem sua retirada
        anounce_fk: "63fdf1ee-6757-48fc-a6e8-01ce117ad17f"
      });
      setMessage("ENVIADO")
      console.log('Dados enviados com sucesso!');
    } catch (error) {
      setMessage("ERRO AO ENVIAR")
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <>
      <WithSubnavigation />
      <div
        className=" h-screen inset-0 items-start grid grid-cols-1 justify-center pt-10
      bg-gradient-to-tr from-sky-300 to-sky-500  "
      >
        <div className="bg-white shadow-lg p-10 m-10 mx-20 rounded-md">
          <form>
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
                value={formData.price.toString()}
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

export default createproposal;
