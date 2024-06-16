import { Check, PlusCircle } from "lucide-react";
import { MovieID } from "@/entities/movie";
import { Button } from "@/shared/ui/button";
import { useIsMovieFavorite, useToggleIsFavorite } from "../model/hooks";

export function ToggleFavoriteButton({ movieId }: { movieId: MovieID }) {
  const isFavorite = useIsMovieFavorite(movieId);
  const toggle = useToggleIsFavorite();
  return (
    <Button
      data-active={isFavorite}
      className="data-[active=true]:text-primary"
      variant="outline"
      onClick={() => toggle(movieId)}
    >
      {isFavorite ? (
        <>
          <Check className="mr-2 size-4" /> В избранном
        </>
      ) : (
        <>
          <PlusCircle className="mr-2 size-4" /> Добавить в избранное
        </>
      )}
    </Button>
  );
}
