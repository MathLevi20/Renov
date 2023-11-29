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
        <Box flex="1" textAlign="left" className="">
          <Text p={5} fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
          <Text pl={5}>{description}</Text>
          <Text pl={5}>Unidade: {unit}</Text>
          <Text pl={5}>Quantidade: {quantity}</Text>
          <Text pb={3} pl={5}>
            Total: {total}
          </Text>
        </Box>



        <Link href={`/createproposal?anouncer_fk=${String(anouncer_fk)}&id=${String(id)}`}>
          <button className="bg-gray-800 hover:bg-gray-400 flex mt-5  text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded">
            Fazer Proposta{' '}
          </button>{' '}
        </Link>
      </AccordionItem>
    </Accordion>
  );
};

export default ResidueCard;
