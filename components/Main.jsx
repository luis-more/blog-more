import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className=" p-4 w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto  p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm -tracking-widest text-gray-600">
            VAMOS A CREAR ALGO INCREIBLE JUNTOS
          </p>
          <h1 className="py-4 text-gray-700 text-3xl sm:text-4xl">
            Hi, Soy<spam className="text-[#5651e5]"> Luis More</spam>
          </h1>
          <h1 className="py-2 text-gray-700 text-3xl sm:text-4xl">Desarrollador web</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Soy un especialista en crear y desarrollar paginas web. Ocasionalmente diseños
            ecepcioinales con experiencias digitales. Centrado en desarrollar
            aplicaciones responsivas y desarrollo web mientras aprendo mas
            tecnologias de backend.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
