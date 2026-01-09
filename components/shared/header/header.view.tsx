
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import { HeaderProps } from './header.type';

export function HeaderView({ handleSearch, setSearch }: HeaderProps) {
  return (
    <header className="p-pattern flex gap-12 bg-primary text-white h-17.5 w-full justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl italic font-medium">UNCommerce</h1>

      {/* Busca */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1">
        <Input
          className="bg-white text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button size="icon" className="bg-secondary hover:bg-secondary/80">
          <Search className="text-primary" />
        </Button>
      </form>

      {/* Favoritos */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Heart />
          <p>Favoritos</p>
        </div>

        {/* Entrar */}
        <div className="flex items-center gap-2">
          <User />
          <p>Entrar</p>
        </div>

        {/* Carrinho */}
        <div>
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}
