import { Product } from '@/app/api/mock/products';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselProductView({ product }: { product: Product }) {
  return (
    <div className="flex justify-center">
      <Carousel className="md:w-full w-[80%]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="p-0">
                <CardContent className="flex items-center justify-center p-6 relative aspect-5/4">
                  <Image
                    className="object-cover"
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    loading="eager"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary text-white hover:bg-primary" />
        <CarouselNext className="bg-primary text-white hover:bg-primary" />
      </Carousel>
    </div>
  );
}
