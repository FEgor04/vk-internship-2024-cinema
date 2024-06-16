import { useLocalStorage } from "usehooks-ts";
import { MovieID } from "@/entities/movie";

export function useFavoriteMovies() {
  return useLocalStorage<Array<MovieID>>("favorite-movies", []);
}

export function useIsMovieFavorite(movieId: MovieID) {
  const [favoriteMovies] = useFavoriteMovies();
  return favoriteMovies.includes(movieId);
}

export function useAddMovieToFavorites() {
  const [_, setFavoriteMovies] = useFavoriteMovies();

  function addMovieToFavorites(movieId: MovieID) {
    setFavoriteMovies((prev) => [
      ...prev.filter((it) => it !== movieId),
      movieId,
    ]);
  }

  return addMovieToFavorites;
}

export function useRemoveMovieFromFavorites() {
  const [_, setFavoriteMovies] = useFavoriteMovies();

  function removeMovieFromFavorites(movieId: MovieID) {
    setFavoriteMovies((prev) => prev.filter((it) => it !== movieId));
  }
  return removeMovieFromFavorites;
}

export function useToggleIsFavorite() {
  const [_, setFavoriteMovies] = useFavoriteMovies();
  return (movieId: MovieID) => {
    setFavoriteMovies((prev) => {
      const isFavorite = prev.includes(movieId);
      if (isFavorite) {
        return prev.filter((it) => it !== movieId);
      }
      return [...prev, movieId];
    });
  };
}
