'use client';

import { MovieList } from '@/types/movie';
import queryKeys from '@/constants/queryKeys';
import getMovie from '@/apis/movie';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

export default function ReactQueryTestContainer() {
  const request = {
    queryKey: [queryKeys.movieList],
    requestAPI: getMovie,
    options: {
      staleTime: 10 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
    },
  };
  const { data } = useInfiniteScroll<MovieList>(request);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{data?.pages[0].movie_count}</>;
}
