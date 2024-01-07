import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';
import queryClientDefaultOptions from '@/constants/queryClientDefaultOptions';

// 동일한 queryClient를 공유하기 위해 cache를 적용.
const getQueryClient = cache(() => new QueryClient(queryClientDefaultOptions));

export default getQueryClient;
