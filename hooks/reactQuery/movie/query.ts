import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { MovieDetail, MovieList } from '@/types/movie';
import { getMovie, getMovieDetail } from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';

const useGetInfiniteMovie = (
  options?: UseInfiniteQueryOptions<MovieList, AxiosError, MovieList>,
) =>
  useInfiniteQuery<MovieList, AxiosError, MovieList>(
    [queryKeys.movieList],
    ({ pageParam = 1 }) => getMovie({ page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        const response = lastPage;
        return response.page_number + 1;
      },
      ...options,
    },
  );

const useGetMovieDetail = (movieId: number) =>
  useQuery<MovieDetail>([queryKeys.movieDetail, movieId], () =>
    getMovieDetail(movieId),
  );

export { useGetInfiniteMovie, useGetMovieDetail };
