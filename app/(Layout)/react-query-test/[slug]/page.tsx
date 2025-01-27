import { getMovieDetail } from '@/apis/movie';
import ServerComponent from '@/components/common/ServerComponent';
import queryKeys from '@/constants/queryKeys';
import ReactQueryTestDetailContainer from '@/containers/react-query-test-detail';
import HydrateProvider from '@/providers/HydrateProvider';

// 다음과 같이 리벨리데이트 타임을 지정.
export const revalidate = 60;

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
      <ServerComponent />
      <ReactQueryTestDetailContainer movieId={computedPath} />
    </HydrateProvider>
  );
}
