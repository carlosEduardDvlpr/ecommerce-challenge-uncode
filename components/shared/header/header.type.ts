import { FormEvent } from 'react';

export interface HeaderProps {
  handleSearch: (e: FormEvent<Element>) => void;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  searchWord: string;
}
