"use client";
import React, { useState } from "react";
import WithSubnavigation from "@/components/Navbar";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    cnpj: "",
    local: "",
    telefone: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
    console.log(formData);
  };

  return (
    <>
      <WithSubnavigation />

      <div
        className=" h-screen inset-0 items-start grid grid-cols-1 justify-center pt-10
      bg-gradient-to-tr from-sky-300 to-sky-500  "
      >
        {" "}
        <div className="bg-white shadow-lg p-10 mx-20 gap rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="empresa"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Empresa:
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cnpj"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                CNPJ:
              </label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.cnpj}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="local"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Local:
              </label>
              <input
                type="text"
                id="local"
                name="local"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.local}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="telefone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Telefone:
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                className="border border-gray-300 p-2 rounded w-full"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Formulario;
