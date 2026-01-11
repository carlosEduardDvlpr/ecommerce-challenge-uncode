import { type Dispatch, type FormEvent, type SetStateAction } from 'react';

export interface HeaderProps {
  handleSearch: (e: FormEvent<Element>) => void;
  setSearchWord: Dispatch<SetStateAction<string>>;
  searchWord: string;
}
