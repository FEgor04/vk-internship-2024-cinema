import { useLocalStorage } from "usehooks-ts";

export function useFavoriteMovies() {
  return useLocalStorage<Array<number>>("favorite-movies", []);
}

export function useIsMovieFavorite(movieId: number) {
  const [favoriteMovies] = useFavoriteMovies();
  return favoriteMovies.includes(movieId);
}

export function useAddMovieToFavorites(movieId: number) {
  const [_, setFavoriteMovies] = useFavoriteMovies();

  function addMovieToFavorites() {
    setFavoriteMovies((prev) => [
      ...prev.filter((it) => it !== movieId),
      movieId,
    ]);
  }

  return addMovieToFavorites;
}

export function useRemoveMovieFromFavorites(movieId: number) {
  const [_, setFavoriteMovies] = useFavoriteMovies();
  const isFavorite = useIsMovieFavorite(movieId);

  function removeMovieFromFavorites() {
    if (isFavorite) {
      setFavoriteMovies((prev) => prev.filter((it) => it !== movieId));
    }
  }
  return removeMovieFromFavorites;
}
