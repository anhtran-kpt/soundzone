import { useEffect, useRef } from "react";
import { useWatch, Control, useFieldArray } from "react-hook-form";
import { ArtistRole, ReleaseType } from "@/app/generated/prisma";
import { CreateAlbumForm } from "@/features/album";

const createEmptyTrack = (artistId: string): CreateAlbumForm["tracks"][0] => ({
  title: "",
  isExplicit: false,
  audioPublicId: "",
  duration: 0,
  lyrics: "",
  genreIds: [],
  performers: [
    {
      artistId,
      role: ArtistRole.MAIN_ARTIST,
    },
  ],
  credits: [
    {
      name: "",
      roles: [],
    },
  ],
});

export const useAutoTrackInitializer = (
  control: Control<CreateAlbumForm>,
  artistId: string
) => {
  const releaseType = useWatch({
    control,
    name: "releaseType",
  });

  const {
    fields,
    replace,
    append: _append,
    remove: _remove,
  } = useFieldArray({
    control,
    name: "tracks",
  });

  const prevReleaseType = useRef<ReleaseType | undefined>(undefined);
  useEffect(() => {
    if (!releaseType || prevReleaseType.current === releaseType) return;

    const desiredCount = releaseType === "SINGLE" ? 1 : 2;

    if (fields.length !== desiredCount) {
      replace(
        Array.from({ length: desiredCount }, () => createEmptyTrack(artistId))
      );
    }

    prevReleaseType.current = releaseType;
  }, [releaseType, fields.length, replace, artistId]);

  const append = () => {
    if (releaseType !== "SINGLE") {
      _append(createEmptyTrack(artistId));
    }
  };

  const remove = (index: number) => {
    const currentCount = fields.length;
    const minCount = releaseType === "SINGLE" ? 1 : 2;

    if (currentCount > minCount) {
      _remove(index);
    }
  };

  const disableAppend = releaseType === "SINGLE";
  const disableRemove =
    (releaseType === "SINGLE" && fields.length <= 1) ||
    ((releaseType === "ALBUM" || releaseType === "EP") && fields.length <= 2);

  return {
    fields,
    append,
    remove,
    disableAppend,
    disableRemove,
  };
};
