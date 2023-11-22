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

      </AccordionItem>
    </Accordion>
  );
};

export default ResidueCard;
