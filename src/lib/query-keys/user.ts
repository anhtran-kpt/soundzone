export const userKeys = {
  all: ["users"] as const,
  signUp: () => [...userKeys.all, "sign-up"] as const,
  detail: (userId: string) => [...userKeys.all, userId] as const,
};
