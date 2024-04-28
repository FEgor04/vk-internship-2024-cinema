import { cn } from "@/shared/lib";
import { Badge } from "@/shared/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";
import { Movie } from "../model/movie";

type Props = {
  movie: Movie;
  className?: string;
};

export function MovieCard({ movie, className }: Props) {
  return (
    <Card className={cn("max-w-md", className)}>
      <div className="relative overflow-hidden rounded-t-md">
        <img className="w-full rounded-t-md" src={movie.poster?.previewUrl} />
      </div>
      <CardHeader className="space-y-4">
        <CardTitle className="flex flex-row items-center justify-between">
          {movie.name}
          {movie.year && (
            <span className="text-sm font-normal text-accent-foreground">
              ({movie.year})
            </span>
          )}
        </CardTitle>
        <CardDescription className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {movie.countries.map((country) => (
              <Badge variant="secondary" key={country}>
                {country}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <Badge variant="outline" key={genre}>
                {genre}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>{movie.description}</CardContent>
    </Card>
  );
}

export function MovieCardFallback() {
  return (
    <Card>
      <Skeleton className="rounde-t-md aspect-[0.7] w-full" />
      <CardHeader>
        <Skeleton className="w-30 h-10" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-8 w-28" />
      </CardContent>
    </Card>
  );
}
