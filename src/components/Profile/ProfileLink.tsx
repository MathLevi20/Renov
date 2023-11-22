import { capitalizeFirstLetter } from '@/utils/API';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileLinkProps {
  username: string;
  id: string;
  image: string | null; // Pode ser uma string (URL) ou null
  created_at: string;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ username, image, id, created_at }) => {
  const defaultImage = '/images/image.png'; // Caminho para a imagem padrão

  return (
    <Link href={`/profileid?id=${id}`}>
      <div className="flex items-center space-x-2 text-black text-whitepy-2 rounded-md">
        <span className=" rounded-full h-12 w-12 flex items-center justify-center bg-gray-500 text-white uppercase">
          {username.charAt(0).toUpperCase()}
        </span>
        <div>
          <span className="text-xl">{capitalizeFirstLetter(username)}</span>
          <p className=" text-sm">{created_at}</p>
        </div>


      </div>

    </Link>
  );
};

export default ProfileLink;
