import { useInfiniteQuery } from 'react-query';
import S from './ReactQueryTest.style';
import { MovieList } from '@/types/movie';
import queryKeys from '@/constants/queryKeys';
import getMovie from '@/apis/movie';

export default function ReactQueryTestContainer() {
  const request = {
    queryKey: [queryKeys.movieList],
    requestAPI: getMovie,
    options: {
      useErrorBoundary: true,
      staleTime: 10 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
    },
    requestQuery: {
      size: 8,
    },
  };
  useInfiniteQuery<MovieList>(request);
  return (
    <S.ReactQueryTestContainer>
      ReactQueryTestContainer
    </S.ReactQueryTestContainer>
  );
}
