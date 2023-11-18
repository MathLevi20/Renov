// components/ResidueCard.tsx
"use client";
import {
  ExternalLinkIcon,
  HamburgerIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import TagBox from "@/components/Tag";

interface ResidueCardProps {
  anouncer_fk: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
}

const ResidueCard: React.FC<ResidueCardProps> = ({
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


      </AccordionItem>
    </Accordion>
  );
};

export default ResidueCard;
