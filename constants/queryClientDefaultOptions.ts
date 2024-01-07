import { QueryClientConfig } from 'react-query';

const queryClientDefaultOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: false,
      suspense: false,
      useErrorBoundary: false,
      keepPreviousData: true,
    },
  },
} as const;

export default queryClientDefaultOptions;
