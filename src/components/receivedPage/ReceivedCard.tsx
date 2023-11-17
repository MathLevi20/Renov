import { API } from '@/utils/API';
import { Skeleton } from '@chakra-ui/react';
import React from 'react';

interface ResidueCardProps {
    isloading: boolean;
  id: string;
  description: string;
  status: string;
  proposer_fk: string;
  price: string;
  acepted: string;
}

const ResidueCard: React.FC<ResidueCardProps> = ({
    isloading,
  id,
  description,
  status,
  proposer_fk,
  price,
  acepted,
}) => {
      const handleAccept = () => {
    // Fazer a requisição PATCH para aceitar o dado
    API.patch(`/proposal/updateacepted`, { id:	id,acepted: true })
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
    API.patch(`/proposal/updateacepted`, { id:	id,acepted: false })
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
      <div className="bg-white shadow-md rounded-md p-4 m-4">
                                  <Skeleton startColor='pink.500' endColor='orange.500'   isLoaded={isloading}>


          <div className="flex justify-between mb-2">

        <p className="text-gray-600">ID: {id}</p>
        <p className="text-gray-600">Status: {status}</p>
              </div>
            
      <p className="text-gray-700 mb-2">Description: {description}</p>
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">Proposer FK: {proposer_fk}</p>
        <p className="text-gray-600">Price: {price}</p>
              </div>

          <p className="text-gray-600">Accepted: {acepted}</p>
                <div className="flex justify-start gap-4 mt-4">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          Aceitar
        </button>
        <button
          onClick={handleReject}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
        >
          Recusar
              </button>

          </div>
                                              </Skeleton>

    </div>
  );
};

export default ResidueCard;
