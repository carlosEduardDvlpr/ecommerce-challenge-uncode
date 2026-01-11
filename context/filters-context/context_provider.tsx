'use client';

import { createContext, useState, type ReactNode } from 'react';
import { type FilterContextProps } from './type';

export const FilterContext = createContext<FilterContextProps | null>(null);

export const FilterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [category, setCategory] =
    useState<FilterContextProps['category']>('todos');

  const [price, setPrice] = useState(99999);

  return (
    <FilterContext.Provider value={{ category, setCategory, price, setPrice }}>
      {children}
    </FilterContext.Provider>
  );
};
