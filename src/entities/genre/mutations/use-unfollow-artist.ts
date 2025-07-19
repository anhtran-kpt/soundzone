import { poster } from "@/lib/api/poster";
import { useMutation } from "@tanstack/react-query";

export const useUnfollowArtist = () => {
  return useMutation({
    mutationFn: poster<>,
  });
};
