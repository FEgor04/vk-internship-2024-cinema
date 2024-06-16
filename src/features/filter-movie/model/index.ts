import z from "zod";

const filterByGenreSchema = z.object({
  type: z.literal("genre"),
  value: z.string().array(),
});

const filterByRatingSchmea = z.object({
  type: z.literal("rating"),
  value: z.object({
    min: z.number().min(0).max(10),
    max: z.number().min(0).max(10),
  }),
});

const filterByYearSchema = z.object({
  type: z.literal("year"),
  value: z.object({
    min: z.number().min(1990).max(10),
    max: z.number().min(1990).max(10),
  }),
});

export const filterSchema = z.discriminatedUnion("type", [
  filterByGenreSchema,
  filterByRatingSchmea,
  filterByYearSchema,
]);
