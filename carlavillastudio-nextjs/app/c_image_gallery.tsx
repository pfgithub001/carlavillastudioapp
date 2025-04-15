"use client"; // Permite usar useEffect

import { useState, useEffect } from "react";
import Image from "next/image";
import OverlayGallery from "./c_overlay_gallery";

export default function ImageGallery() {
    const [files, setFiles] = useState([]);
    const [translation, setTranslation] = useState(0);

    const [overlayOpen, setOverlayOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Obtener archivos desde la API
    useEffect(() => {
        fetch('/api/files')
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error("Error al obtener archivos:", error));
    }, []);

    // Actualizar el translation cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setTranslation((prev) => 
                (prev + 100) >= ((files.length * 50)-100) ? 0 : prev + 100
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [translation, files.length]);

    const handleImageClick = (file: string) => {
        setSelectedImage(file);
        setOverlayOpen(true);
    };

    return (
        <div className="ImageGallery max-w-[100vw] overflow-x-hidden">
            <div className="hidden carousel md:flex flex-row flex-nowrap min-w-fit">
                {files.map((file, index) => {
                    if (index % 2 !== 0) {
                        return (
                            <div key={index} className="carousel_view flex flex-row flex-nowrap w-[100vw] transition-transform duration-1000"
                                style={{ transform: `translateX(${-translation}vw)` }}
                            >
                                <Image
                                    className="w-f2"
                                    src={`/images/editorial/${files[index]}`}
                                    alt="Carlavilla Studio Footage"
                                    width={1000}
                                    height={1000}
                                    onClick={() => handleImageClick(files[index])}
                                />
                                <Image
                                    className="w-f2"
                                    src={`/images/editorial/${files[index + 1]}`}
                                    alt="Carlavilla Studio Footage"
                                    width={1000}
                                    height={1000}
                                    onClick={() => handleImageClick(files[index + 1])}
                                />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="flex flex-col md:hidden">
                {files.map((file, index) => {
                    if (index > 0) {
                        return (

                            <Image
                                className="w-[100%]"
                                src={`/images/editorial/${files[index]}`}
                                alt="Carlavilla Studio Footage"
                                width={1000}
                                height={1000}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            {overlayOpen && selectedImage && (
                <OverlayGallery
                files={files}
                initialImage={selectedImage}
                onClose={() => setOverlayOpen(false)}
                />
            )}
        </div>
    );
}
