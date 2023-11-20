import { API } from '@/utils/API';
import { Skeleton } from '@chakra-ui/react';
import React from 'react';

interface ResidueCardProps {
  isloading: boolean;
  id: string;
  description: string;
  price: string;
  accepted: boolean | null;
  status: boolean | null;
  proposer_fk: string;
  announce_fk?: string;
  created_at: string;
  quantity: string;
}

const ResidueCard: React.FC<ResidueCardProps> = ({
  isloading,
  id,
  description,
  status,
  proposer_fk,
  price,
  accepted,
  created_at,
  quantity,
}) => {
  const handleAccept = () => {
    // Fazer a requisição PATCH para aceitar o dado
    API.patch(`/proposal/updateacepted`, { id: id, acepted: true })
      .then((response) => {
        // Lógica após aceitar o dado, se necessário
        console.log('Dado aceito:', response.data);
      })
      .catch((error) => {
        // Tratamento de erro, se necessário
        console.error('Erro ao aceitar:', error);
      });
  };

  const handleReject = () => {
    // Fazer a requisição PATCH para recusar o dado
    API.patch(`/proposal/updateacepted`, { id: id, acepted: false })
      .then((response) => {
        // Lógica após recusar o dado, se necessário
        console.log('Dado recusado:', response.data);
      })
      .catch((error) => {
        // Tratamento de erro, se necessário
        console.error('Erro ao recusar:', error);
      });
  };
  return (
    <div className="">
      <div className="flex justify-between mb-2"></div>

      <p className="text-gray-700 mb-2">Criado em {created_at}</p>
      <p className="text-gray-700 mb-2">Descrição: {description}</p>
      <p className="text-gray-700 mb-2">Quantidade: {quantity}</p>
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">Preço: R$ {price} </p>
      </div>

      <div className="flex justify-start gap-4 mt-4">
        {accepted === true && (
          <p className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
            Estado: Aceito
          </p>
        )}
        {accepted === false && (
          <p className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
            Estado: falso
          </p>
        )}
        {accepted === null && (
          <p className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
            Estado: Espera
          </p>
        )}
      </div>
    </div>
  );
};

export default ResidueCard;
