import { Product } from "./product";

export type CartProps = {
  readonly cartItems: Product[];
  readonly addToCart: (product: Product) => void;
  readonly removeFromCart: (id: number) => void;
  readonly cartCount: number;
};
