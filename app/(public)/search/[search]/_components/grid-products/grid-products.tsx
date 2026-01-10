'use client';

import { Product } from '@/app/api/mock/products';
import { CardProductView } from '@/components/shared/card-product/card-product.view';
import { useFilterContext } from '@/context/filters-context/filters-context';
import { useMemo } from 'react';

export function GridProducts({ products }: { products: Product[] }) {
  const { price, category } = useFilterContext();

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (category === 'todos') return true;
        if (category === 'ofertas') return product.offer === true;
        return product.category === category;
      })
      .filter((product) => product.price <= price);
  }, [category, price]);

  if (filteredProducts.length === 0) return <p className='text-gray-600'>Nenhum produto atende aos filtros aplicados...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {filteredProducts.map((product) => (
        <CardProductView key={product.id} product={product} />
      ))}
    </div>
  );
}
