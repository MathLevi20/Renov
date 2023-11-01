// pages/post.tsx
import { useEffect, useState } from 'react';
// interfaces/PostData.ts
interface PostData {
  id: string;
  title: string;
  description: string;
  unit: string;
  quantity: string;
  total: string;
  anouncer_fk: string;
  residue_fk: string;
  created_at: string;
  hide: boolean;
}

const DetailAnounce: React.FC = () => {
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    // Faça a requisição para a URL que retorna o JSON
    fetch('SUA_URL_AQUI')
      .then((response) => response.json())
      .then((data: PostData) => setPostData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Detalhes do Post</h1>
      {postData ? postData.anouncer_fk : 'Carregando...'}
    </div>
  );
};


export default DetailAnounce