import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import { FaRegHeart } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 mx-auto px-4">
          <p className="uppercase txt-xl tracking-widest text-[#5651e5] ">
            About
          </p>
          <h2 className=" text-3xl sm:text-4xl py-4 text-gray-600 underline underline-offset-8">
            Quien soy
          </h2>
          <p className="p-2 text-gray-600">
            Soy un desarrollador apasionado por la tecnologia, que busca
            soluciones de problemas de la vida y tecnologicos con codigo.
          </p>
          <h2 className=" text-3xl sm:text-4xl py-4 text-gray-600 underline underline-offset-8 ">
            Biografia
          </h2>
          <p className="p-2 text-gray-600">
            <strong>1990 </strong> Nace en Perú <br />
            <strong>2015 </strong> Completa la carrera de informatica en el
            instituto ISFER de Moyobamba.
            <br />
            <strong>2018 </strong> Trabaja en Lima como Asistente Informatico.
            <br />
            <strong>2021 </strong> Al presente trabajo como freelancer.
          </p>
          <h2 className=" text-3xl sm:text-4xl py-4 text-gray-600">
            <div className="flex items-ceneter underline  underline-offset-8 ">
              Yo <FaRegHeart className="text-red-600" />
            </div>
          </h2>
          <p className="text-gray-600"> Música, peliculas,futbol, fotografias, aprendisaje automático</p>
          <br />
        </div>
        <div className="rounded-xl  w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 ">
          <Image
            className="rounded-xl hover:scale-105 ease-in duration-300"
            src={AboutImg}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
