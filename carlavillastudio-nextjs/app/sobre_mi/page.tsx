import Image from "next/image";
import SvgQuotation from '../ui/svg/quotation';

export default function Page() {
  return (
    <div className="SobreMi">
      <div className="sobre_mi_container p-[50px] md:max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <Image
          className="p-[50px]"
          src="/images/sobre_mi/sobre_mi_carlavillastudio01.jpg"
          alt="Imagen de perfil"  
          width={700}
          height={700}
          />
          <div>
            <h1 className="text-5xl font-bold">María Carlavilla</h1>
            <h2 className="text-3xl mt-[20px] font-light italic">Improvisando cuidadosamente</h2>
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
        <div>
          <div className="w-[100%] flex">
            <div className="flex md:w-[820px] ml-auto">
              <SvgQuotation className="w-[100px] fill-gray-300 translate-y-[-60px]" />
              <span className="text-5xl font-light italic w-[720px]">
              Me encanta el patrón, ver la técnica que hay detrás de una prenda y cómo está hecha en plano
              </span>
            </div>
          </div>
          <div className="flex items-end">
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
      </div>
    </div>
  );
}
