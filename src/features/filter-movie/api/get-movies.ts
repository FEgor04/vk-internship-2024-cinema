import { queryOptions } from "@tanstack/react-query";
import {
  fromDTO,
  getMoviesNotNullFields,
  getMoviesSelectedFields,
} from "@/entities/movie";
import { movieControllerFindManyByQueryV14 } from "@/shared/api";
import {
  MovieFilterByGenre,
  MovieFilterByRating,
  MovieFilterByYear,
  MovieFilters,
} from "../model";

type Query = {
  filters: MovieFilters;
  page: number;
  pageSize: number;
};

function transformGenreFilter(filter: MovieFilterByGenre) {
  return filter.value;
}

function transformYearFilter(filter: MovieFilterByYear) {
  return `${filter.value.min}-${filter.value.max}`;
}

function transformRatingFilter(filter: MovieFilterByRating) {
  return `${filter.value.min}-${filter.value.max}`;
}

function transformFilters(filters: Query["filters"]) {
  let params = {};
  if (filters.yearFilter) {
    params = { ...params, year: transformYearFilter(filters.yearFilter) };
  }
  if (filters.genreFilter) {
    params = {
      ...params,
      "genres.name": transformGenreFilter(filters.genreFilter),
    };
  }
  if (filters.ratingFilter) {
    params = {
      ...params,
      "rating.kp": transformRatingFilter(filters.ratingFilter),
    };
  }
  return params;
}

export const getMoviesQueryOptions = (query: Query) =>
  queryOptions({
    queryKey: ["movies", "list", query],
    queryFn: async () => {
      return movieControllerFindManyByQueryV14({
        page: query.page,
        limit: query.pageSize,
        notNullFields: getMoviesNotNullFields,
        selectFields: getMoviesSelectedFields,
        ...transformFilters(query.filters),
      }).then((data) => {
        return {
          page: data.page,
          pages: data.pages,
          pageSize: data.limit,
          movies: data.docs.map((it) => fromDTO(it)),
        };
      });
    },
  });
