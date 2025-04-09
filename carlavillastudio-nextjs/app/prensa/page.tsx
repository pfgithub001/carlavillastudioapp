import Image from "next/image";
import SvgLink from "../ui/svg/link";
import Navbar from "../c_navbar";

export default function Page() {
  return (
    <div className="Prensa">
        <Navbar />
        <div className="prensa_container flex flex-row flex-wrap md:w-[1200px] mx-auto pt-[150px]">
        {[...Array(5)].map((_, i) => (
            <div
            key={i}
            className={`item w-full md:w-f2 p-[20px] ${
                i % 2 !== 0 ? 'md:pt-[200px]' : ''
            }`} // más espacio en los de la derecha
            >
            <Image
                className="md:w-[100%]"
                src={`/images/prensa/example0${i + 1}.jpg`}
                alt="Carlavilla Studio Prensa"
                width={400}
                height={300}
            />
            <h1 className="text-3xl font-light mt-4">Lore ipsum</h1>
            <h3 className="font-light">Lorem ipsum asdasdasd dolor sit.</h3>
            <div className="flex items-center gap-2 font-light">
                <SvgLink className="w-[20px]" />
                <a href="">Ver la noticia completa.</a>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}
