import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { MovieCard, MovieCardFallback } from "@/entities/movie";
import { getMoviesQueryOptions } from "@/entities/movie";

type Props = {
  page: number;
  pageSize: number;
  onSetPagination: (params: { page: number; pageSize: number }) => void;
};

export function MoviesListPage(props: Props) {
  return <ListWithTitle {...props} title="Лучшие фильмы" />;
}

function ListWithTitle(props: {
  page: number;
  pageSize: number;
  title: string;
}) {
  return (
    <div className="container mx-auto mt-8 space-y-4">
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        <React.Suspense fallback={<MoviesListFallback />}>
          <MoviesList pageSize={props.pageSize} page={props.page} />
        </React.Suspense>
      </div>
    </div>
  );
}

function MoviesList(props: { page: number; pageSize: number }) {
  const { data } = useSuspenseQuery(
    getMoviesQueryOptions({ page: props.page, limit: props.pageSize }),
  );
  return data.movies.map((it) => <MovieCard key={it.id} movie={it} />);
}

function MoviesListFallback() {
  return new Array(10).fill(0).map((_, ind) => <MovieCardFallback key={ind} />);
}
