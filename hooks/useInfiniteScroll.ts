import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

export interface IUseInfiniteScroll {
  queryKey: any[];
  requestAPI: (...arg: any) => Promise<any>;
  options: any;
  requestQuery?: object;
}

export default function useInfiniteScroll<T extends { page_number: number }>({
  requestAPI,
  requestQuery = {},
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

  const {
    data,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useInfiniteQuery<T>({
    ...options,
    queryKey,
    queryFn: ({ pageParam = 1 }: { pageParam: any }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage: { page_number: number }) => {
      return lastPage.page_number + 1;
    },
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
