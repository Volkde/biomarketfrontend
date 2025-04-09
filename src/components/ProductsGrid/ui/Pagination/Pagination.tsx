import { Pagination as BasePagination } from "@mui/material";
import { PaginationProps } from "./types";

// TODO: Pagination При клике на страницу обновить компонент

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
