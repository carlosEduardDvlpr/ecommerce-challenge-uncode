"use client"
import { useGridProductsModel } from './grid-products.model';
import { GridProductsView } from './grid-products.view';

export function GridProductsViewModel() {
  const props = useGridProductsModel();
  return <GridProductsView {...props}/>;
}
