import { getMovieDetail } from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';
import ReactQueryTestDetailContainer from '@/containers/react-query-test-detail';
import HydrateProvider from '@/providers/HydrateProvider';

export function generateStaticParams() {
  return ['1', '2', '3', '4'];
}

export default async function ReactQueryTestDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const computedPath = parseInt(params.slug, 10);
  return (
    <HydrateProvider
      isInfiniteQuery={false}
      queryFn={() => getMovieDetail(computedPath)}
      queryKey={[queryKeys.movieDetail, computedPath]}
    >
      <ReactQueryTestDetailContainer movieId={computedPath} />
    </HydrateProvider>
  );
}
