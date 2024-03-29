import {
  Hydrate,
  QueryFunction,
  QueryKey,
  dehydrate,
} from '@tanstack/react-query';
import getQueryClient from '@/utils/getClientQuery';

interface Props {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  isInfiniteQuery?: boolean;
  children: React.ReactNode;
}

const TEN_MINUTES = 10 * 60 * 1000;

export default async function HydrateProvider({
  queryKey,
  queryFn,
  isInfiniteQuery,
  children,
}: Props) {
  const queryClient = getQueryClient();
  const queryOption = {
    staleTime: TEN_MINUTES,
    cacheTime: TEN_MINUTES,
  };
  // App Route 방식에서는 react-query와 정적 파일 생성을 혼합해서 사용할 경우, 아래와 같이 작성해야함.
  if (isInfiniteQuery)
    await queryClient.prefetchInfiniteQuery(queryKey, queryFn, queryOption);
  else await queryClient.prefetchQuery(queryKey, queryFn, queryOption);
  // 하이드레이션으로 감싼후 state에 dehydrate한 후 전달.(건조)
  return <Hydrate state={dehydrate(queryClient)}>{children}</Hydrate>;
}
