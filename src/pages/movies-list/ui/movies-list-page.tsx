import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { MovieCard, MovieCardFallback } from "@/entities/movie";
import { getMoviesQueryOptions } from "@/entities/movie";
import { Movie } from "@/entities/movie";
import { Button } from "@/shared/ui/button";

export function MoviesListPage() {
  return (
    <>
      <ListWithTitle title="Лучшее" />
      <ListWithTitle title="Лучшие фильмы" type="movie" />
      <ListWithTitle title="Лучшие сериалы" type="tv-series" />
      <ListWithTitle title="Лучшие мультфильмы" type="cartoon" />
      <ListWithTitle
        title="Лучшие анимационные сериалы"
        type="animated-series"
      />
      <ListWithTitle title="Лучшее аниме" type="anime" />
    </>
  );
}

function ListWithTitle(props: { title: string; type?: Movie["type"] }) {
  return (
    <div className="container mx-auto mt-8 space-y-4">
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        <React.Suspense fallback={<MoviesListFallback />}>
          <MoviesList type={props.type} />
        </React.Suspense>
      </div>
    </div>
  );
}

function MoviesList({ type }: { type?: Movie["type"] }) {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useSuspenseInfiniteQuery(getMoviesQueryOptions({ limit: 10, type }));
  return (
    <>
      {data.pages.map((page) => (
        <React.Fragment key={page.page}>
          {page.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </React.Fragment>
      ))}
      {hasNextPage && (
        <div className="flex flex-col items-center justify-center">
          <Button
            variant="link"
            disabled={isLoading}
            onClick={() => fetchNextPage()}
          >
            Загрузить еще
          </Button>
        </div>
      )}
    </>
  );
}

function MoviesListFallback() {
  return new Array(10).fill(0).map((_, ind) => <MovieCardFallback key={ind} />);
}
