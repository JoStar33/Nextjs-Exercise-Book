'use client';

import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { MovieList } from '@/types/movie';
import reactQueryTestStyle from './ReactQueryTest.css';

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
    <div className={reactQueryTestStyle.main}>
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
            <div className={reactQueryTestStyle.card} key={movie.id}>
              <Image
                width={300}
                height={300}
                src={movie.background_image_original}
                alt="영화 이미지"
                className={reactQueryTestStyle.cardImage}
              />
              <div className={reactQueryTestStyle.cardInfoContainer}>
                <h4>{movie.title}</h4>
              </div>
            </div>
          )),
        )}
      </InfiniteScroll>
    </div>
  );
}
