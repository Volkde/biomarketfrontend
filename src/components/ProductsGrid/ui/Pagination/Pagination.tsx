import { Pagination as BasePagination } from "@mui/material";
import { PaginationProps } from "./types";

/**
 * Pagination component for navigating between product pages
 */
function Pagination({ page, count }: PaginationProps) {
  return (
    count > 1 && (
      <BasePagination
        page={page}
        count={count}
        onChange={() => {
          // TODO:
        }}
        shape="rounded"
      />
    )
  );
}

export default Pagination;
