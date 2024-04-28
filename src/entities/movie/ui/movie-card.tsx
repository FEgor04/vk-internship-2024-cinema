import { Link } from "@tanstack/react-router";
import { formatDuration } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/shared/lib";
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
      <Link
        className="absolute inset-0 z-10"
        to="/movies/$id"
        params={{ id: String(movie.id) }}
      >
        <span className="sr-only">View movie details</span>
      </Link>
      <img
        alt="Movie Poster"
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        src={movie.poster?.previewUrl}
      />
      <div className="absolute inset-0 flex flex-col justify-between bg-black/40 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="space-x-1">
          {movie.rating && (
            <>
              {movie.rating.imdb && (
                <MovieRating rating={movie.rating.imdb} name="IMDB" />
              )}
              {movie.rating.tmdb && (
                <MovieRating rating={movie.rating.tmdb} name="TMDB" />
              )}
              {movie.rating.kp && (
                <MovieRating rating={movie.rating.kp} name="КП" />
              )}
            </>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold ">{movie.name}</h3>
          <p className="flex flex-row items-center space-x-1 text-sm">
            <span>{movie.year}</span>
            <span>&#x2022;</span>
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
    <span className="rounded bg-black/60 px-1 py-0.5 text-xs text-secondary">
      {name}
      <span className="ml-2 font-semibold ">{rating}</span>
    </span>
  );
}

export function MovieCardFallback() {
  return <Skeleton className="h-[400px] w-[300px] shrink-0 grow-0 rounded" />;
}

export function MovieGenres({ movie }: { movie: Movie }) {
  return (
    <>
      {movie.genres.map((it) => (
        <li
          className="cursor-pointer hover:text-primary"
          onClick={() => alert("TBD: Movies by genre")}
          key={it}
        >
          {it}
        </li>
      ))}
    </>
  );
}

export function MovieCountries({ movie }: { movie: Movie }) {
  return (
    <>
      {movie.countries.map((it) => (
        <li
          className="cursor-pointer hover:text-primary"
          onClick={() => alert("TBD: Movies by country")}
          key={it}
        >
          {it}
        </li>
      ))}
    </>
  );
}
