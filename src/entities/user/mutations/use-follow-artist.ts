import { poster } from "@/lib/api/poster";
import { useMutation } from "@tanstack/react-query";

export const useFollowArtist = () => {
  return useMutation({
    mutationFn: poster<>,
  });
};
