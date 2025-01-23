import { getMovie } from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';
import ReactQueryTestContainer from '@/containers/react-query-test';
import HydrateProvider from '@/providers/HydrateProvider';

export const revalidate = 24 * 60;

// useInfiniteQuery에서 사용할 수 있는 형태로 포멧팅.
// async function fetchMovieList({ pageParam = 1 }) {
//   const response = await getMovie({ page: pageParam });
//   return response;
// }

export default function ReactQueryTestPagePage() {
  return (
    <HydrateProvider
      isInfiniteQuery
      queryFn={() => getMovie({ page: 1 })}
      queryKey={[queryKeys.movieList]}
    >
      <ReactQueryTestContainer />
    </HydrateProvider>
  );
}
