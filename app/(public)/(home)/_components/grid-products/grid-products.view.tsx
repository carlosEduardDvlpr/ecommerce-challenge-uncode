import { Button } from '@/components/ui/button';
import CardProduct from '@/components/shared/card-product';
import { Skeleton } from '@/components/ui/skeleton';
import { type GridProductsProps } from './grid-products.type';

export function GridProductsView({
  products,
  filters,
  selectedCategory,
  setSelectedCategory,
  loading,
}: GridProductsProps) {
  return (
    <section className="p-pattern py-8">
      <div className="bg-white justify-between rounded-sm w-full items-center h-85">
        <ul className="w-full">
          <li className="flex justify-between gap-3 flex-wrap">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelectedCategory(filter)}
                className={`flex-1 text-primary bg-secondary border-2 border-primary hover:text-white hover:bg-primary ${
                  selectedCategory === filter ? 'bg-primary text-white' : ''
                }`}
              >
                {filter}
              </Button>
            ))}
          </li>
        </ul>

        {loading && (
          <div className="grid grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 space-x-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="flex flex-col" key={index}>
                <Skeleton className="h-52.5 mt-4 rounded-sm" />
                <Skeleton className="h-10 mt-2 rounded-sm" />
                <Skeleton className="h-10 mt-2 rounded-sm" />
                <Skeleton className="h-10 mt-2 rounded-sm" />
              </div>
            ))}
          </div>
        )}

        {products.length === 0 && !loading && (
          <p className="text-gray-600 mt-12 text-center">
            Ocorreu um erro ao buscar os produtos, por favor atualize a página e
            tente novamente...
          </p>
        )}

        {products.length > 0 && !loading && (
          <div className="py-12">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {products.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
