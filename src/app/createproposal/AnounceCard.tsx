// components/ResidueCard.tsx
'use client';
import {
  ExternalLinkIcon,
  HamburgerIcon,
  InfoOutlineIcon,
} from '@chakra-ui/icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import TagBox from '@/components/Tag';

interface ResidueCardProps {
  anounce_fk: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
}

const ResidueCard: React.FC<ResidueCardProps> = ({
  anounce_fk,
  title,
  description,
  unit,
  quantity,
  total,
}) => {
  return (
    <div className="border border-gray-200  bg-slate-200 rounded shadow-md p-4 mb-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="mt-2">{description}</p>
      <p className="mt-2">Unidade: {unit}</p>
      <p className="mt-2">Quantidade: {quantity}</p>
      <p className="mt-2">Total: {total}</p>
      {/* Tags (se necessário) */}
      <div className="flex flex-wrap mt-4">{/* Outras tags aqui */}</div>
    </div>
  );
};

export default ResidueCard;
