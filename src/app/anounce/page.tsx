// pages/AnouncePage.tsx
'use client';
import AnounceCard from '@/components/AnounceCard';
import WithSubnavigation from '@/components/Navbar';
import ProfileLink from '@/components/Profile/ProfileLink';
import TagBox from '@/components/Tag';
import TagsComponents from '@/components/Tags';
import { API, BASE_URL } from '@/utils/API';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Container,
  Box,
  InputRightAddon,
  InputGroup,
  Input,
  InputLeftAddon,
  Tag,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface AnounceData {
  id: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
  anouncer_fk: string;
  residue_fk: string;
  created_at: string;
  profile: {
    username: string;
    image_url: string | null;
  };
}

interface Material {
  id: string;
  name: string;
  description?: string;
  nature?: string;
  created_at?: string;
}

const materiaData: Material[] = [
  {
    id: '0',
    name: 'all',
  },
  {
    id: 'a2720909-f092-4c7d-8fa2-4db56660436a',
    name: 'plástico',
    description: 'recipientes plásticos, embalagens',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'a5213cd4-e2fe-453b-b4df-451415d86b5e',
    name: 'vidro',
    description: 'garrafas, vidro quebrado',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'cef1844e-1874-4ad6-a860-11106fb0f30d',
    name: 'madeira',
    description: 'palets, ripas, serragem e afins',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'fa8dcfa3-67f8-49dd-83ed-7f31565d2d2c',
    name: 'papel',
    description: 'papelão, papel de escritório',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'fb05836f-cb9b-4b63-99aa-5849a6a4f67f',
    name: 'tecido',
    description: 'tecidos de natureza diversa, retalhos, linhas e enchiimento',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
];
const residueData: AnounceData[] = [
  {
    id: '906f1324-3019-4563-a066-8cb3cc31ca9e',
    title: 'tecido de lona',
    description:
      'Olá, estamos renovando as lonas de nossos caminhões graneleiros e essa se rasgou',
    unit: 'unit',
    quantity: '2',
    total: '2',
    anouncer_fk: 'd5f319a0-f87d-4497-ba2e-86c6a6e5a04b',
    residue_fk: 'fb05836f-cb9b-4b63-99aa-5849a6a4f67f',
    created_at: '2023-09-23T18:49:55.385Z',
    profile: {
      username: 'empresaX',
      image_url: null,
    },
  },
  {
    id: '9317f489-44dd-45f9-ad84-7e19e14858e9',
    title: 'Container de Tecido JEANS',
    description:
      'Tecido jeans variando entre os tamanhos 30X30cm e 50x50cm, nossa venda é feita por quilo, R$ 10 reais por quilo. Nos localizamos na avenida gomes Ro - 230 - Sta. Adelaide',
    unit: 'kg',
    quantity: '1000',
    total: '1000',
    anouncer_fk: 'e75025e8-cf39-44d8-982a-09dac5585dd3',
    residue_fk: 'fb05836f-cb9b-4b63-99aa-5849a6a4f67f',
    created_at: '2023-09-23T10:39:45.551Z',
    profile: {
      username: 'empresaX',
      image_url: null,
    },
  },
  {
    id: 'a16e5a12-bc81-40f2-88c3-f91998967c81',
    title: 'Retalhos de tecido variado',
    description:
      'Olá, a distribuição é gratuíta basta vir buscar em nossa sede na AV.Brito - 1009, setor 3 - Centro.',
    unit: 'kg',
    quantity: '2800',
    total: '2800',
    anouncer_fk: 'd5f319a0-f87d-4497-ba2e-86c6a6e5a04b',
    residue_fk: 'fb05836f-cb9b-4b63-99aa-5849a6a4f67f',
    created_at: '2023-09-23T10:39:45.551Z',
    profile: {
      username: 'empresaX',
      image_url: null,
    },
  },
];

const AnouncePage: React.FC = () => {
  const [data, setData] = useState<any[]>(residueData);
  const [loading, setLoading] = useState(false);

  const queryParams = {
    skip: 3,
    take: 5,
  };
  const [search, setSearch] = useState('');

  const fetchAnnouncements = async () => {
    try {
      const response = await API.get('/anounce/list/?skip=1&take=5'); // Rota da sua API
      console.log(response);

      setData(response.data);
      setLoading(true);
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };
  const fetchAnnouncementsMaterial = async (material: string) => {
    if (material == 'all') {
      fetchAnnouncements();
    }

    if (material != 'all') {
      try {
        const response = await API.get(
          `/anounce/listbyresiduename/?skip=1&take=5&name=${material}`
        ); // Rota da sua API
        console.log(response);

        setData(response.data);
        setLoading(true);
      } catch (error) {
        // Lidar com erros de requisição, se necessário
        console.error('Erro ao buscar dados do usuário:', error);
      }
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    console.log(data);
  }, []);

  return (
    <>
      <WithSubnavigation />
      <div
        className=" h-full items-start grid grid-cols-1 justify-center pt-10
      bg-gradient-to-tr from-sky-300 to-sky-500  "
      >
        <div className="py-2 text-2xl font-semibold flex">
          <div className="mt-3 w-full flex justify-center pt-0">
            <input
              type="text"
              placeholder={'Procurar'}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="px-4 py-1 mx-2 flex justify-center w-3/4 placeholder-slate-900 text-black  rounded text-lg border-2 outline-none text-left"
            />
            <SearchIcon m={5} />
          </div>
        </div>{' '}
        <Container maxW="container.xl" py={8} px={10}>
          <div className="top-0">
            <h2 className="text-2xl text px-9 font-semibold text-white">
              Anounce
            </h2>
            <div className="px-6 pt-4 pb-2 flex justify-center top-0 ">
              {materiaData.map((material) => (
                <div key={material.id}>
                  <button
                    className="bg-slate-100  text-slate-800 text-sm font-medium mx-2 px-2.5 py-1 rounded "
                    onClick={() => fetchAnnouncementsMaterial(material.name)}
                  >
                    {material.name}
                  </button>
                </div>
              ))}
            </div>
            {data
              .filter((data: any) => {
                console.log(data.title);
                if (data.title.toLowerCase().includes(search.toLowerCase())) {
                  return data;
                }
              })
              .map((item: any) => (
                <div
                  className="bg-white shadow-lg p-10  m-10 mx-10 rounded-md"
                  key={item.id}
                >
                  {' '}
                  <ProfileLink
                    image={item.profile.image_url}
                    username={item.profile.username}
                  />
                  <AnounceCard
                    isloading={loading}
                    id={item.id}
                    anouncer_fk={item.anouncer_fk}
                    title={item.title}
                    description={item.description}
                    unit={item.unit}
                    quantity={item.quantity}
                    total={item.total}
                  />
                </div>
              ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default AnouncePage;
