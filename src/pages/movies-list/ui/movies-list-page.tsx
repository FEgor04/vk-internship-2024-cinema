import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { MovieFilters, getMoviesQueryOptions } from "@/features/filter-movie";
import { Movie, MovieCard } from "@/entities/movie";
import { Button } from "@/shared/ui/button";
import { YearFilterControls } from "@/features/filter-movie/ui/year-filter";

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

  const navigate = useNavigate({ from: "/movies" });

  return (
    <div className="container mx-auto mt-8 space-y-8">
      <header>
        <YearFilterControls
          filter={filters.yearFilter}
          onFilterChange={(f) =>
            navigate({
              search: (prev) => ({
                ...prev,
                filters: { ...prev.filters, yearFilter: f },
              }),
            })
          }
        />
      </header>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
      <div className="flex flex-row items-center justify-end space-x-16 text-sm">
        <div className="font-medium">
          Страница {data.page} из {data.pages}
        </div>
        <PaginationControls page={data.page} pages={data.pages} />
      </div>
    </div>
  );
}

function PaginationControls({ page, pages }: Record<string, number>) {
  const canGoBack = page > 1;
  const canGoForward = page < pages;
  return (
    <nav className="space-x-2">
      <Button
        size="icon"
        variant="outline"
        className="size-8 p-0"
        disabled={!canGoBack}
        asChild
      >
        <Link from="/movies" search={(prev) => ({ ...prev, page: 1 })}>
          <ChevronsLeft className="size-4" />
        </Link>
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="size-8 p-0"
        disabled={!canGoBack}
        asChild
      >
        <Link
          from="/movies"
          search={(prev) => ({ ...prev, page: prev.page - 1 })}
        >
          <ChevronLeft className="size-4" />
        </Link>
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="size-8 p-0"
        disabled={!canGoForward}
        asChild
      >
        <Link
          from="/movies"
          search={(prev) => ({ ...prev, page: prev.page + 1 })}
        >
          <ChevronRight className="size-4" />
        </Link>
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="size-8 p-0"
        disabled={!canGoForward}
        asChild
      >
        <Link from="/movies" search={(prev) => ({ ...prev, page: pages })}>
          <ChevronsRight className="size-4" />
        </Link>
      </Button>
    </nav>
  );
}
