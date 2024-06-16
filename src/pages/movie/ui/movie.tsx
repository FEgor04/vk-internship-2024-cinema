import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { ReactNode } from "@tanstack/react-router";
import { formatDuration } from "date-fns";
import { ru } from "date-fns/locale";
import { Play } from "lucide-react";
import React from "react";
import {
  Movie,
  MovieCard,
  MovieCountries,
  MovieGenres,
  getMoviesQueryOptions,
} from "@/entities/movie";
import { Button } from "@/shared/ui/button";
import { FavoriteStar } from "@/features/favorite-movie";

export function MoviePage({ movie }: { movie: Movie }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-12 md:flex-row md:px-6 md:py-20">
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
                {movie.year && <span>{movie.year}</span>}
                {movie.movieLength && movie.year && <span>•</span>}
                {movie.movieLength && (
                  <span>
                    {formatDuration(
                      { minutes: movie.movieLength },
                      { locale: ru },
                    )}
                  </span>
                )}
              </div>
              <ul className="flex flex-row flex-wrap gap-2">
                <MovieGenres movie={movie} />
              </ul>
              <ul className="flex flex-row flex-wrap gap-2">
                <MovieCountries movie={movie} />
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              {movie.shortDescription ?? movie.description}
            </p>
            <div>
              <Button
                variant="default"
                size="lg"
                className="text-xl font-bold"
                asChild
              >
                <a href={movie.trailer} target="_blank">
                  <Play className="mr-2 h-6 w-6" /> Трейлер
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto space-y-4">
          <DescriptionItem name="Год выпуска" content={movie.year} />
          <DescriptionItem
            name="Страна"
            content={
              <ul className="flex flex-row flex-wrap gap-4">
                <MovieCountries movie={movie} />
              </ul>
            }
          />
          <DescriptionItem
            name="Жанр"
            content={
              <ul className="flex flex-row flex-wrap gap-4">
                <MovieGenres movie={movie} />
              </ul>
            }
          />
          {movie.slogan && (
            <DescriptionItem
              name="Слоган"
              content={<span>&laquo;{movie.slogan}&raquo;</span>}
            />
          )}
        </div>
      </div>
      <YouWillProbablyLike movie={movie} />
    </div>
  );
}

function DescriptionItem({
  name,
  content,
}: {
  name: string;
  content: ReactNode;
}) {
  return (
    <div className="flex w-full flex-row items-start justify-between space-y-0">
      <h6 className="min-w-32 text-muted-foreground">{name}</h6>
      <p className="ml-4 flex-1">{content}</p>
    </div>
  );
}

function YouWillProbablyLike({ movie }: { movie: Movie }) {
  return (
    <div className="container mt-8 space-y-4">
      <h1 className="text-xl font-bold">Фильмы, похожие на этот</h1>
      <div>
        <MoviesGrid type={movie.type} />
      </div>
    </div>
  );
}

function MoviesGrid({ type }: { type: Movie["type"] }) {
  const { data, hasNextPage, fetchNextPage, isFetching } =
    useSuspenseInfiniteQuery(getMoviesQueryOptions({ limit: 25, type }));
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data.pages.map((page) => (
          <React.Fragment key={page.page}>
            {page.movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                className="w-full"
                favoriteStarSlot={<FavoriteStar movieId={movie.id} />}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <div className="flex ">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetching}
            variant="link"
            className="mx-auto"
          >
            Загрузить еще
          </Button>
        </div>
      )}
    </>
  );
}
