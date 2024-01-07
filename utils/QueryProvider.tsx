'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import queryClientDefaultOptions from '@/constants/queryClientDefaultOptions';

function QueryProviders({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(() => new QueryClient());

  queryClient.setDefaultOptions(queryClientDefaultOptions.defaultOptions);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProviders;
