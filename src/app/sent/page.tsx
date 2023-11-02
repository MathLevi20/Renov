"use client";

import { BASE_URL } from "@/utils/API";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Proposal {
  id: string;
  description: string;
  price: string;
  acepted: boolean | null;
  status: boolean | null;
  proposer_fk: string;
  anounce_fk: string;
  created_at: string;
  quantity: string;
}

const anounceId = "373d7fda-e2a1-4248-91e3-21ae173c67b7"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU3NTAyNWU4LWNmMzktNDRkOC05ODJhLTA5ZGFjNTU4NWRkMyIsInVzZXJuYW1lIjoidmVybWVsaGExIiwidHlwZSI6ImRlZmF1bHQiLCJ0b2tlbiI6ImFjZXRva2VuIiwiaWF0IjoxNjk4OTQ2MDAxLCJleHAiOjE2OTg5ODkyMDF9.fwEz1AVdKcORIeX9yt6XB3zcy0Tsc9-F7xzg4dhaHyg"

const DetailAnounce: React.FC = () => {
  const [Proposal, setProposal] = useState<Proposal[]>([]);

  useEffect(() => {

    const headers: { [key: string]: string } = {};
    headers['authorization'] = `Bearer ${token}`;


    axios
      .get<Proposal[]>(`${BASE_URL}/proposal/proposalsforme`, { headers })
      .then((response) => {
        setProposal(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados adicionais:', error);
      });
  }, []);

  return (
    <div>
      {Proposal.length > 0 ? (
        <ul>
          {Proposal.map((item) => (
            
              <li key={item.id}>
                <p>Descrição: {item.description}</p>
                <p>Preço: {item.price}</p>
                <p>Quantidade: {item.quantity}</p>
                <p>Status: {item.status !== null ? (item.status === true ? 'Aprovado' : 'Reprovado') : 'Em espera'}</p>
              </li>

          ))}
        </ul>

      ) : (
        <p>Carregando dados adicionais...</p>
      )}
      <hr />
    </div>
  );
};

export default DetailAnounce;
