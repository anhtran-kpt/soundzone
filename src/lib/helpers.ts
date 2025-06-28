export function flattenRelation<
  T extends Record<string, unknown>,
  K extends keyof T
>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}
