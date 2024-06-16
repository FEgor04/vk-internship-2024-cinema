import { createFileRoute } from "@tanstack/react-router";
import { FavoriteMoviesPage } from "@/pages/favorite-movies";

export const Route = createFileRoute("/favorite")({
  component: FavoriteMoviesPage,
});
