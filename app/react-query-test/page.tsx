import { dehydrate, Hydrate } from '@tanstack/react-query';
import getMovie from '@/apis/movie';
import queryKeys from '@/constants/queryKeys';
import getQueryClient from '@/utils/getClientQuery';
import ReactQueryTestContainer from '@/containers/react-query-test';

// useInfiniteQuery에서 사용할 수 있는 형태로 포멧팅.
async function fetchMovieList({ pageParam = 1 }) {
  const response = await getMovie({ page: pageParam });
  return response;
}

export default async function ReactQueryTestPagePage() {
  // TODO: HydrateProvider를 만들어서 아래 과정을 모듈화하기.
  const queryClient = getQueryClient();

  // App Route 방식에서는 react-query와 정적 파일 생성을 혼합해서 사용할 경우, 아래와 같이 작성해야함.
  try {
    await queryClient.prefetchInfiniteQuery(
      [queryKeys.movieList],
      fetchMovieList,
    );
  } catch (error) {
    console.log(error);
  }
  // 하이드레이션으로 감싼후 state에 dehydrate한 후 전달.(건조)
  return (
    <Hydrate state={dehydrate(queryClient)}>
      <ReactQueryTestContainer />
    </Hydrate>
  );
}
