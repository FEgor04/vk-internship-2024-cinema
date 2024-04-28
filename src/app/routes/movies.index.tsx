import { createFileRoute } from "@tanstack/react-router";
import { MoviesListPage } from "@/pages/movies-list";

export const Route = createFileRoute("/movies/")({
  component: () => <MoviesListPage />,
});
