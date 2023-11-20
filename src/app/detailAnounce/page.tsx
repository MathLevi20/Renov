'use client';

import { BASE_URL } from '@/utils/API';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Anounce {
  id: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
  anouncer_fk: string;
  residue_fk: string;
  created_at: string;
  hide: boolean;
}

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

const anounceId = '373d7fda-e2a1-4248-91e3-21ae173c67b7';
const DetailAnounce: React.FC = () => {
  const [Anounce, setAnounce] = useState<Anounce | null>(null);
  const [Proposal, setProposal] = useState<Proposal[]>([]);

  useEffect(() => {
    // Faça a solicitação para a URL e obtenha o JSON
    axios
      .get<Anounce>(`${BASE_URL}/anounce/${anounceId}`)
      .then((response) => {
        setAnounce(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });

    axios
      .get<Proposal[]>(
        `${BASE_URL}/proposal/proposalsbyanounceid?id=${anounceId}`
      )
      .then((response) => {
        setProposal(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados adicionais:', error);
      });
  }, []);

  return (
    <div>
      <h1>Exemplo de exibição de JSON em Next.js com TypeScript</h1>
      {Anounce ? (
        <div>
          <h2>Título: {Anounce.title}</h2>
          <p>Descrição: {Anounce.description}</p>
          <p>
            Quantidade: {Anounce.quantity} {Anounce.unit}
          </p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
      <hr />
      <h2>Dados adicionais:</h2>

      {/* Exibindo os dados adicionais da segunda URL */}
      {Proposal.length > 0 ? (
        <ul>
          {Proposal.map((item) => (
            <li key={item.id}>
              <p>Descrição: {item.description}</p>
              <p>Preço: {item.price}</p>
              <p>Quantidade: {item.quantity}</p>
              {/* Adicione mais campos conforme necessário */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando dados adicionais...</p>
      )}
    </div>
  );
};

export default DetailAnounce;
