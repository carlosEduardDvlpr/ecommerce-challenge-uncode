import { type Product } from '@/app/api/mock/products';
import { type Dispatch, type SetStateAction } from 'react';

export interface CartSheetProps {
  countCartItens: number;
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<CartSheetProps['openCart']>>;
  cart: Product[];
  cartTotal: number;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
  mounted: boolean;
}
