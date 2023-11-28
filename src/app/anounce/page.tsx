// pages/AnouncePage.tsx
'use client';
import AnounceCard from '@/components/AnounceCard';
import WithSubnavigation from '@/components/Navbar';
import ProfileLink from '@/components/Profile/ProfileLink';
import TagBox from '@/components/Tag';
import TagsComponents from '@/components/Tags';
import { API, BASE_URL, capitalizeFirstLetter } from '@/utils/API';
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
import Image from 'next/image';
import format from 'date-fns/format';
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
    name: 'Todos',
  },
  {
    id: 'a2720909-f092-4c7d-8fa2-4db56660436a',
    name: 'Plástico',
    description: 'recipientes plásticos, embalagens',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'a5213cd4-e2fe-453b-b4df-451415d86b5e',
    name: 'Vidro',
    description: 'garrafas, vidro quebrado',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'cef1844e-1874-4ad6-a860-11106fb0f30d',
    name: 'Madeira',
    description: 'palets, ripas, serragem e afins',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'fa8dcfa3-67f8-49dd-83ed-7f31565d2d2c',
    name: 'Papel',
    description: 'papelão, papel de escritório',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
  {
    id: 'fb05836f-cb9b-4b63-99aa-5849a6a4f67f',
    name: 'Tecido',
    description: 'tecidos de natureza diversa, retalhos, linhas e enchiimento',
    nature: 'solid',
    created_at: '2023-09-23T10:12:00.818Z',
  },
];
const residueData: AnounceData[] = [

];

const AnouncePage: React.FC = () => {
  const [data, setData] = useState<any[]>(residueData);
  const [loading, setLoading] = useState(false);
  const [isEmptyMessageVisible, setIsEmptyMessageVisible] = useState(false);

  const queryParams = {
    skip: 3,
    take: 5,
  };
  const [search, setSearch] = useState('');

  const fetchAnnouncements = async () => {
    try {
      const response = await API.get('/anounce/list/?skip=1&take=100'); // Rota da sua API
      console.log(response);

      setData(response.data);
      setLoading(true);
    } catch (error) {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };
  const fetchAnnouncementsMaterial = async (material: string) => {
    if (material == 'todos') {
      fetchAnnouncements();
    }

    if (material != 'todos') {
      try {
        const response = await API.get(
          `/anounce/listbyresiduename/?skip=1&take=100&name=${material.toLowerCase()}`
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

  useEffect(() => {
    setIsEmptyMessageVisible(data.length === 0);
  }, [data]);
  return (
    <>
      <WithSubnavigation />
      <div
        className=" h-full items-start grid grid-cols-1 justify-center pt-10
      bg-gradient-to-tr from-[#009473] to-[#63ff8d]  "
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
              Anúncio
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
            <div className='min-h-screen '>
              {isEmptyMessageVisible && <div className="h-screen flex flex-col items-center pt-40 ">
                {' '}
                <Image
                  className="  animate-pulse"
                  src="./LogoLow.svg"
                  alt={'Logo'}
                  width={100}
                  height={100}
                />
                <h2 className="mx-auto font-bold text-white mt-4 justify-start animate-pulse">
                  Sem Anuncio
                </h2>
              </div>
              }

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
                      id={item.anouncer_fk}
                      image={item.profile.image_url}
                      username={item.profile.username}
                      created_at={format(
                        new Date(item.created_at),
                        'dd/MM/yyyy HH:mm:ss'
                      )}
                    />
                    <AnounceCard
                      isloading={loading}
                      id={String(item.id)}
                      anouncer_fk={String(item.anouncer_fk)}
                      title={capitalizeFirstLetter(item.title)}
                      description={capitalizeFirstLetter(item.description)}
                      unit={item.unit}
                      quantity={item.quantity}
                      total={item.total}
                    />
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AnouncePage;
