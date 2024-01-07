'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import queryClientDefaultOptions from '@/constants/queryClientDefaultOptions';

export default function CustomQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientDefaultOptions),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
