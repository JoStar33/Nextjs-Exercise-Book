import API from '@/constants/path';
import instance from '.';
import { MovieDetail, MovieList } from '@/types/movie';

const getMovie = async ({ page }: { page: number }) => {
  // const res = await instance.get(`${API.MOVIE}?page=${page}`);
  const res = await instance.get(
    `http://localhost:3000/api/movies?page=${page}`,
  );
  const { data }: { data: MovieList } = res.data;
  return data;
};

const getMovieDetail = async (id: number) => {
  const res = await instance.get(`${API.MOVIE_DETAIL}?movie_id=${id}`);
  const { data }: { data: MovieDetail } = res.data;
  return data;
};

export { getMovie, getMovieDetail };
