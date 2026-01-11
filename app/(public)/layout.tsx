import '../globals.css';
import { type Metadata } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/components/shared/header';
import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/context/cart-context/context_provider';
import { FilterContextProvider } from '@/context/filters-context/context_provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UNCommerce',
  description: 'Ecommerce - Desafio técnico uncode',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} antialiased`}>
        <FilterContextProvider>
          <CartProvider>
            <Toaster duration={1000} position="top-center" />
            <Header />
            {children}
          </CartProvider>
        </FilterContextProvider>
      </body>
    </html>
  );
}
