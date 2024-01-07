'use client';

import useGetInfiniteMovie from '@/hooks/reactQuery/movie/query';

export default function ReactQueryTestContainer() {
  // 이후 서버로부터 이미 생성된 리액트 쿼리 데이터를 전달받고
  // 동일한 쿼리키를 선언하여 값을 활용한다.

  const { data } = useGetInfiniteMovie({
    staleTime: 10 * 60 * 1000,
    cacheTime: 15 * 60 * 1000,
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{data?.pages[0].movie_count}</>;
}
