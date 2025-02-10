import ReactQueryTestDetail from '@/components/react-query-test-detail';
import queryKeys from '@/constants/queryKeys';
import { MovieDetail } from '@/types/movie';
import getQueryClient from '@/utils/getClientQuery';

interface IReactQueryTestDetailContainer {
  movieId: number;
}

export default function ReactQueryTestDetailContainer({
  movieId,
}: IReactQueryTestDetailContainer) {
  const queryClient = getQueryClient();
  const data = queryClient.getQueryData<MovieDetail>([
    queryKeys.movieDetail,
    movieId,
  ]);

  return <ReactQueryTestDetail movie={data} />;
}
