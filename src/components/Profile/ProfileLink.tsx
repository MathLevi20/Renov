import Image from 'next/image';
import Link from 'next/link';

interface ProfileLinkProps {
  username: string;
  id: string;
  image: string | null; // Pode ser uma string (URL) ou null
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ username, image, id }) => {
  const defaultImage = '/images/image.png'; // Caminho para a imagem padrão

  return (
    <Link href={`/profileid?id=${id}`}>
      <div className="flex items-center space-x-2 text-black text-whitepy-2 rounded-md">
        {image ? (
          <Image
            src={image}
            alt={`Foto de perfil de ${username}`}
            className="w-10 h-10 rounded-full"
            width={200}
            height={200}
          />
        ) : (
          <Image
            src={defaultImage}
            alt={`Foto de perfil padrão de ${username}`}
            className="w-10 h-10 rounded-full"
            width={200}
            height={200}
          />
        )}
        <span className="text-xl">{username}</span>
      </div>
    </Link>
  );
};

export default ProfileLink;
