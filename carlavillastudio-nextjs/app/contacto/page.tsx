"use client"

import { useState } from "react";
import Navbar from "../c_navbar";
import SubscribeSuccessOverlay from "../c_subscribe_success_overlay";

export default function Page() {

    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(""); // Estado para el error del email

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            setEmailError("Introduce un email válido."); // Establecer el mensaje de error
            return;
        }

        setEmailError(""); // Limpiar el error cuando el email es válido

        const res = await fetch("/api/newsletter/subscribe", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_NEWSLETTER_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (res.ok) {
            setSubscribed(true);
            setEmail("");
        } else {
            const data = await res.json();
            alert("Error al suscribirse: " + data?.error || "Desconocido");
        }
    };

    return (
        <div className="Contacto">
            <Navbar />
            <div className="contacto_container w-[90%] md:w-[1200px] mx-auto py-[300px]">
                <div className="mt-[100px] pb-[20px] border-b border-gray-300">
                    Newsletter.
                </div>
                <form onSubmit={handleSubscribe}>
                    <div className="flex mt-[40px] font-light gap-[50px]">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=""
                        />
                        
                        <button className="myButton01">
                            Suscribirme
                        </button>
                        
                    </div>
                    {emailError && <span className="text-red-500 text-sm">{emailError}</span>} {/* Mostrar el mensaje de error */}
                </form>
                <div className="mt-[100px] pb-[20px] border-b border-gray-300">
                    Para contactar con nosotras.
                </div>
                <div className="flex mt-[20px] font-light gap-[50px]">
                    <a href="tel:+34695543809">+34 695 54 38 09</a>
                    <a href="mailto:info@carlavillastudio.com">info@carlavillastudio.com</a>
                </div>
                <div className="mt-[100px] pb-[20px] border-b border-gray-300">
                    Social.
                </div>
                <div className="flex mt-[20px] font-light gap-[50px]">
                    <a href="https://www.instagram.com/carlavillastudio/">
                        Instagram.<br></br>
                        @carlavillastudio
                    </a>
                    <a href="https://www.tiktok.com/@carlavillastudio">
                        Tiktok<br></br>
                        @carlavillastudio
                    </a>
                </div>
            </div>
            {subscribed && <SubscribeSuccessOverlay onClose={() => setSubscribed(false)} />}
        </div>
    );
}
