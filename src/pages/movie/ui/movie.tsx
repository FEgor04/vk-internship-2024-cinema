import { formatDuration } from "date-fns";
import { ru } from "date-fns/locale";
import { Movie } from "@/entities/movie";
import { Button } from "@/shared/ui/button";

export function MoviePage({ movie }: { movie: Movie }) {
  return (
    <div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:px-6 md:py-20">
        <div className="w-full flex-shrink-0 md:w-1/2">
          <img
            // В идеале переехать на Next.js и использовать встроенный функционал оптимизации изображений
            alt="Постер фильма"
            className="max-h-[600px] w-full rounded-lg object-cover shadow-lg"
            height={900}
            src={movie.poster?.url}
            width={600}
          />
        </div>
        <div className="w-full space-y-4 md:w-1/2">
          <h1 className="text-3xl font-bold md:text-4xl">{movie.name}</h1>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-4 text-sm">
              <span>{movie.year}</span>
              <span>•</span>
              <span>
                {formatDuration({ minutes: movie.movieLength }, { locale: ru })}
              </span>
            </div>
            <div className="space-x-4">
              {movie.genres.map((genre) => (
                <Button className="h-6" variant="ghost" size="sm" key={genre}>
                  {genre}
                </Button>
              ))}
            </div>
            <div className="space-x-4">
              {movie.countries.map((country) => (
                <Button className="h-6" variant="ghost" size="sm" key={country}>
                  {country}
                </Button>
              ))}
            </div>
          </div>
          <p className="text-lg leading-relaxed">{movie.description}</p>
        </div>
      </div>
      <YouWillProbablyLike movie={movie} />
    </div>
  );
}

function YouWillProbablyLike({ movie }: { movie: Movie }) {
  return (
    <div className="container mt-8">
      <h1 className="text-xl font-bold">Фильмы, похожие на этот</h1>
      <div></div>
    </div>
  );
}
