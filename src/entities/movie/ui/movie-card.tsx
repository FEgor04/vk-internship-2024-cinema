import { Link } from "@tanstack/react-router";
import { formatDuration } from "date-fns";
import { ru } from "date-fns/locale";
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
      <div className="absolute inset-0 flex flex-col justify-between bg-black/40 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="space-x-1">
          {movie.rating && (
            <>
              <MovieRating rating={movie.rating.imdb} name="IMDB" />
              <MovieRating rating={movie.rating.tmdb} name="TMDB" />
              <MovieRating rating={movie.rating.kp} name="КП" />
            </>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold ">{movie.name}</h3>
          <p className="space-x-2 text-sm">
            <span>{movie.year}</span>
            <span>
              {formatDuration({ minutes: movie.movieLength }, { locale: ru })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MovieRating({ rating, name }: { rating: number; name: string }) {
  return (
    <span className="rounded bg-black/60 px-1 py-0.5 text-xs font-semibold text-secondary">
      {name}
      <span className="ml-2">{rating}</span>
    </span>
  );
}

export function MovieCardFallback() {
  return <Skeleton className="h-[400px] w-[300px] shrink-0 grow-0 rounded" />;
}
