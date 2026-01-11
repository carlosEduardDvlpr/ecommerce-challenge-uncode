'use client';

import { type Product } from '@/app/api/mock/products';
import { useCardProductViewModel } from './card-product.model';
import { CardProductView } from './card-product.view';

export function CardProductViewModel({ product }: { product: Product }) {
  const props = useCardProductViewModel({ product });
  return <CardProductView {...props} />;
}
