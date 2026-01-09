import { Product } from '@/app/api/mock/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function OfferProductsView({ products }: { products: Product[] }) {
  return (
    <section className='flex p-pattern relative z-50 -mt-50'>
      <div className='bg-white flex justify-between rounded-sm border-4 border-primary w-full p-4 items-center'>
        <h1 className='font-medium text-2xl italic text-primary'>Ofertas</h1>
    
      </div>
      
    </section>
  );
}
