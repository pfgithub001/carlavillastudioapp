"use client"
import { useState } from "react";
import Image from "next/image";
import { clientInfo } from "./tu_cita/page";

export default function TuCita01({
  improveState,
  addClientInfo,
}: {
  improveState: () => void;
  addClientInfo: (property: keyof clientInfo, info: string) => void;
}) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleClick = () => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!nameRegex.test(name.trim()) || name.trim().length === 0) {
      setNameError("Introduce un nombre válido (solo letras).");
      return;
    }

    setNameError(""); // Limpia el error si es válido
    addClientInfo("name", name.trim());
    improveState();
  };

  return (
    <div className="TuCita01 h-[650px] w-[900px] flex items-center overflow-y-hidden">
      <div className="left hidden md:inline-block w-[50%]">
        <Image
          src="/images/tu_cita/img01.jpg"
          alt="Imagen de perfil"
          width={700}
          height={700}
        />
      </div>
      <div className="right w-[100%] md:w-[50%] flex items-center justify-center h-full">
        <div className="text-center w-full">
          <span className="text-3xl">¡Hola! ¿Cómo te llamas?</span><br />
          <input
            className="mt-[50px] border p-2 w-[80%]"
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="text-red-500 text-sm mt-2">{nameError}</div>}
          <br />
          <button className="myButton01 mt-[30px]" onClick={handleClick}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
