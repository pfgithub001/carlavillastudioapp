'use client';

import { X } from 'lucide-react';

interface SubscribeSuccessOverlayProps {
  onClose: () => void;
}

export default function SubscribeSuccessOverlay({ onClose }: SubscribeSuccessOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl p-8 max-w-md text-center shadow-lg mx-[20px]">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Contenido */}
        <h2 className="text-2xl font-semibold mb-4">¡Gracias por suscribirte!</h2>
        <p className="font-light mb-[20px]">
          Te mantendremos al tanto de las novedades de Carlavilla Studio.
        </p>

        <button
          onClick={onClose}
          className="myButton01"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
