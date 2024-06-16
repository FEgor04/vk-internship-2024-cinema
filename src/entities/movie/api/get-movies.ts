import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { movieControllerFindManyByQueryV14 } from "@/shared/api";
import { MovieControllerFindManyByQueryV14SelectFieldsItem } from "@/shared/api/index.schemas";
import { Movie, MovieID } from "../model/movie";
import { fromDTO } from "./utils";

type Query = {
  limit: number;
  type?: Movie["type"];
};

type Response = {
  pages: number;
  page: number;
  movies: Array<Movie>;
};

export const getMoviesSelectedFields = [
  "id",
  "name",
  "enName",
  "description",
  "shortDescription",
  "genres",
  "countries",
  "year",
  "slogan",
  "status",
  "rating",
  "movieLength",
  "ageRating",
  "poster",
] satisfies Array<MovieControllerFindManyByQueryV14SelectFieldsItem>;

export const getMoviesQueryOptions = (query: Query) =>
  infiniteQueryOptions({
    queryKey: ["movies", "list_infinite", query],
    initialPageParam: 1,
    getNextPageParam: (response: Response) => {
      if (response.page < response.pages) {
        return response.page + 1;
      }
      return undefined;
    },
    queryFn: async (params) => {
      const data = await movieControllerFindManyByQueryV14({
        page: params.pageParam,
        limit: query.limit,
        type: query.type ? [query.type] : undefined,
        selectFields: getMoviesSelectedFields,
      });
      const response: Response = {
        movies: data.docs.map(fromDTO),
        pages: data.pages,
        page: data.page,
      };
      return response;
    },
  });

export const getMoviesByIdsQueryOptions = (
  ids: Array<MovieID>,
  query: Query & { page: number },
) =>
  queryOptions({
    queryKey: ["movies", "list", "by_id", ids, query],
    queryFn: async () => {
      const data = await movieControllerFindManyByQueryV14({
        page: query.page,
        limit: query.limit,
        type: query.type ? [query.type] : undefined,
        selectFields: getMoviesSelectedFields,
        id: ids.map((it) => it.toString()),
      });
      const response: Response = {
        movies: data.docs.map(fromDTO),
        pages: data.pages,
        page: data.page,
      };
      return response;
    },
  });
