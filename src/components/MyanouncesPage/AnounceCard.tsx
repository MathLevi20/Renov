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
} from '@chakra-ui/react';
import TagBox from '@/components/Tag';

interface ResidueCardProps {
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
}

const ResidueCard: React.FC<ResidueCardProps> = ({
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
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text p={5} fontSize="lg" fontWeight="bold">
                {title}
              </Text>
              <Text p={5}>{description}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text pl={5}>Unidade: {unit}</Text>
          <Text pl={5}>Quantidade: {quantity}</Text>
          <Text pl={5}>Total: {total}</Text>
          <TagBox text="Tecido" />
          <TagBox text="Concreto" />
          <TagBox text="Madeira" />
          <button className="bg-blue-500 mt-3 flex-row hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <ExternalLinkIcon mx={2} pb={2} />
            Fazer Proposta{' '}
          </button>{' '}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ResidueCard;
