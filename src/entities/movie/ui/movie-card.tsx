import { Card, CardHeader, CardTitle } from "@/shared/ui/card"
import { Skeleton } from "@/shared/ui/skeleton"
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

export function MovieCardFallback() {
  return <Card>
    <CardHeader>
      <Skeleton className="h-10 w-30" />
    </CardHeader>
  </Card>
}
