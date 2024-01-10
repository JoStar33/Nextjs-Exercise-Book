'use client';

import ReactQueryTest from '@/components/react-query-test';
import { useGetInfiniteMovie } from '@/hooks/reactQuery/movie/query';

const TEN_MINUTES = 10 * 60 * 1000;

export default function ReactQueryTestContainer() {
  // 이후 서버로부터 이미 생성된 리액트 쿼리 데이터를 전달받고
  // 동일한 쿼리키를 선언하여 값을 활용한다.

  const { data, hasNextPage, fetchNextPage } = useGetInfiniteMovie({
    staleTime: TEN_MINUTES,
    cacheTime: TEN_MINUTES,
  });

  return (
    <ReactQueryTest
      data={data}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}
