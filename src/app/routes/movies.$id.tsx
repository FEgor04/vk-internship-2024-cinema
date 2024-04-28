import { createFileRoute } from "@tanstack/react-router";
import { MoviePage } from "@/pages/movie";

export const Route = createFileRoute("/movies/$id")({
  component: PageComponent,
});

function PageComponent() {
  const { id } = Route.useParams();
  const movieId = parseInt(id);
  return <MoviePage id={movieId} />;
}
