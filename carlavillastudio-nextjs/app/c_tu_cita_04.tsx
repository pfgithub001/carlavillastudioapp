"use client"
import { useState } from 'react';
import Image from "next/image";
import { clientInfo } from './tu_cita/page';

export default function TuCita04({
  improveState,
  addClientInfo
}: {
  improveState: () => void;
  addClientInfo: (property: keyof clientInfo, info: string) => void;
}) {
  const [email, setEmail] = useState('');
  const [tlf, setTlf] = useState('');
  const [emailError, setEmailError] = useState('');
  const [tlfError, setTlfError] = useState('');

  const handleClick = () => {
    let valid = true;

    if (!email || !email.includes('@') || !email.includes('.')) {
      setEmailError("Introduce un email válido.");
      valid = false;
    } else {
      setEmailError('');
    }

    if (!/^\+?\d{9,15}$/.test(tlf)) {
      setTlfError("Introduce un teléfono válido (9 a 15 dígitos).");
      valid = false;
    } else {
      setTlfError('');
    }

    if (!valid) return;

    addClientInfo('email', email);
    addClientInfo('tlf', tlf);
    improveState();
  };

  return (
    <div className="TuCita04 h-[650px] w-[900px] flex items-center overflow-y-hidden">
      <div className="left w-[50%]">
        <Image
          src="/images/tu_cita/img03.jpg"
          alt="Imagen de perfil"
          width={700}
          height={700}
        />
      </div>
      <div className="right w-[50%] flex items-center justify-center h-full">
        <div className="text-center w-[90%]">
          <span className="text-3xl">Déjame tus datos de contacto</span><br />

          <input
            type="email"
            className="mt-[30px] border p-2 w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-red-500 text-sm mt-1">{emailError}</div>} <br />

          <input
            type="tel"
            className="mt-[20px] border p-2 w-full"
            placeholder="Teléfono"
            value={tlf}
            onChange={(e) => setTlf(e.target.value)}
          />
          {tlfError && <div className="text-red-500 text-sm mt-1">{tlfError}</div>} <br />

          <button className="myButton01 mt-[40px]" onClick={handleClick}>Continuar</button>
        </div>
      </div>
    </div>
  );
}
