import { MovieDtoV14 } from "@/shared/api/index.schemas";
import { Movie, movieSchema } from "../model/movie";

export function fromDTO(dto: MovieDtoV14): Movie {
  return movieSchema.parse({
    // todo: add a zod schema and parse it
    id: dto.id,
    name: dto.name,
    enName: dto.enName ?? undefined,
    description: dto.description ?? undefined,
    shortDescription: dto.shortDescription ?? undefined,
    genres: dto.genres?.map((it) => it.name!) ?? [],
    countries: dto.countries?.map((it) => it.name!) ?? [],
    year: dto.year ?? undefined,
    slogan: dto.slogan ?? undefined,
    status: dto.status ?? undefined,
    rating: dto.rating ?? undefined,
    movieLength: dto.movieLength ?? undefined,
    ageRating: dto.ageRating ?? undefined,
    poster: dto.poster ?? undefined,
  });
}
