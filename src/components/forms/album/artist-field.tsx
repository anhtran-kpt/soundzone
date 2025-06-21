import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/common";
import { Trash2Icon } from "lucide-react";
import { FormControl, FormField, FormMessage } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { BadgeCheckbox } from "@/components/ui/badge-checkbox";
import { CreditRole } from "@/app/generated/prisma/client";
import { CREDIT_ROLES } from "@/lib/constants";
import { ComboboxPopover } from "@/components/ui/combobox-popover";

interface ArtistFieldProps {
  trackIndex: number;
  artistIndex: number;
  onRemove: () => void;
  canRemove: boolean;
}

export default function ArtistField({
  trackIndex,
  artistIndex,
  onRemove,
  canRemove,
}: ArtistFieldProps) {
  const { control, setValue } = useFormContext();

  const artistIdFieldName =
    `tracks.${trackIndex}.artists.${artistIndex}.id` as const;
  const artistNameFieldName =
    `tracks.${trackIndex}.artists.${artistIndex}.name` as const;
  const rolesFieldName =
    `tracks.${trackIndex}.artists.${artistIndex}.roles` as const;

  return (
    <Card className="relative">
      <CardHeader>
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
      <CardContent className="flex flex-col gap-4">
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
