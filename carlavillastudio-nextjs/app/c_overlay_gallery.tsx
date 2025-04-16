'use client'

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface OverlayGalleryProps {
  files: string[];
  initialImage: string;
  onClose: () => void;
}

export default function OverlayGallery({ files, initialImage, onClose }: OverlayGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = files.indexOf(initialImage);
    if (index !== -1) setCurrentIndex(index);
  }, [initialImage, files]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % files.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + files.length) % files.length);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si haces clic fuera del contenedor de imagen, cierra
    if (imageContainerRef.current && !imageContainerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
<div
  className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
  onClick={handleClickOutside}
>
  <div
    ref={imageContainerRef}
    className="relative h-screen max-h-screen flex items-center justify-center"
  >
    {/* Imagen */}
    <div
    ref={imageContainerRef}
    className="relative max-w-[90vw] max-h-screen h-screen flex items-center justify-center"
    >
    {/* Imagen */}
    <Image
        src={`/images/editorial/${files[currentIndex]}`}
        alt="Imagen ampliada"
        width={500}
        height={1000}
        className="object-contain max-h-screen w-auto"
        quality={30}
    />
    </div>

    {/* Flechas */}
    <button
      onClick={handlePrev}
      className="absolute left-0 top-1/2 -translate-y-1/2 text-white z-50 px-4"
    >
      <ChevronLeft size={40} />
    </button>
    <button
      onClick={handleNext}
      className="absolute right-0 top-1/2 -translate-y-1/2 text-white z-50 px-4"
    >
      <ChevronRight size={40} />
    </button>
  </div>
</div>

  );
}
