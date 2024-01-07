'use client';

import { Hydrate, dehydrate } from 'react-query';
import getMovie from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';
import getQueryClient from '@/utils/getClientQuery';

const queryClient = getQueryClient();

async function getMovieList() {
  const fetchMovieList = async ({ pageParam = 1 }) => {
    const response = getMovie(pageParam);
    return response;
  };

  try {
    await queryClient.prefetchInfiniteQuery(
      [queryKeys.movieList],
      fetchMovieList,
    );
  } catch (error) {
    console.log(error);
  } finally {
    queryClient.clear();
  }
}

export default function ReactQueryTestPagePage() {
  getMovieList();

  return <Hydrate state={dehydrate(queryClient)} />;
}
