import Image from 'next/image';

export default function Footer() {
    return (
        <div className="Footer">
            <div className="footer_container flex flex-row flex-wrap md:flex-nowrap items-center -m-[10px] p-[50px] font-light w-[100%] overflow-x-hidden">
                <div className="w-f2 md:w-f4 p-[10px]">
                    <Image
                        src="/images/logo/logo_gray.png" // Ruta de tu imagen
                        alt="carlavillastudio logo"
                        width={100}
                        height={100}
                    />
                    <span>carlavillastudio.com</span>
                </div>
                <div className="w-f2 md:w-f4 p-[10px]">
                    <ul>
                        <li><a href="">Política de privacidad</a></li>
                        <li><a href="">Aviso Legal</a></li>
                        <li><a href="">Política de cookies</a></li>
                    </ul>
                </div>
                <div className="w-f2 md:w-f4 p-[10px]">
                    <ul>
                        <li><a href="">Dirección</a></li>
                        <li><a href="">C/ Alto de Errondo. 82. Donostia / San Sebastian</a></li>
                    </ul>
                </div>
                <div className="w-f2 md:w-f4 p-[10px]">
                    <ul>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">info@carlavillastudio.com</a></li>
                        <li><a href="">+34 695 543 809</a></li>
                        <li><a href="">Instagram @carlavillastudio</a></li>
                        <li><a href="">Tiktok @carlavillastudio</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}