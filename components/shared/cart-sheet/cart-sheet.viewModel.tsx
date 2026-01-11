"use client"
import { useCartSheetModel } from './cart-sheet.model';
import { CartSheetView } from './cart-sheet.view';

export function CartSheetViewModel() {
  const props = useCartSheetModel();
  return <CartSheetView {...props} />;
}
