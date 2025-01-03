import { Product } from "../products/product";

export interface Cart {
  numOfCartItems: number;
  cartId: string;
  data: Data;
}

export interface Data {
  _id: string;

  products: cartproduct[];

  totalCartPrice: number;
}

export interface cartproduct {
  count: number;

  product: Product;
  price: number;
}


