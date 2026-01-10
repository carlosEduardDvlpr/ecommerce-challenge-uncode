'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export function useHeaderModel() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return {
    setSearch,
    handleSearch,
  };
}
