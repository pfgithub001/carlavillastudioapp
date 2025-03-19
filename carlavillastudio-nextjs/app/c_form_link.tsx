import Image from 'next/image';

export default function FormLink() {
    return (
        <div className="FormLink relative h-screen flex items-center justify-center">
            {/* Contenedor de la imagen */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src="/images/home/form_link_bg.jpg" // Ruta de tu imagen
                    alt="Fondo"
                    layout="fill" // Hace que la imagen llene todo el contenedor
                    objectFit="cover" // Asegura que la imagen cubra el contenedor sin distorsionarse
                    priority // Carga la imagen de forma prioritaria
                />
            </div>
            {/* Contenido principal */}
            <div className="FormLink-container flex flex-col items-center px-[50px] z-10">
                {/* Contenedor para el texto justificado a la izquierda */}
                <div className="text-left w-full">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">¿Quieres contactar con nosotras?</h1>
                </div>
                {/* Botón centrado horizontalmente */}
                <button className="myButton01 mx-auto">
                    Haz clic aquí
                </button>
            </div>
        </div>
    );
}