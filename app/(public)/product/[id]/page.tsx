import { Product } from '@/app/api/mock/products';
import { Badge } from '@/components/ui/badge';
import ButtonAddCart from './_components/button-add-cart';
import { formatNumberBrl } from '@/utils/format-number-brl';
import { CarouselProductView } from './_components/carousel-product/carousel-product.view';
import CardProduct from '@/components/shared/card-product';
import { Separator } from '@/components/ui/separator';
import { URL } from '@/constants/url';
import { getBaseUrl } from '@/actions/get-base-url';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const baseUrl = await getBaseUrl()

  const responseProduct = await fetch(`${baseUrl}${URL}?id=${id}`);
  const product = (await responseProduct.json()) as Product;

  const responseCategory = await fetch(
    `${baseUrl}${URL}?category=${product.category}`,
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
      <div className="p-pattern md:py-8 grid md:gap-24 gap-12 lg:grid-cols-2">
        <CarouselProductView product={product} />

        <div className="flex flex-col gap-4">
          <div>
            <div className="md:flex flex flex-col-reverse md:gap-4 gap-2">
              <h1 className="md:text-4xl text-3xl font-medium text-primary">
                {product.name}
              </h1>
              <Badge>{product.category}</Badge>
            </div>

            <p className="text-base font-medium mt-1">
              {product.shortDescription}
            </p>
          </div>

          <div className="py-2">
            <p className="md:text-lg text-base">{product.fullDescription}</p>
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

            <ButtonAddCart product={product} />
          </div>
        </div>
      </div>

      <Separator className="mt-8 md:mt-0" />

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl text-primary font-medium">
          Produtos sugeridos
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {productsCategory
            .filter((p) => p.id !== product.id)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}
