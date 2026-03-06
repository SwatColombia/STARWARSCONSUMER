export interface Series {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;  // descripción/sinopsis
  created: string;        // fecha de creación en la DB de SWAPI
  edited: string;
  url: string;
}

export interface SeriesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Series[];         // aquí vienen las películas
}