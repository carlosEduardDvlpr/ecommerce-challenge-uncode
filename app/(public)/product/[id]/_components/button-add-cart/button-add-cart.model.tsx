'use client';

import { Product } from '@/app/api/mock/products';
import { useCart } from '@/context/cart-context/cart-context';
import { toast } from 'sonner';

export function useButtonAddCartModel({ product }: { product: Product }) {
  const { cart, addProduct, setOpenCart } = useCart();

  const existingInCart = Boolean(cart.find((item) => item.id === product.id));

  const handleAddCart = () => {
    if (existingInCart) {
      toast.success('Produto já existe no carrinho');
      setOpenCart(true);
      return;
    }
    addProduct(product);
    toast.success('Produto adicionado ao carrinho');
    setOpenCart(true);
  };

  return {
    handleAddCart,
  };
}
