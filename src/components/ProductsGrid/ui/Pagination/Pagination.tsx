import { Pagination as BasePagination } from "@mui/material";
import { PaginationProps } from "./types";

// TODO: Pagination При клике на страницу обновить компонент

function Pagination({ count }: PaginationProps) {
  return count > 1 && <BasePagination count={count} shape="rounded" />;
}

export default Pagination;
