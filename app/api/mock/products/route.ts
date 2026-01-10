import { NextRequest } from 'next/server';
import { products } from '../products';
import {
  filterProductByCategory,
  filterProductById,
  filterProductByName,
} from '../utils/product-filters';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(req: NextRequest) {
  await delay(100);

  const searchParams = req.nextUrl.searchParams;

  const id = searchParams.get('id');
  const category = searchParams.get('category');
  const name = searchParams.get('name');

  if (id) return Response.json(filterProductById(Number(id)));
  if (category) return Response.json(filterProductByCategory(category));
  if (name) return Response.json(filterProductByName(name));

  return Response.json(products);
}
