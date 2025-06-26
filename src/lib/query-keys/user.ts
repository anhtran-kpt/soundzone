export const userKeys = {
  all: ["users"] as const,
  signUp: () => [...userKeys.all, "sign-up"] as const,
  detail: (userSlug: string) => [...userKeys.all, userSlug] as const,
};
