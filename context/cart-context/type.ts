import { type Product } from '@/app/api/mock/products';
import { type Dispatch, type SetStateAction } from 'react';

export interface CartContextData {
  cart: Product[];
  addProduct: (product: Product) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeProduct: (id: number) => void;
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  cartTotal: number;
}
