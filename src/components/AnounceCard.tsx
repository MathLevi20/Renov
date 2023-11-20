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
  Skeleton,
} from '@chakra-ui/react';
import TagBox from '@/components/Tag';

interface ResidueCardProps {
  isloading: boolean;
  id: string;
  anouncer_fk: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
}

const ResidueCard: React.FC<ResidueCardProps> = ({
  isloading,

  id,
  anouncer_fk,
  title,
  description,
  unit,
  quantity,
  total,
}) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <Box flex="1" textAlign="left" className="">
            <Text p={5} fontSize="lg" fontWeight="bold">
              {title}
            </Text>
            <Text p={5}>{description}</Text>
          </Box>
        </h2>
        <Text pl={5}>Unidade: {unit}</Text>
        <Text pl={5}>Quantidade: {quantity}</Text>
        <Text pb={3} pl={5}>
          Total: {total}
        </Text>
        <TagBox text="Tecido" />
        <TagBox text="Concreto" />
        <TagBox text="Madeira" />
        <Link href={`/createproposal?anouncer_fk=${anouncer_fk}&id=${id}`}>
          <button className="bg-blue-500  flex mt-5 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Fazer Proposta{' '}
          </button>{' '}
        </Link>
      </AccordionItem>
    </Accordion>
  );
};

export default ResidueCard;
