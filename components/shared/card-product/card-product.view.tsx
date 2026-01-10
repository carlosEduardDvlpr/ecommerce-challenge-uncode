import { Product } from '@/app/api/mock/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatNumberBrl } from '@/utils/format-number-brl';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';

export function CardProductView({ product }: { product: Product }) {
  return (
    <Card key={product.id} className="overflow-hidden relative p-0 animate-in">
      <CardContent className="p-2">
        {product.offer && (
          <Badge className="absolute top-2 left-2">Oferta</Badge>
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
        <p className="text-xs font-medium mt-1">{product.shortDescription}</p>

        <div className="py-2">
          {product.offer ? (
            <p className="text-sm  text-gray-600/80 line-through">
              {formatNumberBrl(product.originalPrice)}
            </p>
          ) : (
            <p className="text-transparent">.</p>
          )}

          <p className="text-xl  font-medium text-primary">
            {formatNumberBrl(product.price)}
          </p>
        </div>

        <Button className="w-full bg-primary border-2 border-primary hover:bg-orange-700">
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
}
