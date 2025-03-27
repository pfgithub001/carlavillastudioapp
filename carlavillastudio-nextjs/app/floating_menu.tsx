"use client";
import { useState } from "react";
import Image from "next/image";

export default function FloatingMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle between true and false
  };

  return (
    <nav
      className={`myNavbar fixed top-5 left-5 z-10 ${
        isActive ? "myNavbar_active" : ""
      }`}
    >
      <ul className="m-5 text-2xl">
        <li><a href="/">01. Inicio.</a></li>
        <li><a href="/sobre_mi">02. Sobre mi.</a></li>
        <li><a href="/editorial">03. Editorial.</a></li>
        <li><a href="">04. Prensa.</a></li>
        <li><a href="">05. Contácto.</a></li>
      </ul>
      <div className="logo mb-[40px] md:mb-[80px]">
        <Image 
          className="w-[170px] md:w-[170px] icon icon--logo m-5" 
          src={'/images/logo/logo_black.png'}
          alt="Carlavilla Studio Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="hamburguer absolute" onClick={toggleMenu}>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
