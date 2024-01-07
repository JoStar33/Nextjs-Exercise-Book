import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from 'react-query';

export interface IUseInfiniteScroll {
  queryKey: any[];
  requestAPI: (...arg: any) => Promise<any>;
  options: Omit<
    UseInfiniteQueryOptions<any, unknown, any, any, QueryKey>,
    'queryKey' | 'queryFn'
  >;
  requestQuery: object;
}

export default function useInfiniteScroll<T extends { page_number: number }>({
  requestAPI,
  requestQuery,
  queryKey,
  options,
}: IUseInfiniteScroll): {
  data: InfiniteData<T> | undefined;
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: (pageParam?: any) => Promise<any>;
  isError: boolean;
  refetch: () => void;
} {
  const fetchUrl = async (pageParam = 1) => {
    const res = await requestAPI({ ...requestQuery, page: pageParam });
    return res;
  };

  const OPTION = {
    ...options,
  };

  const {
    data,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useInfiniteQuery<T>(queryKey, ({ pageParam }) => fetchUrl(pageParam), {
    getNextPageParam: (lastPage) => {
      return lastPage.page_number + 1;
    },
    ...OPTION,
  });

  return {
    data,
    isLoading,
    isFetching,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isError,
    refetch,
  };
}
