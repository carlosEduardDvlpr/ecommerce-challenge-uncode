'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { type ButtonAddCartProps } from './button-add-cart.type';

export function ButtonAddCartView({ handleAddCart }: ButtonAddCartProps) {
  return (
    <Button className="md:w-1/2 w-full text-lg" size="lg" onClick={handleAddCart}>
      Adicionar ao carrinho <Plus />
    </Button>
  );
}
