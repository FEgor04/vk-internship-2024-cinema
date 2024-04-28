import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { MovieCard, MovieCardFallback } from "@/entities/movie";
import { getMoviesQueryOptions } from "@/entities/movie";
import { Button } from "@/shared/ui/button";

export function MoviesListPage() {
  return <ListWithTitle title="Лучшие фильмы" />;
}

function ListWithTitle(props: { title: string }) {
  return (
    <div className="container mx-auto mt-8 space-y-4">
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        <React.Suspense fallback={<MoviesListFallback />}>
          <MoviesList />
        </React.Suspense>
      </div>
    </div>
  );
}

function MoviesList() {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useSuspenseInfiniteQuery(getMoviesQueryOptions({ limit: 10 }));
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
          <Button disabled={isLoading} onClick={() => fetchNextPage()}>
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
