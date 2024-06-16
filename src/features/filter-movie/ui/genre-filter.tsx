import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { filterByGenreSchema } from "../model";
import { Button } from "@/shared/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/ui/command";
import { cn } from "@/shared/lib";
import { CheckIcon } from "lucide-react";

type GenreFilter = z.infer<typeof filterByGenreSchema>;

type Props = {
  filter: GenreFilter | undefined;
  onFilterChange: (filter: GenreFilter) => void;
};

const genres = ["Драма", "Комедия", "Мелодрама", "Приключения"];

export function GenreFilterControls({ filter, onFilterChange }: Props) {
  function handleSelect(genre: string) {
    const isSelected = (filter?.value ?? []).includes(genre);
    if (isSelected) {
      onFilterChange({
        type: "genre",
        value: filter?.value?.filter((it) => it !== genre) ?? [],
      });
    } else {
      onFilterChange({
        type: "genre",
        value: [...(filter?.value ?? []), genre],
      });
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed">
          Жанры
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Введите жанр" />
          <CommandGroup>
            <CommandList>
              {genres.map((genre) => {
                const isSelected = (filter?.value ?? []).includes(genre);
                return (
                  <CommandItem key={genre} onSelect={() => handleSelect(genre)}>
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    <span>{genre}</span>
                  </CommandItem>
                );
              })}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
