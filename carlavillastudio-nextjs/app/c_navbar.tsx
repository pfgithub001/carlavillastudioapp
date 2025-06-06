'use client';

import { usePathname } from 'next/navigation';

export default function Navbar () {
    const pathname = usePathname();

    return (
        <div className="Navbar hidden md:inline absolute w-[100%] z-10 mt-[50px] px-[30px]">
            <div className="navbar_container w-[100%] flex justify-between font-light mx-auto">
                <div className='w-auto'>
                </div>
                <div className='w-[500px] flex justify-between'>
                    <a className={`hv_underline ${pathname === '/' ? 'my_underline' : ''}`} href="/">INICIO</a>
                    <a className={`hv_underline ${pathname === '/sobre_mi' ? 'my_underline' : ''}`} href="/sobre_mi">SOBRE MÍ</a>
                    <a className={`hv_underline ${pathname === '/editorial' ? 'my_underline' : ''}`} href="/editorial">EDITORIAL</a>
                    <a className={`hv_underline ${pathname === '/prensa' ? 'my_underline' : ''}`} href="/prensa">PRENSA</a>
                    <a className={`hv_underline ${pathname === '/contacto' ? 'my_underline' : ''}`} href="/contacto">CONTACTO</a>                
                </div>
                <div className='w-auto text-right myButton01'><a className="" href="/tu_cita">Pide tu cita.</a></div>
            </div>
        </div>
    )
}
