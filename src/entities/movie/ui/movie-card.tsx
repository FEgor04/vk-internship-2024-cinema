import { Card, CardHeader, CardTitle } from "@/shared/ui/card"
import { Movie } from "../model/movie"

type Props = {
  movie: Movie
}

export function MovieCard({movie}: Props) {
  return <Card>
    <CardHeader>
      <CardTitle>
        {movie.name}
      </CardTitle>
      <span>
        ({movie.year})
      </span>
    </CardHeader>
  </Card>
}
