import { Link } from "@tanstack/react-router";
import { FileIcon, Film } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

export function IndexPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Возьмите меня на стажку
            </h1>
            <p className="flex max-w-[600px] flex-row space-x-4 text-lg md:text-xl">
              <Button className="text-lg font-bold" size="lg" asChild>
                <Link to="/movies">
                  <Film className="mr-2 size-5" />К фильмам
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <a href="/cv.pdf">
                  <FileIcon className="mr-2 size-4" />
                  Мое резюме
                </a>
              </Button>
            </p>
          </div>
          <Card className="bg-background p-6">
            <h3 className="mb-4 text-2xl font-bold">
              Использованные технологии
            </h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>React + TypeScript</li>
              <li>Tailwind CSS + shadcn/ui для стилизации</li>
              <li>
                TanStack Router в качестве роутера, TanStack Query в качестве
                asynchronous state manager
              </li>
              <li>ESlint и Prettier для контроля над качеством кода</li>
              <li>Feature-Sliced Design 🍰</li>
              <li>Деплой на Vercel</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
