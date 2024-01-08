'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClientDefaultOptions from '@/constants/queryClientDefaultOptions';

function QueryProviders({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(() => new QueryClient());

  queryClient.setDefaultOptions(queryClientDefaultOptions.defaultOptions);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProviders;
