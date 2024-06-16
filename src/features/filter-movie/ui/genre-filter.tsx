import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shared/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { filterByGenreSchema } from "../model";
import { Badge } from "@/shared/ui/badge";
import { Separator } from "@/shared/ui/separator";

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
          {(filter?.value ?? []).length > 0 && (
            <Separator orientation="vertical" className="mx-2 h-4" />
          )}
          <SelectedOptionsSpan options={filter?.value ?? []} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Введите жанр" />
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
            {(filter?.value ?? []).length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandList>
                    <CommandItem onSelect={() => onFilterChange(undefined)}>
                      Сбросить
                    </CommandItem>
                  </CommandList>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function SelectedOptionsSpan({ options }: { options: string[] }) {
  if (options.length === 0) {
    return null;
  }
  if (options.length < 3) {
    return (
      <div className="flex space-x-1 text-sm font-medium">
        {options.map((option) => (
          <Badge
            key={option}
            variant="secondary"
            className="rounded-sm px-1 font-normal"
          >
            {option}
          </Badge>
        ))}
      </div>
    );
  }
  return (
    <Badge variant="secondary" className="rounded-sm px-1 font-normal">
      выбрано {options.length}
    </Badge>
  );
}
