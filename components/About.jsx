import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase txt-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className=" text-3xl sm:text-4xl py-4 text-gray-600">
            Quien son yo
          </h2>
          <p className="p-2 text-gray-600">
            Soy un desarrollador apasionado por la tecnologia, que busca
            soluciones de problemas tecnologicos con aplicaciones y paginas web.
            Alguien capaz de diseñar, crear, mantener sitios web y aplicaciones
            web desde un diseño de interfaz hasta el manejo de datos de negocios
          </p>
          <p className="p-2 text-gray-600">
            Mira algunos de mis ultimos proyectos
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
         
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
