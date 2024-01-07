import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';
import queryClientDefaultOptions from '@/constants/queryClientDefaultOptions';

const getQueryClient = cache(() => new QueryClient(queryClientDefaultOptions));

export default getQueryClient;
