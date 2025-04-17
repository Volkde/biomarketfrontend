import { descendingComparator } from "./descendingComparator";
import { OrderSort } from "./types";

export function getComparator<Key extends keyof any>(
  order: OrderSort,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
