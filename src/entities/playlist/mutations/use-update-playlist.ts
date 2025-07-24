import { userEndpoints } from "@/entities/user/user-endpoints";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { poster } from "@/lib/api/poster";
import { playlistEndpoints } from "../playlist-endpoints";

export const useCreateUserPlaylist = (userSlug: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: poster<void, void>(playlistEndpoints.userPlaylists(userSlug)),
    onSuccess(data) {
      router.push(
        userEndpoints.updatePlaylist({ userSlug, playlistSlug: data.slug })
      );
    },
  });
};
