import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/shared/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { filterByYearSchema } from "../model";
import { SeparatorVertical } from "lucide-react";

type YearFilter = z.infer<typeof filterByYearSchema>;

type Props = {
  filter: YearFilter | undefined;
  onFilterChange: (filter: YearFilter) => void;
};

const schema = filterByYearSchema.pick({ value: true });

export function YearFilterControls({ filter, onFilterChange }: Props) {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      value: filter?.value,
    },
    resolver: zodResolver(schema),
  });

  function handleSubmit(data: z.infer<typeof schema>) {
    onFilterChange({
      type: "year",
      value: data.value,
    });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed">
          Год выхода
          {filter && (
            <span className="ml-2 font-semibold">
              {filter.value.min} - {filter.value.max}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form {...form}>
          <form
            className="space-y-2"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="value.min"
              render={({ field }) => (
                <FormItem>
                  <Label>От</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value.max"
              render={({ field }) => (
                <FormItem>
                  <Label>До</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormItem>
              <Button>Сохранить</Button>
            </FormItem>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
