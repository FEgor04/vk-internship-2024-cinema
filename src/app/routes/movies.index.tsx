import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { MoviesListPage } from "@/pages/movies-list";
import {
  filterByGenreSchema,
  filterByRatingSchmea,
  filterByYearSchema,
  getMoviesQueryOptions,
} from "@/features/filter-movie";

const search = z.object({
  page: z.number().catch(1),
  filters: z
    .object({
      yearFilter: filterByYearSchema.optional(),
      genreFilter: filterByGenreSchema.optional(),
      ratingFilter: filterByRatingSchmea.optional(),
    })
    .catch({}),
});

export const Route = createFileRoute("/movies/")({
  component: Page,
  validateSearch: search,
  loaderDeps: ({ search }) => search,
  loader: async ({ context, deps }) => {
    const { page, filters } = deps;
    return context.queryClient.ensureQueryData(
      getMoviesQueryOptions({ page, filters, pageSize: 50 }),
    );
  },
});

function Page() {
  const { page, filters } = Route.useSearch();
  const initialData = Route.useLoaderData();
  return (
    <MoviesListPage initialData={initialData} page={page} filters={filters} />
  );
}
