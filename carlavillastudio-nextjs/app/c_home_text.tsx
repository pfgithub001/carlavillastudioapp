"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SvgQuotation from './ui/svg/quotation';

export default function HomeText({ text }: { text: string }) {
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
                    className={`py-[300px] md:py-[500px] px-[50px] text-4xl  md:text-6xl font-extralight italic opacity-0 transition-opacity duration-1000 ease-in-out ${
                        inView ? 'opacity-100' : ''
                    }`}
                >
                    <SvgQuotation
                        className={'fill-gray-300 w-[50px] md:w-[100px] h-[50px] md:h-[100px] translate-x-[-0px] md:translate-x-[-100px]'}
                     />
                    {text}.
                </span>
            </div>
        </div>
    );
};
