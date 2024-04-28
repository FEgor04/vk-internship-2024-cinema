import { MovieID } from "@/entities/movie";

export function MoviePage({ id }: { id: MovieID }) {
  return <h1>Movie #{id}</h1>;
}
