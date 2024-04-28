import {
  infer as zInfer,
  number,
  object,
  string,
  enum as zEnum,
  coerce,
} from "zod";

const zMovieId = number().positive();
export type MovieID = zInfer<typeof zMovieId>;

const zMovieStatus = zEnum([
  "filming",
  "pre-production",
  "completed",
  "announced",
  "post-production",
]);

const zMovieType = zEnum([
  "movie",
  "tv-series",
  "cartoon",
  "animated-series",
  "anime",
]);

export const movieSchema = object({
  id: zMovieId,
  name: string(),
  enName: string().optional(),
  description: string().optional(),
  shortDescription: string().optional(),
  genres: string().array().catch([]),
  countries: string().array().catch([]),
  year: number().optional(),
  slogan: string().optional(),
  status: zMovieStatus.optional(),
  type: zMovieType.optional(),
  rating: object({
    kp: number()
      .nullish()
      .transform((it) => it ?? undefined),
    imdb: number()
      .nullish()
      .transform((it) => it ?? undefined),
    tmdb: number()
      .nullish()
      .transform((it) => it ?? undefined),
    filmCritics: number()
      .nullish()
      .transform((it) => it ?? undefined),
    russianFilmCritics: number()
      .nullish()
      .transform((it) => it ?? undefined),
    await: number()
      .nullish()
      .transform((it) => it ?? undefined),
  }).optional(),
  movieLength: number().optional(),
  ageRating: coerce.number().optional(),
  poster: object({
    url: string().url(),
    previewUrl: string().url(),
  }).optional(),
  trailer: string().optional(),
});

export type Movie = zInfer<typeof movieSchema>;
