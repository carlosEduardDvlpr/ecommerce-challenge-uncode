'use server';

import { headers } from 'next/headers';

export async function getBaseUrl() {
  const headersList = headers();
  const host = (await headersList).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  return `${protocol}://${host}`;
}
