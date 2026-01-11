"use client"
import { HeaderProps } from './header.type';
import CartSheet from '../cart-sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';

export function HeaderView({
  handleSearch,
  setSearchWord,
  searchWord,
}: HeaderProps) {
  return (
    <>
      <header className="p-pattern flex gap-12 bg-primary text-white md:h-17.5 h-14 w-full justify-between items-center">
        <Link href="/">
          <h1 className="text-xl italic font-medium">UNCommerce</h1>
        </Link>

        <form
          onSubmit={handleSearch}
          className="items-center gap-2 flex-1 max-w-225 hidden md:flex"
        >
          <Input
            className="bg-white text-black"
            value={searchWord}
            placeholder="O que você procura ?"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <Button
            size="icon"
            disabled={searchWord.length === 0}
            className="bg-secondary hover:bg-secondary/80"
          >
            <Search className="text-primary" />
          </Button>
        </form>

        <div className="flex items-center gap-8">
          <CartSheet />
        </div>
      </header>

      <div className="py-2 p-pattern md:hidden block">
        <form
          onSubmit={handleSearch}
          className="items-center gap-2 flex-1 max-w-225 flex"
        >
          <Input
            className="bg-white text-black"
            value={searchWord}
            placeholder="O que você procura ?"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <Button
            size="icon"
            disabled={searchWord.length === 0}
            className="md:bg-secondary hover:bg-secondary/80"
          >
            <Search className="md:text-primary" />
          </Button>
        </form>
      </div>
    </>
  );
}
