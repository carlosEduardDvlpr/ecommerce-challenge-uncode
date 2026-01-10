import { Product } from '@/app/api/mock/products';

export interface GridProductsProps {
  products: Product[];
  filters: readonly [
    'todos',
    'ofertas',
    'computadores',
    'perifericos',
    'acessorios',
  ];
  selectedCategory: GridProductsProps['filters'][number];
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<GridProductsProps['filters'][number]>
  >;
  loading: boolean;
}
