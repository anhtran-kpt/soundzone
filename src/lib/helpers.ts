import get from "lodash/get";

export function flattenRelation<
  T extends Record<string, unknown>,
  K extends keyof T
>(array: T[], path: K): T[K][] {
  return array.map((item) => get(item, path));
}
