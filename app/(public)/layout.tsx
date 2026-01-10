import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import '../globals.css';
import Header from '@/components/shared/header';
import { FilterContextProvider } from '@/context/filters-context/filters-context';

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
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
