import { queryOptions } from "@tanstack/react-query";
import { movieControllerFindOneV14 } from "@/shared/api";
import { MovieID } from "../model/movie";
import { fromDTO } from "./utils";

export const getMovieByIdQueryOptions = (id: MovieID) =>
  queryOptions({
    queryKey: ["movie", "detail", id],
    queryFn: async () => {
      const data = await movieControllerFindOneV14(id);
      return fromDTO(data);
    },
  });
