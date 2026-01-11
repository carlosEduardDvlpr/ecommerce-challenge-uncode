'use client';
import { useCart } from '@/context/cart-context/cart-context';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function useCartSheetModel() {
  const {
    cart,
    increment,
    decrement,
    removeProduct,
    openCart,
    setOpenCart,
    cartTotal,
  } = useCart();

  const countCartItens = cart.length;

  const handleIncrement = (id: number) => increment(id);
  const handleDecrement = (id: number) => decrement(id);
  const handleRemoveProduct = (id: number) => {
    removeProduct(id);
    toast.success('Produto removido do carrinho');
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    countCartItens,
    openCart,
    setOpenCart,
    cart,
    cartTotal,
    handleIncrement,
    handleDecrement,
    mounted,
    handleRemoveProduct,
  };
}
