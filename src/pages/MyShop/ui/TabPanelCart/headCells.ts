import { HeadCell } from "./types";

export const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "Id"
  },
  {
    id: "status",
    numeric: false,
    disablePadding: true,
    label: "Status"
  },
  {
    id: "buyerId",
    numeric: true,
    disablePadding: false,
    label: "Buyer Id"
  },
  {
    id: "totalPrice",
    numeric: true,
    disablePadding: false,
    label: "Total Price"
  },
  {
    id: "dateCreated",
    numeric: false,
    disablePadding: false,
    label: "Date created"
  }
];
