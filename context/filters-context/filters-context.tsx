'use client';

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from 'react';

const FilterContext = createContext({});

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error(
      'useFilterContext must be used within a <FilterContextProvider />',
    );
  }

  return context as {
    category:
      | 'todos'
      | 'ofertas'
      | 'computadores'
      | 'perifericos'
      | 'acessorios';
    setCategory: Dispatch<
      SetStateAction<
        'todos' | 'ofertas' | 'computadores' | 'perifericos' | 'acessorios'
      >
    >;
    price: number;
    setPrice: Dispatch<SetStateAction<number>>;
  };
};

export const FilterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [category, setCategory] = useState<
    'todos' | 'ofertas' | 'computadores' | 'perifericos' | 'acessorios'
  >('todos');

  const [price, setPrice] = useState(99999);

  return (
    <FilterContext.Provider value={{ category, setCategory, price, setPrice }}>
      {children}
    </FilterContext.Provider>
  );
};
