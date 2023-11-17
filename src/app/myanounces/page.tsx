"use client";
import React, { useState } from "react";
import WithSubnavigation from "@/components/Navbar";
import { CardBody, ChakraProvider, Text, StackDivider } from "@chakra-ui/react";

const FilteredItems = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const items = 
[
	{
		"id": "59f3fea3-0e8e-4e65-97f8-bf18803c4867",
		"name": "metal",
		"description": "latas, sucatas metálicas",
		"nature": "solid",
		"created_at": "2023-09-23T10:12:00.818Z"
	},
	{
		"id": "a2720909-f092-4c7d-8fa2-4db56660436a",
		"name": "plástico",
		"description": "recipientes plásticos, embalagens",
		"nature": "solid",
		"created_at": "2023-09-23T10:12:00.818Z"
	},
	{
		"id": "a5213cd4-e2fe-453b-b4df-451415d86b5e",
		"name": "vidro",
		"description": "garrafas, vidro quebrado",
		"nature": "solid",
		"created_at": "2023-09-23T10:12:00.818Z"
	},
	{
		"id": "cef1844e-1874-4ad6-a860-11106fb0f30d",
		"name": "madeira",
		"description": "palets, ripas, serragem e afins",
		"nature": "solid",
		"created_at": "2023-09-23T10:12:00.818Z"
	},
	{
		"id": "fa8dcfa3-67f8-49dd-83ed-7f31565d2d2c",
		"name": "papel",
		"description": "papelão, papel de escritório",
		"nature": "solid",
		"created_at": "2023-09-23T10:12:00.818Z"
	}

    // Outros itens
  ];

  // Filtrar os itens com base no tipo e status selecionados
  const filteredItems = items.filter((item) => {
    if (
      (selectedType === "all" || item.name === selectedType) &&
      (selectedStatus === "all" || item.nature === selectedStatus)
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className=" ">
      <WithSubnavigation />
      <div className=" ">
        <div className="grid grid-cols-2 h-full ">
          <div className=" bg-white h-fit w-fit shadow-lg p-10 m-10 mx-20 rounded-md">
            <div className="mb-4 ">
              <label htmlFor="typeSelect" className="mr-2">
                Filtrar por Tipo:
              </label>
              <select
                id="typeSelect"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">Todos</option>
                <option value="Papel">Papel</option>
                <option value="Plástico">Plástico</option>
                <option value="Vidro">Vidro</option>
                {/* Adicione outras opções de tipo aqui */}
              </select>
            </div>

            <div className="mb-4 grid grid-rows-2">
              <label className="mr-2">Filtrar por Status:</label>
              <div>
                <button
                  className={`mr-2 px-4 py-2 border ${
                    selectedStatus === "all" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => setSelectedStatus("all")}
                >
                  Todos
                </button>
                <button
                  className={`mr-2 px-4 py-2 border ${
                    selectedStatus === "completo"
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedStatus("completo")}
                >
                  Completo
                </button>
                <button
                  className={`mr-2 px-4 py-2 border ${
                    selectedStatus === "anunciado"
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedStatus("anunciado")}
                >
                  Anunciado
                </button>
                <button
                  className={`mr-2 px-4 py-2 border ${
                    selectedStatus === "negociando"
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedStatus("negociando")}
                >
                  Negociando
                </button>
                {/* Adicione outros botões de status conforme necessário */}
              </div>
            </div>
          </div>
          <div className="my-auto h-full mt-10">
            {filteredItems.map((item: any) => (
              <div
                className=" rounded bg-slate-50 m-4 overflow-hidden p-10 shadow-md"
                key={item.id}
              >
                <div>
                  <p>Tipo: {item.name} </p>
                  <p>Status:{item.nature} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredItems;
