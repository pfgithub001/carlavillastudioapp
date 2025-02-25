export interface OrderedProduct {
  id: number;
  name: string;
  pax?: number;
  isFillingOptional: boolean;
  filling?: string;
  price: number;
  quantity: number;
  finalPrice: number;
}