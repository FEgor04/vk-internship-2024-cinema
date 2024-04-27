import { queryOptions } from "@tanstack/react-query";
import { movieControllerFindManyByQueryV14 } from "@/shared/api";
import { MovieDtoV14 } from "@/shared/api/index.schemas";
import { Movie } from "../model/movie";

type Query = {
  page: number,
  limit: number,
}

type Response = {
  pages: number,
  page: number,
  movies: Array<Movie>
}

export const getMoviesQueryOptions = (query: Query) => queryOptions({
  queryKey: ["movies", "list", query],
  queryFn: async () => {
    const { data } = await movieControllerFindManyByQueryV14({
      page: query.page,
      limit: query.limit,
      selectFields: ["id", "name", "enName", "description", "shortDescription", "genres", "countries", "year", "slogan", "status", "rating", "movieLength", "ageRating"]
    })
    const response: Response = { movies: data.docs.map(fromDTO),
      pages: data.pages,
      page: data.page,
    }
    return response;
  }
})

function fromDTO(dto: MovieDtoV14): Movie {
  return {
    // todo: add a zod schema and parse it
      id: dto.id!,
      name: dto.name!,
      enName: dto.enName ?? undefined,
      description: dto.description ?? undefined,
      shortDescription: dto.shortDescription ?? undefined,
      genres: dto.genres?.map(it => it.name!) ?? [],
      countries: dto.countries?.map(it => it.name!) ?? [],
      year: dto.year ?? undefined,
      slogan: dto.slogan ?? undefined,
    // @ts-expect-error bad typings by orval
      status: dto.status ?? undefined,
    // @ts-expect-error bad typings by orval
      rating: dto.rating ?? undefined,
      movieLength: dto.movieLength ?? undefined,
      ageRating: dto.ageRating ?? undefined,
  }
}
