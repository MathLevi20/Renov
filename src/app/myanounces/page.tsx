"use client";
import React, { useState } from "react";
import WithSubnavigation from "@/components/Navbar";
import { CardBody, ChakraProvider, Text, StackDivider } from "@chakra-ui/react";

const FilteredItems = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const items = [
    { id: 1, type: "Papel", status: "completo" },
    { id: 2, type: "Plástico", status: "anunciado" },
    { id: 3, type: "Vidro", status: "negociando" },
    { id: 4, type: "Vidro", status: "negociando" },

    { id: 5, type: "Vidro", status: "negociando" },

    { id: 7, type: "Vidro", status: "negociando" },

    // Outros itens
  ];

  // Filtrar os itens com base no tipo e status selecionados
  const filteredItems = items.filter((item) => {
    if (
      (selectedType === "all" || item.type === selectedType) &&
      (selectedStatus === "all" || item.status === selectedStatus)
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
                  <p>Tipo: {item.type} </p>
                  <p>Status:{item.status} </p>
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
