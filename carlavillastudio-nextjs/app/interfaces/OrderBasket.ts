import { OrderedProduct } from "./OrderedProduct";

export interface OrderBasket {
  orderedProducts: OrderedProduct[];
  totalPrice: number;
}