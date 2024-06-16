import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { FavoriteStar, useFavoriteMovies } from "@/features/favorite-movie";
import {
  MovieCard,
  MovieCardFallback,
  getMoviesByIdsQueryOptions,
} from "@/entities/movie";

export function FavoriteMoviesPage() {
  return (
    <div className="container mx-auto mt-8 space-y-8">
      <header>
        <h3 className="text-2xl font-bold">Избранные фильмы</h3>
      </header>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <React.Suspense
          fallback={new Array(50).fill(0).map(() => (
            <MovieCardFallback />
          ))}
        >
          <List />
        </React.Suspense>
      </section>
    </div>
  );
}

function List() {
  const [favorites] = useFavoriteMovies();
  const { data } = useSuspenseQuery({
    ...getMoviesByIdsQueryOptions(favorites, {
      limit: favorites.length,
      page: 1,
    }),
  });
  return (
    <>
      {data.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favoriteStarSlot={<FavoriteStar movieId={movie.id} />}
        />
      ))}
    </>
  );
}
