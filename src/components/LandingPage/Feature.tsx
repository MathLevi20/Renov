"use client";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

// components/Features.tsx
const Features: React.FC = () => {
  return (
    <div className="">
      {" "}
      <section className="pt-16 ">
        <section className=" text-black body-font  p-20   ">
          <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto  flex-wrap">
            <div className=" md:pr-16 lg:pr-0 pr-0 text-left self-center py-10 px-10">
              <h1 className="title-font font-medium text-3xl text-gray-900 ">
                Redução do Impacto Ambiental?
              </h1>
              <p className="leading-relaxed mt-4">
                No Renov, oferecemos um extenso catálogo de materiais
                sustentáveis disponíveis para venda ou doação. Navegue por uma
                ampla variedade de itens que foram resgatados da reciclagem ou
                são excedentes de projetos. Encontre desde madeira recuperada
                até metais reciclados de alta qualidade. Com o Renov, você tem
                acesso a materiais eco-friendly para seus projetos de construção
                e design.
              </p>
            </div>
            <div className=" flex justify-end items-end w-full mb-10 lg:mb-0 overflow-hidden">
              <Image
                className="p-4 flex  items-start"
                src="./images/Park.svg"
                alt={"Logo"}
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className=" text-black body-font  ">
          <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto p-20 flex-wrap">
            <div className=" flex justify-end items-end w-full mb-10 lg:mb-0 overflow-hidden">
              <Image
                className="p-4 flex  items-start"
                src="/images/Connected_World.svg"
                alt={"Logo"}
                width={500}
                height={500}
              />
            </div>
            <div className=" md:pr-16 lg:pr-0 pr-0 text-left self-center py-10 px-10">
              <h1 className="title-font font-medium text-3xl text-gray-900 ">
                Networking Sustentável?
              </h1>
              <p className="leading-relaxed mt-4">
                A Comunidade Renov é um espaço vibrante onde entusiastas da
                sustentabilidade e profissionais da construção se encontram.
                Participe de fóruns de discussão, compartilhe dicas e truques
                sobre design sustentável e troque experiências com outros
                membros da comunidade. Juntos, podemos construir um futuro mais
                verde e consciente.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Features;
