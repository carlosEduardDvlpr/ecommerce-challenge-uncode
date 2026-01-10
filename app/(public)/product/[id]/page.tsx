import { Product } from '@/app/api/mock/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatNumberBrl } from '@/utils/format-number-brl';
import { Plus } from 'lucide-react';
import { CarouselProductView } from './_components/carousel-product/carousel-product.view';
import { CardProductView } from '@/components/shared/card-product/card-product.view';
import { Separator } from '@/components/ui/separator';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const responseProduct = await fetch(
    `http://localhost:3000/api/mock/products?id=${id}`,
  );
  const product = (await responseProduct.json()) as Product;

  const responseCategory = await fetch(
    `http://localhost:3000/api/mock/products?category=${product.category}`,
  );
  const productsCategory = (await responseCategory.json()) as Product[];

  if (!product)
    return (
      <section className="p-pattern py-8">
        <p>Produto não encontrado...</p>
      </section>
    );

  return (
    <section className="p-pattern py-8">
      <div className="p-pattern py-8 grid gap-24 grid-cols-2">
        <CarouselProductView product={product} />

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex gap-4 items-center">
              <h1 className="text-4xl font-medium text-primary">
                {product.name}
              </h1>
              <Badge>{product.category}</Badge>
            </div>

            <p className="text-lg font-medium mt-1">
              {product.shortDescription}
            </p>
          </div>

          <div className="py-2">
            <p className="text-lg">{product.fullDescription}</p>
          </div>

          <div>
            {product.offer && (
              <p className="text-gray-600 line-through">
                {formatNumberBrl(product.originalPrice)}
              </p>
            )}
            <p className="text-5xl font-bold text-primary">
              {formatNumberBrl(product.price)}
            </p>
            <p>Em 12x sem juros</p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p
              className={`text-base ${
                product.stock <= 10 ? 'text-red-600' : 'text-black'
              }`}
            >
              {product.stock <= 10
                ? `Ultimas ${product.stock} unidades!`
                : `Quantidade em estoque: ${product.stock}`}
            </p>

            <Button className="w-1/2 text-lg" size="lg">
              Adicionar ao carrinho <Plus />
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl text-primary font-medium">
          Produtos sugeridos
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {productsCategory
            .filter((p) => p.id !== product.id)
            .map((product) => (
              <CardProductView key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}
