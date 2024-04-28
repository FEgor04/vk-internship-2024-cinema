import { createFileRoute } from "@tanstack/react-router";
import { MoviePage } from "@/pages/movie";
import { MovieID } from "@/entities/movie";

class IdIsNanError extends Error {}

export const Route = createFileRoute("/movies/$id")({
  beforeLoad: ({ params }) => {
    const id: MovieID = parseInt(params.id);
    if (isNaN(id)) {
      // refactor: create exception for that
      throw new IdIsNanError();
    }
  },
  component: PageComponent,
  errorComponent: (error) => {
    if (error.error instanceof IdIsNanError) {
      return (
        <div className="container mx-auto mt-8 text-center text-2xl font-bold text-destructive">
          <h1>Ошибка! ID фильма должен быть числом!</h1>
        </div>
      );
    }
  },
});

function PageComponent() {
  const { id } = Route.useParams();
  const movieId = parseInt(id);
  return <MoviePage id={movieId} />;
}
