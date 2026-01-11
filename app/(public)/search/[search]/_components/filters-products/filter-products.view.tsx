'use client';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { useFilterContext } from '@/context/filters-context/useFilters';

export function FilterProductsView() {
  const { setCategory, setPrice, price } = useFilterContext();
  const categorias = [
    'todos',
    'ofertas',
    'computadores',
    'perifericos',
    'acessorios',
  ] as const;

  return (
    <div className="md:w-60 w-full border-b-2 md:border-b-0 md:border-r-2 border-primary md:pr-4 flex md:gap-0 gap-2 md:block md:mb-0 mb-4">
      <p className="text-gray-600 md:block hidden">Filtros</p>

      <div className="md:border-t border-gray-600 my-2 py-2">
        <p className="mb-2 text-primary font-medium">Valor</p>
        <div className="flex gap-4 items-center">
          <p>Até: </p>
          <Input
            value={price}
            maxLength={5}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
              setPrice(Number(e.target.value));
            }}
          />
        </div>
      </div>

      <div className="md:border-t border-gray-600 my-2 py-2">
        <p className="mb-2 text-primary font-medium">Categoria</p>

        <Select
          defaultValue="todos"
          onValueChange={(value) =>
            setCategory(value as (typeof categorias)[number])
          }
        >
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Selecione a categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorias</SelectLabel>
              {categorias.map((category) => (
                <SelectItem value={category} key={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
