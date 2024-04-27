import { infer as zInfer, number, object, string, enum as zEnum } from "zod"

const zMovieStatus = zEnum(["filming" , "pre-production" , "completed" , "announced" , "post-production"])

const movieSchema = object({
  id: number(),
  name: string(),
  enName: string().optional(),
  description: string().optional(),
  shortDescription: string().optional(),
  genres: string().array().catch([]),
  countries: string().array().catch([]),
  year: number().optional(),
  slogan: string().optional(),
  status: zMovieStatus.optional(),
  rating: object({
    kp: number(),
    imdb: number(),
    tmdb: number(),
    filmCritics: number(),
    russianFilmCritics: number(),
    await: number(),
  }).optional(),
  movieLength: number().optional(),
  ageRating: number().optional(),
})

export type Movie = zInfer<typeof movieSchema>
