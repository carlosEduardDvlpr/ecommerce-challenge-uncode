import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { formatNumberBrl } from '@/utils/format-number-brl';
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import Link from 'next/link';
import { type CartSheetProps } from './cart-sheet.type';
import Image from 'next/image';

export function CartSheetView({
  countCartItens,
  openCart,
  setOpenCart,
  cart,
  cartTotal,
  handleDecrement,
  handleIncrement,
  handleRemoveProduct,
  mounted,
}: CartSheetProps) {
  return (
    <Sheet onOpenChange={setOpenCart} open={openCart}>
      <SheetTrigger asChild>
        <div className="cursor-pointer relative">
         {mounted && countCartItens > 0 && (
            <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-semibold text-primary">
              {countCartItens}
            </span>
          )}
          <ShoppingCart />
        </div>
      </SheetTrigger>
      <SheetContent className="md:min-w-125 w-[85%]">
        <SheetHeader>
          <SheetTitle>Itens no carrinho</SheetTitle>
          <SheetDescription>Visualize seus itens</SheetDescription>
        </SheetHeader>

        <div className="px-4 flex flex-col justify-between h-dvh overflow-y-auto pb-12">
          <div>
            {cart.length === 0 && (
              <p className="text-gray-600">Seu carrinho esta vazio...</p>
            )}
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col mt-4">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    href={`/product/${item.id}`}
                    onClick={() => setOpenCart(false)}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        className="object-cover"
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        unoptimized
                        loading="eager"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.quantity} x {formatNumberBrl(item.price)}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      onClick={() => handleDecrement(item.id)}
                    >
                      <Minus />
                    </Button>
                    <Button
                      size="icon"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <Plus />
                    </Button>
                    <Button
                      size="icon"
                      onClick={() => handleRemoveProduct(item.id)}
                    >
                      <Trash />
                    </Button>
                  </div>
                </div>

                <div className="border-b border-gray-600">
                  <p>Total: {formatNumberBrl(item.totalPrice!)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {cartTotal > 0 && (
          <div className="w-full bg-primary flex flex-col gap-2 justify-center p-4 md:pb-4 pb-8">
            <p className="text-lg text-center text-white font-medium">
              Total do carrinho: {formatNumberBrl(cartTotal)}{' '}
            </p>
            <Button disabled className="text-lg bg-secondary text-primary hover:bg-secondary/80">
              Finalizar compra
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
