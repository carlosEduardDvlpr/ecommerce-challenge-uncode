import { Product } from '@/app/api/mock/products';
import { FilterProductsView } from './_components/filters-products/filter-products.view';
import { GridProducts } from './_components/grid-products/grid-products';
import { URL } from '@/constants/url';
import { getBaseUrl } from '@/actions/get-base-url';

export default async function SearchProductPage({
  params,
}: {
  params: Promise<{ search: string }>;
}) {
  const { search } = await params;

  const baseUrl = await getBaseUrl();

  const response = await fetch(`${baseUrl}${URL}?name=${search}`);
  const products = (await response.json()) as Product[];

  if (products.length === 0)
    return (
      <section className="p-pattern py-8">
        <p>Nenhum produto encontrado para "{search}"</p>
      </section>
    );

  return (
    <section className="p-pattern py-4 md:py-8">
      <p className="md:pb-8 pb-2 text-gray-600">
        Exibindo resultados para "{search}"
      </p>

      <div className="md:flex gap-8">
        <FilterProductsView />
        <GridProducts products={products} />
      </div>
    </section>
  );
}
