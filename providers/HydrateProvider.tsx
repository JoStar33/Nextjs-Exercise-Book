import { Hydrate, QueryFunction, dehydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getClientQuery';

interface Props {
  queryKey: any[];
  queryFn: QueryFunction;
  isInfiniteQuery?: boolean;
  children: React.ReactNode;
}

export default async function HydrateProvider({
  queryKey,
  queryFn,
  isInfiniteQuery = false,
  children,
}: Props) {
  const queryClient = getQueryClient();
  let dehydrateClient;
  // App Route 방식에서는 react-query와 정적 파일 생성을 혼합해서 사용할 경우, 아래와 같이 작성해야함.
  if (isInfiniteQuery) {
    await queryClient.prefetchInfiniteQuery(queryKey, queryFn);
    dehydrateClient = JSON.parse(JSON.stringify(dehydrate(queryClient)));
  } else {
    await queryClient.prefetchQuery(queryKey, queryFn);
    dehydrateClient = dehydrate(queryClient);
  }
  // 하이드레이션으로 감싼후 state에 dehydrate한 후 전달.(건조)
  return <Hydrate state={dehydrateClient}>{children}</Hydrate>;
}
