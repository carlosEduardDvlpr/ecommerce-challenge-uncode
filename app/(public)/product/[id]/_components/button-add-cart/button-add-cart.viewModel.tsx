"use client"
import { type Product } from '@/app/api/mock/products';
import { useButtonAddCartModel } from './button-add-cart.model';
import { ButtonAddCartView } from './button-add-cart.view';

export function ButtonAddCartViewModel({ product }: { product: Product }) {
  const props = useButtonAddCartModel({ product });
  return <ButtonAddCartView {...props} />;
}
