import z from "zod";

export const filterByGenreSchema = z.object({
  type: z.literal("genre"),
  value: z.string().array(),
});

export type MovieFilterByGenre = z.infer<typeof filterByGenreSchema>;

export const filterByRatingSchmea = z.object({
  type: z.literal("rating"),
  value: z.object({
    min: z.number().min(0).max(10),
    max: z.number().min(0).max(10),
  }),
});

export type MovieFilterByRating = z.infer<typeof filterByRatingSchmea>;

export const filterByYearSchema = z.object({
  type: z.literal("year"),
  value: z.object({
    min: z.number().min(1990).max(10),
    max: z.number().min(1990).max(10),
  }),
});

export type MovieFilterByYear = z.infer<typeof filterByYearSchema>;

export const filterSchema = z.discriminatedUnion("type", [
  filterByGenreSchema,
  filterByRatingSchmea,
  filterByYearSchema,
]);

export type MovieFilter = z.infer<typeof filterSchema>;

export type MovieFilters = {
  yearFilter?: MovieFilterByYear;
  genreFilter?: MovieFilterByGenre;
  ratingFilter?: MovieFilterByRating;
};
