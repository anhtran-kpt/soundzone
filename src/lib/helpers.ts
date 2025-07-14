import { Cell } from "@tanstack/react-table";
import get from "lodash/get";

export function flattenRelation<
  T extends Record<string, unknown>,
  K extends keyof T
>(array: T[], path: K): T[K][] {
  return array.map((item) => get(item, path));
}

export function getColumnClass<T>(cell: Cell<T, unknown>) {
  return cell.column.columnDef.meta?.className ?? "";
}

export function interleaveComma(elements: React.ReactNode[]) {
  return elements.flatMap((el, i) =>
    i < elements.length - 1 ? [el, ", "] : [el]
  );
}
