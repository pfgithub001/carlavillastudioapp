// components/FullScreenBackground.tsx
import Image from "next/image";

export default function FullScreenBackground() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/images/home/contacto.png"
        alt="Fondo"
        quality={100}
        fill
        className="object-cover absolute top-0"
        priority
      />

      {/* Contenido encima del fondo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          ¿Quieres contactar con nosotras?
        </h1>
        <a href="/tu_cita"><button className="myButton01 font-light mt-4">Pide tu cita</button></a>
      </div>
    </div>
  );
}
