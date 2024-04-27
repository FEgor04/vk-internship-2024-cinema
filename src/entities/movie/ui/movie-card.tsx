import { Badge } from "@/shared/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Skeleton } from "@/shared/ui/skeleton"
import { Movie } from "../model/movie"

type Props = {
  movie: Movie
}

export function MovieCard({movie}: Props) {
  return <Card>
    <div className="rounded-t-md relative overflow-hidden">
    <img className="rounded-t-md w-full" src={movie.poster?.previewUrl} />
    </div>
    <CardHeader className="space-y-8">
      <CardTitle className="flex flex-row justify-between items-center">
        {movie.name}
        {movie.year && <span className="text-accent-foreground font-normal text-sm">
          ({movie.year})
        </span>}
      </CardTitle>
      <CardDescription className="space-y-4">
        <div className="flex gap-2 flex-wrap">
        {movie.countries.map(country => <Badge variant="secondary" key={country}>{country}</Badge>)}
        </div>
        <div className="flex gap-2 flex-wrap">
        {movie.genres.map(genre => <Badge variant="outline" key={genre}>{genre}</Badge>)}
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent>
      {movie.description}
    </CardContent>
  </Card>
}

export function MovieCardFallback() {
  return <Card>
    <Skeleton className="w-full aspect-[0.7] rounde-t-md" />
    <CardHeader>
      <Skeleton className="h-10 w-30" />
    </CardHeader>
    <CardContent className="space-y-2">
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-8 w-36" />
      <Skeleton className="h-8 w-28" />
    </CardContent>
  </Card>
}
