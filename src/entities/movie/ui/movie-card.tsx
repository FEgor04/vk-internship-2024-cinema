import { Link } from "@tanstack/react-router";
import { cn } from "@/shared/lib";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";
import { Movie } from "../model/movie";

type Props = {
  movie: Movie;
  className?: string;
};

export function MovieCard({ movie, className }: Props) {
  return (
    <div
      className={cn(
        "group relative h-[400px] w-[300px] shrink-0 grow-0 overflow-hidden rounded-lg shadow-lg",
        className,
      )}
    >
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View movie details</span>
      </Link>
      <img
        alt="Movie Poster"
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        src={movie.poster?.url}
      />
      <div className="absolute inset-0 flex flex-col justify-between bg-black/70 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div></div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold ">{movie.name}</h3>
          <p className="text-sm">{movie.year}</p>
        </div>
      </div>
    </div>
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
