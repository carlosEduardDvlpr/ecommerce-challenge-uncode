import { type Product } from '@/app/api/mock/products';

export interface CardProductProps {
  existingProductInCart: boolean;
  product: Product;
  key?: number;
  handleAddToCart: () => void;
}
