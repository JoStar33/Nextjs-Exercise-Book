import API from '@/constants/path';
import instance from '.';
import { MovieList } from '@/types/movie';

const getMovie = async ({ page }: { page: number }) => {
  const res = await instance.get(`${API.MOVIE}?page=${page}`);
  const { data }: { data: MovieList } = res.data;
  return data;
};

export default getMovie;
