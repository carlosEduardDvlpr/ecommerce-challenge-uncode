'use client';
import { useHeaderModel } from './header.model';
import { HeaderView } from './header.view';

export function HeaderViewModel() {
  const props = useHeaderModel();
  return <HeaderView {...props} />;
}
