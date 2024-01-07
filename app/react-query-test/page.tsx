import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getMovie from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';
import getQueryClient from '@/utils/getClientQuery';
import ReactQueryTestContainer from '@/containers/react-query-test';

async function fetchMovieList({ pageParam = 1 }) {
  const response = await getMovie({ page: pageParam });
  return response;
}

export default async function ReactQueryTestPagePage() {
  const queryClient = getQueryClient();

  try {
    await queryClient.prefetchInfiniteQuery({
      queryKey: [queryKeys.movieList],
      queryFn: fetchMovieList,
      initialPageParam: 1,
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ReactQueryTestContainer />
    </HydrationBoundary>
  );
}
