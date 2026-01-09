"use client"
import { useOfferProductsModel } from './offers.model';
import { OfferProductsView } from './offers.view';

export function OfferProductsViewModel() {
  const props = useOfferProductsModel();
  return <OfferProductsView {...props}/>;
}
