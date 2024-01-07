import API from '@/constants/path';
import { MovieList } from '@/types/movie';

const getMovie = async ({ page }: { page: number }) => {
  const res = await fetch(`${API.MOVIE}?page=${page}`, {
    next: { revalidate: 10 * 60 },
  })
    .then((response) => response.json())
    .then((response) => response.data)
    .then((movieData: MovieList) => movieData);
  return res;
};

export default getMovie;
