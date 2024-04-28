import { infiniteQueryOptions } from "@tanstack/react-query";
import { movieControllerFindManyByQueryV14 } from "@/shared/api";
import { Movie } from "../model/movie";
import { fromDTO } from "./utils";

type Query = {
  limit: number;
  type: Movie["type"];
};

type Response = {
  pages: number;
  page: number;
  movies: Array<Movie>;
};

export const getMoviesQueryOptions = (query: Query) =>
  infiniteQueryOptions({
    queryKey: ["movies", "list_infinite", query],
    initialPageParam: 0,
    getNextPageParam: (response: Response) => {
      if (response.page < response.pages) {
        return response.page + 1;
      }
      return undefined;
    },
    queryFn: async (params) => {
      const { data } = await movieControllerFindManyByQueryV14({
        page: params.pageParam,
        limit: query.limit,
        type: query.type ? [query.type] : undefined,
        selectFields: [
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
        ],
      });
      const response: Response = {
        movies: data.docs.map(fromDTO),
        pages: data.pages,
        page: data.page,
      };
      return response;
    },
  });
