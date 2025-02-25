"use client";
import { useState } from "react";
import SvgLogo from "./ui/svg/logo";

export default function FloatingMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle between true and false
  };

  return (
    <nav
      className={`myNavbar fixed bottom-5 right-5 ${
        isActive ? "myNavbar_active" : ""
      }`}
    >
      <ul className="m-5 text-2xl">
        <li><a href="">01. Haz tu pedido.</a></li>
        <li><a href="">02. Nuestras tartas.</a></li>
        <li><a href="">03. Servicios.</a></li>
        <li><a href="">04. Contáctanos.</a></li>
      </ul>
      <div className="logo mb-[40px] md:mb-[80px]">
        <SvgLogo className="w-[170px] md:w-[170px] icon icon--logo m-5" />
      </div>
      <div className="hamburguer absolute" onClick={toggleMenu}>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
