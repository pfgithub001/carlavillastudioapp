"use client";
import SvgLogo from "./ui/svg/logo"
import SvgWhatsApp from "./ui/svg/whatsapp";
import Image from "next/image"
import { useState } from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {Calendar} from "@nextui-org/calendar";

export default function Landing(this: any) {
  const [value, setValue] = useState()
  return (
    <section className="Landing">
      <header className="myHeader h-[420px] w-[420px] md:h-[500px] md:w-[500px]">
        <div className="logo mb-[40px] md:mb-[80px]">
          <SvgLogo className="w-[170px] md:w-[300px] icon icon--logo" />
          <span className="text-[10px] md:text-[17px]">OBRADOR REPOSTERÍA HOJALDRADA</span>
        </div>
      </header>
      <div className="scrollAdvise flex md:hidden justify-center gap-1 pt-[300px] mx-auto">
        <span>Desliza [ </span>
        <span> <ul><li>↓</li><li>↓</li></ul> </span>
        <span> ] para más.</span>
      </div>

      <Image className="landingImage top-[400px] md:top-[500px]"
        src="/images/home/milhojas-b.png" 
        alt="Landing"
        width={2400}
        height={1440}
      />
      <div className="homeInfo mx-auto pt-[400px] md:pt-[400px] sm:max-w-[90%] md:max-w-[1200px] flex justify-between">
        <div className="w-[calc(100%/1)] md:w-[calc(100%/3)]" >
          <h1 className="text-4xl md:text-5xl">¡Ahora puedes hacer tu pedido online!</h1>
          <p className="mt-5">Haz tu pedido onine, teléfono o What's App con 24h de antelación.</p>
          <a href=""><SvgWhatsApp className="icon icon--whatsapp w-[30px] inline"/>  747 41 88 20</a><br/> 
          <button className="myButton01 mt-5">Haz tu pedido</button>
        </div>
        <div className="scrollAdvise hidden md:flex justify-center gap-1 md:w-[calc(100%/3)]">
          <span>Desliza [ </span>
          <span> <ul><li>↓</li><li>↓</li></ul> </span>
          <span> ] para más.</span>
        </div>
        <ul className="w-[calc(100%/1)] md:w-[calc(100%/3)] text-2xl hidden md:inline">
          <li><a href="">01. Haz tu pedido.</a></li>
          <li><a href="">02. Nuestras tartas.</a></li>
          <li><a href="">03. Servicios</a></li>
          <li><a href="">04. Contáctanos</a></li>
        </ul>
      </div>
{/*       <div className="makeOrder mx-auto flex-column md:flex-row justify-between max-w-[90%] md:max-w-[1200px] p-5">
        <form className="w-[calc(100%)] md:w-[calc(100%/2)]" action="">
          <h1 className="text-3xl md:text-6xl">¡Ahora puedes hacer tu pedido online!</h1>
          <input className="mt-10" type="text" placeholder="Nombre completo"/><br/>
          <PhoneInput className="mt-5"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            country={"es"} />
            <Calendar
              className="mt-5"
              aria-label="Date (No Selection)" 
            /><br/>

          <button>Hacer perdido</button>
        </form>
        <div className="w-[calc(100%/2)]"></div>
      </div> */}
    </section>
  )
}