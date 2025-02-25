export interface ConfiguringProduct {
  id: number;
  name: string;
  isFillingOptional: boolean;
  hasFilling?: boolean;
  hasFillingOptions: boolean;
  fillingList?: string[];
  fillingIndex?: number;
  isUnitarian: boolean;
  paxList?: number[];
  paxIndex?: number;
  priceList?: number[];
  price?: number;
  noFillingPriceList?: number[];
  quantity: number;
  image: string;
  finalPrice: number;
}