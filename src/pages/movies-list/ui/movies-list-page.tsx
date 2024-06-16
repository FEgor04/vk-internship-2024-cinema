import { useSuspenseQuery } from "@tanstack/react-query";
import { MovieFilters, getMoviesQueryOptions } from "@/features/filter-movie";
import { Movie, MovieCard } from "@/entities/movie";

type Props = {
  initialData: {
    pages: number;
    movies: Movie[];
    page: number;
    pageSize: number;
  };
  page: number;
  filters: MovieFilters;
};

export function MoviesListPage({ page, filters, initialData }: Props) {
  const { data } = useSuspenseQuery({
    ...getMoviesQueryOptions({ page, filters, pageSize: 50 }),
    initialData,
  });
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 space-y-4 md:grid-cols-2 lg:grid-cols-4">
      {data.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
