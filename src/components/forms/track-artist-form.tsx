import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Icon } from "../common";
import { Trash2Icon } from "lucide-react";
import { FormControl, FormField, FormMessage } from "../ui/form";
import { FormItem } from "../ui/form";
import { FormLabel } from "../ui/form";
import { BadgeCheckbox } from "../ui/badge-checkbox";
import { CreditRole } from "@/app/generated/prisma/client";
import { CREDIT_ROLES } from "@/lib/constants";
import { ComboboxPopover } from "../ui/combobox-popover";

interface TrackArtistFormProps {
  trackIndex: number;
  artistIndex: number;
  onRemove: () => void;
  canRemove: boolean;
}

export default function TrackArtistForm({
  trackIndex,
  artistIndex,
  onRemove,
  canRemove,
}: TrackArtistFormProps) {
  const { control, setValue, getValues } = useFormContext();

  const artistIdFieldName =
    `tracks.${trackIndex}.artists.${artistIndex}.id` as const;
  const artistNameFieldName =
    `tracks.${trackIndex}.artists.${artistIndex}.name` as const;
  const rolesFieldName =
    `tracks.${trackIndex}.artists.${artistIndex}.roles` as const;

  return (
    <Card className="relative">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Artist #{artistIndex + 1}</CardTitle>
          {canRemove && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onRemove}
            >
              <Icon icon={Trash2Icon} className="size-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex gap-4 items-start">
        <FormField
          control={control}
          name={artistIdFieldName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artist</FormLabel>
              <FormControl>
                <ComboboxPopover
                  id={field.value}
                  onValueChange={(id) => {
                    setValue(artistIdFieldName, id);
                  }}
                  onAddNewArtist={(name) => {
                    setValue(artistNameFieldName, name);
                  }}
                  artistName={getValues(artistNameFieldName)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={rolesFieldName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roles</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-x-1 gap-y-2">
                  {Object.values(CreditRole).map((role) => (
                    <BadgeCheckbox
                      key={role}
                      size="sm"
                      showIcon={false}
                      checked={field.value?.includes(role)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, role])
                          : field.onChange(
                              field.value?.filter(
                                (value: string) => value !== role
                              )
                            );
                      }}
                    >
                      {CREDIT_ROLES[role]}
                    </BadgeCheckbox>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
