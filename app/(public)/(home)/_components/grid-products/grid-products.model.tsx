'use client';
import { Product } from '@/app/api/mock/products';
import { useEffect, useState } from 'react';

export function useGridProductsModel() {
  const filters = [
    'todos',
    'ofertas',
    'computadores',
    'perifericos',
    'acessorios',
  ] as const;

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof filters)[number]>('todos');

  const getProducts = async () => {
    const response = await fetch(
      'http://localhost:3000/api/mock/products?category=' + selectedCategory,
    );
    const products = (await response.json()) as Product[];
    console.log(products);

    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  return {
    products,
    filters,
    setSelectedCategory,
    selectedCategory,
  };
}
