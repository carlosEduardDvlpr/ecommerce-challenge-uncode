import { Product } from '@/app/api/mock/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatNumberBrl } from '@/utils/format-number-brl';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CardProductView({ product }: { product: Product }) {
  return (
    <Card key={product.id} className="overflow-hidden relative p-0">
      <CardContent className="p-2">
        {product.offer && (
          <Badge className="absolute top-4 left-4">Oferta</Badge>
        )}

        <div className="absolute top-2 right-2">
          <Button className="bg-transparent hover:bg-transparent" size="icon">
            <HeartIcon className="text-primary" />
          </Button>

          <Button className="bg-transparent hover:bg-transparent" size="icon">
            <ShoppingCartIcon className="text-primary" />
          </Button>
        </div>

        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={200}
          unoptimized
        />

        <p className="text-sm font-medium mt-1">{product.name}</p>
        <p className="text-xs font-medium mt-1">
          {product.shortDescription.slice(0, 22).concat('...')}
        </p>

        <div className="my-2">
          {product.offer ? (
            <p className="text-sm text-gray-600/80 h-5 line-through">
              {formatNumberBrl(product.originalPrice)}
            </p>
          ) : (
            <p className="text-transparent h-5"></p>
          )}

          <p className="text-xl font-medium text-primary">
            {formatNumberBrl(product.price)}
          </p>
        </div>

        <Link href={`/product/${product.id}`}>
          <Button className="w-full bg-primary border-2 border-primary hover:bg-orange-700">
            Comprar
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
