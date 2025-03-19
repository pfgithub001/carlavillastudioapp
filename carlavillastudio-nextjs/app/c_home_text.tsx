"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer'

export default function HomeText () {
    const { ref, inView } = useInView({
        threshold: 0.5, // El 50% del elemento debe estar visible para activar la animación
    });

    return (
        <div className="HomeText z-10">
            <div
                ref={ref}
                className={`text-container flex center justify-center ${
                    inView ? 'animate-fade-in' : ''
                }`}
            >
                <span
                    className={`py-[200px] text-lg md:text-3xl opacity-0 transition-opacity duration-1000 ease-in-out ${
                        inView ? 'opacity-100' : ''
                    }`}
                >
                    Improvisando cuidadosamente.
                </span>
            </div>
        </div>
    );
};
