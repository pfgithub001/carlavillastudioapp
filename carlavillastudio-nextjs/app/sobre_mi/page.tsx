import Image from "next/image";
import SvgQuotation from '../ui/svg/quotation';
import Navbar from "../c_navbar";

export default function Page() {
  return (
    <div className="SobreMi">
      <Navbar />
      <div className="sobre_mi_container p-[50px] md:max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center mt-[100px]">
          <div className="md:w-f2">
            <Image
            className="md:p-[50px]"
            src="/images/sobre_mi/sobre_mi_carlavillastudio01.jpg"
            alt="Imagen de perfil"  
            width={700}
            height={700}
            />
          </div>
          <div className="mt-[50px] md:mt-[0px] md:w-f2">
            <h1 className="text-7xl font-bold">María Carlavilla</h1>
            <h2 className="text-5xl mt-[20px] font-light italic">Improvisando cuidadosamente</h2>
            <p className="text-xl font-extralight mt-[10px]">
              Tras graduarme en ADE y dedicarme al mundo de la moda, descubrí que mi verdadera pasión residía 
              en comprender el producto, de modo que decidí dar un giro a mi carrera y estudiar patronaje y moda. 
              Durante dos años, me sumergí en la complejidad de la técnica, aprendí cómo cada prenda se crea desde 
              el plano y el valor fundamental que aportan los tejidos, ¡ahí esta la gran clave! Empecé 
              confeccionando prendas para mi círculo cercano, y surgió CARLAVILLA Studio. En CARLAVILLA Studio 
              creamos diseños a medida para novias e invitadas que transmitan la esencia de la artesanía y 
              tradición donostiarra. Nos encantan los diseños que se alejan de lo estipulado, aquellos que 
              incorporan tejidos diferentes, patrones únicos y puntadas muy cuidadas. Buscamos que haya vida en 
              todas las partes del proceso, creamos el boceto, elegimos juntas los tejidos, patronamos, cortamos y 
              confeccionamos cada puntada en el estudio y de pronto, improvisando cuidadosamante, cada diseño cobra 
              vida.
            </p>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="w-[100%] flex ">
            <div className="flex md:w-f2 items-start ml-auto">
              <SvgQuotation className="w-[15%] md:w-[100px] fill-gray-300 md:translate-y-[-15px]" />
              <span className="text-3xl md:text-5xl font-light italic w-[85%] md:w-[720px]">
              Me encanta el patrón, ver la técnica que hay detrás de una prenda y cómo está hecha en plano
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-end">
            <div className="m-[20px]">
              <Image
              src="/images/sobre_mi/sobre_mi_carlavillastudio02.jpg"
              alt="Imagen de perfil"
              width={700}
              height={700}
              />
            </div>
            <div className="m-[20px]">
              <Image
              src="/images/sobre_mi/sobre_mi_carlavillastudio03.jpg"
              alt="Imagen de perfil"
              width={700}
              height={700}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[50px]">
          <div className="flex items-start w-[100%] md:w-f2">
            <SvgQuotation className="w-[15%] md:w-[100px] fill-gray-300 translate-y-[-15px]" />
            <span className="text-3xl md:text-5xl font-light italic w-[85%] md:w-[720px]">
            Durante el proceso de tu pieza, elegimos juntas las telas. Buscamos en diferentes rincones y lugares, con historia y de calidad, para que sean ÚNICAS y especiales
            </span>
          </div>
          <div className="mt-[50px] md:mt-[0px] md:m-[80px]">
            <Image
            src="/images/sobre_mi/sobre_mi_carlavillastudio04.jpg"
            alt="Imagen de perfil"
            width={700}
            height={700}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center mt-[50px]">
          <div className="flex items-start w-[100%] md:w-f2">
            <SvgQuotation className="w-[15%] md:w-[100px] fill-gray-300 translate-y-[-15px]" />
            <span className="text-3xl md:text-5xl font-light italic w-[85%] md:w-[720px]">
            Dar un valor añadido al oficio de la confección, detrás de cada prenda hay una persona, el proceso conlleva mucho tiempo y hay una profesión que requiere un aprendizaje.             
            </span>
          </div>
          <div className="mt-[50px] md:mt-[0px] md:m-[80px]">
            <Image
            src="/images/sobre_mi/sobre_mi_carlavillastudio05.jpg"
            alt="Imagen de perfil"
            width={700}
            height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
