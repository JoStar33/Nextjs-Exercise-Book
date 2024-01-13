'use client';

import ReactQueryTestDetail from '@/components/react-query-test-detail';
import { useGetMovieDetail } from '@/hooks/reactQuery/movie/query';

interface IReactQueryTestDetailContainer {
  movieId: number;
}

export default function ReactQueryTestDetailContainer({
  movieId,
}: IReactQueryTestDetailContainer) {
  const { data } = useGetMovieDetail(movieId);
  return <ReactQueryTestDetail movie={data} />;
}
