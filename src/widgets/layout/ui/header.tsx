import { Link } from "@tanstack/react-router";
import { FavoritesButton } from "@/features/favorite-movie";

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <nav className="container mx-auto flex h-16 flex-row items-center justify-between text-primary">
        <Link to="/movies" search={{ page: 1, filters: {} }}>
          <h1 className="text-2xl font-bold leading-tight">Киношечки</h1>
        </Link>
        <FavoritesButton />
      </nav>
    </header>
  );
}
