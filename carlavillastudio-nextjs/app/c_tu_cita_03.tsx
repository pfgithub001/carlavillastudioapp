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
  const [selectedOption, setSelectedOption] = useState('opcion1');

  const options = [
    { value: 'opcion1', label: 'Soy la novia' },
    { value: 'opcion2', label: 'Voy como invitada' },
  ];

  const handleClick = () => {
    const info = selectedOption === 'opcion1' ? 'Novia' : 'Invitada';
    addClientInfo('isSheGettingMarried', info);
    improveState();
  };

  return (
    <div className="TuCita03 h-[650px] w-[900px] flex items-center overflow-y-hidden">
<div className="left w-[50%] h-full relative overflow-hidden">
  <video
    className="h-full w-auto object-cover object-center scale-[1.1]" // Ajusta el zoom aquí si hace falta
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src="/video/home_video_mb.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>


      <div className="right w-[50%] flex items-center justify-center h-full">
        <div className="text-center">
          <span className="text-3xl">¿Eres novia o invitada?</span><br />
          <div className='mt-[50px]'>
            {options.map((option) => (
              <div key={option.value}>
                <label className="inline-flex items-center space-x-2 cursor-pointer font-light">
                  <input
                    type="radio"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => setSelectedOption(option.value)}
                    className="
                      appearance-none h-5 w-5 rounded-full border border-black
                      checked:bg-black checked:border-black cursor-pointer
                      focus:outline-none focus:ring-0
                      hover:ring-0 hover:outline-none hover:border-black
                    "
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              </div>
            ))}
          </div>
          <br />
          <button className="myButton01 mt-[50px]" onClick={handleClick}>Continuar</button>
        </div>
      </div>
    </div>
  );
}
