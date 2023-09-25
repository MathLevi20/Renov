// pages/AnouncePage.tsx
"use client";
import AnounceCard from "@/components/AnounceCard";
import WithSubnavigation from "@/components/Navbar";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  InputRightAddon,
  InputGroup,
  Input,
  InputLeftAddon,
} from "@chakra-ui/react";

interface ResidueData {
  id: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
  anouncer_fk: string;
  residue_fk: string;
  created_at: string;
}

const residueData: ResidueData[] = [
  {
    id: "906f1324-3019-4563-a066-8cb3cc31ca9e",
    title: "tecido de lona",
    description:
      "Olá, estamos renovando as lonas de nossos caminhões graneleiros e essa se rasgou",
    unit: "unit",
    quantity: "2",
    total: "2",
    anouncer_fk: "d5f319a0-f87d-4497-ba2e-86c6a6e5a04b",
    residue_fk: "fb05836f-cb9b-4b63-99aa-5849a6a4f67f",
    created_at: "2023-09-23T18:49:55.385Z",
  },
  {
    id: "9317f489-44dd-45f9-ad84-7e19e14858e9",
    title: "Container de Tecido JEANS",
    description:
      "Tecido jeans variando entre os tamanhos 30X30cm e 50x50cm, nossa venda é feita por quilo, R$ 10 reais por quilo. Nos localizamos na avenida gomes Ro - 230 - Sta. Adelaide",
    unit: "kg",
    quantity: "1000",
    total: "1000",
    anouncer_fk: "e75025e8-cf39-44d8-982a-09dac5585dd3",
    residue_fk: "fb05836f-cb9b-4b63-99aa-5849a6a4f67f",
    created_at: "2023-09-23T10:39:45.551Z",
  },
  {
    id: "a16e5a12-bc81-40f2-88c3-f91998967c81",
    title: "Retalhos de tecido variado",
    description:
      "Olá, a distribuição é gratuíta basta vir buscar em nossa sede na AV.Brito - 1009, setor 3 - Centro.",
    unit: "kg",
    quantity: "2800",
    total: "2800",
    anouncer_fk: "d5f319a0-f87d-4497-ba2e-86c6a6e5a04b",
    residue_fk: "fb05836f-cb9b-4b63-99aa-5849a6a4f67f",
    created_at: "2023-09-23T10:39:45.551Z",
  },
];

const AnouncePage: React.FC = () => {
  return (
    <>
      <WithSubnavigation />
      <div className="py-2 text-2xl font-semibold flex">
        <div className="mt-3 w-full flex justify-center pt-0">
          <input
            type="text"
            placeholder="Procurar"
            className="px-4 py-1 mx-2 flex justify-center w-3/4 placeholder-slate-900 text-black  rounded text-lg border-2 outline-none text-left"
          />
          <SearchIcon m={5} />
        </div>
      </div>{" "}
      <Container maxW="container.xl" py={8} px={10}>
        <h2 className="text-xl text p-2 font-semibold">Anounce</h2>

        {residueData.map((data) => (
          <Box
            key={data.id}
            p={10}
            m={4}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <AnounceCard
              title={data.title}
              description={data.description}
              unit={data.unit}
              quantity={data.quantity}
              total={data.total}
            />
          </Box>
        ))}
      </Container>
    </>
  );
};

export default AnouncePage;
