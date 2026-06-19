export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  poster_path: string | null;
  title: string;
  genres?: Genre[];
  release_date?: string;
  budget?: number;
  revenue?: number;
  overview?: string;
  video?: string;
}
