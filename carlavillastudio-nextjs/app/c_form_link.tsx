import Image from 'next/image';

export default function FormLink() {
    return (
        <div className="FormLink relative h-screen flex items-center justify-center">
            {/* Contenedor de la imagen */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src="/images/home/form_link_bg.webp" // Ruta de tu imagen
                    alt="Fondo"
                    layout="fill" // Hace que la imagen llene todo el contenedor
                    objectFit="cover" // Asegura que la imagen cubra el contenedor sin distorsionarse
                    priority // Carga la imagen de forma prioritaria
                />
            </div>
            {/* Contenido principal */}
            <div className="FormLink-containertext-center z-10  px-[50px]">
                {/* Título */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">¿Quieres contactar con nosotros?</h1>
                {/* Botón */}
                <button className="myButton01">
                    Haz clic aquí
                </button>
            </div>
        </div>
    );
}