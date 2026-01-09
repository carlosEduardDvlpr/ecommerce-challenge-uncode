'use client';
import { Product } from '@/app/api/mock/products';
import { useEffect, useState } from 'react';

export function useOfferProductsModel() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProductsOffers = async () => {
    const response = await fetch(
      'http://localhost:3000/api/mock/products?offer=true',
    );
    const products = (await response.json()) as Product[];

    setProducts(products);
  };

  useEffect(() => {
    getProductsOffers();
  }, []);

  return {
    products,
  };
}
