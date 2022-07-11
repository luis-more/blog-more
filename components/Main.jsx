import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Main = () => {
  return (
    <div id="/" className="w-full  h-full lg:h-screen py-16 px-2 ">
      <div className="max-w-[1240px] m-auto  py-16  h-auto">
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:px-2 md:px-20">
         
          <p className="uppercase text-sm tracking-widest text-black-600  text-center">
            VAMOS A CONSTRUIR ALGO LEGENDARIO JUNTOS
          </p>
          <h1 className="py-4 text-gray-700 text-center">
            Hola soy{" "}
            <span className="m-auto text-center text-3xl sm:text-4xl py-4  rounded-lg  text-blue-700 font-bold ">
              {" "}
              Luis More
            </span>
          </h1>
          <h1 className="py-4 text-gray-700 text-center">
            Desarrolloador web independiente
          </h1>
          <p className="py-4 text-gray-700 sm:max-w-[70%] mx-auto px-4">
            More es un desarrollador web full-stack con sede en Rioja Perú con
            pasión por crear servicios digitales. Con habilidad para todo lo
            relacionado con la creacion de productos. Desde la palnificacion y
            el diseño hasta el lazamiento.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-16">
            <a
              href="https://www.linkedin.com/in/luis-more-85a931244/"
              target="_blank"
              rel="luis-more"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/luis-more"
              target="_blank"
              rel="luis-more"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="more-whatsapp"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsWhatsapp />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
