import { useState } from 'react';
import Image from "next/image";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isBefore, startOfDay } from 'date-fns';
import { clientInfo } from './tu_cita/page';

export default function TuCita02({
  improveState,
  addClientInfo
}: {
  improveState: () => void;
  addClientInfo: (property: keyof clientInfo, info: string) => void;
}) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [dateError, setDateError] = useState("");

  const handleClick = () => {
    if (!startDate || isBefore(startOfDay(startDate), startOfDay(new Date()))) {
      setDateError("Selecciona una fecha válida (hoy o posterior).");
      return;
    }

    setDateError("");
    const formattedDate = format(startDate, 'dd/MM/yyyy');
    addClientInfo('eventDate', formattedDate);
    improveState();
  };

  return (
    <div className="TuCita02 h-[650px] w-[900px] flex items-center overflow-y-hidden">
      <div className="left hidden md:inline-block w-[50%]">
        <Image
          src="/images/tu_cita/img02.jpg"
          alt="Imagen de perfil"
          width={700}
          height={700}
        />
      </div>
      <div className="right w-[100%] md:w-[50%] flex items-center justify-center h-full">
        <div className="text-center">
          <span className="text-3xl">¿Cuándo es el evento?</span><br />
          <DatePicker
            className="mt-[50px] border p-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
          {dateError && <div className="text-red-500 text-sm mt-2">{dateError}</div>}
          <br />
          <button className="myButton01 mt-[50px]" onClick={handleClick}>Continuar</button>
        </div>
      </div>
    </div>
  );
}
