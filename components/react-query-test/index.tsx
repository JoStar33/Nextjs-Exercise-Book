'use client';

import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { AxiosError } from 'axios';
import Image from 'next/image';
import S from './ReactQueryTest.style';
import { MovieList } from '@/types/movie';

interface Props {
  data?: InfiniteData<MovieList>;
  hasNextPage?: boolean;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<MovieList, AxiosError<unknown, any>>
  >;
}

export default function ReactQueryTest({
  data,
  hasNextPage,
  fetchNextPage,
}: Props) {
  return (
    <S.ReactQueryTest>
      <InfiniteScroll
        className="infinite-scroll-wrapper"
        loadMore={() => {
          fetchNextPage();
        }}
        hasMore={hasNextPage}
        threshold={450}
      >
        {data?.pages.map((element) =>
          element.movies.map((movie) => (
            <div className="card" key={movie.id}>
              <Image
                width={300}
                height={300}
                src={movie.background_image_original}
                alt="영화 이미지"
              />
              <div className="card-info__container">
                <h4>{movie.title}</h4>
              </div>
            </div>
          )),
        )}
      </InfiniteScroll>
    </S.ReactQueryTest>
  );
}
