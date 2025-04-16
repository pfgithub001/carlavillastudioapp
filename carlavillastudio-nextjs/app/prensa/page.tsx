'use client';

import Image from "next/image";
import SvgLink from "../ui/svg/link";
import Navbar from "../c_navbar";
import noticias from "../json/prensa.json";

export default function Page() {
  return (
    <div className="Prensa">
      <Navbar />
      <div className="prensa_container flex flex-row flex-wrap md:w-[1200px] mx-auto pt-[150px]">
        {noticias.map((noticia, i) => (
          <div
            key={i}
            className={`item w-full md:w-f2 p-[20px] ${i % 2 !== 0 ? 'md:pt-[200px]' : ''}`}
          >
            <Image
              className="md:w-[100%]"
              src={noticia.image_url}
              alt={noticia.title}
              width={800}
              height={600}
            />
            <h1 className="text-3xl font-light mt-4">{noticia.title}</h1>
            <h3 className="font-light">{noticia.description}</h3>
            <div className="flex items-center gap-2 font-light">
              <SvgLink className="w-[20px]" />
              <a href={noticia.link} target="_blank" rel="noopener noreferrer">
                Ver la noticia completa.
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
