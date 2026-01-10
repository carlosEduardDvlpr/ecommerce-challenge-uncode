import { Button } from '@/components/ui/button';
import { GridProductsProps } from './grid-products.type';
import { CardProductView } from '@/components/shared/card-product/card-product.view';

export function GridProductsView({
  products,
  filters,
  selectedCategory,
  setSelectedCategory,
}: GridProductsProps) {
  return (
    <section className="p-pattern py-8">
      <div className="bg-white justify-between rounded-sm w-full p-4 items-center h-85">
        <ul className="w-full">
          <li className="flex justify-between gap-3">
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

        <div className="py-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <CardProductView key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
