import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto flex h-16 flex-row items-center justify-between">
        <Link to="/movies" search={{ page: 1, filters: {} }}>
          <h1 className="text-2xl font-bold leading-tight">Киношечки</h1>
        </Link>
      </nav>
    </header>
  );
}
