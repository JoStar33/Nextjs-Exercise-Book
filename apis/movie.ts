import API from '@/constants/path';
import instance from '.';
import { MovieList } from '@/types/movie';

const getMovie = async (page: number) => {
  const res = await instance.get(`${API.MOVIE}?page=${page}`);
  const { data }: { data: MovieList } = res.data.data;
  return data;
};

export default getMovie;
