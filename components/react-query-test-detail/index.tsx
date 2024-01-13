'use client';

import Image from 'next/image';
import { MovieDetail } from '@/types/movie';
import S from './ReactQueryTestDetail.style';
import Space from '../common/Space';

interface Props {
  movie?: MovieDetail;
}

export default function ReactQueryTestDetail({ movie }: Props) {
  return (
    <S.ReactQueryTestDetail>
      <Image
        width={500}
        height={300}
        src={movie?.movie.large_cover_image ?? ''}
        alt="영화 상세이미지"
      />
      <p className="title">{movie?.movie.title}</p>
      <Space bottom={50} />
    </S.ReactQueryTestDetail>
  );
}
