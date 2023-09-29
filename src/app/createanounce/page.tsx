"use client";
import React, { useState } from "react";
import WithSubnavigation from "@/components/Navbar";

function Formulario() {
  const [formData, setFormData] = useState({
    title: "Retalhos de tecido variado",
    description:
      "Olá, a distribuição é gratuita. Basta vir buscar em nossa sede na AV.Brito - 1009, setor 3 - Centro.",
    unit: "kg",
    quantity: "2800",
    total: "2800",
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
        <div className="bg-white shadow-lg p-10 m-10 mx-20 rounded-md">
          <form onSubmit={handleSubmit}>
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
                value={formData.quantity}
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
                value={formData.total}
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
