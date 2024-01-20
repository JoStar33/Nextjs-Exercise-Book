import { Metadata } from 'next';
import { getMovieDetail } from '@/apis/movie';
import HydrateProvider from '@/providers/HydrateProvider';
import queryKeys from '@/constants/queryKeys';
import ReactQueryTestDetailContainer from '@/containers/react-query-test-detail';

interface Props {
  params: { slug: string };
}

// 메타태그 생성은 아래와 같이 생성. 그러나 이게 좋은 방법인지 모르겠음.
// 동일한 데이터를 2번호출 >> 서버측에 큰 부담
// axios가 아닌 fetch를 통해 cache를 적용하여 서버의 부담을 줄여야할까? 고민
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const movie = await getMovieDetail(Number(slug));

  return {
    title: movie.movie.title,
    openGraph: {
      title: movie.movie.title,
      images: [
        {
          url: movie.movie.large_cover_image,
          height: 400,
          width: 800,
          alt: '이미지',
          type: 'image/jpeg',
        },
      ],
    },
  };
}

export default function SeoDetailPage({ params }: Props) {
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
