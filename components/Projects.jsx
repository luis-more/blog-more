
import Link from "next/link";
import portafiloImg from "../public/assets/projects/portafolio.png";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netfixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id = 'projects'className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projectos
        </p>
        <h2 className="text-3xl sm:text-4xl py-4">Que e construido</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Buscador de Propiedades"
            backgrounImg={portafiloImg}
            projectUrl="/portafolio"
          />
          <ProjectItems
            title="Cripto App"
            backgrounImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItems
            title="Netflix App"
            backgrounImg={netfixImg}
            projectUrl="/netflix"
          />
          <ProjectItems
            title="Twitch App"
            backgrounImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
