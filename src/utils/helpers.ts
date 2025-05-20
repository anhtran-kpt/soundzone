export const emptyToNull = (value: string | undefined): string | null => {
  return value?.trim() === "" ? null : value!;
};
