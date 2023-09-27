import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div>
      <section className="text-slate-800  bg-[#63FF8D] body-font ">
        <div className="container mx-auto flex px-2 sm:py-10 md:py-40 sm:pt-15 md:flex-row flex-col items-center ">
          <div className="p-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-800 ">
              <div className=" lg:inline-block">
                Revitalize Seus Projetos com Sustentabilidade!
              </div>
            </h1>
            <p className="mb-8 leading-relaxed">
              Seja você um profissional da construção ou um entusiasta do design
              consciente, o Renov é o seu destino para encontrar e adquirir
              materiais sustentáveis de alta qualidade. Junte-se à nossa
              comunidade comprometida com um futuro mais verde!
            </p>
            <div className="flex justify-center items-center m-auto text-gray-300">
              <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
                Comece agora
              </button>
            </div>
          </div>
          <div className=" flex justify-end items-end w-full mb-10 lg:mb-0 overflow-hidden">
            <Image
              className="p-4 flex  items-start"
              src="./images/team.svg"
              alt={"Logo"}
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <Image
        className="object-cover w-full "
        src="./images/layered-waves.svg"
        alt={"Logo"}
        width={200}
        height={200}
      />
    </div>
  );
}

export default Hero;
