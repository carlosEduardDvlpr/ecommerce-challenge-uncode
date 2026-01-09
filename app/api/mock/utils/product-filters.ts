import { products } from '../products';

export function filterProductByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export function filterProductByName(name: string) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase()),
  );
}

export function filterProductById(id: number) {
  return products.find((product) => product.id === id) || [];
}

export function filterProductsOffers() {
  return products.filter((product) => product.offer === true);
}
