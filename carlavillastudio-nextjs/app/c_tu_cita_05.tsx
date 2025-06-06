"use client"
import { useState } from 'react';
import Image from "next/image";
import { clientInfo } from './tu_cita/page';

export default function TuCita03({
  improveState,
  addClientInfo
}: {
  improveState: () => void;
  addClientInfo: (property: keyof clientInfo, info: string) => void;
}) {
  const [questions, setQuestions] = useState('');

  const handleClick = () => {
    addClientInfo('questions', questions);
    improveState();
  };

  return (
    <div className="TuCita03 h-[650px] w-[900px] flex items-center overflow-y-hidden">
      <div className="left w-[50%]">
        <Image
          src="/images/tu_cita/img04.jpg"
          alt="Imagen de perfil"
          width={700}
          height={700}
        />
      </div>
      <div className="right w-[50%] flex items-center justify-center h-full">
        <div className="text-center">
          <span className="text-3xl">¿Tienes dudas o preguntas?</span><br />
          <textarea
            className="mt-[50px] h-[200px] w-[90%] font-light"
            placeholder="Escribe tus dudas o preguntas aquí..."
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
          /><br />
          <button className="myButton01 mt-[50px]" onClick={handleClick}>Continuar</button>
        </div>
      </div>
    </div>
  );
}
