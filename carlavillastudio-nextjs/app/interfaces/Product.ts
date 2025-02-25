export interface Product {
  id: number;
  name: string;
  isUnitarian: boolean; // Indica si la tarta es unitaria o tiene tamaños para elegir
  paxList?: number[]; // Lista de porciones disponibles
  defaultPaxIndex?: number; // Índice de la porción seleccionada por defecto
  priceList?: number[]; // Lista de precios según las porciones
  price?: number; // Precio único si es unitaria
  isFillingOptional: boolean; // Indica si es opcional quitar el relleno
  noFillingPriceList?: number[]; // Precios si no lleva relleno
  hasFillingOptions: boolean; // Indica si existen opciones de relleno
  fillingList?: string[]; // Lista de tipos de relleno disponibles
  description: string; // Descripción de la tarta
  image: string; // Nombre del archivo de la imagen
}