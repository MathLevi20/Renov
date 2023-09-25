// components/Card.tsx

import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}
interface ProfileData {
  id: string;
  email: string;
  username: string;
  password: string;
  cnpj: string;
  name: string;
  trading_name: string;
  type: string;
  uf: string;
  city: string;
  phone: string;
  image_url: string | null;
  created_at: string;
}
interface ProfileProps {
  data: ProfileData;
}
const Card: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={data.image_url || "./profile-default.svg"}
        width="1000"
        height="1000"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default Card;
