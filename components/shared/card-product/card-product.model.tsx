"use client";

import { Product } from '@/app/api/mock/products';
import { useCart } from '@/context/cart-context/cart-context';
import { toast } from 'sonner';

export function useCardProductViewModel({ product }: { product: Product }) {
  const { cart, addProduct, setOpenCart } = useCart();

  const existingProductInCart = Boolean(
    cart.find((item) => item.id === product.id),
  );

  const handleAddToCart = () => {
    addProduct({ ...product, quantity: 1 });
    setOpenCart(true);
    toast.success('Produto adicionado ao carrinho');
  };

  return {
    existingProductInCart,
    product,
    handleAddToCart,
  };
}
