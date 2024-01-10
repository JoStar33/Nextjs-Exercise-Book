interface MovieList {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: Movie[];
}

interface MovieDetail {
  movie: Movie;
}

interface Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: object[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export type { MovieList, MovieDetail, Movie };
