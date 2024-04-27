type MovieStatus = "filming" | "pre-production" | "completed" | "announced" | "post-production"

export type Movie = {
  id: number,
  name: string,
  enName ?: string,
  description?: string,
  shortDescription?: string,
  genres: Array<string>,
  countries: Array<string>
  year?: number,
  slogan?: string,
  status?: MovieStatus,
  rating?: {
    kp: number,
    imdb: number,
    tmdb: number,
    filmCritics: number,
    russianFilmCritics: number,
    await: number,
  }
  movieLength?: number,
  ageRating?: number,
}
