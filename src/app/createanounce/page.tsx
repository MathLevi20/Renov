"use client";
import React, { useState } from "react";
import WithSubnavigation from "@/components/Navbar";
import { BASE_URL } from "@/utils/API";
import axios from "axios";

function Formulario() {

  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    unit: 'kg',
    quantity: 0,
    total: 0,
    residue_fk: "fb05836f-cb9b-4b63-99aa-5849a6a4f67f",
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
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU3NTAyNWU4LWNmMzktNDRkOC05ODJhLTA5ZGFjNTU4NWRkMyIsInVzZXJuYW1lIjoidmVybWVsaGExIiwidHlwZSI6ImRlZmF1bHQiLCJ0b2tlbiI6ImFjZXRva2VuIiwiaWF0IjoxNjk4ODcwMjEyLCJleHAiOjE2OTg5MTM0MTJ9.oH2OL5QIaB750lpuWQgjCusgS7a2g90HcpkhzfV4TlY'
      const headers: { [key: string]: string } = {};
      headers['authorization'] = `Bearer ${token}`;
      // Fazer a solicitação POST com os dados do formulário
      await axios.post(`${BASE_URL}/anounce/create`, formData, { headers});

      // Redefinir o formulário após o envio bem-sucedido
      setFormData({
        title: '',
        description: '',
        unit: 'kg',
        quantity: Number(''),
        total: Number(''),
        residue_fk: "fb05836f-cb9b-4b63-99aa-5849a6a4f67f"
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
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Título:
              </label>
              <input
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
                htmlFor="unit"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Unidade:
              </label>
              <input
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
