import { Star } from "lucide-react";
import { MovieID } from "@/entities/movie";
import { useIsMovieFavorite, useToggleIsFavorite } from "../model/hooks";

export function FavoriteStar({ movieId }: { movieId: MovieID }) {
  const isFavorite = useIsMovieFavorite(movieId);
  const toggle = useToggleIsFavorite();

  return (
    <Star
      data-active={isFavorite}
      onClick={(e) => {
        toggle(movieId);
        e.stopPropagation();
      }}
      aria-checked={isFavorite}
      aria-description="Добавить в избранное"
      className="size-6 cursor-pointer transition-all data-[active=true]:text-primary"
    />
  );
}
