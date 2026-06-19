import axios from 'axios';
import { Movie } from '../types/movie.types';
import { API_BASE_URL, API_KEY } from '../data/globalVar';

export const getMovieById = async (id: string): Promise<Movie> => {
  const response = await axios.get<Movie>(
    `${API_BASE_URL}/movie/${id}?language=fr-FR`,
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );
  return response.data;
};
