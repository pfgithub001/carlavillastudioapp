"use client"
import { useState } from 'react';
import Image from "next/image";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TuCita06() {
  return (
    <div className="TuCita06 h-[500px] w-[900px] flex flex-col items-center justify-center text-center">
      <div className="mb-6">
        <svg
          className="w-24 h-24 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M16 8L10.5 13.5L8 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="w-[100%] text-3xl font-light">
        ¡Hemos recibido tu solicitud!<br />
        Te responderemos lo antes posible :)
      </span>
    </div>
  );
}

