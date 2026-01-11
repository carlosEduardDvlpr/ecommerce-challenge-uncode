'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

export function useHeaderModel() {
  const [searchWord, setSearchWord] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/${searchWord}`);
  };

  return {
    setSearchWord,
    searchWord,
    handleSearch,
  };
}
