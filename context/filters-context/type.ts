import { type Dispatch, type SetStateAction } from 'react';

export interface FilterContextProps {
  category: 'todos' | 'ofertas' | 'computadores' | 'perifericos' | 'acessorios';
  setCategory: Dispatch<SetStateAction<FilterContextProps['category']>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}
