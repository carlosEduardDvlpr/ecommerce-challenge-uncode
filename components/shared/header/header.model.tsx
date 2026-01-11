'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

export function useHeaderModel() {
  const [searchWord, setSearchWord] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    (document.activeElement as HTMLElement)?.blur();

    if (pathname.includes('search')) {
      router.replace(`/search/${searchWord}`);
      return;
    }
    router.push(`/search/${searchWord}`);
  };

  return {
    setSearchWord,
    searchWord,
    handleSearch,
  };
}
