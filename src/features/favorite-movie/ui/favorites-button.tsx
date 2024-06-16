import { Link } from "@tanstack/react-router";
import { Button } from "@/shared/ui/button";
import { useFavoriteMovies } from "../model/hooks";
import { Heart } from "lucide-react";

export function FavoritesButton() {
  const [favorites] = useFavoriteMovies();
  return (
    <>
      <Button className="relative size-10 p-0 md:hidden" variant="outline">
        <Link to="/favorite">
          <Heart className="size-6" />
        </Link>
        <span className="absolute right-[-8px] top-[-8px] size-4 rounded-full bg-primary text-center text-xs text-primary-foreground">
          {favorites.length}
        </span>
      </Button>
      <Button variant="link" asChild className="hidden md:block">
        <Link to="/favorite">
          {favorites.length} {formText(favorites.length)} в избранном
        </Link>
      </Button>
    </>
  );
}

function formText(n: number) {
  if (n == 1 || (n > 20 && n % 10 == 1)) {
    return "фильм";
  }
  if ((n < 10 || n > 20) && 2 <= n % 10 && n % 10 <= 4) {
    return "фильма";
  }
  return "фильмов";
}
