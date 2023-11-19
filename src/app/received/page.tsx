// pages/AnouncePage.tsx
"use client";
import WithSubnavigation from "@/components/Navbar";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

import {
  Container,
  Box,
  InputRightAddon,
  InputGroup,
  Input,
  InputLeftAddon,
  Skeleton,
} from "@chakra-ui/react";
import ResidueCard from "@/components/receivedPage/ReceivedCard";
import { API, getTokenFromLocalStorage } from "@/utils/API";
import { format } from "date-fns";
import ProfileLink from "@/components/Profile/ProfileLink";

interface ProposalData {
  id: string;
  description: string;
  price: string;
  acepted: boolean |null;
  status: boolean | null;
  proposer_fk: string;
  anounce_fk: string;
  created_at: string;
  quantity: string;
        profile: {
    username: string;
    image_url: string | null;
  };
}

const proposalData: ProposalData[] = [
  {
    "id": "3f0369e6-fbbe-4dd8-953d-68460c48d03a",
    "description": "olá usaremos tal resíduo na produção de móveis planejados",
    "price": "50",
    "acepted": null,
    "status": null,
    "proposer_fk": "07123108-2fa1-437a-8464-802dc85b77cc",
    "anounce_fk": "373d7fda-e2a1-4248-91e3-21ae173c67b7",
    "created_at": "2023-09-23T10:49:57.881Z",
    "quantity": "25",
          		"profile": {
			"username": "empresaX",
			"image_url": null
		}
  },
  {
    "id": "9aca435e-ff25-4127-9803-8ca76283376e",
    "description": "olá, faremos a manutenção e realocação desse material",
    "price": "30",
    "acepted": null,
    "status": null,
    "proposer_fk": "88353cc6-6528-4499-948e-4c9ae6fd11d5",
    "anounce_fk": "373d7fda-e2a1-4248-91e3-21ae173c67b7",
    "created_at": "2023-09-23T10:49:57.881Z",
    "quantity": "50",
          		"profile": {
			"username": "empresaX",
			"image_url": null
		}
  },
  {
    "id": "4badb287-7dc4-41c7-9a72-0a2f3b7295e9",
    "description": "usaremos na produção de sofás de baixo custo para torná-lo um móvel acessícvel",
    "price": "80",
    "acepted": null,
    "status": null,
    "proposer_fk": "d5f319a0-f87d-4497-ba2e-86c6a6e5a04b",
    "anounce_fk": "373d7fda-e2a1-4248-91e3-21ae173c67b7",
    "created_at": "2023-09-23T10:49:57.881Z",
    "quantity": "100",
          		"profile": {
			"username": "empresaX",
			"image_url": null
		}
  },
];


const Received: React.FC = () => {
    const [data, setData] = useState<any[]>(proposalData);
    const [loading, setLoading] = useState(false);
    const token = getTokenFromLocalStorage()
        const [search, setSearch] = useState('')

    const fetchAnnouncements = async () => {
    try {
      const response = await API.get('/proposal/proposalsforme/', {
        headers: {
          Authorization: `Bearer ${token}` // Adiciona o token JWT ao cabeçalho Authorization
        }}); // Rota da sua API
            console.log(response)

      setData(response.data);
      setLoading(true)
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

    useEffect(() => {

      fetchAnnouncements();
      console.log(data)
  }, [data]); 
  return (
    <>
      <WithSubnavigation />
                  <div
        className=" h-full inset-0 items-start grid grid-cols-1 justify-center pt-10
      bg-gradient-to-tr from-sky-300 to-sky-500  "
      >
      <div className="py-2 text-2xl font-semibold flex">
        <div className="mt-3 w-full flex justify-center pt-0">
          <input
            type="text"
            placeholder={'Procurar'}
                         onChange={(e) => {
              setSearch(e.target.value)
                         }}
              
            className="px-4 py-1 mx-2 flex justify-center w-3/4 placeholder-slate-900 text-black  rounded text-lg border-2 outline-none text-left"
          />
          <SearchIcon m={5} />
        </div>
      </div>{" "}
      <Container maxW="container.xl" py={8} px={10}>
        <h2 className="text-xl text px-5 font-semibold text-white">Propostas Recebidas</h2>

        {data .filter((data: any) => {
              console.log(data.description)
              if (data.description.toLowerCase().includes(search.toLowerCase())) {
                return data
              }
            }).map((data) => (
                     <div className="bg-white shadow-lg p-10  m-10 mx-10 rounded-md"
                key={data.id}>  
                    <ProfileLink image={data.profile.image_url} username={data.profile.username}/>

              <ResidueCard            key={data.id}

              isloading={loading}
              id={data.id}
              description={data.description}
              status={data.status}
              proposer_fk={String(data.proposer_fk)}
              price={String(data.price)}
              accepted={data.acepted}               created_at ={format(new Date(data.created_at), 'dd/MM/yyyy HH:mm:ss')}
 quantity={data.quantity}    
              />
                       
</div>  

        ))}
      </Container>
</div>
    </>
  );
};

export default Received;
