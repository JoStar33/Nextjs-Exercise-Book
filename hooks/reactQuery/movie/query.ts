import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { MovieList } from '@/types/movie';
import getMovie from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';

const useGetInfiniteMovie = (
  options?: UseInfiniteQueryOptions<Promise<MovieList>, AxiosError, MovieList>,
) =>
  useInfiniteQuery<Promise<MovieList>, AxiosError, MovieList>(
    [queryKeys.movieList],
    ({ pageParam = 1 }) => getMovie({ page: pageParam }),
    {
      getNextPageParam: async (lastPage) => {
        return (await lastPage).page_number + 1;
      },
      ...options,
    },
  );

export default useGetInfiniteMovie;
