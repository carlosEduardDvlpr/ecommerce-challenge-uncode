import { Product } from '@/app/api/mock/products';
import { FilterProductsView } from './_components/filters-products/filter-products.view';
import { GridProducts } from './_components/grid-products/grid-products';

export default async function SearchProductPage({
  params,
}: {
  params: Promise<{ search: string }>;
}) {
  const { search } = await params;

  const response = await fetch(
    `http://localhost:3000/api/mock/products?name=${search}`,
  );
  const products = (await response.json()) as Product[];

  if (products.length === 0)
    return (
      <section className="p-pattern py-8">
        <p>Nenhum produto encontrado para "{search}"</p>
      </section>
    );

  return (
    <section className="p-pattern py-8">
      <p className="pb-8 text-gray-600">Exibindo resultados para "{search}"</p>

      <div className="flex gap-8">
        <FilterProductsView />

       <GridProducts products={products} />
      </div>
    </section>
  );
}
