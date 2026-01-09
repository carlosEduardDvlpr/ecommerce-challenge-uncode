import { FormEvent } from 'react';

export interface HeaderProps {
  handleSearch: (e: FormEvent<Element>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
