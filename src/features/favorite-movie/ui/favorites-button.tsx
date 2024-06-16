import { Link } from "@tanstack/react-router";
import { Button } from "@/shared/ui/button";
import { useFavoriteMovies } from "../model/hooks";

export function FavoritesButton() {
  const [favorites] = useFavoriteMovies();
  return (
    <Button variant="link" asChild>
      <Link to="/favorite">
        {favorites.length} {formText(favorites.length)} в избранном
      </Link>
    </Button>
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
