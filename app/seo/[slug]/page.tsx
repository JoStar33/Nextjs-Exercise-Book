import { Metadata } from 'next';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { NextSeo } from 'next-seo';
import { getMovieDetail } from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';
import ReactQueryTestDetailContainer from '@/containers/react-query-test-detail';
import getQueryClient from '@/utils/getClientQuery';
import ServerComponent from '@/components/common/ServerComponent';

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

const TEN_MINUTES = 10 * 60 * 1000;

// 근데 결론적으로 난 generateMetadata가 있다고 한들 아래 방식을 통해 SEO 최적화를 하는걸 선호할듯하다.
// 위에 형태로 메타태그를 생성하면 불필요하게 API통신을 두번하는 꼴이 된다. 따라서 서버에 큰 부담을 줄수도 있기에 좋지못하다.
export default async function SeoDetailPage({ params }: Props) {
  const computedPath = parseInt(params.slug, 10);
  const queryClient = getQueryClient();
  const queryOption = {
    staleTime: TEN_MINUTES,
    cacheTime: TEN_MINUTES,
  };
  const response = await queryClient.fetchQuery(
    [queryKeys.movieDetail, computedPath],
    () => getMovieDetail(computedPath),
    queryOption,
  );
  return (
    <>
      <NextSeo
        title={`${response.movie.title}`}
        description={response.movie.description_full}
        openGraph={{
          title: response.movie.title,
          url: response.movie.url,
          images: [
            {
              url: response.movie.large_cover_image,
              height: 400,
              width: 800,
              alt: '이미지',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <Hydrate state={dehydrate(queryClient)}>
        <ServerComponent />
        <ReactQueryTestDetailContainer movieId={computedPath} />
      </Hydrate>
    </>
  );
}
