'use client';

import { createContext, useState, type ReactNode } from 'react';
import { type Product } from '@/app/api/mock/products';
import { type CartContextData } from './type';

export const CartContext = createContext<CartContextData | null>(null);

const STORAGE_KEY = 'cartItens';

function getInitialCart(): Product[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>(getInitialCart);
  const [openCart, setOpenCart] = useState(false);

  function sync(items: Product[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function addProduct(product: Product) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      let updated: Product[];

      if (found) {
        updated = prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity! + 1,
                totalPrice: (item.quantity! + 1) * item.price,
              }
            : item,
        );
      } else {
        updated = [
          ...prev,
          {
            ...product,
            quantity: 1,
            totalPrice: product.price,
          },
        ];
      }

      sync(updated);
      return updated;
    });
  }

  function increment(id: number) {
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.id === id && item.quantity! < item.stock
          ? {
              ...item,
              quantity: item.quantity! + 1,
              totalPrice: (item.quantity! + 1) * item.price,
            }
          : item,
      );

      sync(updated);
      return updated;
    });
  }

  function decrement(id: number) {
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.id === id && item.quantity! > 1
          ? {
              ...item,
              quantity: item.quantity! - 1,
              totalPrice: (item.quantity! - 1) * item.price,
            }
          : item,
      );

      sync(updated);
      return updated;
    });
  }

  function removeProduct(id: number) {
    setCart((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      sync(updated);
      return updated;
    });
  }

  const cartTotal = cart.reduce((total, item) => total + item.totalPrice!, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        increment,
        decrement,
        removeProduct,
        openCart,
        setOpenCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
