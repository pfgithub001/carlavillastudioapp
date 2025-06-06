"use client"
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import TuCita01 from "../c_tu_cita_01";
import TuCita02 from "../c_tu_cita_02";
import TuCita03 from "../c_tu_cita_03";
import TuCita04 from "../c_tu_cita_04";
import TuCita05 from "../c_tu_cita_05";
import TuCita06 from "../c_tu_cita_06";

export interface clientInfo {
  name: string;
  eventDate: string;
  isSheGettingMarried: string;
  email: string;
  tlf: string;
  questions: string;
}

export default function Page() {
  const [state, setState] = useState(0);
  const [newClientInfo, setNewClientInfo] = useState<clientInfo>({
    name: "",
    eventDate: "",
    isSheGettingMarried: "",
    email: "",
    tlf: "",
    questions: "",
  });

  useEffect(() => {
    console.log("Info del cliente:", newClientInfo);
  }, [newClientInfo]);

  useEffect(() => {
  if (state === 5) {
    console.log("Enviando mensaje desde useEffect con info completa");
    sendEmail();
    handleSubscribe();
  }
}, [state]);

  const improveState = () => {
    setState(prev => prev + 1);
  };

  const addClientInfo = (property: keyof clientInfo, info: string) => {
    setNewClientInfo(prev => {
      const updated = { ...prev, [property]: info };
      console.log('Nuevo estado cliente:', updated);
      return updated;
    });
  };

  const sendEmail = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "Datos del cliente",
        html: `<p>Nombre: ${newClientInfo.name}</p>
              <p>Fecha del evento: ${newClientInfo.eventDate}</p>
              <p>¿Novia o invitada?: ${newClientInfo.isSheGettingMarried}</p>
              <p>Email: ${newClientInfo.email}</p>
              <p>Teléfono: ${newClientInfo.tlf}</p>
              <p>Preguntas: ${newClientInfo.questions}</p>`,
      }),
    });

    const data = await res.json();
    console.log("Respuesta del servidor:", data);
  };

  const handleSubscribe = async () => {
    console.log(newClientInfo.email);
    const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_NEWSLETTER_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newClientInfo.email }),
    });

    if (res.ok) {
    } else {
        const data = await res.json();
        alert("Error al suscribirse: " + data?.error || "Desconocido");
    }
  };

  const views = [
    () => <TuCita01 improveState={improveState} addClientInfo={addClientInfo} />,
    () => <TuCita02 improveState={improveState} addClientInfo={addClientInfo} />,
    () => <TuCita03 improveState={improveState} addClientInfo={addClientInfo} />,
    () => <TuCita04 improveState={improveState} addClientInfo={addClientInfo} />,
    () => <TuCita05 improveState={improveState} addClientInfo={addClientInfo} />,
    () => <TuCita06 />,
  ];

  return (
    <div className="TuCita min-h-screen flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {views[state]()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
